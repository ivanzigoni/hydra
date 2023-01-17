(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _hydraSynth = _interopRequireDefault(require("hydra-synth"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var opt = {
  detectAudio: false
  // height: 500,
  // width: 500
};

var hydra = new _hydraSynth["default"](opt);
console.log(hydra.canvas);
console.log(document.getElementsByTagName("canvas")[0]);
// document.getElementsByTagName("canvas")[0].style = ""

// removes lib default styling for the html node that was preventing resizing
// console.log(hydra)

// osc(9,-0.1,0.1)
//     .modulateKaleid(osc(11,0.5,0),50)
//     .scale(0.1,0.3)
//     .modulate(noise(5,0.1))
//     .mult(solid(1,1,0.3))
//     .out(o0)

console.log(time);

// noise(11, 0.1)
//     // .modulate(voronoi(10, 0))
//     .modulate(shape(8, 0.5, 0.001).luma(0.5, 0.5))
//     .out(o0)

shape(5, 0.4, 0).modulate(osc(10, 0, 1).saturate(function () {
  return Math.sin(time) * 10;
})).modulate(osc(30, 0.1, 1).hue(function () {
  return Math.sin(time);
})).modulate(noise(100, 1).modulate(noise(50, 0.2).color(194, 29, 115, 1).modulate(noise(11, 0.2)))).out();

// shape(4, 0.5, 0.001)
//     .out(o3)

// render()

},{"hydra-synth":12}],2:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var R = (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === 'object' ? Reflect : null;
var ReflectApply = R && typeof R.apply === 'function' ? R.apply : function ReflectApply(target, receiver, args) {
  return Function.prototype.apply.call(target, receiver, args);
};
var ReflectOwnKeys;
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys;
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}
function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}
var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
};
function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;
module.exports.once = once;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;
EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;
function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + _typeof(listener));
  }
}
Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function get() {
    return defaultMaxListeners;
  },
  set: function set(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});
EventEmitter.init = function () {
  if (this._events === undefined || this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }
  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};
function _getMaxListeners(that) {
  if (that._maxListeners === undefined) return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}
EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};
EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = type === 'error';
  var events = this._events;
  if (events !== undefined) doError = doError && events.error === undefined;else if (!doError) return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0) er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];
  if (handler === undefined) return false;
  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i) ReflectApply(listeners[i], this, args);
  }
  return true;
};
function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;
  checkListener(listener);
  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type, listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }
  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] = prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' + existing.length + ' ' + String(type) + ' listeners ' + 'added. Use emitter.setMaxListeners() to ' + 'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }
  return target;
}
EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};
EventEmitter.prototype.on = EventEmitter.prototype.addListener;
EventEmitter.prototype.prependListener = function prependListener(type, listener) {
  return _addListener(this, type, listener, true);
};
function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0) return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}
function _onceWrap(target, type, listener) {
  var state = {
    fired: false,
    wrapFn: undefined,
    target: target,
    type: type,
    listener: listener
  };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}
EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};
EventEmitter.prototype.prependOnceListener = function prependOnceListener(type, listener) {
  checkListener(listener);
  this.prependListener(type, _onceWrap(this, type, listener));
  return this;
};

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener = function removeListener(type, listener) {
  var list, events, position, i, originalListener;
  checkListener(listener);
  events = this._events;
  if (events === undefined) return this;
  list = events[type];
  if (list === undefined) return this;
  if (list === listener || list.listener === listener) {
    if (--this._eventsCount === 0) this._events = Object.create(null);else {
      delete events[type];
      if (events.removeListener) this.emit('removeListener', type, list.listener || listener);
    }
  } else if (typeof list !== 'function') {
    position = -1;
    for (i = list.length - 1; i >= 0; i--) {
      if (list[i] === listener || list[i].listener === listener) {
        originalListener = list[i].listener;
        position = i;
        break;
      }
    }
    if (position < 0) return this;
    if (position === 0) list.shift();else {
      spliceOne(list, position);
    }
    if (list.length === 1) events[type] = list[0];
    if (events.removeListener !== undefined) this.emit('removeListener', type, originalListener || listener);
  }
  return this;
};
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.removeAllListeners = function removeAllListeners(type) {
  var listeners, events, i;
  events = this._events;
  if (events === undefined) return this;

  // not listening for removeListener, no need to emit
  if (events.removeListener === undefined) {
    if (arguments.length === 0) {
      this._events = Object.create(null);
      this._eventsCount = 0;
    } else if (events[type] !== undefined) {
      if (--this._eventsCount === 0) this._events = Object.create(null);else delete events[type];
    }
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    var keys = Object.keys(events);
    var key;
    for (i = 0; i < keys.length; ++i) {
      key = keys[i];
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = Object.create(null);
    this._eventsCount = 0;
    return this;
  }
  listeners = events[type];
  if (typeof listeners === 'function') {
    this.removeListener(type, listeners);
  } else if (listeners !== undefined) {
    // LIFO order
    for (i = listeners.length - 1; i >= 0; i--) {
      this.removeListener(type, listeners[i]);
    }
  }
  return this;
};
function _listeners(target, type, unwrap) {
  var events = target._events;
  if (events === undefined) return [];
  var evlistener = events[type];
  if (evlistener === undefined) return [];
  if (typeof evlistener === 'function') return unwrap ? [evlistener.listener || evlistener] : [evlistener];
  return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}
EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};
EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};
EventEmitter.listenerCount = function (emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};
EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;
  if (events !== undefined) {
    var evlistener = events[type];
    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }
  return 0;
}
EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};
function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i) copy[i] = arr[i];
  return copy;
}
function spliceOne(list, index) {
  for (; index + 1 < list.length; index++) list[index] = list[index + 1];
  list.pop();
}
function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}
function once(emitter, name) {
  return new Promise(function (resolve, reject) {
    function errorListener(err) {
      emitter.removeListener(name, resolver);
      reject(err);
    }
    function resolver() {
      if (typeof emitter.removeListener === 'function') {
        emitter.removeListener('error', errorListener);
      }
      resolve([].slice.call(arguments));
    }
    ;
    eventTargetAgnosticAddListener(emitter, name, resolver, {
      once: true
    });
    if (name !== 'error') {
      addErrorHandlerIfEventEmitter(emitter, errorListener, {
        once: true
      });
    }
  });
}
function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
  if (typeof emitter.on === 'function') {
    eventTargetAgnosticAddListener(emitter, 'error', handler, flags);
  }
}
function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
  if (typeof emitter.on === 'function') {
    if (flags.once) {
      emitter.once(name, listener);
    } else {
      emitter.on(name, listener);
    }
  } else if (typeof emitter.addEventListener === 'function') {
    // EventTarget does not have `error` event semantics like Node
    // EventEmitters, we do not listen for `error` events here.
    emitter.addEventListener(name, function wrapListener(arg) {
      // IE does not have builtin `{ once: true }` support so we
      // have to do it manually.
      if (flags.once) {
        emitter.removeEventListener(name, wrapListener);
      }
      listener(arg);
    });
  } else {
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + _typeof(emitter));
  }
}

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _sandbox = _interopRequireDefault(require("./lib/sandbox.js"));
var _arrayUtils = _interopRequireDefault(require("./lib/array-utils.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var EvalSandbox = /*#__PURE__*/function () {
  function EvalSandbox(parent, makeGlobal) {
    var _this = this;
    var userProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    _classCallCheck(this, EvalSandbox);
    this.makeGlobal = makeGlobal;
    this.sandbox = (0, _sandbox["default"])(parent);
    this.parent = parent;
    var properties = Object.keys(parent);
    properties.forEach(function (property) {
      return _this.add(property);
    });
    this.userProps = userProps;
  }
  _createClass(EvalSandbox, [{
    key: "add",
    value: function add(name) {
      if (this.makeGlobal) window[name] = this.parent[name];
      this.sandbox.addToContext(name, "parent.".concat(name));
    }

    // sets on window as well as synth object if global (not needed for objects, which can be set directly)
  }, {
    key: "set",
    value: function set(property, value) {
      if (this.makeGlobal) {
        window[property] = value;
      }
      this.parent[property] = value;
    }
  }, {
    key: "tick",
    value: function tick() {
      var _this2 = this;
      if (this.makeGlobal) {
        this.userProps.forEach(function (property) {
          _this2.parent[property] = window[property];
        });
        //  this.parent.speed = window.speed
      } else {}
    }
  }, {
    key: "eval",
    value: function _eval(code) {
      this.sandbox.eval(code);
    }
  }]);
  return EvalSandbox;
}();
var _default = EvalSandbox;
exports["default"] = _default;

},{"./lib/array-utils.js":13,"./lib/sandbox.js":18}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = formatArguments;
var _arrayUtils = _interopRequireDefault(require("./lib/array-utils.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
// [WIP] how to treat different dimensions (?)
var DEFAULT_CONVERSIONS = {
  "float": {
    'vec4': {
      name: 'sum',
      args: [[1, 1, 1, 1]]
    },
    'vec2': {
      name: 'sum',
      args: [[1, 1]]
    }
  }
};
function fillArrayWithDefaults(arr, len) {
  // fill the array with default values if it's too short
  while (arr.length < len) {
    if (arr.length === 3) {
      // push a 1 as the default for .a in vec4
      arr.push(1.0);
    } else {
      arr.push(0.0);
    }
  }
  return arr.slice(0, len);
}
var ensure_decimal_dot = function ensure_decimal_dot(val) {
  val = val.toString();
  if (val.indexOf('.') < 0) {
    val += '.';
  }
  return val;
};
function formatArguments(transform, startIndex, synthContext) {
  var defaultArgs = transform.transform.inputs;
  var userArgs = transform.userArgs;
  var generators = transform.synth.generators;
  var src = generators.src; // depends on synth having src() function
  return defaultArgs.map(function (input, index) {
    var typedArg = {
      value: input["default"],
      type: input.type,
      //
      isUniform: false,
      name: input.name,
      vecLen: 0
      //  generateGlsl: null // function for creating glsl
    };

    if (typedArg.type === 'float') typedArg.value = ensure_decimal_dot(input["default"]);
    if (input.type.startsWith('vec')) {
      try {
        typedArg.vecLen = Number.parseInt(input.type.substr(3));
      } catch (e) {
        console.log("Error determining length of vector input type ".concat(input.type, " (").concat(input.name, ")"));
      }
    }

    // if user has input something for this argument
    if (userArgs.length > index) {
      typedArg.value = userArgs[index];
      // do something if a composite or transform

      if (typeof userArgs[index] === 'function') {
        // if (typedArg.vecLen > 0) { // expected input is a vector, not a scalar
        //    typedArg.value = (context, props, batchId) => (fillArrayWithDefaults(userArgs[index](props), typedArg.vecLen))
        // } else {
        typedArg.value = function (context, props, batchId) {
          try {
            var val = userArgs[index](props);
            if (typeof val === 'number') {
              return val;
            } else {
              console.warn('function does not return a number', userArgs[index]);
            }
            return input["default"];
          } catch (e) {
            console.warn('ERROR', e);
            return input["default"];
          }
        };
        //  }

        typedArg.isUniform = true;
      } else if (userArgs[index].constructor === Array) {
        //   if (typedArg.vecLen > 0) { // expected input is a vector, not a scalar
        //     typedArg.isUniform = true
        //     typedArg.value = fillArrayWithDefaults(typedArg.value, typedArg.vecLen)
        //  } else {
        //  console.log("is Array")
        // filter out values that are not a number
        // const filteredArray = userArgs[index].filter((val) => typeof val === 'number')
        // typedArg.value = (context, props, batchId) => arrayUtils.getValue(filteredArray)(props)
        typedArg.value = function (context, props, batchId) {
          return _arrayUtils["default"].getValue(userArgs[index])(props);
        };
        typedArg.isUniform = true;
        // }
      }
    }

    if (startIndex < 0) {} else {
      if (typedArg.value && typedArg.value.transforms) {
        var final_transform = typedArg.value.transforms[typedArg.value.transforms.length - 1];
        if (final_transform.transform.glsl_return_type !== input.type) {
          var defaults = DEFAULT_CONVERSIONS[input.type];
          if (typeof defaults !== 'undefined') {
            var default_def = defaults[final_transform.transform.glsl_return_type];
            if (typeof default_def !== 'undefined') {
              var _typedArg$value;
              var name = default_def.name,
                args = default_def.args;
              typedArg.value = (_typedArg$value = typedArg.value)[name].apply(_typedArg$value, _toConsumableArray(args));
            }
          }
        }
        typedArg.isUniform = false;
      } else if (typedArg.type === 'float' && typeof typedArg.value === 'number') {
        typedArg.value = ensure_decimal_dot(typedArg.value);
      } else if (typedArg.type.startsWith('vec') && _typeof(typedArg.value) === 'object' && Array.isArray(typedArg.value)) {
        typedArg.isUniform = false;
        typedArg.value = "".concat(typedArg.type, "(").concat(typedArg.value.map(ensure_decimal_dot).join(', '), ")");
      } else if (input.type === 'sampler2D') {
        // typedArg.tex = typedArg.value
        var x = typedArg.value;
        typedArg.value = function () {
          return x.getTexture();
        };
        typedArg.isUniform = true;
      } else {
        // if passing in a texture reference, when function asks for vec4, convert to vec4
        if (typedArg.value.getTexture && input.type === 'vec4') {
          var x1 = typedArg.value;
          typedArg.value = src(x1);
          typedArg.isUniform = false;
        }
      }

      // add tp uniform array if is a function that will pass in a different value on each render frame,
      // or a texture/ external source

      if (typedArg.isUniform) {
        typedArg.name += startIndex;
        //  shaderParams.uniforms.push(typedArg)
      }
    }

    return typedArg;
  });
}

},{"./lib/array-utils.js":13}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;
var _formatArguments = _interopRequireDefault(require("./format-arguments.js"));
var _arrayUtils = _interopRequireDefault(require("./lib/array-utils.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// Add extra functionality to Array.prototype for generating sequences in time

// converts a tree of javascript functions to a shader
function _default(transforms) {
  var shaderParams = {
    uniforms: [],
    // list of uniforms used in shader
    glslFunctions: [],
    // list of functions used in shader
    fragColor: ''
  };
  var gen = generateGlsl(transforms, shaderParams)('st');
  shaderParams.fragColor = gen;
  // remove uniforms with duplicate names
  var uniforms = {};
  shaderParams.uniforms.forEach(function (uniform) {
    return uniforms[uniform.name] = uniform;
  });
  shaderParams.uniforms = Object.values(uniforms);
  return shaderParams;
}

// recursive function for generating shader string from object containing functions and user arguments. Order of functions in string depends on type of function
// to do: improve variable names
function generateGlsl(transforms, shaderParams) {
  // transform function that outputs a shader string corresponding to gl_FragColor
  var fragColor = function fragColor() {
    return '';
  };
  // var uniforms = []
  // var glslFunctions = []
  transforms.forEach(function (transform) {
    var inputs = (0, _formatArguments["default"])(transform, shaderParams.uniforms.length);
    inputs.forEach(function (input) {
      if (input.isUniform) shaderParams.uniforms.push(input);
    });

    // add new glsl function to running list of functions
    if (!contains(transform, shaderParams.glslFunctions)) shaderParams.glslFunctions.push(transform);

    // current function for generating frag color shader code
    var f0 = fragColor;
    if (transform.transform.type === 'src') {
      fragColor = function fragColor(uv) {
        return "".concat(shaderString(uv, transform.name, inputs, shaderParams));
      };
    } else if (transform.transform.type === 'coord') {
      fragColor = function fragColor(uv) {
        return "".concat(f0("".concat(shaderString(uv, transform.name, inputs, shaderParams))));
      };
    } else if (transform.transform.type === 'color') {
      fragColor = function fragColor(uv) {
        return "".concat(shaderString("".concat(f0(uv)), transform.name, inputs, shaderParams));
      };
    } else if (transform.transform.type === 'combine') {
      // combining two generated shader strings (i.e. for blend, mult, add funtions)
      var f1 = inputs[0].value && inputs[0].value.transforms ? function (uv) {
        return "".concat(generateGlsl(inputs[0].value.transforms, shaderParams)(uv));
      } : inputs[0].isUniform ? function () {
        return inputs[0].name;
      } : function () {
        return inputs[0].value;
      };
      fragColor = function fragColor(uv) {
        return "".concat(shaderString("".concat(f0(uv), ", ").concat(f1(uv)), transform.name, inputs.slice(1), shaderParams));
      };
    } else if (transform.transform.type === 'combineCoord') {
      // combining two generated shader strings (i.e. for modulate functions)
      var f1 = inputs[0].value && inputs[0].value.transforms ? function (uv) {
        return "".concat(generateGlsl(inputs[0].value.transforms, shaderParams)(uv));
      } : inputs[0].isUniform ? function () {
        return inputs[0].name;
      } : function () {
        return inputs[0].value;
      };
      fragColor = function fragColor(uv) {
        return "".concat(f0("".concat(shaderString("".concat(uv, ", ").concat(f1(uv)), transform.name, inputs.slice(1), shaderParams))));
      };
    }
  });
  //  console.log(fragColor)
  //  break;
  return fragColor;
}

// assembles a shader string containing the arguments and the function name, i.e. 'osc(uv, frequency)'
function shaderString(uv, method, inputs, shaderParams) {
  var str = inputs.map(function (input) {
    if (input.isUniform) {
      return input.name;
    } else if (input.value && input.value.transforms) {
      // this by definition needs to be a generator, hence we start with 'st' as the initial value for generating the glsl fragment
      return "".concat(generateGlsl(input.value.transforms, shaderParams)('st'));
    }
    return input.value;
  }).reduce(function (p, c) {
    return "".concat(p, ", ").concat(c);
  }, '');
  return "".concat(method, "(").concat(uv).concat(str, ")");
}

// merge two arrays and remove duplicates
function mergeArrays(a, b) {
  return a.concat(b.filter(function (item) {
    return a.indexOf(item) < 0;
  }));
}

// check whether array
function contains(object, arr) {
  for (var i = 0; i < arr.length; i++) {
    if (object.name == arr[i].name) return true;
  }
  return false;
}

},{"./format-arguments.js":4,"./lib/array-utils.js":13}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _glslSource = _interopRequireDefault(require("./glsl-source.js"));
var _glslFunctions = _interopRequireDefault(require("./glsl/glsl-functions.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var GeneratorFactory = /*#__PURE__*/function () {
  function GeneratorFactory() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      defaultUniforms = _ref.defaultUniforms,
      defaultOutput = _ref.defaultOutput,
      _ref$extendTransforms = _ref.extendTransforms,
      extendTransforms = _ref$extendTransforms === void 0 ? [] : _ref$extendTransforms,
      _ref$changeListener = _ref.changeListener,
      changeListener = _ref$changeListener === void 0 ? function () {} : _ref$changeListener;
    _classCallCheck(this, GeneratorFactory);
    this.defaultOutput = defaultOutput;
    this.defaultUniforms = defaultUniforms;
    this.changeListener = changeListener;
    this.extendTransforms = extendTransforms;
    this.generators = {};
    this.init();
  }
  _createClass(GeneratorFactory, [{
    key: "init",
    value: function init() {
      var _this = this;
      var functions = (0, _glslFunctions["default"])();
      this.glslTransforms = {};
      this.generators = Object.entries(this.generators).reduce(function (prev, _ref2) {
        var _ref3 = _slicedToArray(_ref2, 2),
          method = _ref3[0],
          transform = _ref3[1];
        _this.changeListener({
          type: 'remove',
          synth: _this,
          method: method
        });
        return prev;
      }, {});
      this.sourceClass = function () {
        return /*#__PURE__*/function (_GlslSource) {
          _inherits(_class, _GlslSource);
          var _super = _createSuper(_class);
          function _class() {
            _classCallCheck(this, _class);
            return _super.apply(this, arguments);
          }
          return _createClass(_class);
        }(_glslSource["default"]);
      }();

      // add user definied transforms
      if (Array.isArray(this.extendTransforms)) {
        functions.concat(this.extendTransforms);
      } else if (_typeof(this.extendTransforms) === 'object' && this.extendTransforms.type) {
        functions.push(this.extendTransforms);
      }
      return functions.map(function (transform) {
        return _this.setFunction(transform);
      });
    }
  }, {
    key: "_addMethod",
    value: function _addMethod(method, transform) {
      var _this2 = this;
      var self = this;
      this.glslTransforms[method] = transform;
      if (transform.type === 'src') {
        var func = function func() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          return new _this2.sourceClass({
            name: method,
            transform: transform,
            userArgs: args,
            defaultOutput: _this2.defaultOutput,
            defaultUniforms: _this2.defaultUniforms,
            synth: self
          });
        };
        this.generators[method] = func;
        this.changeListener({
          type: 'add',
          synth: this,
          method: method
        });
        return func;
      } else {
        this.sourceClass.prototype[method] = function () {
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }
          this.transforms.push({
            name: method,
            transform: transform,
            userArgs: args,
            synth: self
          });
          return this;
        };
      }
      return undefined;
    }
  }, {
    key: "setFunction",
    value: function setFunction(obj) {
      var processedGlsl = processGlsl(obj);
      if (processedGlsl) this._addMethod(obj.name, processedGlsl);
    }
  }]);
  return GeneratorFactory;
}();
var typeLookup = {
  'src': {
    returnType: 'vec4',
    args: ['vec2 _st']
  },
  'coord': {
    returnType: 'vec2',
    args: ['vec2 _st']
  },
  'color': {
    returnType: 'vec4',
    args: ['vec4 _c0']
  },
  'combine': {
    returnType: 'vec4',
    args: ['vec4 _c0', 'vec4 _c1']
  },
  'combineCoord': {
    returnType: 'vec2',
    args: ['vec2 _st', 'vec4 _c0']
  }
};
// expects glsl of format
// {
//   name: 'osc', // name that will be used to access function as well as within glsl
//   type: 'src', // can be src: vec4(vec2 _st), coord: vec2(vec2 _st), color: vec4(vec4 _c0), combine: vec4(vec4 _c0, vec4 _c1), combineCoord: vec2(vec2 _st, vec4 _c0)
//   inputs: [
//     {
//       name: 'freq',
//       type: 'float', // 'float'   //, 'texture', 'vec4'
//       default: 0.2
//     },
//     {
//           name: 'sync',
//           type: 'float',
//           default: 0.1
//         },
//         {
//           name: 'offset',
//           type: 'float',
//           default: 0.0
//         }
//   ],
//  glsl: `
//    vec2 st = _st;
//    float r = sin((st.x-offset*2/freq+time*sync)*freq)*0.5  + 0.5;
//    float g = sin((st.x+time*sync)*freq)*0.5 + 0.5;
//    float b = sin((st.x+offset/freq+time*sync)*freq)*0.5  + 0.5;
//    return vec4(r, g, b, 1.0);
// `
// }

// // generates glsl function:
// `vec4 osc(vec2 _st, float freq, float sync, float offset){
//  vec2 st = _st;
//  float r = sin((st.x-offset*2/freq+time*sync)*freq)*0.5  + 0.5;
//  float g = sin((st.x+time*sync)*freq)*0.5 + 0.5;
//  float b = sin((st.x+offset/freq+time*sync)*freq)*0.5  + 0.5;
//  return vec4(r, g, b, 1.0);
// }`

function processGlsl(obj) {
  var t = typeLookup[obj.type];
  if (t) {
    var baseArgs = t.args.map(function (arg) {
      return arg;
    }).join(", ");
    // @todo: make sure this works for all input types, add validation
    var customArgs = obj.inputs.map(function (input) {
      return "".concat(input.type, " ").concat(input.name);
    }).join(', ');
    var args = "".concat(baseArgs).concat(customArgs.length > 0 ? ', ' + customArgs : '');
    //  console.log('args are ', args)

    var glslFunction = "\n  ".concat(t.returnType, " ").concat(obj.name, "(").concat(args, ") {\n      ").concat(obj.glsl, "\n  }\n");

    // add extra input to beginning for backward combatibility @todo update compiler so this is no longer necessary
    if (obj.type === 'combine' || obj.type === 'combineCoord') obj.inputs.unshift({
      name: 'color',
      type: 'vec4'
    });
    return Object.assign({}, obj, {
      glsl: glslFunction
    });
  } else {
    console.warn("type ".concat(obj.type, " not recognized"), obj);
  }
}
var _default = GeneratorFactory;
exports["default"] = _default;

},{"./glsl-source.js":7,"./glsl/glsl-functions.js":8}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _generateGlsl = _interopRequireDefault(require("./generate-glsl.js"));
var _utilityFunctions = _interopRequireDefault(require("./glsl/utility-functions.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// const formatArguments = require('./glsl-utils.js').formatArguments

// const glslTransforms = require('./glsl/composable-glsl-functions.js')

var GlslSource = function GlslSource(obj) {
  this.transforms = [];
  this.transforms.push(obj);
  this.defaultOutput = obj.defaultOutput;
  this.synth = obj.synth;
  this.type = 'GlslSource';
  this.defaultUniforms = obj.defaultUniforms;
  return this;
};
GlslSource.prototype.addTransform = function (obj) {
  this.transforms.push(obj);
};
GlslSource.prototype.out = function (_output) {
  var output = _output || this.defaultOutput;
  var glsl = this.glsl(output);
  this.synth.currentFunctions = [];
  // output.renderPasses(glsl)
  if (output) try {
    output.render(glsl);
  } catch (error) {
    console.log('shader could not compile', error);
  }
};
GlslSource.prototype.glsl = function () {
  //var output = _output || this.defaultOutput
  var self = this;
  // uniforms included in all shaders
  //  this.defaultUniforms = output.uniforms
  var passes = [];
  var transforms = [];
  //  console.log('output', output)
  this.transforms.forEach(function (transform) {
    if (transform.transform.type === 'renderpass') {
      // if (transforms.length > 0) passes.push(this.compile(transforms, output))
      // transforms = []
      // var uniforms = {}
      // const inputs = formatArguments(transform, -1)
      // inputs.forEach((uniform) => { uniforms[uniform.name] = uniform.value })
      //
      // passes.push({
      //   frag: transform.transform.frag,
      //   uniforms: Object.assign({}, self.defaultUniforms, uniforms)
      // })
      // transforms.push({name: 'prev', transform:  glslTransforms['prev'], synth: this.synth})
      console.warn('no support for renderpass');
    } else {
      transforms.push(transform);
    }
  });
  if (transforms.length > 0) passes.push(this.compile(transforms));
  return passes;
};
GlslSource.prototype.compile = function (transforms) {
  var shaderInfo = (0, _generateGlsl["default"])(transforms, this.synth);
  var uniforms = {};
  shaderInfo.uniforms.forEach(function (uniform) {
    uniforms[uniform.name] = uniform.value;
  });
  var frag = "\n  precision ".concat(this.defaultOutput.precision, " float;\n  ").concat(Object.values(shaderInfo.uniforms).map(function (uniform) {
    var type = uniform.type;
    switch (uniform.type) {
      case 'texture':
        type = 'sampler2D';
        break;
    }
    return "\n      uniform ".concat(type, " ").concat(uniform.name, ";");
  }).join(''), "\n  uniform float time;\n  uniform vec2 resolution;\n  varying vec2 uv;\n  uniform sampler2D prevBuffer;\n\n  ").concat(Object.values(_utilityFunctions["default"]).map(function (transform) {
    //  console.log(transform.glsl)
    return "\n            ".concat(transform.glsl, "\n          ");
  }).join(''), "\n\n  ").concat(shaderInfo.glslFunctions.map(function (transform) {
    return "\n            ".concat(transform.transform.glsl, "\n          ");
  }).join(''), "\n\n  void main () {\n    vec4 c = vec4(1, 0, 0, 1);\n    vec2 st = gl_FragCoord.xy/resolution.xy;\n    gl_FragColor = ").concat(shaderInfo.fragColor, ";\n  }\n  ");
  return {
    frag: frag,
    uniforms: Object.assign({}, this.defaultUniforms, uniforms)
  };
};
var _default = GlslSource;
exports["default"] = _default;

},{"./generate-glsl.js":5,"./glsl/utility-functions.js":9}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
/*
Format for adding functions to hydra. For each entry in this file, hydra automatically generates a glsl function and javascript function with the same name. You can also ass functions dynamically using setFunction(object).

{
  name: 'osc', // name that will be used to access function in js as well as in glsl
  type: 'src', // can be 'src', 'color', 'combine', 'combineCoords'. see below for more info
  inputs: [
    {
      name: 'freq',
      type: 'float',
      default: 0.2
    },
    {
      name: 'sync',
      type: 'float',
      default: 0.1
    },
    {
      name: 'offset',
      type: 'float',
      default: 0.0
    }
  ],
    glsl: `
      vec2 st = _st;
      float r = sin((st.x-offset*2/freq+time*sync)*freq)*0.5  + 0.5;
      float g = sin((st.x+time*sync)*freq)*0.5 + 0.5;
      float b = sin((st.x+offset/freq+time*sync)*freq)*0.5  + 0.5;
      return vec4(r, g, b, 1.0);
   `
}

// The above code generates the glsl function:
`vec4 osc(vec2 _st, float freq, float sync, float offset){
 vec2 st = _st;
 float r = sin((st.x-offset*2/freq+time*sync)*freq)*0.5  + 0.5;
 float g = sin((st.x+time*sync)*freq)*0.5 + 0.5;
 float b = sin((st.x+offset/freq+time*sync)*freq)*0.5  + 0.5;
 return vec4(r, g, b, 1.0);
}`


Types and default arguments for hydra functions.
The value in the 'type' field lets the parser know which type the function will be returned as well as default arguments.

const types = {
  'src': {
    returnType: 'vec4',
    args: ['vec2 _st']
  },
  'coord': {
    returnType: 'vec2',
    args: ['vec2 _st']
  },
  'color': {
    returnType: 'vec4',
    args: ['vec4 _c0']
  },
  'combine': {
    returnType: 'vec4',
    args: ['vec4 _c0', 'vec4 _c1']
  },
  'combineCoord': {
    returnType: 'vec2',
    args: ['vec2 _st', 'vec4 _c0']
  }
}

*/
var _default = function _default() {
  return [{
    name: 'noise',
    type: 'src',
    inputs: [{
      type: 'float',
      name: 'scale',
      "default": 10
    }, {
      type: 'float',
      name: 'offset',
      "default": 0.1
    }],
    glsl: "   return vec4(vec3(_noise(vec3(_st*scale, offset*time))), 1.0);"
  }, {
    name: 'voronoi',
    type: 'src',
    inputs: [{
      type: 'float',
      name: 'scale',
      "default": 5
    }, {
      type: 'float',
      name: 'speed',
      "default": 0.3
    }, {
      type: 'float',
      name: 'blending',
      "default": 0.3
    }],
    glsl: "   vec3 color = vec3(.0);\n   // Scale\n   _st *= scale;\n   // Tile the space\n   vec2 i_st = floor(_st);\n   vec2 f_st = fract(_st);\n   float m_dist = 10.;  // minimun distance\n   vec2 m_point;        // minimum point\n   for (int j=-1; j<=1; j++ ) {\n   for (int i=-1; i<=1; i++ ) {\n   vec2 neighbor = vec2(float(i),float(j));\n   vec2 p = i_st + neighbor;\n   vec2 point = fract(sin(vec2(dot(p,vec2(127.1,311.7)),dot(p,vec2(269.5,183.3))))*43758.5453);\n   point = 0.5 + 0.5*sin(time*speed + 6.2831*point);\n   vec2 diff = neighbor + point - f_st;\n   float dist = length(diff);\n   if( dist < m_dist ) {\n   m_dist = dist;\n   m_point = point;\n   }\n   }\n   }\n   // Assign a color using the closest point position\n   color += dot(m_point,vec2(.3,.6));\n   color *= 1.0 - blending*m_dist;\n   return vec4(color, 1.0);"
  }, {
    name: 'osc',
    type: 'src',
    inputs: [{
      type: 'float',
      name: 'frequency',
      "default": 60
    }, {
      type: 'float',
      name: 'sync',
      "default": 0.1
    }, {
      type: 'float',
      name: 'offset',
      "default": 0
    }],
    glsl: "   vec2 st = _st;\n   float r = sin((st.x-offset/frequency+time*sync)*frequency)*0.5  + 0.5;\n   float g = sin((st.x+time*sync)*frequency)*0.5 + 0.5;\n   float b = sin((st.x+offset/frequency+time*sync)*frequency)*0.5  + 0.5;\n   return vec4(r, g, b, 1.0);"
  }, {
    name: 'shape',
    type: 'src',
    inputs: [{
      type: 'float',
      name: 'sides',
      "default": 3
    }, {
      type: 'float',
      name: 'radius',
      "default": 0.3
    }, {
      type: 'float',
      name: 'smoothing',
      "default": 0.01
    }],
    glsl: "   vec2 st = _st * 2. - 1.;\n   // Angle and radius from the current pixel\n   float a = atan(st.x,st.y)+3.1416;\n   float r = (2.*3.1416)/sides;\n   float d = cos(floor(.5+a/r)*r-a)*length(st);\n   return vec4(vec3(1.0-smoothstep(radius,radius + smoothing + 0.0000001,d)), 1.0);"
  }, {
    name: 'gradient',
    type: 'src',
    inputs: [{
      type: 'float',
      name: 'speed',
      "default": 0
    }],
    glsl: "   return vec4(_st, sin(time*speed), 1.0);"
  }, {
    name: 'src',
    type: 'src',
    inputs: [{
      type: 'sampler2D',
      name: 'tex',
      "default": NaN
    }],
    glsl: "   //  vec2 uv = gl_FragCoord.xy/vec2(1280., 720.);\n   return texture2D(tex, fract(_st));"
  }, {
    name: 'solid',
    type: 'src',
    inputs: [{
      type: 'float',
      name: 'r',
      "default": 0
    }, {
      type: 'float',
      name: 'g',
      "default": 0
    }, {
      type: 'float',
      name: 'b',
      "default": 0
    }, {
      type: 'float',
      name: 'a',
      "default": 1
    }],
    glsl: "   return vec4(r, g, b, a);"
  }, {
    name: 'rotate',
    type: 'coord',
    inputs: [{
      type: 'float',
      name: 'angle',
      "default": 10
    }, {
      type: 'float',
      name: 'speed',
      "default": 0
    }],
    glsl: "   vec2 xy = _st - vec2(0.5);\n   float ang = angle + speed *time;\n   xy = mat2(cos(ang),-sin(ang), sin(ang),cos(ang))*xy;\n   xy += 0.5;\n   return xy;"
  }, {
    name: 'scale',
    type: 'coord',
    inputs: [{
      type: 'float',
      name: 'amount',
      "default": 1.5
    }, {
      type: 'float',
      name: 'xMult',
      "default": 1
    }, {
      type: 'float',
      name: 'yMult',
      "default": 1
    }, {
      type: 'float',
      name: 'offsetX',
      "default": 0.5
    }, {
      type: 'float',
      name: 'offsetY',
      "default": 0.5
    }],
    glsl: "   vec2 xy = _st - vec2(offsetX, offsetY);\n   xy*=(1.0/vec2(amount*xMult, amount*yMult));\n   xy+=vec2(offsetX, offsetY);\n   return xy;\n   "
  }, {
    name: 'pixelate',
    type: 'coord',
    inputs: [{
      type: 'float',
      name: 'pixelX',
      "default": 20
    }, {
      type: 'float',
      name: 'pixelY',
      "default": 20
    }],
    glsl: "   vec2 xy = vec2(pixelX, pixelY);\n   return (floor(_st * xy) + 0.5)/xy;"
  }, {
    name: 'posterize',
    type: 'color',
    inputs: [{
      type: 'float',
      name: 'bins',
      "default": 3
    }, {
      type: 'float',
      name: 'gamma',
      "default": 0.6
    }],
    glsl: "   vec4 c2 = pow(_c0, vec4(gamma));\n   c2 *= vec4(bins);\n   c2 = floor(c2);\n   c2/= vec4(bins);\n   c2 = pow(c2, vec4(1.0/gamma));\n   return vec4(c2.xyz, _c0.a);"
  }, {
    name: 'shift',
    type: 'color',
    inputs: [{
      type: 'float',
      name: 'r',
      "default": 0.5
    }, {
      type: 'float',
      name: 'g',
      "default": 0
    }, {
      type: 'float',
      name: 'b',
      "default": 0
    }, {
      type: 'float',
      name: 'a',
      "default": 0
    }],
    glsl: "   vec4 c2 = vec4(_c0);\n   c2.r = fract(c2.r + r);\n   c2.g = fract(c2.g + g);\n   c2.b = fract(c2.b + b);\n   c2.a = fract(c2.a + a);\n   return vec4(c2.rgba);"
  }, {
    name: 'repeat',
    type: 'coord',
    inputs: [{
      type: 'float',
      name: 'repeatX',
      "default": 3
    }, {
      type: 'float',
      name: 'repeatY',
      "default": 3
    }, {
      type: 'float',
      name: 'offsetX',
      "default": 0
    }, {
      type: 'float',
      name: 'offsetY',
      "default": 0
    }],
    glsl: "   vec2 st = _st * vec2(repeatX, repeatY);\n   st.x += step(1., mod(st.y,2.0)) * offsetX;\n   st.y += step(1., mod(st.x,2.0)) * offsetY;\n   return fract(st);"
  }, {
    name: 'modulateRepeat',
    type: 'combineCoord',
    inputs: [{
      type: 'float',
      name: 'repeatX',
      "default": 3
    }, {
      type: 'float',
      name: 'repeatY',
      "default": 3
    }, {
      type: 'float',
      name: 'offsetX',
      "default": 0.5
    }, {
      type: 'float',
      name: 'offsetY',
      "default": 0.5
    }],
    glsl: "   vec2 st = _st * vec2(repeatX, repeatY);\n   st.x += step(1., mod(st.y,2.0)) + _c0.r * offsetX;\n   st.y += step(1., mod(st.x,2.0)) + _c0.g * offsetY;\n   return fract(st);"
  }, {
    name: 'repeatX',
    type: 'coord',
    inputs: [{
      type: 'float',
      name: 'reps',
      "default": 3
    }, {
      type: 'float',
      name: 'offset',
      "default": 0
    }],
    glsl: "   vec2 st = _st * vec2(reps, 1.0);\n   //  float f =  mod(_st.y,2.0);\n   st.y += step(1., mod(st.x,2.0))* offset;\n   return fract(st);"
  }, {
    name: 'modulateRepeatX',
    type: 'combineCoord',
    inputs: [{
      type: 'float',
      name: 'reps',
      "default": 3
    }, {
      type: 'float',
      name: 'offset',
      "default": 0.5
    }],
    glsl: "   vec2 st = _st * vec2(reps, 1.0);\n   //  float f =  mod(_st.y,2.0);\n   st.y += step(1., mod(st.x,2.0)) + _c0.r * offset;\n   return fract(st);"
  }, {
    name: 'repeatY',
    type: 'coord',
    inputs: [{
      type: 'float',
      name: 'reps',
      "default": 3
    }, {
      type: 'float',
      name: 'offset',
      "default": 0
    }],
    glsl: "   vec2 st = _st * vec2(1.0, reps);\n   //  float f =  mod(_st.y,2.0);\n   st.x += step(1., mod(st.y,2.0))* offset;\n   return fract(st);"
  }, {
    name: 'modulateRepeatY',
    type: 'combineCoord',
    inputs: [{
      type: 'float',
      name: 'reps',
      "default": 3
    }, {
      type: 'float',
      name: 'offset',
      "default": 0.5
    }],
    glsl: "   vec2 st = _st * vec2(reps, 1.0);\n   //  float f =  mod(_st.y,2.0);\n   st.x += step(1., mod(st.y,2.0)) + _c0.r * offset;\n   return fract(st);"
  }, {
    name: 'kaleid',
    type: 'coord',
    inputs: [{
      type: 'float',
      name: 'nSides',
      "default": 4
    }],
    glsl: "   vec2 st = _st;\n   st -= 0.5;\n   float r = length(st);\n   float a = atan(st.y, st.x);\n   float pi = 2.*3.1416;\n   a = mod(a,pi/nSides);\n   a = abs(a-pi/nSides/2.);\n   return r*vec2(cos(a), sin(a));"
  }, {
    name: 'modulateKaleid',
    type: 'combineCoord',
    inputs: [{
      type: 'float',
      name: 'nSides',
      "default": 4
    }],
    glsl: "   vec2 st = _st - 0.5;\n   float r = length(st);\n   float a = atan(st.y, st.x);\n   float pi = 2.*3.1416;\n   a = mod(a,pi/nSides);\n   a = abs(a-pi/nSides/2.);\n   return (_c0.r+r)*vec2(cos(a), sin(a));"
  }, {
    name: 'scroll',
    type: 'coord',
    inputs: [{
      type: 'float',
      name: 'scrollX',
      "default": 0.5
    }, {
      type: 'float',
      name: 'scrollY',
      "default": 0.5
    }, {
      type: 'float',
      name: 'speedX',
      "default": 0
    }, {
      type: 'float',
      name: 'speedY',
      "default": 0
    }],
    glsl: "\n   _st.x += scrollX + time*speedX;\n   _st.y += scrollY + time*speedY;\n   return fract(_st);"
  }, {
    name: 'scrollX',
    type: 'coord',
    inputs: [{
      type: 'float',
      name: 'scrollX',
      "default": 0.5
    }, {
      type: 'float',
      name: 'speed',
      "default": 0
    }],
    glsl: "   _st.x += scrollX + time*speed;\n   return fract(_st);"
  }, {
    name: 'modulateScrollX',
    type: 'combineCoord',
    inputs: [{
      type: 'float',
      name: 'scrollX',
      "default": 0.5
    }, {
      type: 'float',
      name: 'speed',
      "default": 0
    }],
    glsl: "   _st.x += _c0.r*scrollX + time*speed;\n   return fract(_st);"
  }, {
    name: 'scrollY',
    type: 'coord',
    inputs: [{
      type: 'float',
      name: 'scrollY',
      "default": 0.5
    }, {
      type: 'float',
      name: 'speed',
      "default": 0
    }],
    glsl: "   _st.y += scrollY + time*speed;\n   return fract(_st);"
  }, {
    name: 'modulateScrollY',
    type: 'combineCoord',
    inputs: [{
      type: 'float',
      name: 'scrollY',
      "default": 0.5
    }, {
      type: 'float',
      name: 'speed',
      "default": 0
    }],
    glsl: "   _st.y += _c0.r*scrollY + time*speed;\n   return fract(_st);"
  }, {
    name: 'add',
    type: 'combine',
    inputs: [{
      type: 'float',
      name: 'amount',
      "default": 1
    }],
    glsl: "   return (_c0+_c1)*amount + _c0*(1.0-amount);"
  }, {
    name: 'sub',
    type: 'combine',
    inputs: [{
      type: 'float',
      name: 'amount',
      "default": 1
    }],
    glsl: "   return (_c0-_c1)*amount + _c0*(1.0-amount);"
  }, {
    name: 'layer',
    type: 'combine',
    inputs: [],
    glsl: "   return vec4(mix(_c0.rgb, _c1.rgb, _c1.a), clamp(_c0.a + _c1.a, 0.0, 1.0));"
  }, {
    name: 'blend',
    type: 'combine',
    inputs: [{
      type: 'float',
      name: 'amount',
      "default": 0.5
    }],
    glsl: "   return _c0*(1.0-amount)+_c1*amount;"
  }, {
    name: 'mult',
    type: 'combine',
    inputs: [{
      type: 'float',
      name: 'amount',
      "default": 1
    }],
    glsl: "   return _c0*(1.0-amount)+(_c0*_c1)*amount;"
  }, {
    name: 'diff',
    type: 'combine',
    inputs: [],
    glsl: "   return vec4(abs(_c0.rgb-_c1.rgb), max(_c0.a, _c1.a));"
  }, {
    name: 'modulate',
    type: 'combineCoord',
    inputs: [{
      type: 'float',
      name: 'amount',
      "default": 0.1
    }],
    glsl: "   //  return fract(st+(_c0.xy-0.5)*amount);\n   return _st + _c0.xy*amount;"
  }, {
    name: 'modulateScale',
    type: 'combineCoord',
    inputs: [{
      type: 'float',
      name: 'multiple',
      "default": 1
    }, {
      type: 'float',
      name: 'offset',
      "default": 1
    }],
    glsl: "   vec2 xy = _st - vec2(0.5);\n   xy*=(1.0/vec2(offset + multiple*_c0.r, offset + multiple*_c0.g));\n   xy+=vec2(0.5);\n   return xy;"
  }, {
    name: 'modulatePixelate',
    type: 'combineCoord',
    inputs: [{
      type: 'float',
      name: 'multiple',
      "default": 10
    }, {
      type: 'float',
      name: 'offset',
      "default": 3
    }],
    glsl: "   vec2 xy = vec2(offset + _c0.x*multiple, offset + _c0.y*multiple);\n   return (floor(_st * xy) + 0.5)/xy;"
  }, {
    name: 'modulateRotate',
    type: 'combineCoord',
    inputs: [{
      type: 'float',
      name: 'multiple',
      "default": 1
    }, {
      type: 'float',
      name: 'offset',
      "default": 0
    }],
    glsl: "   vec2 xy = _st - vec2(0.5);\n   float angle = offset + _c0.x * multiple;\n   xy = mat2(cos(angle),-sin(angle), sin(angle),cos(angle))*xy;\n   xy += 0.5;\n   return xy;"
  }, {
    name: 'modulateHue',
    type: 'combineCoord',
    inputs: [{
      type: 'float',
      name: 'amount',
      "default": 1
    }],
    glsl: "   return _st + (vec2(_c0.g - _c0.r, _c0.b - _c0.g) * amount * 1.0/resolution);"
  }, {
    name: 'invert',
    type: 'color',
    inputs: [{
      type: 'float',
      name: 'amount',
      "default": 1
    }],
    glsl: "   return vec4((1.0-_c0.rgb)*amount + _c0.rgb*(1.0-amount), _c0.a);"
  }, {
    name: 'contrast',
    type: 'color',
    inputs: [{
      type: 'float',
      name: 'amount',
      "default": 1.6
    }],
    glsl: "   vec4 c = (_c0-vec4(0.5))*vec4(amount) + vec4(0.5);\n   return vec4(c.rgb, _c0.a);"
  }, {
    name: 'brightness',
    type: 'color',
    inputs: [{
      type: 'float',
      name: 'amount',
      "default": 0.4
    }],
    glsl: "   return vec4(_c0.rgb + vec3(amount), _c0.a);"
  }, {
    name: 'mask',
    type: 'combine',
    inputs: [],
    glsl: "   float a = _luminance(_c1.rgb);\n  return vec4(_c0.rgb*a, a*_c0.a);"
  }, {
    name: 'luma',
    type: 'color',
    inputs: [{
      type: 'float',
      name: 'threshold',
      "default": 0.5
    }, {
      type: 'float',
      name: 'tolerance',
      "default": 0.1
    }],
    glsl: "   float a = smoothstep(threshold-(tolerance+0.0000001), threshold+(tolerance+0.0000001), _luminance(_c0.rgb));\n   return vec4(_c0.rgb*a, a);"
  }, {
    name: 'thresh',
    type: 'color',
    inputs: [{
      type: 'float',
      name: 'threshold',
      "default": 0.5
    }, {
      type: 'float',
      name: 'tolerance',
      "default": 0.04
    }],
    glsl: "   return vec4(vec3(smoothstep(threshold-(tolerance+0.0000001), threshold+(tolerance+0.0000001), _luminance(_c0.rgb))), _c0.a);"
  }, {
    name: 'color',
    type: 'color',
    inputs: [{
      type: 'float',
      name: 'r',
      "default": 1
    }, {
      type: 'float',
      name: 'g',
      "default": 1
    }, {
      type: 'float',
      name: 'b',
      "default": 1
    }, {
      type: 'float',
      name: 'a',
      "default": 1
    }],
    glsl: "   vec4 c = vec4(r, g, b, a);\n   vec4 pos = step(0.0, c); // detect whether negative\n   // if > 0, return r * _c0\n   // if < 0 return (1.0-r) * _c0\n   return vec4(mix((1.0-_c0)*abs(c), c*_c0, pos));"
  }, {
    name: 'saturate',
    type: 'color',
    inputs: [{
      type: 'float',
      name: 'amount',
      "default": 2
    }],
    glsl: "   const vec3 W = vec3(0.2125, 0.7154, 0.0721);\n   vec3 intensity = vec3(dot(_c0.rgb, W));\n   return vec4(mix(intensity, _c0.rgb, amount), _c0.a);"
  }, {
    name: 'hue',
    type: 'color',
    inputs: [{
      type: 'float',
      name: 'hue',
      "default": 0.4
    }],
    glsl: "   vec3 c = _rgbToHsv(_c0.rgb);\n   c.r += hue;\n   //  c.r = fract(c.r);\n   return vec4(_hsvToRgb(c), _c0.a);"
  }, {
    name: 'colorama',
    type: 'color',
    inputs: [{
      type: 'float',
      name: 'amount',
      "default": 0.005
    }],
    glsl: "   vec3 c = _rgbToHsv(_c0.rgb);\n   c += vec3(amount);\n   c = _hsvToRgb(c);\n   c = fract(c);\n   return vec4(c, _c0.a);"
  }, {
    name: 'prev',
    type: 'src',
    inputs: [],
    glsl: "   return texture2D(prevBuffer, fract(_st));"
  }, {
    name: 'sum',
    type: 'color',
    inputs: [{
      type: 'vec4',
      name: 'scale',
      "default": 1
    }],
    glsl: "   vec4 v = _c0 * s;\n   return v.r + v.g + v.b + v.a;\n   }\n   float sum(vec2 _st, vec4 s) { // vec4 is not a typo, because argument type is not overloaded\n   vec2 v = _st.xy * s.xy;\n   return v.x + v.y;"
  }, {
    name: 'r',
    type: 'color',
    inputs: [{
      type: 'float',
      name: 'scale',
      "default": 1
    }, {
      type: 'float',
      name: 'offset',
      "default": 0
    }],
    glsl: "   return vec4(_c0.r * scale + offset);"
  }, {
    name: 'g',
    type: 'color',
    inputs: [{
      type: 'float',
      name: 'scale',
      "default": 1
    }, {
      type: 'float',
      name: 'offset',
      "default": 0
    }],
    glsl: "   return vec4(_c0.g * scale + offset);"
  }, {
    name: 'b',
    type: 'color',
    inputs: [{
      type: 'float',
      name: 'scale',
      "default": 1
    }, {
      type: 'float',
      name: 'offset',
      "default": 0
    }],
    glsl: "   return vec4(_c0.b * scale + offset);"
  }, {
    name: 'a',
    type: 'color',
    inputs: [{
      type: 'float',
      name: 'scale',
      "default": 1
    }, {
      type: 'float',
      name: 'offset',
      "default": 0
    }],
    glsl: "   return vec4(_c0.a * scale + offset);"
  }];
};
exports["default"] = _default;

},{}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
// functions that are only used within other functions
var _default = {
  _luminance: {
    type: 'util',
    glsl: "float _luminance(vec3 rgb){\n      const vec3 W = vec3(0.2125, 0.7154, 0.0721);\n      return dot(rgb, W);\n    }"
  },
  _noise: {
    type: 'util',
    glsl: "\n    //\tSimplex 3D Noise\n    //\tby Ian McEwan, Ashima Arts\n    vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}\n  vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}\n\n  float _noise(vec3 v){\n    const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n    const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\n\n  // First corner\n    vec3 i  = floor(v + dot(v, C.yyy) );\n    vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n  // Other corners\n    vec3 g = step(x0.yzx, x0.xyz);\n    vec3 l = 1.0 - g;\n    vec3 i1 = min( g.xyz, l.zxy );\n    vec3 i2 = max( g.xyz, l.zxy );\n\n    //  x0 = x0 - 0. + 0.0 * C\n    vec3 x1 = x0 - i1 + 1.0 * C.xxx;\n    vec3 x2 = x0 - i2 + 2.0 * C.xxx;\n    vec3 x3 = x0 - 1. + 3.0 * C.xxx;\n\n  // Permutations\n    i = mod(i, 289.0 );\n    vec4 p = permute( permute( permute(\n               i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n             + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n             + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n  // Gradients\n  // ( N*N points uniformly over a square, mapped onto an octahedron.)\n    float n_ = 1.0/7.0; // N=7\n    vec3  ns = n_ * D.wyz - D.xzx;\n\n    vec4 j = p - 49.0 * floor(p * ns.z *ns.z);  //  mod(p,N*N)\n\n    vec4 x_ = floor(j * ns.z);\n    vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n    vec4 x = x_ *ns.x + ns.yyyy;\n    vec4 y = y_ *ns.x + ns.yyyy;\n    vec4 h = 1.0 - abs(x) - abs(y);\n\n    vec4 b0 = vec4( x.xy, y.xy );\n    vec4 b1 = vec4( x.zw, y.zw );\n\n    vec4 s0 = floor(b0)*2.0 + 1.0;\n    vec4 s1 = floor(b1)*2.0 + 1.0;\n    vec4 sh = -step(h, vec4(0.0));\n\n    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n    vec3 p0 = vec3(a0.xy,h.x);\n    vec3 p1 = vec3(a0.zw,h.y);\n    vec3 p2 = vec3(a1.xy,h.z);\n    vec3 p3 = vec3(a1.zw,h.w);\n\n  //Normalise gradients\n    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n    p0 *= norm.x;\n    p1 *= norm.y;\n    p2 *= norm.z;\n    p3 *= norm.w;\n\n  // Mix final noise value\n    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n    m = m * m;\n    return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),\n                                  dot(p2,x2), dot(p3,x3) ) );\n  }\n    "
  },
  _rgbToHsv: {
    type: 'util',
    glsl: "vec3 _rgbToHsv(vec3 c){\n            vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);\n            vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));\n            vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));\n\n            float d = q.x - min(q.w, q.y);\n            float e = 1.0e-10;\n            return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);\n        }"
  },
  _hsvToRgb: {
    type: 'util',
    glsl: "vec3 _hsvToRgb(vec3 c){\n        vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);\n        vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);\n        return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);\n    }"
  }
};
exports["default"] = _default;

},{}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _webcam = _interopRequireDefault(require("./lib/webcam.js"));
var _screenmedia = _interopRequireDefault(require("./lib/screenmedia.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var HydraSource = /*#__PURE__*/function () {
  function HydraSource(_ref) {
    var regl = _ref.regl,
      width = _ref.width,
      height = _ref.height,
      pb = _ref.pb,
      _ref$label = _ref.label,
      label = _ref$label === void 0 ? "" : _ref$label;
    _classCallCheck(this, HydraSource);
    this.label = label;
    this.regl = regl;
    this.src = null;
    this.dynamic = true;
    this.width = width;
    this.height = height;
    this.tex = this.regl.texture({
      //  shape: [width, height]
      shape: [1, 1]
    });
    this.pb = pb;
  }
  _createClass(HydraSource, [{
    key: "init",
    value: function init(opts, params) {
      if ('src' in opts) {
        this.src = opts.src;
        this.tex = this.regl.texture(_objectSpread({
          data: this.src
        }, params));
      }
      if ('dynamic' in opts) this.dynamic = opts.dynamic;
    }
  }, {
    key: "initCam",
    value: function initCam(index, params) {
      var self = this;
      (0, _webcam["default"])(index).then(function (response) {
        self.src = response.video;
        self.dynamic = true;
        self.tex = self.regl.texture(_objectSpread({
          data: self.src
        }, params));
      })["catch"](function (err) {
        return console.log('could not get camera', err);
      });
    }
  }, {
    key: "initVideo",
    value: function initVideo() {
      var _this = this;
      var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var params = arguments.length > 1 ? arguments[1] : undefined;
      // const self = this
      var vid = document.createElement('video');
      vid.crossOrigin = 'anonymous';
      vid.autoplay = true;
      vid.loop = true;
      vid.muted = true; // mute in order to load without user interaction
      var onload = vid.addEventListener('loadeddata', function () {
        _this.src = vid;
        vid.play();
        _this.tex = _this.regl.texture(_objectSpread({
          data: _this.src
        }, params));
        _this.dynamic = true;
      });
      vid.src = url;
    }
  }, {
    key: "initImage",
    value: function initImage() {
      var _this2 = this;
      var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var params = arguments.length > 1 ? arguments[1] : undefined;
      var img = document.createElement('img');
      img.crossOrigin = 'anonymous';
      img.src = url;
      img.onload = function () {
        _this2.src = img;
        _this2.dynamic = false;
        _this2.tex = _this2.regl.texture(_objectSpread({
          data: _this2.src
        }, params));
      };
    }
  }, {
    key: "initStream",
    value: function initStream(streamName, params) {
      //  console.log("initing stream!", streamName)
      var self = this;
      if (streamName && this.pb) {
        this.pb.initSource(streamName);
        this.pb.on('got video', function (nick, video) {
          if (nick === streamName) {
            self.src = video;
            self.dynamic = true;
            self.tex = self.regl.texture(_objectSpread({
              data: self.src
            }, params));
          }
        });
      }
    }

    // index only relevant in atom-hydra + desktop apps
  }, {
    key: "initScreen",
    value: function initScreen() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var params = arguments.length > 1 ? arguments[1] : undefined;
      var self = this;
      (0, _screenmedia["default"])().then(function (response) {
        self.src = response.video;
        self.tex = self.regl.texture(_objectSpread({
          data: self.src
        }, params));
        self.dynamic = true;
        //  console.log("received screen input")
      })["catch"](function (err) {
        return console.log('could not get screen', err);
      });
    }
  }, {
    key: "resize",
    value: function resize(width, height) {
      this.width = width;
      this.height = height;
    }
  }, {
    key: "clear",
    value: function clear() {
      if (this.src && this.src.srcObject) {
        if (this.src.srcObject.getTracks) {
          this.src.srcObject.getTracks().forEach(function (track) {
            return track.stop();
          });
        }
      }
      this.src = null;
      this.tex = this.regl.texture({
        shape: [1, 1]
      });
    }
  }, {
    key: "tick",
    value: function tick(time) {
      //  console.log(this.src, this.tex.width, this.tex.height)
      if (this.src !== null && this.dynamic === true) {
        if (this.src.videoWidth && this.src.videoWidth !== this.tex.width) {
          console.log(this.src.videoWidth, this.src.videoHeight, this.tex.width, this.tex.height);
          this.tex.resize(this.src.videoWidth, this.src.videoHeight);
        }
        if (this.src.width && this.src.width !== this.tex.width) {
          this.tex.resize(this.src.width, this.src.height);
        }
        this.tex.subimage(this.src);
      }
    }
  }, {
    key: "getTexture",
    value: function getTexture() {
      return this.tex;
    }
  }]);
  return HydraSource;
}();
var _default = HydraSource;
exports["default"] = _default;

},{"./lib/screenmedia.js":19,"./lib/webcam.js":21}],11:[function(require,module,exports){
(function (global){(function (){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _output = _interopRequireDefault(require("./output.js"));
var _rafLoop = _interopRequireDefault(require("raf-loop"));
var _hydraSource = _interopRequireDefault(require("./hydra-source.js"));
var _mouse = _interopRequireDefault(require("./lib/mouse.js"));
var _audio = _interopRequireDefault(require("./lib/audio.js"));
var _videoRecorder = _interopRequireDefault(require("./lib/video-recorder.js"));
var _arrayUtils = _interopRequireDefault(require("./lib/array-utils.js"));
var _evalSandbox = _interopRequireDefault(require("./eval-sandbox.js"));
var _generatorFactory = _interopRequireDefault(require("./generator-factory.js"));
var _regl = _interopRequireDefault(require("regl"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
// const window = global.window

var Mouse = (0, _mouse["default"])();
// to do: add ability to pass in certain uniforms and transforms
var HydraRenderer = /*#__PURE__*/function () {
  function HydraRenderer() {
    var _this = this;
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$pb = _ref.pb,
      pb = _ref$pb === void 0 ? null : _ref$pb,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 1280 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 720 : _ref$height,
      _ref$numSources = _ref.numSources,
      numSources = _ref$numSources === void 0 ? 4 : _ref$numSources,
      _ref$numOutputs = _ref.numOutputs,
      numOutputs = _ref$numOutputs === void 0 ? 4 : _ref$numOutputs,
      _ref$makeGlobal = _ref.makeGlobal,
      makeGlobal = _ref$makeGlobal === void 0 ? true : _ref$makeGlobal,
      _ref$autoLoop = _ref.autoLoop,
      autoLoop = _ref$autoLoop === void 0 ? true : _ref$autoLoop,
      _ref$detectAudio = _ref.detectAudio,
      detectAudio = _ref$detectAudio === void 0 ? true : _ref$detectAudio,
      _ref$enableStreamCapt = _ref.enableStreamCapture,
      enableStreamCapture = _ref$enableStreamCapt === void 0 ? true : _ref$enableStreamCapt,
      canvas = _ref.canvas,
      precision = _ref.precision,
      _ref$extendTransforms = _ref.extendTransforms,
      extendTransforms = _ref$extendTransforms === void 0 ? {} : _ref$extendTransforms;
    _classCallCheck(this, HydraRenderer);
    _arrayUtils["default"].init();
    this.pb = pb;
    this.width = width;
    this.height = height;
    this.renderAll = false;
    this.detectAudio = detectAudio;
    this._initCanvas(canvas);
    global.window.test = 'hi';
    // object that contains all properties that will be made available on the global context and during local evaluation
    this.synth = {
      time: 0,
      bpm: 100,
      width: this.width,
      height: this.height,
      fps: undefined,
      stats: {
        fps: 0
      },
      speed: 1,
      mouse: Mouse,
      render: this._render.bind(this),
      setResolution: this.setResolution.bind(this),
      update: function update(dt) {},
      // user defined update function
      hush: this.hush.bind(this),
      tick: this.tick.bind(this)
    };
    if (makeGlobal) window.loadScript = this.loadScript;
    this.timeSinceLastUpdate = 0;
    this._time = 0; // for internal use, only to use for deciding when to render frames

    // only allow valid precision options
    var precisionOptions = ['lowp', 'mediump', 'highp'];
    if (precision && precisionOptions.includes(precision.toLowerCase())) {
      this.precision = precision.toLowerCase();
      //
      // if(!precisionValid){
      //   console.warn('[hydra-synth warning]\nConstructor was provided an invalid floating point precision value of "' + precision + '". Using default value of "mediump" instead.')
      // }
    } else {
      var isIOS = (/iPad|iPhone|iPod/.test(navigator.platform) || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1) && !window.MSStream;
      this.precision = isIOS ? 'highp' : 'mediump';
    }
    this.extendTransforms = extendTransforms;

    // boolean to store when to save screenshot
    this.saveFrame = false;

    // if stream capture is enabled, this object contains the capture stream
    this.captureStream = null;
    this.generator = undefined;
    this._initRegl();
    this._initOutputs(numOutputs);
    this._initSources(numSources);
    this._generateGlslTransforms();
    this.synth.screencap = function () {
      _this.saveFrame = true;
    };
    if (enableStreamCapture) {
      try {
        this.captureStream = this.canvas.captureStream(25);
        // to do: enable capture stream of specific sources and outputs
        this.synth.vidRecorder = new _videoRecorder["default"](this.captureStream);
      } catch (e) {
        console.warn('[hydra-synth warning]\nnew MediaSource() is not currently supported on iOS.');
        console.error(e);
      }
    }
    if (detectAudio) this._initAudio();
    if (autoLoop) (0, _rafLoop["default"])(this.tick.bind(this)).start();

    // final argument is properties that the user can set, all others are treated as read-only
    this.sandbox = new _evalSandbox["default"](this.synth, makeGlobal, ['speed', 'update', 'bpm', 'fps']);
  }
  _createClass(HydraRenderer, [{
    key: "eval",
    value: function _eval(code) {
      this.sandbox.eval(code);
    }
  }, {
    key: "getScreenImage",
    value: function getScreenImage(callback) {
      this.imageCallback = callback;
      this.saveFrame = true;
    }
  }, {
    key: "hush",
    value: function hush() {
      var _this2 = this;
      this.s.forEach(function (source) {
        source.clear();
      });
      this.o.forEach(function (output) {
        _this2.synth.solid(0, 0, 0, 0).out(output);
      });
      this.synth.render(this.o[0]);
      // this.synth.update = (dt) => {}
      this.sandbox.set('update', function (dt) {});
    }
  }, {
    key: "loadScript",
    value: function loadScript() {
      var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      var p = new Promise(function (res, rej) {
        var script = document.createElement("script");
        script.onload = function () {
          console.log("loaded script ".concat(url));
          res();
        };
        script.onerror = function (err) {
          console.log("error loading script ".concat(url), "log-error");
          res();
        };
        script.src = url;
        document.head.appendChild(script);
      });
      return p;
    }
  }, {
    key: "setResolution",
    value: function setResolution(width, height) {
      //  console.log(width, height)
      this.canvas.width = width;
      this.canvas.height = height;
      this.width = width; // is this necessary?
      this.height = height; // ?
      this.sandbox.set('width', width);
      this.sandbox.set('height', height);
      console.log(this.width);
      this.o.forEach(function (output) {
        output.resize(width, height);
      });
      this.s.forEach(function (source) {
        source.resize(width, height);
      });
      this.regl._refresh();
      console.log(this.canvas.width);
    }
  }, {
    key: "canvasToImage",
    value: function canvasToImage(callback) {
      var a = document.createElement('a');
      a.style.display = 'none';
      var d = new Date();
      a.download = "hydra-".concat(d.getFullYear(), "-").concat(d.getMonth() + 1, "-").concat(d.getDate(), "-").concat(d.getHours(), ".").concat(d.getMinutes(), ".").concat(d.getSeconds(), ".png");
      document.body.appendChild(a);
      var self = this;
      this.canvas.toBlob(function (blob) {
        if (self.imageCallback) {
          self.imageCallback(blob);
          delete self.imageCallback;
        } else {
          a.href = URL.createObjectURL(blob);
          console.log(a.href);
          a.click();
        }
      }, 'image/png');
      setTimeout(function () {
        document.body.removeChild(a);
        window.URL.revokeObjectURL(a.href);
      }, 300);
    }
  }, {
    key: "_initAudio",
    value: function _initAudio() {
      var that = this;
      this.synth.a = new _audio["default"]({
        numBins: 4,
        parentEl: this.canvas.parentNode
        // changeListener: ({audio}) => {
        //   that.a = audio.bins.map((_, index) =>
        //     (scale = 1, offset = 0) => () => (audio.fft[index] * scale + offset)
        //   )
        //
        //   if (that.makeGlobal) {
        //     that.a.forEach((a, index) => {
        //       const aname = `a${index}`
        //       window[aname] = a
        //     })
        //   }
        // }
      });
    }

    // create main output canvas and add to screen
  }, {
    key: "_initCanvas",
    value: function _initCanvas(canvas) {
      if (canvas) {
        this.canvas = canvas;
        this.width = canvas.width;
        this.height = canvas.height;
      } else {
        this.canvas = document.createElement('canvas');
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';
        this.canvas.style.imageRendering = 'pixelated';
        document.body.appendChild(this.canvas);
      }
    }
  }, {
    key: "_initRegl",
    value: function _initRegl() {
      this.regl = (0, _regl["default"])({
        //  profile: true,
        canvas: this.canvas,
        pixelRatio: 1 //,
        // extensions: [
        //   'oes_texture_half_float',
        //   'oes_texture_half_float_linear'
        // ],
        // optionalExtensions: [
        //   'oes_texture_float',
        //   'oes_texture_float_linear'
        //]
      });

      // This clears the color buffer to black and the depth buffer to 1
      this.regl.clear({
        color: [0, 0, 0, 1]
      });
      this.renderAll = this.regl({
        frag: "\n      precision ".concat(this.precision, " float;\n      varying vec2 uv;\n      uniform sampler2D tex0;\n      uniform sampler2D tex1;\n      uniform sampler2D tex2;\n      uniform sampler2D tex3;\n\n      void main () {\n        vec2 st = vec2(1.0 - uv.x, uv.y);\n        st*= vec2(2);\n        vec2 q = floor(st).xy*(vec2(2.0, 1.0));\n        int quad = int(q.x) + int(q.y);\n        st.x += step(1., mod(st.y,2.0));\n        st.y += step(1., mod(st.x,2.0));\n        st = fract(st);\n        if(quad==0){\n          gl_FragColor = texture2D(tex0, st);\n        } else if(quad==1){\n          gl_FragColor = texture2D(tex1, st);\n        } else if (quad==2){\n          gl_FragColor = texture2D(tex2, st);\n        } else {\n          gl_FragColor = texture2D(tex3, st);\n        }\n\n      }\n      "),
        vert: "\n      precision ".concat(this.precision, " float;\n      attribute vec2 position;\n      varying vec2 uv;\n\n      void main () {\n        uv = position;\n        gl_Position = vec4(1.0 - 2.0 * position, 0, 1);\n      }"),
        attributes: {
          position: [[-2, 0], [0, -2], [2, 2]]
        },
        uniforms: {
          tex0: this.regl.prop('tex0'),
          tex1: this.regl.prop('tex1'),
          tex2: this.regl.prop('tex2'),
          tex3: this.regl.prop('tex3')
        },
        count: 3,
        depth: {
          enable: false
        }
      });
      this.renderFbo = this.regl({
        frag: "\n      precision ".concat(this.precision, " float;\n      varying vec2 uv;\n      uniform vec2 resolution;\n      uniform sampler2D tex0;\n\n      void main () {\n        gl_FragColor = texture2D(tex0, vec2(1.0 - uv.x, uv.y));\n      }\n      "),
        vert: "\n      precision ".concat(this.precision, " float;\n      attribute vec2 position;\n      varying vec2 uv;\n\n      void main () {\n        uv = position;\n        gl_Position = vec4(1.0 - 2.0 * position, 0, 1);\n      }"),
        attributes: {
          position: [[-2, 0], [0, -2], [2, 2]]
        },
        uniforms: {
          tex0: this.regl.prop('tex0'),
          resolution: this.regl.prop('resolution')
        },
        count: 3,
        depth: {
          enable: false
        }
      });
    }
  }, {
    key: "_initOutputs",
    value: function _initOutputs(numOutputs) {
      var _this3 = this;
      var self = this;
      this.o = Array(numOutputs).fill().map(function (el, index) {
        var o = new _output["default"]({
          regl: _this3.regl,
          width: _this3.width,
          height: _this3.height,
          precision: _this3.precision,
          label: "o".concat(index)
        });
        //  o.render()
        o.id = index;
        self.synth['o' + index] = o;
        return o;
      });

      // set default output
      this.output = this.o[0];
    }
  }, {
    key: "_initSources",
    value: function _initSources(numSources) {
      this.s = [];
      for (var i = 0; i < numSources; i++) {
        this.createSource(i);
      }
    }
  }, {
    key: "createSource",
    value: function createSource(i) {
      var s = new _hydraSource["default"]({
        regl: this.regl,
        pb: this.pb,
        width: this.width,
        height: this.height,
        label: "s".concat(i)
      });
      this.synth['s' + this.s.length] = s;
      this.s.push(s);
      return s;
    }
  }, {
    key: "_generateGlslTransforms",
    value: function _generateGlslTransforms() {
      var self = this;
      this.generator = new _generatorFactory["default"]({
        defaultOutput: this.o[0],
        defaultUniforms: this.o[0].uniforms,
        extendTransforms: this.extendTransforms,
        changeListener: function changeListener(_ref2) {
          var type = _ref2.type,
            method = _ref2.method,
            synth = _ref2.synth;
          if (type === 'add') {
            self.synth[method] = synth.generators[method];
            if (self.sandbox) self.sandbox.add(method);
          } else if (type === 'remove') {
            // what to do here? dangerously deleting window methods
            //delete window[method]
          }
          //  }
        }
      });

      this.synth.setFunction = this.generator.setFunction.bind(this.generator);
    }
  }, {
    key: "_render",
    value: function _render(output) {
      if (output) {
        this.output = output;
        this.isRenderingAll = false;
      } else {
        this.isRenderingAll = true;
      }
    }

    // dt in ms
  }, {
    key: "tick",
    value: function tick(dt, uniforms) {
      this.sandbox.tick();
      if (this.detectAudio === true) this.synth.a.tick();
      //  let updateInterval = 1000/this.synth.fps // ms
      this.sandbox.set('time', this.synth.time += dt * 0.001 * this.synth.speed);
      this.timeSinceLastUpdate += dt;
      if (!this.synth.fps || this.timeSinceLastUpdate >= 1000 / this.synth.fps) {
        //  console.log(1000/this.timeSinceLastUpdate)
        this.synth.stats.fps = Math.ceil(1000 / this.timeSinceLastUpdate);
        if (this.synth.update) {
          try {
            this.synth.update(this.timeSinceLastUpdate);
          } catch (e) {
            console.log(e);
          }
        }
        //  console.log(this.synth.speed, this.synth.time)
        for (var i = 0; i < this.s.length; i++) {
          this.s[i].tick(this.synth.time);
        }
        //  console.log(this.canvas.width, this.canvas.height)
        for (var _i = 0; _i < this.o.length; _i++) {
          this.o[_i].tick({
            time: this.synth.time,
            mouse: this.synth.mouse,
            bpm: this.synth.bpm,
            resolution: [this.canvas.width, this.canvas.height]
          });
        }
        if (this.isRenderingAll) {
          this.renderAll({
            tex0: this.o[0].getCurrent(),
            tex1: this.o[1].getCurrent(),
            tex2: this.o[2].getCurrent(),
            tex3: this.o[3].getCurrent(),
            resolution: [this.canvas.width, this.canvas.height]
          });
        } else {
          this.renderFbo({
            tex0: this.output.getCurrent(),
            resolution: [this.canvas.width, this.canvas.height]
          });
        }
        this.timeSinceLastUpdate = 0;
      }
      if (this.saveFrame === true) {
        this.canvasToImage();
        this.saveFrame = false;
      }
      //  this.regl.poll()
    }
  }]);
  return HydraRenderer;
}();
var _default = HydraRenderer;
exports["default"] = _default;

}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./eval-sandbox.js":3,"./generator-factory.js":6,"./hydra-source.js":10,"./lib/array-utils.js":13,"./lib/audio.js":14,"./lib/mouse.js":17,"./lib/video-recorder.js":20,"./output.js":22,"raf-loop":27,"regl":29}],12:[function(require,module,exports){
"use strict";

var _hydraSynth = _interopRequireDefault(require("./hydra-synth.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
//import ShaderGenerator = require('./shader-generator.js')
// alert('hi')
// export default Synth
module.exports = _hydraSynth["default"];

},{"./hydra-synth.js":11}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _easingFunctions = _interopRequireDefault(require("./easing-functions.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var map = function map(num, in_min, in_max, out_min, out_max) {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
};
var _default = {
  init: function init() {
    Array.prototype.fast = function () {
      var speed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      this._speed = speed;
      return this;
    };
    Array.prototype.smooth = function () {
      var smooth = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      this._smooth = smooth;
      return this;
    };
    Array.prototype.ease = function () {
      var ease = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'linear';
      if (typeof ease == 'function') {
        this._smooth = 1;
        this._ease = ease;
      } else if (_easingFunctions["default"][ease]) {
        this._smooth = 1;
        this._ease = _easingFunctions["default"][ease];
      }
      return this;
    };
    Array.prototype.offset = function () {
      var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0.5;
      this._offset = offset % 1.0;
      return this;
    };

    // Array.prototype.bounce = function() {
    //   this.modifiers.bounce = true
    //   return this
    // }

    Array.prototype.fit = function () {
      var low = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var high = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var lowest = Math.min.apply(Math, _toConsumableArray(this));
      var highest = Math.max.apply(Math, _toConsumableArray(this));
      var newArr = this.map(function (num) {
        return map(num, lowest, highest, low, high);
      });
      newArr._speed = this._speed;
      newArr._smooth = this._smooth;
      newArr._ease = this._ease;
      return newArr;
    };
  },
  getValue: function getValue() {
    var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    return function (_ref) {
      var time = _ref.time,
        bpm = _ref.bpm;
      var speed = arr._speed ? arr._speed : 1;
      var smooth = arr._smooth ? arr._smooth : 0;
      var index = time * speed * (bpm / 60) + (arr._offset || 0);
      if (smooth !== 0) {
        var ease = arr._ease ? arr._ease : _easingFunctions["default"]['linear'];
        var _index = index - smooth / 2;
        var currValue = arr[Math.floor(_index % arr.length)];
        var nextValue = arr[Math.floor((_index + 1) % arr.length)];
        var t = Math.min(_index % 1 / smooth, 1);
        return ease(t) * (nextValue - currValue) + currValue;
      } else {
        var val = arr[Math.floor(index % arr.length)];
        return arr[Math.floor(index % arr.length)];
      }
    };
  }
};
exports["default"] = _default;

},{"./easing-functions.js":15}],14:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _meyda = _interopRequireDefault(require("meyda"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Audio = /*#__PURE__*/function () {
  function Audio(_ref) {
    var _this = this;
    var _ref$numBins = _ref.numBins,
      numBins = _ref$numBins === void 0 ? 4 : _ref$numBins,
      _ref$cutoff = _ref.cutoff,
      cutoff = _ref$cutoff === void 0 ? 2 : _ref$cutoff,
      _ref$smooth = _ref.smooth,
      smooth = _ref$smooth === void 0 ? 0.4 : _ref$smooth,
      _ref$max = _ref.max,
      max = _ref$max === void 0 ? 15 : _ref$max,
      _ref$scale = _ref.scale,
      scale = _ref$scale === void 0 ? 10 : _ref$scale,
      _ref$isDrawing = _ref.isDrawing,
      isDrawing = _ref$isDrawing === void 0 ? false : _ref$isDrawing,
      _ref$parentEl = _ref.parentEl,
      parentEl = _ref$parentEl === void 0 ? document.body : _ref$parentEl;
    _classCallCheck(this, Audio);
    this.vol = 0;
    this.scale = scale;
    this.max = max;
    this.cutoff = cutoff;
    this.smooth = smooth;
    this.setBins(numBins);

    // beat detection from: https://github.com/therewasaguy/p5-music-viz/blob/gh-pages/demos/01d_beat_detect_amplitude/sketch.js
    this.beat = {
      holdFrames: 20,
      threshold: 40,
      _cutoff: 0,
      // adaptive based on sound state
      decay: 0.98,
      _framesSinceBeat: 0 // keeps track of frames
    };

    this.onBeat = function () {
      //  console.log("beat")
    };
    this.canvas = document.createElement('canvas');
    this.canvas.width = 100;
    this.canvas.height = 80;
    this.canvas.style.width = "100px";
    this.canvas.style.height = "80px";
    this.canvas.style.position = 'absolute';
    this.canvas.style.right = '0px';
    this.canvas.style.bottom = '0px';
    parentEl.appendChild(this.canvas);
    this.isDrawing = isDrawing;
    this.ctx = this.canvas.getContext('2d');
    this.ctx.fillStyle = "#DFFFFF";
    this.ctx.strokeStyle = "#0ff";
    this.ctx.lineWidth = 0.5;
    if (window.navigator.mediaDevices) {
      window.navigator.mediaDevices.getUserMedia({
        video: false,
        audio: true
      }).then(function (stream) {
        //  console.log('got mic stream', stream)
        _this.stream = stream;
        _this.context = new AudioContext();
        //  this.context = new AudioContext()
        var audio_stream = _this.context.createMediaStreamSource(stream);

        //  console.log(this.context)
        _this.meyda = _meyda["default"].createMeydaAnalyzer({
          audioContext: _this.context,
          source: audio_stream,
          featureExtractors: ['loudness'
          //  'perceptualSpread',
          //  'perceptualSharpness',
          //  'spectralCentroid'
          ]
        });
      })["catch"](function (err) {
        return console.log('ERROR', err);
      });
    }
  }
  _createClass(Audio, [{
    key: "detectBeat",
    value: function detectBeat(level) {
      //console.log(level,   this.beat._cutoff)
      if (level > this.beat._cutoff && level > this.beat.threshold) {
        this.onBeat();
        this.beat._cutoff = level * 1.2;
        this.beat._framesSinceBeat = 0;
      } else {
        if (this.beat._framesSinceBeat <= this.beat.holdFrames) {
          this.beat._framesSinceBeat++;
        } else {
          this.beat._cutoff *= this.beat.decay;
          this.beat._cutoff = Math.max(this.beat._cutoff, this.beat.threshold);
        }
      }
    }
  }, {
    key: "tick",
    value: function tick() {
      var _this2 = this;
      if (this.meyda) {
        var features = this.meyda.get();
        if (features && features !== null) {
          this.vol = features.loudness.total;
          this.detectBeat(this.vol);
          // reduce loudness array to number of bins
          var reducer = function reducer(accumulator, currentValue) {
            return accumulator + currentValue;
          };
          var spacing = Math.floor(features.loudness.specific.length / this.bins.length);
          this.prevBins = this.bins.slice(0);
          this.bins = this.bins.map(function (bin, index) {
            return features.loudness.specific.slice(index * spacing, (index + 1) * spacing).reduce(reducer);
          }).map(function (bin, index) {
            // map to specified range

            // return (bin * (1.0 - this.smooth) + this.prevBins[index] * this.smooth)
            return bin * (1.0 - _this2.settings[index].smooth) + _this2.prevBins[index] * _this2.settings[index].smooth;
          });
          // var y = this.canvas.height - scale*this.settings[index].cutoff
          // this.ctx.beginPath()
          // this.ctx.moveTo(index*spacing, y)
          // this.ctx.lineTo((index+1)*spacing, y)
          // this.ctx.stroke()
          //
          // var yMax = this.canvas.height - scale*(this.settings[index].scale + this.settings[index].cutoff)
          this.fft = this.bins.map(function (bin, index) {
            return (
              // Math.max(0, (bin - this.cutoff) / (this.max - this.cutoff))
              Math.max(0, (bin - _this2.settings[index].cutoff) / _this2.settings[index].scale)
            );
          });
          if (this.isDrawing) this.draw();
        }
      }
    }
  }, {
    key: "setCutoff",
    value: function setCutoff(cutoff) {
      this.cutoff = cutoff;
      this.settings = this.settings.map(function (el) {
        el.cutoff = cutoff;
        return el;
      });
    }
  }, {
    key: "setSmooth",
    value: function setSmooth(smooth) {
      this.smooth = smooth;
      this.settings = this.settings.map(function (el) {
        el.smooth = smooth;
        return el;
      });
    }
  }, {
    key: "setBins",
    value: function setBins(numBins) {
      var _this3 = this;
      this.bins = Array(numBins).fill(0);
      this.prevBins = Array(numBins).fill(0);
      this.fft = Array(numBins).fill(0);
      this.settings = Array(numBins).fill(0).map(function () {
        return {
          cutoff: _this3.cutoff,
          scale: _this3.scale,
          smooth: _this3.smooth
        };
      });
      // to do: what to do in non-global mode?
      this.bins.forEach(function (bin, index) {
        window['a' + index] = function () {
          var scale = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
          var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          return function () {
            return a.fft[index] * scale + offset;
          };
        };
      });
      //  console.log(this.settings)
    }
  }, {
    key: "setScale",
    value: function setScale(scale) {
      this.scale = scale;
      this.settings = this.settings.map(function (el) {
        el.scale = scale;
        return el;
      });
    }
  }, {
    key: "setMax",
    value: function setMax(max) {
      this.max = max;
      console.log('set max is deprecated');
    }
  }, {
    key: "hide",
    value: function hide() {
      this.isDrawing = false;
      this.canvas.style.display = 'none';
    }
  }, {
    key: "show",
    value: function show() {
      this.isDrawing = true;
      this.canvas.style.display = 'block';
    }
  }, {
    key: "draw",
    value: function draw() {
      var _this4 = this;
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      var spacing = this.canvas.width / this.bins.length;
      var scale = this.canvas.height / (this.max * 2);
      //  console.log(this.bins)
      this.bins.forEach(function (bin, index) {
        var height = bin * scale;
        _this4.ctx.fillRect(index * spacing, _this4.canvas.height - height, spacing, height);

        //   console.log(this.settings[index])
        var y = _this4.canvas.height - scale * _this4.settings[index].cutoff;
        _this4.ctx.beginPath();
        _this4.ctx.moveTo(index * spacing, y);
        _this4.ctx.lineTo((index + 1) * spacing, y);
        _this4.ctx.stroke();
        var yMax = _this4.canvas.height - scale * (_this4.settings[index].scale + _this4.settings[index].cutoff);
        _this4.ctx.beginPath();
        _this4.ctx.moveTo(index * spacing, yMax);
        _this4.ctx.lineTo((index + 1) * spacing, yMax);
        _this4.ctx.stroke();
      });

      /*var y = this.canvas.height - scale*this.cutoff
      this.ctx.beginPath()
      this.ctx.moveTo(0, y)
      this.ctx.lineTo(this.canvas.width, y)
      this.ctx.stroke()
      var yMax = this.canvas.height - scale*this.max
      this.ctx.beginPath()
      this.ctx.moveTo(0, yMax)
      this.ctx.lineTo(this.canvas.width, yMax)
      this.ctx.stroke()*/
    }
  }]);
  return Audio;
}();
var _default = Audio;
exports["default"] = _default;

},{"meyda":24}],15:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
// from https://gist.github.com/gre/1650294
var _default = {
  // no easing, no acceleration
  linear: function linear(t) {
    return t;
  },
  // accelerating from zero velocity
  easeInQuad: function easeInQuad(t) {
    return t * t;
  },
  // decelerating to zero velocity
  easeOutQuad: function easeOutQuad(t) {
    return t * (2 - t);
  },
  // acceleration until halfway, then deceleration
  easeInOutQuad: function easeInOutQuad(t) {
    return t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  },
  // accelerating from zero velocity
  easeInCubic: function easeInCubic(t) {
    return t * t * t;
  },
  // decelerating to zero velocity
  easeOutCubic: function easeOutCubic(t) {
    return --t * t * t + 1;
  },
  // acceleration until halfway, then deceleration
  easeInOutCubic: function easeInOutCubic(t) {
    return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  },
  // accelerating from zero velocity
  easeInQuart: function easeInQuart(t) {
    return t * t * t * t;
  },
  // decelerating to zero velocity
  easeOutQuart: function easeOutQuart(t) {
    return 1 - --t * t * t * t;
  },
  // acceleration until halfway, then deceleration
  easeInOutQuart: function easeInOutQuart(t) {
    return t < .5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
  },
  // accelerating from zero velocity
  easeInQuint: function easeInQuint(t) {
    return t * t * t * t * t;
  },
  // decelerating to zero velocity
  easeOutQuint: function easeOutQuint(t) {
    return 1 + --t * t * t * t * t;
  },
  // acceleration until halfway, then deceleration
  easeInOutQuint: function easeInOutQuint(t) {
    return t < .5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
  },
  // sin shape
  sin: function sin(t) {
    return (1 + Math.sin(Math.PI * t - Math.PI / 2)) / 2;
  }
};
exports["default"] = _default;

},{}],16:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
// https://github.com/mikolalysenko/mouse-event

var mouse = {};
function mouseButtons(ev) {
  if (_typeof(ev) === 'object') {
    if ('buttons' in ev) {
      return ev.buttons;
    } else if ('which' in ev) {
      var b = ev.which;
      if (b === 2) {
        return 4;
      } else if (b === 3) {
        return 2;
      } else if (b > 0) {
        return 1 << b - 1;
      }
    } else if ('button' in ev) {
      var b = ev.button;
      if (b === 1) {
        return 4;
      } else if (b === 2) {
        return 2;
      } else if (b >= 0) {
        return 1 << b;
      }
    }
  }
  return 0;
}
mouse.buttons = mouseButtons;
function mouseElement(ev) {
  return ev.target || ev.srcElement || window;
}
mouse.element = mouseElement;
function mouseRelativeX(ev) {
  if (_typeof(ev) === 'object') {
    if ('pageX' in ev) {
      return ev.pageX;
    }
  }
  return 0;
}
mouse.x = mouseRelativeX;
function mouseRelativeY(ev) {
  if (_typeof(ev) === 'object') {
    if ('pageY' in ev) {
      return ev.pageY;
    }
  }
  return 0;
}
mouse.y = mouseRelativeY;
var _default = mouse;
exports["default"] = _default;

},{}],17:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mouseEvent = _interopRequireDefault(require("./mouse-event.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// based on https://github.com/mikolalysenko/mouse-change
var _default = mouseListen;
exports["default"] = _default;
function mouseListen(element, callback) {
  if (!callback) {
    callback = element;
    element = window;
  }
  var buttonState = 0;
  var x = 0;
  var y = 0;
  var mods = {
    shift: false,
    alt: false,
    control: false,
    meta: false
  };
  var attached = false;
  function updateMods(ev) {
    var changed = false;
    if ('altKey' in ev) {
      changed = changed || ev.altKey !== mods.alt;
      mods.alt = !!ev.altKey;
    }
    if ('shiftKey' in ev) {
      changed = changed || ev.shiftKey !== mods.shift;
      mods.shift = !!ev.shiftKey;
    }
    if ('ctrlKey' in ev) {
      changed = changed || ev.ctrlKey !== mods.control;
      mods.control = !!ev.ctrlKey;
    }
    if ('metaKey' in ev) {
      changed = changed || ev.metaKey !== mods.meta;
      mods.meta = !!ev.metaKey;
    }
    return changed;
  }
  function handleEvent(nextButtons, ev) {
    var nextX = _mouseEvent["default"].x(ev);
    var nextY = _mouseEvent["default"].y(ev);
    if ('buttons' in ev) {
      nextButtons = ev.buttons | 0;
    }
    if (nextButtons !== buttonState || nextX !== x || nextY !== y || updateMods(ev)) {
      buttonState = nextButtons | 0;
      x = nextX || 0;
      y = nextY || 0;
      callback && callback(buttonState, x, y, mods);
    }
  }
  function clearState(ev) {
    handleEvent(0, ev);
  }
  function handleBlur() {
    if (buttonState || x || y || mods.shift || mods.alt || mods.meta || mods.control) {
      x = y = 0;
      buttonState = 0;
      mods.shift = mods.alt = mods.control = mods.meta = false;
      callback && callback(0, 0, 0, mods);
    }
  }
  function handleMods(ev) {
    if (updateMods(ev)) {
      callback && callback(buttonState, x, y, mods);
    }
  }
  function handleMouseMove(ev) {
    if (_mouseEvent["default"].buttons(ev) === 0) {
      handleEvent(0, ev);
    } else {
      handleEvent(buttonState, ev);
    }
  }
  function handleMouseDown(ev) {
    handleEvent(buttonState | _mouseEvent["default"].buttons(ev), ev);
  }
  function handleMouseUp(ev) {
    handleEvent(buttonState & ~_mouseEvent["default"].buttons(ev), ev);
  }
  function attachListeners() {
    if (attached) {
      return;
    }
    attached = true;
    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mousedown', handleMouseDown);
    element.addEventListener('mouseup', handleMouseUp);
    element.addEventListener('mouseleave', clearState);
    element.addEventListener('mouseenter', clearState);
    element.addEventListener('mouseout', clearState);
    element.addEventListener('mouseover', clearState);
    element.addEventListener('blur', handleBlur);
    element.addEventListener('keyup', handleMods);
    element.addEventListener('keydown', handleMods);
    element.addEventListener('keypress', handleMods);
    if (element !== window) {
      window.addEventListener('blur', handleBlur);
      window.addEventListener('keyup', handleMods);
      window.addEventListener('keydown', handleMods);
      window.addEventListener('keypress', handleMods);
    }
  }
  function detachListeners() {
    if (!attached) {
      return;
    }
    attached = false;
    element.removeEventListener('mousemove', handleMouseMove);
    element.removeEventListener('mousedown', handleMouseDown);
    element.removeEventListener('mouseup', handleMouseUp);
    element.removeEventListener('mouseleave', clearState);
    element.removeEventListener('mouseenter', clearState);
    element.removeEventListener('mouseout', clearState);
    element.removeEventListener('mouseover', clearState);
    element.removeEventListener('blur', handleBlur);
    element.removeEventListener('keyup', handleMods);
    element.removeEventListener('keydown', handleMods);
    element.removeEventListener('keypress', handleMods);
    if (element !== window) {
      window.removeEventListener('blur', handleBlur);
      window.removeEventListener('keyup', handleMods);
      window.removeEventListener('keydown', handleMods);
      window.removeEventListener('keypress', handleMods);
    }
  }

  // Attach listeners
  attachListeners();
  var result = {
    element: element
  };
  Object.defineProperties(result, {
    enabled: {
      get: function get() {
        return attached;
      },
      set: function set(f) {
        if (f) {
          attachListeners();
        } else {
          detachListeners();
        }
      },
      enumerable: true
    },
    buttons: {
      get: function get() {
        return buttonState;
      },
      enumerable: true
    },
    x: {
      get: function get() {
        return x;
      },
      enumerable: true
    },
    y: {
      get: function get() {
        return y;
      },
      enumerable: true
    },
    mods: {
      get: function get() {
        return mods;
      },
      enumerable: true
    }
  });
  return result;
}

},{"./mouse-event.js":16}],18:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
// attempt custom evaluation sandbox for hydra functions
// for now, just avoids polluting the global namespace
// should probably be replaced with an abstract syntax tree
var _default = function _default(parent) {
  var initialCode = "";
  var sandbox = createSandbox(initialCode);
  var addToContext = function addToContext(name, object) {
    initialCode += "\n      var ".concat(name, " = ").concat(object, "\n    ");
    sandbox = createSandbox(initialCode);
  };
  return {
    addToContext: addToContext,
    eval: function _eval(code) {
      return sandbox.eval(code);
    }
  };
  function createSandbox(initial) {
    eval(initial);
    // optional params
    var localEval = function localEval(code) {
      eval(code);
    };

    // API/data for end-user
    return {
      eval: localEval
    };
  }
};
exports["default"] = _default;

},{}],19:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;
function _default(options) {
  return new Promise(function (resolve, reject) {
    //  async function startCapture(displayMediaOptions) {
    navigator.mediaDevices.getDisplayMedia(options).then(function (stream) {
      var video = document.createElement('video');
      video.srcObject = stream;
      video.addEventListener('loadedmetadata', function () {
        video.play();
        resolve({
          video: video
        });
      });
    })["catch"](function (err) {
      return reject(err);
    });
  });
}

},{}],20:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var VideoRecorder = /*#__PURE__*/function () {
  function VideoRecorder(stream) {
    _classCallCheck(this, VideoRecorder);
    this.mediaSource = new MediaSource();
    this.stream = stream;

    // testing using a recording as input
    this.output = document.createElement('video');
    this.output.autoplay = true;
    this.output.loop = true;
    var self = this;
    this.mediaSource.addEventListener('sourceopen', function () {
      console.log('MediaSource opened');
      self.sourceBuffer = self.mediaSource.addSourceBuffer('video/webm; codecs="vp8"');
      console.log('Source buffer: ', sourceBuffer);
    });
  }
  _createClass(VideoRecorder, [{
    key: "start",
    value: function start() {
      //  let options = {mimeType: 'video/webm'};

      //   let options = {mimeType: 'video/webm;codecs=h264'};
      var options = {
        mimeType: 'video/webm;codecs=vp9'
      };
      this.recordedBlobs = [];
      try {
        this.mediaRecorder = new MediaRecorder(this.stream, options);
      } catch (e0) {
        console.log('Unable to create MediaRecorder with options Object: ', e0);
        try {
          options = {
            mimeType: 'video/webm,codecs=vp9'
          };
          this.mediaRecorder = new MediaRecorder(this.stream, options);
        } catch (e1) {
          console.log('Unable to create MediaRecorder with options Object: ', e1);
          try {
            options = 'video/vp8'; // Chrome 47
            this.mediaRecorder = new MediaRecorder(this.stream, options);
          } catch (e2) {
            alert('MediaRecorder is not supported by this browser.\n\n' + 'Try Firefox 29 or later, or Chrome 47 or later, ' + 'with Enable experimental Web Platform features enabled from chrome://flags.');
            console.error('Exception while creating MediaRecorder:', e2);
            return;
          }
        }
      }
      console.log('Created MediaRecorder', this.mediaRecorder, 'with options', options);
      this.mediaRecorder.onstop = this._handleStop.bind(this);
      this.mediaRecorder.ondataavailable = this._handleDataAvailable.bind(this);
      this.mediaRecorder.start(100); // collect 100ms of data
      console.log('MediaRecorder started', this.mediaRecorder);
    }
  }, {
    key: "stop",
    value: function stop() {
      this.mediaRecorder.stop();
    }
  }, {
    key: "_handleStop",
    value: function _handleStop() {
      //const superBuffer = new Blob(recordedBlobs, {type: 'video/webm'})
      // const blob = new Blob(this.recordedBlobs, {type: 'video/webm;codecs=h264'})
      var blob = new Blob(this.recordedBlobs, {
        type: this.mediaRecorder.mimeType
      });
      var url = window.URL.createObjectURL(blob);
      this.output.src = url;
      var a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      var d = new Date();
      a.download = "hydra-".concat(d.getFullYear(), "-").concat(d.getMonth() + 1, "-").concat(d.getDate(), "-").concat(d.getHours(), ".").concat(d.getMinutes(), ".").concat(d.getSeconds(), ".webm");
      document.body.appendChild(a);
      a.click();
      setTimeout(function () {
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      }, 300);
    }
  }, {
    key: "_handleDataAvailable",
    value: function _handleDataAvailable(event) {
      if (event.data && event.data.size > 0) {
        this.recordedBlobs.push(event.data);
      }
    }
  }]);
  return VideoRecorder;
}();
var _default = VideoRecorder;
exports["default"] = _default;

},{}],21:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;
//const enumerateDevices = require('enumerate-devices')

function _default(deviceId) {
  return navigator.mediaDevices.enumerateDevices().then(function (devices) {
    return devices.filter(function (devices) {
      return devices.kind === 'videoinput';
    });
  }).then(function (cameras) {
    var constraints = {
      audio: false,
      video: true
    };
    if (cameras[deviceId]) {
      constraints['video'] = {
        deviceId: {
          exact: cameras[deviceId].deviceId
        }
      };
    }
    //  console.log(cameras)
    return window.navigator.mediaDevices.getUserMedia(constraints);
  }).then(function (stream) {
    var video = document.createElement('video');
    video.setAttribute('autoplay', '');
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');
    //  video.src = window.URL.createObjectURL(stream)
    video.srcObject = stream;
    return new Promise(function (resolve, reject) {
      video.addEventListener('loadedmetadata', function () {
        video.play().then(function () {
          return resolve({
            video: video
          });
        });
      });
    });
  })["catch"](console.log.bind(console));
}

},{}],22:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
//const transforms = require('./glsl-transforms.js')

var Output = function Output(_ref) {
  var _this = this;
  var regl = _ref.regl,
    precision = _ref.precision,
    _ref$label = _ref.label,
    label = _ref$label === void 0 ? "" : _ref$label,
    width = _ref.width,
    height = _ref.height;
  this.regl = regl;
  this.precision = precision;
  this.label = label;
  this.positionBuffer = this.regl.buffer([[-2, 0], [0, -2], [2, 2]]);
  this.draw = function () {};
  this.init();
  this.pingPongIndex = 0;

  // for each output, create two fbos for pingponging
  this.fbos = Array(2).fill().map(function () {
    return _this.regl.framebuffer({
      color: _this.regl.texture({
        mag: 'nearest',
        width: width,
        height: height,
        format: 'rgba'
      }),
      depthStencil: false
    });
  });

  // array containing render passes
  //  this.passes = []
};

Output.prototype.resize = function (width, height) {
  this.fbos.forEach(function (fbo) {
    fbo.resize(width, height);
  });
  //  console.log(this)
};

Output.prototype.getCurrent = function () {
  return this.fbos[this.pingPongIndex];
};
Output.prototype.getTexture = function () {
  var index = this.pingPongIndex ? 0 : 1;
  return this.fbos[index];
};
Output.prototype.init = function () {
  //  console.log('clearing')
  this.transformIndex = 0;
  this.fragHeader = "\n  precision ".concat(this.precision, " float;\n\n  uniform float time;\n  varying vec2 uv;\n  ");
  this.fragBody = "";
  this.vert = "\n  precision ".concat(this.precision, " float;\n  attribute vec2 position;\n  varying vec2 uv;\n\n  void main () {\n    uv = position;\n    gl_Position = vec4(2.0 * position - 1.0, 0, 1);\n  }");
  this.attributes = {
    position: this.positionBuffer
  };
  this.uniforms = {
    time: this.regl.prop('time'),
    resolution: this.regl.prop('resolution')
  };
  this.frag = "\n       ".concat(this.fragHeader, "\n\n      void main () {\n        vec4 c = vec4(0, 0, 0, 0);\n        vec2 st = uv;\n        ").concat(this.fragBody, "\n        gl_FragColor = c;\n      }\n  ");
  return this;
};
Output.prototype.render = function (passes) {
  var pass = passes[0];
  //console.log('pass', pass, this.pingPongIndex)
  var self = this;
  var uniforms = Object.assign(pass.uniforms, {
    prevBuffer: function prevBuffer() {
      //var index = this.pingPongIndex ? 0 : 1
      //   var index = self.pingPong[(passIndex+1)%2]
      //  console.log('ping pong', self.pingPongIndex)
      return self.fbos[self.pingPongIndex];
    }
  });
  self.draw = self.regl({
    frag: pass.frag,
    vert: self.vert,
    attributes: self.attributes,
    uniforms: uniforms,
    count: 3,
    framebuffer: function framebuffer() {
      self.pingPongIndex = self.pingPongIndex ? 0 : 1;
      return self.fbos[self.pingPongIndex];
    }
  });
};
Output.prototype.tick = function (props) {
  //  console.log(props)
  this.draw(props);
};
var _default = Output;
exports["default"] = _default;

},{}],23:[function(require,module,exports){
"use strict";

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor;
      ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
          value: ctor,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
    }
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor;
      var TempCtor = function TempCtor() {};
      TempCtor.prototype = superCtor.prototype;
      ctor.prototype = new TempCtor();
      ctor.prototype.constructor = ctor;
    }
  };
}

},{}],24:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
!function (r, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (r = "undefined" != typeof globalThis ? globalThis : r || self).Meyda = t();
}(void 0, function () {
  "use strict";

  function r(r, t, e) {
    if (e || 2 === arguments.length) for (var a, n = 0, o = t.length; n < o; n++) !a && n in t || (a || (a = Array.prototype.slice.call(t, 0, n)), a[n] = t[n]);
    return r.concat(a || Array.prototype.slice.call(t));
  }
  var t = Object.freeze({
      __proto__: null,
      blackman: function blackman(r) {
        for (var t = new Float32Array(r), e = 2 * Math.PI / (r - 1), a = 2 * e, n = 0; n < r / 2; n++) t[n] = .42 - .5 * Math.cos(n * e) + .08 * Math.cos(n * a);
        for (n = Math.ceil(r / 2); n > 0; n--) t[r - n] = t[n - 1];
        return t;
      },
      sine: function sine(r) {
        for (var t = Math.PI / (r - 1), e = new Float32Array(r), a = 0; a < r; a++) e[a] = Math.sin(t * a);
        return e;
      },
      hanning: function hanning(r) {
        for (var t = new Float32Array(r), e = 0; e < r; e++) t[e] = .5 - .5 * Math.cos(2 * Math.PI * e / (r - 1));
        return t;
      },
      hamming: function hamming(r) {
        for (var t = new Float32Array(r), e = 0; e < r; e++) t[e] = .54 - .46 * Math.cos(2 * Math.PI * (e / r - 1));
        return t;
      }
    }),
    e = {};
  function a(r) {
    for (; r % 2 == 0 && r > 1;) r /= 2;
    return 1 === r;
  }
  function n(r, a) {
    if ("rect" !== a) {
      if ("" !== a && a || (a = "hanning"), e[a] || (e[a] = {}), !e[a][r.length]) try {
        e[a][r.length] = t[a](r.length);
      } catch (r) {
        throw new Error("Invalid windowing function");
      }
      r = function (r, t) {
        for (var e = [], a = 0; a < Math.min(r.length, t.length); a++) e[a] = r[a] * t[a];
        return e;
      }(r, e[a][r.length]);
    }
    return r;
  }
  function o(r, t, e) {
    for (var a = new Float32Array(r), n = 0; n < a.length; n++) a[n] = n * t / e, a[n] = 13 * Math.atan(a[n] / 1315.8) + 3.5 * Math.atan(Math.pow(a[n] / 7518, 2));
    return a;
  }
  function i(r) {
    return Float32Array.from(r);
  }
  function u(r) {
    return 1125 * Math.log(1 + r / 700);
  }
  function f(r, t, e) {
    for (var a, n = new Float32Array(r + 2), o = new Float32Array(r + 2), i = t / 2, f = u(0), c = (u(i) - f) / (r + 1), l = new Array(r + 2), s = 0; s < n.length; s++) n[s] = s * c, o[s] = (a = n[s], 700 * (Math.exp(a / 1125) - 1)), l[s] = Math.floor((e + 1) * o[s] / t);
    for (var m = new Array(r), p = 0; p < m.length; p++) {
      m[p] = new Array(e / 2 + 1).fill(0);
      for (s = l[p]; s < l[p + 1]; s++) m[p][s] = (s - l[p]) / (l[p + 1] - l[p]);
      for (s = l[p + 1]; s < l[p + 2]; s++) m[p][s] = (l[p + 2] - s) / (l[p + 2] - l[p + 1]);
    }
    return m;
  }
  function c(t, e, a, n, o, i, u) {
    void 0 === n && (n = 5), void 0 === o && (o = 2), void 0 === i && (i = !0), void 0 === u && (u = 440);
    var f = Math.floor(a / 2) + 1,
      c = new Array(a).fill(0).map(function (r, n) {
        return t * function (r, t) {
          return Math.log2(16 * r / t);
        }(e * n / a, u);
      });
    c[0] = c[1] - 1.5 * t;
    var l,
      s,
      m,
      p = c.slice(1).map(function (r, t) {
        return Math.max(r - c[t]);
      }, 1).concat([1]),
      h = Math.round(t / 2),
      g = new Array(t).fill(0).map(function (r, e) {
        return c.map(function (r) {
          return (10 * t + h + r - e) % t - h;
        });
      }),
      w = g.map(function (r, t) {
        return r.map(function (r, e) {
          return Math.exp(-.5 * Math.pow(2 * g[t][e] / p[e], 2));
        });
      });
    if (s = (l = w)[0].map(function () {
      return 0;
    }), m = l.reduce(function (r, t) {
      return t.forEach(function (t, e) {
        r[e] += Math.pow(t, 2);
      }), r;
    }, s).map(Math.sqrt), w = l.map(function (r, t) {
      return r.map(function (r, t) {
        return r / (m[t] || 1);
      });
    }), o) {
      var v = c.map(function (r) {
        return Math.exp(-.5 * Math.pow((r / t - n) / o, 2));
      });
      w = w.map(function (r) {
        return r.map(function (r, t) {
          return r * v[t];
        });
      });
    }
    return i && (w = r(r([], w.slice(3), !0), w.slice(0, 3), !0)), w.map(function (r) {
      return r.slice(0, f);
    });
  }
  function l(r, t) {
    for (var e = 0, a = 0, n = 0; n < t.length; n++) e += Math.pow(n, r) * Math.abs(t[n]), a += t[n];
    return e / a;
  }
  function s(r) {
    var t = r.ampSpectrum,
      e = r.barkScale,
      a = r.numberOfBarkBands,
      n = void 0 === a ? 24 : a;
    if ("object" != _typeof(t) || "object" != _typeof(e)) throw new TypeError();
    var o = n,
      i = new Float32Array(o),
      u = 0,
      f = t,
      c = new Int32Array(o + 1);
    c[0] = 0;
    for (var l = e[f.length - 1] / o, s = 1, m = 0; m < f.length; m++) for (; e[m] > l;) c[s++] = m, l = s * e[f.length - 1] / o;
    c[o] = f.length - 1;
    for (m = 0; m < o; m++) {
      for (var p = 0, h = c[m]; h < c[m + 1]; h++) p += f[h];
      i[m] = Math.pow(p, .23);
    }
    for (m = 0; m < i.length; m++) u += i[m];
    return {
      specific: i,
      total: u
    };
  }
  function m(r) {
    var t = r.ampSpectrum;
    if ("object" != _typeof(t)) throw new TypeError();
    for (var e = new Float32Array(t.length), a = 0; a < e.length; a++) e[a] = Math.pow(t[a], 2);
    return e;
  }
  function p(r) {
    var t = r.ampSpectrum,
      e = r.melFilterBank,
      a = r.bufferSize;
    if ("object" != _typeof(t)) throw new TypeError("Valid ampSpectrum is required to generate melBands");
    if ("object" != _typeof(e)) throw new TypeError("Valid melFilterBank is required to generate melBands");
    for (var n = m({
        ampSpectrum: t
      }), o = e.length, i = Array(o), u = new Float32Array(o), f = 0; f < u.length; f++) {
      i[f] = new Float32Array(a / 2), u[f] = 0;
      for (var c = 0; c < a / 2; c++) i[f][c] = e[f][c] * n[c], u[f] += i[f][c];
      u[f] = Math.log(u[f] + 1);
    }
    return Array.prototype.slice.call(u);
  }
  function h(r) {
    return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r["default"] : r;
  }
  var g = {
      exports: {}
    },
    w = null;
  var v = function v(r, t) {
    var e = r.length;
    return t = t || 2, w && w[e] || function (r) {
      (w = w || {})[r] = new Array(r * r);
      for (var t = Math.PI / r, e = 0; e < r; e++) for (var a = 0; a < r; a++) w[r][a + e * r] = Math.cos(t * (a + .5) * e);
    }(e), r.map(function () {
      return 0;
    }).map(function (a, n) {
      return t * r.reduce(function (r, t, a, o) {
        return r + t * w[e][a + n * e];
      }, 0);
    });
  };
  !function (r) {
    r.exports = v;
  }(g);
  var d = h(g.exports);
  var y = Object.freeze({
    __proto__: null,
    buffer: function buffer(r) {
      return r.signal;
    },
    rms: function rms(r) {
      var t = r.signal;
      if ("object" != _typeof(t)) throw new TypeError();
      for (var e = 0, a = 0; a < t.length; a++) e += Math.pow(t[a], 2);
      return e /= t.length, e = Math.sqrt(e);
    },
    energy: function energy(r) {
      var t = r.signal;
      if ("object" != _typeof(t)) throw new TypeError();
      for (var e = 0, a = 0; a < t.length; a++) e += Math.pow(Math.abs(t[a]), 2);
      return e;
    },
    complexSpectrum: function complexSpectrum(r) {
      return r.complexSpectrum;
    },
    spectralSlope: function spectralSlope(r) {
      var t = r.ampSpectrum,
        e = r.sampleRate,
        a = r.bufferSize;
      if ("object" != _typeof(t)) throw new TypeError();
      for (var n = 0, o = 0, i = new Float32Array(t.length), u = 0, f = 0, c = 0; c < t.length; c++) {
        n += t[c];
        var l = c * e / a;
        i[c] = l, u += l * l, o += l, f += l * t[c];
      }
      return (t.length * f - o * n) / (n * (u - Math.pow(o, 2)));
    },
    spectralCentroid: function spectralCentroid(r) {
      var t = r.ampSpectrum;
      if ("object" != _typeof(t)) throw new TypeError();
      return l(1, t);
    },
    spectralRolloff: function spectralRolloff(r) {
      var t = r.ampSpectrum,
        e = r.sampleRate;
      if ("object" != _typeof(t)) throw new TypeError();
      for (var a = t, n = e / (2 * (a.length - 1)), o = 0, i = 0; i < a.length; i++) o += a[i];
      for (var u = .99 * o, f = a.length - 1; o > u && f >= 0;) o -= a[f], --f;
      return (f + 1) * n;
    },
    spectralFlatness: function spectralFlatness(r) {
      var t = r.ampSpectrum;
      if ("object" != _typeof(t)) throw new TypeError();
      for (var e = 0, a = 0, n = 0; n < t.length; n++) e += Math.log(t[n]), a += t[n];
      return Math.exp(e / t.length) * t.length / a;
    },
    spectralSpread: function spectralSpread(r) {
      var t = r.ampSpectrum;
      if ("object" != _typeof(t)) throw new TypeError();
      return Math.sqrt(l(2, t) - Math.pow(l(1, t), 2));
    },
    spectralSkewness: function spectralSkewness(r) {
      var t = r.ampSpectrum;
      if ("object" != _typeof(t)) throw new TypeError();
      var e = l(1, t),
        a = l(2, t),
        n = l(3, t);
      return (2 * Math.pow(e, 3) - 3 * e * a + n) / Math.pow(Math.sqrt(a - Math.pow(e, 2)), 3);
    },
    spectralKurtosis: function spectralKurtosis(r) {
      var t = r.ampSpectrum;
      if ("object" != _typeof(t)) throw new TypeError();
      var e = t,
        a = l(1, e),
        n = l(2, e),
        o = l(3, e),
        i = l(4, e);
      return (-3 * Math.pow(a, 4) + 6 * a * n - 4 * a * o + i) / Math.pow(Math.sqrt(n - Math.pow(a, 2)), 4);
    },
    amplitudeSpectrum: function amplitudeSpectrum(r) {
      return r.ampSpectrum;
    },
    zcr: function zcr(r) {
      var t = r.signal;
      if ("object" != _typeof(t)) throw new TypeError();
      for (var e = 0, a = 1; a < t.length; a++) (t[a - 1] >= 0 && t[a] < 0 || t[a - 1] < 0 && t[a] >= 0) && e++;
      return e;
    },
    loudness: s,
    perceptualSpread: function perceptualSpread(r) {
      for (var t = s({
          ampSpectrum: r.ampSpectrum,
          barkScale: r.barkScale
        }), e = 0, a = 0; a < t.specific.length; a++) t.specific[a] > e && (e = t.specific[a]);
      return Math.pow((t.total - e) / t.total, 2);
    },
    perceptualSharpness: function perceptualSharpness(r) {
      for (var t = s({
          ampSpectrum: r.ampSpectrum,
          barkScale: r.barkScale
        }), e = t.specific, a = 0, n = 0; n < e.length; n++) a += n < 15 ? (n + 1) * e[n + 1] : .066 * Math.exp(.171 * (n + 1));
      return a *= .11 / t.total;
    },
    powerSpectrum: m,
    mfcc: function mfcc(r) {
      var t = r.ampSpectrum,
        e = r.melFilterBank,
        a = r.numberOfMFCCCoefficients,
        n = r.bufferSize,
        o = Math.min(40, Math.max(1, a || 13));
      if (e.length < o) throw new Error("Insufficient filter bank for requested number of coefficients");
      var i = p({
        ampSpectrum: t,
        melFilterBank: e,
        bufferSize: n
      });
      return d(i).slice(0, o);
    },
    chroma: function chroma(r) {
      var t = r.ampSpectrum,
        e = r.chromaFilterBank;
      if ("object" != _typeof(t)) throw new TypeError("Valid ampSpectrum is required to generate chroma");
      if ("object" != _typeof(e)) throw new TypeError("Valid chromaFilterBank is required to generate chroma");
      var a = e.map(function (r, e) {
          return t.reduce(function (t, e, a) {
            return t + e * r[a];
          }, 0);
        }),
        n = Math.max.apply(Math, a);
      return n ? a.map(function (r) {
        return r / n;
      }) : a;
    },
    spectralFlux: function spectralFlux(r) {
      var t = r.signal,
        e = r.previousSignal,
        a = r.bufferSize;
      if ("object" != _typeof(t) || "object" != _typeof(e)) throw new TypeError();
      for (var n = 0, o = -a / 2; o < t.length / 2 - 1; o++) x = Math.abs(t[o]) - Math.abs(e[o]), n += (x + Math.abs(x)) / 2;
      return n;
    },
    spectralCrest: function spectralCrest(r) {
      var t = r.ampSpectrum;
      if ("object" != _typeof(t)) throw new TypeError();
      var e = 0,
        a = -1 / 0;
      return t.forEach(function (r) {
        e += Math.pow(r, 2), a = r > a ? r : a;
      }), e /= t.length, e = Math.sqrt(e), a / e;
    },
    melBands: p
  });
  function S(r) {
    if (Array.isArray(r)) {
      for (var t = 0, e = Array(r.length); t < r.length; t++) e[t] = r[t];
      return e;
    }
    return Array.from(r);
  }
  var _ = {},
    b = {},
    M = {
      bitReverseArray: function bitReverseArray(r) {
        if (void 0 === _[r]) {
          for (var t = (r - 1).toString(2).length, e = "0".repeat(t), a = {}, n = 0; n < r; n++) {
            var o = n.toString(2);
            o = e.substr(o.length) + o, o = [].concat(S(o)).reverse().join(""), a[n] = parseInt(o, 2);
          }
          _[r] = a;
        }
        return _[r];
      },
      multiply: function multiply(r, t) {
        return {
          real: r.real * t.real - r.imag * t.imag,
          imag: r.real * t.imag + r.imag * t.real
        };
      },
      add: function add(r, t) {
        return {
          real: r.real + t.real,
          imag: r.imag + t.imag
        };
      },
      subtract: function subtract(r, t) {
        return {
          real: r.real - t.real,
          imag: r.imag - t.imag
        };
      },
      euler: function euler(r, t) {
        var e = -2 * Math.PI * r / t;
        return {
          real: Math.cos(e),
          imag: Math.sin(e)
        };
      },
      conj: function conj(r) {
        return r.imag *= -1, r;
      },
      constructComplexArray: function constructComplexArray(r) {
        var t = {};
        t.real = void 0 === r.real ? r.slice() : r.real.slice();
        var e = t.real.length;
        return void 0 === b[e] && (b[e] = Array.apply(null, Array(e)).map(Number.prototype.valueOf, 0)), t.imag = b[e].slice(), t;
      }
    },
    F = function F(r) {
      var t = {};
      void 0 === r.real || void 0 === r.imag ? t = M.constructComplexArray(r) : (t.real = r.real.slice(), t.imag = r.imag.slice());
      var e = t.real.length,
        a = Math.log2(e);
      if (Math.round(a) != a) throw new Error("Input size must be a power of 2.");
      if (t.real.length != t.imag.length) throw new Error("Real and imaginary components must have the same length.");
      for (var n = M.bitReverseArray(e), o = {
          real: [],
          imag: []
        }, i = 0; i < e; i++) o.real[n[i]] = t.real[i], o.imag[n[i]] = t.imag[i];
      for (var u = 0; u < e; u++) t.real[u] = o.real[u], t.imag[u] = o.imag[u];
      for (var f = 1; f <= a; f++) for (var c = Math.pow(2, f), l = 0; l < c / 2; l++) for (var s = M.euler(l, c), m = 0; m < e / c; m++) {
        var p = c * m + l,
          h = c * m + l + c / 2,
          g = {
            real: t.real[p],
            imag: t.imag[p]
          },
          w = {
            real: t.real[h],
            imag: t.imag[h]
          },
          v = M.multiply(s, w),
          d = M.subtract(g, v);
        t.real[h] = d.real, t.imag[h] = d.imag;
        var y = M.add(v, g);
        t.real[p] = y.real, t.imag[p] = y.imag;
      }
      return t;
    },
    A = F,
    E = function () {
      function r(r, t) {
        var e = this;
        if (this._m = t, !r.audioContext) throw this._m.errors.noAC;
        if (r.bufferSize && !a(r.bufferSize)) throw this._m._errors.notPow2;
        if (!r.source) throw this._m._errors.noSource;
        this._m.audioContext = r.audioContext, this._m.bufferSize = r.bufferSize || this._m.bufferSize || 256, this._m.hopSize = r.hopSize || this._m.hopSize || this._m.bufferSize, this._m.sampleRate = r.sampleRate || this._m.audioContext.sampleRate || 44100, this._m.callback = r.callback, this._m.windowingFunction = r.windowingFunction || "hanning", this._m.featureExtractors = y, this._m.EXTRACTION_STARTED = r.startImmediately || !1, this._m.channel = "number" == typeof r.channel ? r.channel : 0, this._m.inputs = r.inputs || 1, this._m.outputs = r.outputs || 1, this._m.numberOfMFCCCoefficients = r.numberOfMFCCCoefficients || this._m.numberOfMFCCCoefficients || 13, this._m.numberOfBarkBands = r.numberOfBarkBands || this._m.numberOfBarkBands || 24, this._m.spn = this._m.audioContext.createScriptProcessor(this._m.bufferSize, this._m.inputs, this._m.outputs), this._m.spn.connect(this._m.audioContext.destination), this._m._featuresToExtract = r.featureExtractors || [], this._m.barkScale = o(this._m.bufferSize, this._m.sampleRate, this._m.bufferSize), this._m.melFilterBank = f(Math.max(this._m.melBands, this._m.numberOfMFCCCoefficients), this._m.sampleRate, this._m.bufferSize), this._m.inputData = null, this._m.previousInputData = null, this._m.frame = null, this._m.previousFrame = null, this.setSource(r.source), this._m.spn.onaudioprocess = function (r) {
          var t;
          null !== e._m.inputData && (e._m.previousInputData = e._m.inputData), e._m.inputData = r.inputBuffer.getChannelData(e._m.channel), e._m.previousInputData ? ((t = new Float32Array(e._m.previousInputData.length + e._m.inputData.length - e._m.hopSize)).set(e._m.previousInputData.slice(e._m.hopSize)), t.set(e._m.inputData, e._m.previousInputData.length - e._m.hopSize)) : t = e._m.inputData, function (r, t, e) {
            if (r.length < t) throw new Error("Buffer is too short for frame length");
            if (e < 1) throw new Error("Hop length cannot be less that 1");
            if (t < 1) throw new Error("Frame length cannot be less that 1");
            var a = 1 + Math.floor((r.length - t) / e);
            return new Array(a).fill(0).map(function (a, n) {
              return r.slice(n * e, n * e + t);
            });
          }(t, e._m.bufferSize, e._m.hopSize).forEach(function (r) {
            e._m.frame = r;
            var t = e._m.extract(e._m._featuresToExtract, e._m.frame, e._m.previousFrame);
            "function" == typeof e._m.callback && e._m.EXTRACTION_STARTED && e._m.callback(t), e._m.previousFrame = e._m.frame;
          });
        };
      }
      return r.prototype.start = function (r) {
        this._m._featuresToExtract = r || this._m._featuresToExtract, this._m.EXTRACTION_STARTED = !0;
      }, r.prototype.stop = function () {
        this._m.EXTRACTION_STARTED = !1;
      }, r.prototype.setSource = function (r) {
        this._m.source && this._m.source.disconnect(this._m.spn), this._m.source = r, this._m.source.connect(this._m.spn);
      }, r.prototype.setChannel = function (r) {
        r <= this._m.inputs ? this._m.channel = r : console.error("Channel ".concat(r, " does not exist. Make sure you've provided a value for 'inputs' that is greater than ").concat(r, " when instantiating the MeydaAnalyzer"));
      }, r.prototype.get = function (r) {
        return this._m.inputData ? this._m.extract(r || this._m._featuresToExtract, this._m.inputData, this._m.previousInputData) : null;
      }, r;
    }(),
    C = {
      audioContext: null,
      spn: null,
      bufferSize: 512,
      sampleRate: 44100,
      melBands: 26,
      chromaBands: 12,
      callback: null,
      windowingFunction: "hanning",
      featureExtractors: y,
      EXTRACTION_STARTED: !1,
      numberOfMFCCCoefficients: 13,
      numberOfBarkBands: 24,
      _featuresToExtract: [],
      windowing: n,
      _errors: {
        notPow2: new Error("Meyda: Buffer size must be a power of 2, e.g. 64 or 512"),
        featureUndef: new Error("Meyda: No features defined."),
        invalidFeatureFmt: new Error("Meyda: Invalid feature format"),
        invalidInput: new Error("Meyda: Invalid input."),
        noAC: new Error("Meyda: No AudioContext specified."),
        noSource: new Error("Meyda: No source node specified.")
      },
      createMeydaAnalyzer: function createMeydaAnalyzer(r) {
        return new E(r, Object.assign({}, C));
      },
      listAvailableFeatureExtractors: function listAvailableFeatureExtractors() {
        return Object.keys(this.featureExtractors);
      },
      extract: function extract(r, t, e) {
        var n = this;
        if (!t) throw this._errors.invalidInput;
        if ("object" != _typeof(t)) throw this._errors.invalidInput;
        if (!r) throw this._errors.featureUndef;
        if (!a(t.length)) throw this._errors.notPow2;
        void 0 !== this.barkScale && this.barkScale.length == this.bufferSize || (this.barkScale = o(this.bufferSize, this.sampleRate, this.bufferSize)), void 0 !== this.melFilterBank && this.barkScale.length == this.bufferSize && this.melFilterBank.length == this.melBands || (this.melFilterBank = f(Math.max(this.melBands, this.numberOfMFCCCoefficients), this.sampleRate, this.bufferSize)), void 0 !== this.chromaFilterBank && this.chromaFilterBank.length == this.chromaBands || (this.chromaFilterBank = c(this.chromaBands, this.sampleRate, this.bufferSize)), "buffer" in t && void 0 === t.buffer ? this.signal = i(t) : this.signal = t;
        var u = k(t, this.windowingFunction, this.bufferSize);
        if (this.signal = u.windowedSignal, this.complexSpectrum = u.complexSpectrum, this.ampSpectrum = u.ampSpectrum, e) {
          var l = k(e, this.windowingFunction, this.bufferSize);
          this.previousSignal = l.windowedSignal, this.previousComplexSpectrum = l.complexSpectrum, this.previousAmpSpectrum = l.ampSpectrum;
        }
        var s = function s(r) {
          return n.featureExtractors[r]({
            ampSpectrum: n.ampSpectrum,
            chromaFilterBank: n.chromaFilterBank,
            complexSpectrum: n.complexSpectrum,
            signal: n.signal,
            bufferSize: n.bufferSize,
            sampleRate: n.sampleRate,
            barkScale: n.barkScale,
            melFilterBank: n.melFilterBank,
            previousSignal: n.previousSignal,
            previousAmpSpectrum: n.previousAmpSpectrum,
            previousComplexSpectrum: n.previousComplexSpectrum,
            numberOfMFCCCoefficients: n.numberOfMFCCCoefficients,
            numberOfBarkBands: n.numberOfBarkBands
          });
        };
        if ("object" == _typeof(r)) return r.reduce(function (r, t) {
          var e;
          return Object.assign({}, r, ((e = {})[t] = s(t), e));
        }, {});
        if ("string" == typeof r) return s(r);
        throw this._errors.invalidFeatureFmt;
      }
    },
    k = function k(r, t, e) {
      var a = {};
      void 0 === r.buffer ? a.signal = i(r) : a.signal = r, a.windowedSignal = n(a.signal, t), a.complexSpectrum = A(a.windowedSignal), a.ampSpectrum = new Float32Array(e / 2);
      for (var o = 0; o < e / 2; o++) a.ampSpectrum[o] = Math.sqrt(Math.pow(a.complexSpectrum.real[o], 2) + Math.pow(a.complexSpectrum.imag[o], 2));
      return a;
    };
  return "undefined" != typeof window && (window.Meyda = C), C;
});

},{}],25:[function(require,module,exports){
(function (process){(function (){
"use strict";

// Generated by CoffeeScript 1.12.2
(function () {
  var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;
  if (typeof performance !== "undefined" && performance !== null && performance.now) {
    module.exports = function () {
      return performance.now();
    };
  } else if (typeof process !== "undefined" && process !== null && process.hrtime) {
    module.exports = function () {
      return (getNanoSeconds() - nodeLoadTime) / 1e6;
    };
    hrtime = process.hrtime;
    getNanoSeconds = function getNanoSeconds() {
      var hr;
      hr = hrtime();
      return hr[0] * 1e9 + hr[1];
    };
    moduleLoadTime = getNanoSeconds();
    upTime = process.uptime() * 1e9;
    nodeLoadTime = moduleLoadTime - upTime;
  } else if (Date.now) {
    module.exports = function () {
      return Date.now() - loadTime;
    };
    loadTime = Date.now();
  } else {
    module.exports = function () {
      return new Date().getTime() - loadTime;
    };
    loadTime = new Date().getTime();
  }
}).call(void 0);

}).call(this)}).call(this,require('_process'))
},{"_process":26}],26:[function(require,module,exports){
"use strict";

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}
(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }
  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();
function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  }
  // if setTimeout wasn't available but was latter defined
  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }
  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}
function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  }
  // if clearTimeout wasn't available but was latter defined
  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }
  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }
  draining = false;
  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }
  if (queue.length) {
    drainQueue();
  }
}
function drainQueue() {
  if (draining) {
    return;
  }
  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;
  while (len) {
    currentQueue = queue;
    queue = [];
    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }
    queueIndex = -1;
    len = queue.length;
  }
  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}
process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);
  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }
  queue.push(new Item(fun, args));
  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
};

// v8 likes predictible objects
function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}
Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};
function noop() {}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function (name) {
  return [];
};
process.binding = function (name) {
  throw new Error('process.binding is not supported');
};
process.cwd = function () {
  return '/';
};
process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};
process.umask = function () {
  return 0;
};

},{}],27:[function(require,module,exports){
"use strict";

var inherits = require('inherits');
var EventEmitter = require('events').EventEmitter;
var now = require('right-now');
var raf = require('raf');
module.exports = Engine;
function Engine(fn) {
  if (!(this instanceof Engine)) return new Engine(fn);
  this.running = false;
  this.last = now();
  this._frame = 0;
  this._tick = this.tick.bind(this);
  if (fn) this.on('tick', fn);
}
inherits(Engine, EventEmitter);
Engine.prototype.start = function () {
  if (this.running) return;
  this.running = true;
  this.last = now();
  this._frame = raf(this._tick);
  return this;
};
Engine.prototype.stop = function () {
  this.running = false;
  if (this._frame !== 0) raf.cancel(this._frame);
  this._frame = 0;
  return this;
};
Engine.prototype.tick = function () {
  this._frame = raf(this._tick);
  var time = now();
  var dt = time - this.last;
  this.emit('tick', dt);
  this.last = time;
};

},{"events":2,"inherits":23,"raf":28,"right-now":30}],28:[function(require,module,exports){
(function (global){(function (){
"use strict";

var now = require('performance-now'),
  root = typeof window === 'undefined' ? global : window,
  vendors = ['moz', 'webkit'],
  suffix = 'AnimationFrame',
  raf = root['request' + suffix],
  caf = root['cancel' + suffix] || root['cancelRequest' + suffix];
for (var i = 0; !raf && i < vendors.length; i++) {
  raf = root[vendors[i] + 'Request' + suffix];
  caf = root[vendors[i] + 'Cancel' + suffix] || root[vendors[i] + 'CancelRequest' + suffix];
}

// Some versions of FF have rAF but not cAF
if (!raf || !caf) {
  var last = 0,
    id = 0,
    queue = [],
    frameDuration = 1000 / 60;
  raf = function raf(callback) {
    if (queue.length === 0) {
      var _now = now(),
        next = Math.max(0, frameDuration - (_now - last));
      last = next + _now;
      setTimeout(function () {
        var cp = queue.slice(0);
        // Clear queue here to prevent
        // callbacks from appending listeners
        // to the current frame's queue
        queue.length = 0;
        var _loop = function _loop() {
          if (!cp[i].cancelled) {
            try {
              cp[i].callback(last);
            } catch (e) {
              setTimeout(function () {
                throw e;
              }, 0);
            }
          }
        };
        for (var i = 0; i < cp.length; i++) {
          _loop();
        }
      }, Math.round(next));
    }
    queue.push({
      handle: ++id,
      callback: callback,
      cancelled: false
    });
    return id;
  };
  caf = function caf(handle) {
    for (var i = 0; i < queue.length; i++) {
      if (queue[i].handle === handle) {
        queue[i].cancelled = true;
      }
    }
  };
}
module.exports = function (fn) {
  // Wrap in a new function to prevent
  // `cancel` potentially being assigned
  // to the native rAF function
  return raf.call(root, fn);
};
module.exports.cancel = function () {
  caf.apply(root, arguments);
};
module.exports.polyfill = function (object) {
  if (!object) {
    object = root;
  }
  object.requestAnimationFrame = raf;
  object.cancelAnimationFrame = caf;
};

}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"performance-now":25}],29:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
(function (U, X) {
  "object" === (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" !== typeof module ? module.exports = X() : "function" === typeof define && define.amd ? define(X) : U.createREGL = X();
})(void 0, function () {
  function U(a, b) {
    this.id = Eb++;
    this.type = a;
    this.data = b;
  }
  function X(a) {
    if (0 === a.length) return [];
    var b = a.charAt(0),
      c = a.charAt(a.length - 1);
    if (1 < a.length && b === c && ('"' === b || "'" === b)) return ['"' + a.substr(1, a.length - 2).replace(/\\/g, "\\\\").replace(/"/g, '\\"') + '"'];
    if (b = /\[(false|true|null|\d+|'[^']*'|"[^"]*")\]/.exec(a)) return X(a.substr(0, b.index)).concat(X(b[1])).concat(X(a.substr(b.index + b[0].length)));
    b = a.split(".");
    if (1 === b.length) return ['"' + a.replace(/\\/g, "\\\\").replace(/"/g, '\\"') + '"'];
    a = [];
    for (c = 0; c < b.length; ++c) a = a.concat(X(b[c]));
    return a;
  }
  function cb(a) {
    return "[" + X(a).join("][") + "]";
  }
  function db(a, b) {
    if ("function" === typeof a) return new U(0, a);
    if ("number" === typeof a || "boolean" === typeof a) return new U(5, a);
    if (Array.isArray(a)) return new U(6, a.map(function (a, e) {
      return db(a, b + "[" + e + "]");
    }));
    if (a instanceof U) return a;
  }
  function Fb() {
    var a = {
        "": 0
      },
      b = [""];
    return {
      id: function id(c) {
        var e = a[c];
        if (e) return e;
        e = a[c] = b.length;
        b.push(c);
        return e;
      },
      str: function str(a) {
        return b[a];
      }
    };
  }
  function Gb(a, b, c) {
    function e() {
      var b = window.innerWidth,
        e = window.innerHeight;
      a !== document.body && (e = a.getBoundingClientRect(), b = e.right - e.left, e = e.bottom - e.top);
      f.width = c * b;
      f.height = c * e;
      A(f.style, {
        width: b + "px",
        height: e + "px"
      });
    }
    var f = document.createElement("canvas");
    A(f.style, {
      border: 0,
      margin: 0,
      padding: 0,
      top: 0,
      left: 0
    });
    a.appendChild(f);
    a === document.body && (f.style.position = "absolute", A(a.style, {
      margin: 0,
      padding: 0
    }));
    var d;
    a !== document.body && "function" === typeof ResizeObserver ? (d = new ResizeObserver(function () {
      setTimeout(e);
    }), d.observe(a)) : window.addEventListener("resize", e, !1);
    e();
    return {
      canvas: f,
      onDestroy: function onDestroy() {
        d ? d.disconnect() : window.removeEventListener("resize", e);
        a.removeChild(f);
      }
    };
  }
  function Hb(a, b) {
    function c(c) {
      try {
        return a.getContext(c, b);
      } catch (f) {
        return null;
      }
    }
    return c("webgl") || c("experimental-webgl") || c("webgl-experimental");
  }
  function eb(a) {
    return "string" === typeof a ? a.split() : a;
  }
  function fb(a) {
    return "string" === typeof a ? document.querySelector(a) : a;
  }
  function Ib(a) {
    var b = a || {},
      c,
      e,
      f,
      d;
    a = {};
    var p = [],
      n = [],
      u = "undefined" === typeof window ? 1 : window.devicePixelRatio,
      t = !1,
      w = function w(a) {},
      k = function k() {};
    "string" === typeof b ? c = document.querySelector(b) : "object" === _typeof(b) && ("string" === typeof b.nodeName && "function" === typeof b.appendChild && "function" === typeof b.getBoundingClientRect ? c = b : "function" === typeof b.drawArrays || "function" === typeof b.drawElements ? (d = b, f = d.canvas) : ("gl" in b ? d = b.gl : "canvas" in b ? f = fb(b.canvas) : "container" in b && (e = fb(b.container)), "attributes" in b && (a = b.attributes), "extensions" in b && (p = eb(b.extensions)), "optionalExtensions" in b && (n = eb(b.optionalExtensions)), "onDone" in b && (w = b.onDone), "profile" in b && (t = !!b.profile), "pixelRatio" in b && (u = +b.pixelRatio)));
    c && ("canvas" === c.nodeName.toLowerCase() ? f = c : e = c);
    if (!d) {
      if (!f) {
        c = Gb(e || document.body, w, u);
        if (!c) return null;
        f = c.canvas;
        k = c.onDestroy;
      }
      void 0 === a.premultipliedAlpha && (a.premultipliedAlpha = !0);
      d = Hb(f, a);
    }
    return d ? {
      gl: d,
      canvas: f,
      container: e,
      extensions: p,
      optionalExtensions: n,
      pixelRatio: u,
      profile: t,
      onDone: w,
      onDestroy: k
    } : (k(), w("webgl not supported, try upgrading your browser or graphics drivers http://get.webgl.org"), null);
  }
  function Jb(a, b) {
    function c(b) {
      b = b.toLowerCase();
      var c;
      try {
        c = e[b] = a.getExtension(b);
      } catch (f) {}
      return !!c;
    }
    for (var e = {}, f = 0; f < b.extensions.length; ++f) {
      var d = b.extensions[f];
      if (!c(d)) return b.onDestroy(), b.onDone('"' + d + '" extension is not supported by the current WebGL context, try upgrading your system or a different browser'), null;
    }
    b.optionalExtensions.forEach(c);
    return {
      extensions: e,
      restore: function restore() {
        Object.keys(e).forEach(function (a) {
          if (e[a] && !c(a)) throw Error("(regl): error restoring extension " + a);
        });
      }
    };
  }
  function J(a, b) {
    for (var c = Array(a), e = 0; e < a; ++e) c[e] = b(e);
    return c;
  }
  function gb(a) {
    var b, c;
    b = (65535 < a) << 4;
    a >>>= b;
    c = (255 < a) << 3;
    a >>>= c;
    b |= c;
    c = (15 < a) << 2;
    a >>>= c;
    b |= c;
    c = (3 < a) << 1;
    return b | c | a >>> c >> 1;
  }
  function hb() {
    function a(a) {
      a: {
        for (var b = 16; 268435456 >= b; b *= 16) if (a <= b) {
          a = b;
          break a;
        }
        a = 0;
      }
      b = c[gb(a) >> 2];
      return 0 < b.length ? b.pop() : new ArrayBuffer(a);
    }
    function b(a) {
      c[gb(a.byteLength) >> 2].push(a);
    }
    var c = J(8, function () {
      return [];
    });
    return {
      alloc: a,
      free: b,
      allocType: function allocType(b, c) {
        var d = null;
        switch (b) {
          case 5120:
            d = new Int8Array(a(c), 0, c);
            break;
          case 5121:
            d = new Uint8Array(a(c), 0, c);
            break;
          case 5122:
            d = new Int16Array(a(2 * c), 0, c);
            break;
          case 5123:
            d = new Uint16Array(a(2 * c), 0, c);
            break;
          case 5124:
            d = new Int32Array(a(4 * c), 0, c);
            break;
          case 5125:
            d = new Uint32Array(a(4 * c), 0, c);
            break;
          case 5126:
            d = new Float32Array(a(4 * c), 0, c);
            break;
          default:
            return null;
        }
        return d.length !== c ? d.subarray(0, c) : d;
      },
      freeType: function freeType(a) {
        b(a.buffer);
      }
    };
  }
  function da(a) {
    return !!a && "object" === _typeof(a) && Array.isArray(a.shape) && Array.isArray(a.stride) && "number" === typeof a.offset && a.shape.length === a.stride.length && (Array.isArray(a.data) || M(a.data));
  }
  function ib(a, b, c, e, f, d) {
    for (var p = 0; p < b; ++p) for (var n = a[p], u = 0; u < c; ++u) for (var t = n[u], w = 0; w < e; ++w) f[d++] = t[w];
  }
  function jb(a, b, c, e, f) {
    for (var d = 1, p = c + 1; p < b.length; ++p) d *= b[p];
    var n = b[c];
    if (4 === b.length - c) {
      var u = b[c + 1],
        t = b[c + 2];
      b = b[c + 3];
      for (p = 0; p < n; ++p) ib(a[p], u, t, b, e, f), f += d;
    } else for (p = 0; p < n; ++p) jb(a[p], b, c + 1, e, f), f += d;
  }
  function Fa(a) {
    return Ga[Object.prototype.toString.call(a)] | 0;
  }
  function kb(a, b) {
    for (var c = 0; c < b.length; ++c) a[c] = b[c];
  }
  function lb(a, b, c, e, f, d, p) {
    for (var n = 0, u = 0; u < c; ++u) for (var t = 0; t < e; ++t) a[n++] = b[f * u + d * t + p];
  }
  function Kb(a, b, c, e) {
    function f(b) {
      this.id = u++;
      this.buffer = a.createBuffer();
      this.type = b;
      this.usage = 35044;
      this.byteLength = 0;
      this.dimension = 1;
      this.dtype = 5121;
      this.persistentData = null;
      c.profile && (this.stats = {
        size: 0
      });
    }
    function d(b, c, l) {
      b.byteLength = c.byteLength;
      a.bufferData(b.type, c, l);
    }
    function p(a, b, c, h, g, q) {
      a.usage = c;
      if (Array.isArray(b)) {
        if (a.dtype = h || 5126, 0 < b.length) if (Array.isArray(b[0])) {
          g = mb(b);
          for (var r = h = 1; r < g.length; ++r) h *= g[r];
          a.dimension = h;
          b = Sa(b, g, a.dtype);
          d(a, b, c);
          q ? a.persistentData = b : E.freeType(b);
        } else "number" === typeof b[0] ? (a.dimension = g, g = E.allocType(a.dtype, b.length), kb(g, b), d(a, g, c), q ? a.persistentData = g : E.freeType(g)) : M(b[0]) && (a.dimension = b[0].length, a.dtype = h || Fa(b[0]) || 5126, b = Sa(b, [b.length, b[0].length], a.dtype), d(a, b, c), q ? a.persistentData = b : E.freeType(b));
      } else if (M(b)) a.dtype = h || Fa(b), a.dimension = g, d(a, b, c), q && (a.persistentData = new Uint8Array(new Uint8Array(b.buffer)));else if (da(b)) {
        g = b.shape;
        var m = b.stride,
          r = b.offset,
          e = 0,
          f = 0,
          t = 0,
          n = 0;
        1 === g.length ? (e = g[0], f = 1, t = m[0], n = 0) : 2 === g.length && (e = g[0], f = g[1], t = m[0], n = m[1]);
        a.dtype = h || Fa(b.data) || 5126;
        a.dimension = f;
        g = E.allocType(a.dtype, e * f);
        lb(g, b.data, e, f, t, n, r);
        d(a, g, c);
        q ? a.persistentData = g : E.freeType(g);
      } else b instanceof ArrayBuffer && (a.dtype = 5121, a.dimension = g, d(a, b, c), q && (a.persistentData = new Uint8Array(new Uint8Array(b))));
    }
    function n(c) {
      b.bufferCount--;
      e(c);
      a.deleteBuffer(c.buffer);
      c.buffer = null;
      delete t[c.id];
    }
    var u = 0,
      t = {};
    f.prototype.bind = function () {
      a.bindBuffer(this.type, this.buffer);
    };
    f.prototype.destroy = function () {
      n(this);
    };
    var w = [];
    c.profile && (b.getTotalBufferSize = function () {
      var a = 0;
      Object.keys(t).forEach(function (b) {
        a += t[b].stats.size;
      });
      return a;
    });
    return {
      create: function create(k, e, d, h) {
        function g(b) {
          var m = 35044,
            k = null,
            e = 0,
            d = 0,
            f = 1;
          Array.isArray(b) || M(b) || da(b) || b instanceof ArrayBuffer ? k = b : "number" === typeof b ? e = b | 0 : b && ("data" in b && (k = b.data), "usage" in b && (m = ob[b.usage]), "type" in b && (d = Ia[b.type]), "dimension" in b && (f = b.dimension | 0), "length" in b && (e = b.length | 0));
          q.bind();
          k ? p(q, k, m, d, f, h) : (e && a.bufferData(q.type, e, m), q.dtype = d || 5121, q.usage = m, q.dimension = f, q.byteLength = e);
          c.profile && (q.stats.size = q.byteLength * ha[q.dtype]);
          return g;
        }
        b.bufferCount++;
        var q = new f(e);
        t[q.id] = q;
        d || g(k);
        g._reglType = "buffer";
        g._buffer = q;
        g.subdata = function (b, c) {
          var k = (c || 0) | 0,
            e;
          q.bind();
          if (M(b) || b instanceof ArrayBuffer) a.bufferSubData(q.type, k, b);else if (Array.isArray(b)) {
            if (0 < b.length) if ("number" === typeof b[0]) {
              var h = E.allocType(q.dtype, b.length);
              kb(h, b);
              a.bufferSubData(q.type, k, h);
              E.freeType(h);
            } else if (Array.isArray(b[0]) || M(b[0])) e = mb(b), h = Sa(b, e, q.dtype), a.bufferSubData(q.type, k, h), E.freeType(h);
          } else if (da(b)) {
            e = b.shape;
            var d = b.stride,
              f = h = 0,
              l = 0,
              O = 0;
            1 === e.length ? (h = e[0], f = 1, l = d[0], O = 0) : 2 === e.length && (h = e[0], f = e[1], l = d[0], O = d[1]);
            e = Array.isArray(b.data) ? q.dtype : Fa(b.data);
            e = E.allocType(e, h * f);
            lb(e, b.data, h, f, l, O, b.offset);
            a.bufferSubData(q.type, k, e);
            E.freeType(e);
          }
          return g;
        };
        c.profile && (g.stats = q.stats);
        g.destroy = function () {
          n(q);
        };
        return g;
      },
      createStream: function createStream(a, b) {
        var c = w.pop();
        c || (c = new f(a));
        c.bind();
        p(c, b, 35040, 0, 1, !1);
        return c;
      },
      destroyStream: function destroyStream(a) {
        w.push(a);
      },
      clear: function clear() {
        S(t).forEach(n);
        w.forEach(n);
      },
      getBuffer: function getBuffer(a) {
        return a && a._buffer instanceof f ? a._buffer : null;
      },
      restore: function restore() {
        S(t).forEach(function (b) {
          b.buffer = a.createBuffer();
          a.bindBuffer(b.type, b.buffer);
          a.bufferData(b.type, b.persistentData || b.byteLength, b.usage);
        });
      },
      _initBuffer: p
    };
  }
  function Lb(a, b, c, e) {
    function f(a) {
      this.id = u++;
      n[this.id] = this;
      this.buffer = a;
      this.primType = 4;
      this.type = this.vertCount = 0;
    }
    function d(e, d, f, h, g, q, r) {
      e.buffer.bind();
      var m;
      d ? ((m = r) || M(d) && (!da(d) || M(d.data)) || (m = b.oes_element_index_uint ? 5125 : 5123), c._initBuffer(e.buffer, d, f, m, 3)) : (a.bufferData(34963, q, f), e.buffer.dtype = m || 5121, e.buffer.usage = f, e.buffer.dimension = 3, e.buffer.byteLength = q);
      m = r;
      if (!r) {
        switch (e.buffer.dtype) {
          case 5121:
          case 5120:
            m = 5121;
            break;
          case 5123:
          case 5122:
            m = 5123;
            break;
          case 5125:
          case 5124:
            m = 5125;
        }
        e.buffer.dtype = m;
      }
      e.type = m;
      d = g;
      0 > d && (d = e.buffer.byteLength, 5123 === m ? d >>= 1 : 5125 === m && (d >>= 2));
      e.vertCount = d;
      d = h;
      0 > h && (d = 4, h = e.buffer.dimension, 1 === h && (d = 0), 2 === h && (d = 1), 3 === h && (d = 4));
      e.primType = d;
    }
    function p(a) {
      e.elementsCount--;
      delete n[a.id];
      a.buffer.destroy();
      a.buffer = null;
    }
    var n = {},
      u = 0,
      t = {
        uint8: 5121,
        uint16: 5123
      };
    b.oes_element_index_uint && (t.uint32 = 5125);
    f.prototype.bind = function () {
      this.buffer.bind();
    };
    var w = [];
    return {
      create: function create(a, b) {
        function l(a) {
          if (a) {
            if ("number" === typeof a) h(a), g.primType = 4, g.vertCount = a | 0, g.type = 5121;else {
              var b = null,
                c = 35044,
                e = -1,
                f = -1,
                k = 0,
                n = 0;
              if (Array.isArray(a) || M(a) || da(a)) b = a;else if ("data" in a && (b = a.data), "usage" in a && (c = ob[a.usage]), "primitive" in a && (e = Ta[a.primitive]), "count" in a && (f = a.count | 0), "type" in a && (n = t[a.type]), "length" in a) k = a.length | 0;else if (k = f, 5123 === n || 5122 === n) k *= 2;else if (5125 === n || 5124 === n) k *= 4;
              d(g, b, c, e, f, k, n);
            }
          } else h(), g.primType = 4, g.vertCount = 0, g.type = 5121;
          return l;
        }
        var h = c.create(null, 34963, !0),
          g = new f(h._buffer);
        e.elementsCount++;
        l(a);
        l._reglType = "elements";
        l._elements = g;
        l.subdata = function (a, b) {
          h.subdata(a, b);
          return l;
        };
        l.destroy = function () {
          p(g);
        };
        return l;
      },
      createStream: function createStream(a) {
        var b = w.pop();
        b || (b = new f(c.create(null, 34963, !0, !1)._buffer));
        d(b, a, 35040, -1, -1, 0, 0);
        return b;
      },
      destroyStream: function destroyStream(a) {
        w.push(a);
      },
      getElements: function getElements(a) {
        return "function" === typeof a && a._elements instanceof f ? a._elements : null;
      },
      clear: function clear() {
        S(n).forEach(p);
      }
    };
  }
  function pb(a) {
    for (var b = E.allocType(5123, a.length), c = 0; c < a.length; ++c) if (isNaN(a[c])) b[c] = 65535;else if (Infinity === a[c]) b[c] = 31744;else if (-Infinity === a[c]) b[c] = 64512;else {
      qb[0] = a[c];
      var e = Mb[0],
        f = e >>> 31 << 15,
        d = (e << 1 >>> 24) - 127,
        e = e >> 13 & 1023;
      b[c] = -24 > d ? f : -14 > d ? f + (e + 1024 >> -14 - d) : 15 < d ? f + 31744 : f + (d + 15 << 10) + e;
    }
    return b;
  }
  function ma(a) {
    return Array.isArray(a) || M(a);
  }
  function na(a) {
    return "[object " + a + "]";
  }
  function rb(a) {
    return Array.isArray(a) && (0 === a.length || "number" === typeof a[0]);
  }
  function sb(a) {
    return Array.isArray(a) && 0 !== a.length && ma(a[0]) ? !0 : !1;
  }
  function ea(a) {
    return Object.prototype.toString.call(a);
  }
  function Ua(a) {
    if (!a) return !1;
    var b = ea(a);
    return 0 <= Nb.indexOf(b) ? !0 : rb(a) || sb(a) || da(a);
  }
  function tb(a, b) {
    36193 === a.type ? (a.data = pb(b), E.freeType(b)) : a.data = b;
  }
  function Ja(a, b, c, e, f, d) {
    a = "undefined" !== typeof F[a] ? F[a] : Q[a] * wa[b];
    d && (a *= 6);
    if (f) {
      for (e = 0; 1 <= c;) e += a * c * c, c /= 2;
      return e;
    }
    return a * c * e;
  }
  function Ob(a, b, c, e, f, d, p) {
    function n() {
      this.format = this.internalformat = 6408;
      this.type = 5121;
      this.flipY = this.premultiplyAlpha = this.compressed = !1;
      this.unpackAlignment = 1;
      this.colorSpace = 37444;
      this.channels = this.height = this.width = 0;
    }
    function u(a, b) {
      a.internalformat = b.internalformat;
      a.format = b.format;
      a.type = b.type;
      a.compressed = b.compressed;
      a.premultiplyAlpha = b.premultiplyAlpha;
      a.flipY = b.flipY;
      a.unpackAlignment = b.unpackAlignment;
      a.colorSpace = b.colorSpace;
      a.width = b.width;
      a.height = b.height;
      a.channels = b.channels;
    }
    function t(a, b) {
      if ("object" === _typeof(b) && b) {
        "premultiplyAlpha" in b && (a.premultiplyAlpha = b.premultiplyAlpha);
        "flipY" in b && (a.flipY = b.flipY);
        "alignment" in b && (a.unpackAlignment = b.alignment);
        "colorSpace" in b && (a.colorSpace = Pb[b.colorSpace]);
        "type" in b && (a.type = N[b.type]);
        var c = a.width,
          g = a.height,
          e = a.channels,
          d = !1;
        "shape" in b ? (c = b.shape[0], g = b.shape[1], 3 === b.shape.length && (e = b.shape[2], d = !0)) : ("radius" in b && (c = g = b.radius), "width" in b && (c = b.width), "height" in b && (g = b.height), "channels" in b && (e = b.channels, d = !0));
        a.width = c | 0;
        a.height = g | 0;
        a.channels = e | 0;
        c = !1;
        "format" in b && (c = b.format, g = a.internalformat = C[c], a.format = P[g], c in N && !("type" in b) && (a.type = N[c]), c in v && (a.compressed = !0), c = !0);
        !d && c ? a.channels = Q[a.format] : d && !c && a.channels !== Ma[a.format] && (a.format = a.internalformat = Ma[a.channels]);
      }
    }
    function w(b) {
      a.pixelStorei(37440, b.flipY);
      a.pixelStorei(37441, b.premultiplyAlpha);
      a.pixelStorei(37443, b.colorSpace);
      a.pixelStorei(3317, b.unpackAlignment);
    }
    function k() {
      n.call(this);
      this.yOffset = this.xOffset = 0;
      this.data = null;
      this.needsFree = !1;
      this.element = null;
      this.needsCopy = !1;
    }
    function B(a, b) {
      var c = null;
      Ua(b) ? c = b : b && (t(a, b), "x" in b && (a.xOffset = b.x | 0), "y" in b && (a.yOffset = b.y | 0), Ua(b.data) && (c = b.data));
      if (b.copy) {
        var g = f.viewportWidth,
          e = f.viewportHeight;
        a.width = a.width || g - a.xOffset;
        a.height = a.height || e - a.yOffset;
        a.needsCopy = !0;
      } else if (!c) a.width = a.width || 1, a.height = a.height || 1, a.channels = a.channels || 4;else if (M(c)) a.channels = a.channels || 4, a.data = c, "type" in b || 5121 !== a.type || (a.type = Ga[Object.prototype.toString.call(c)] | 0);else if (rb(c)) {
        a.channels = a.channels || 4;
        g = c;
        e = g.length;
        switch (a.type) {
          case 5121:
          case 5123:
          case 5125:
          case 5126:
            e = E.allocType(a.type, e);
            e.set(g);
            a.data = e;
            break;
          case 36193:
            a.data = pb(g);
        }
        a.alignment = 1;
        a.needsFree = !0;
      } else if (da(c)) {
        g = c.data;
        Array.isArray(g) || 5121 !== a.type || (a.type = Ga[Object.prototype.toString.call(g)] | 0);
        var e = c.shape,
          d = c.stride,
          h,
          r,
          m,
          q;
        3 === e.length ? (m = e[2], q = d[2]) : q = m = 1;
        h = e[0];
        r = e[1];
        e = d[0];
        d = d[1];
        a.alignment = 1;
        a.width = h;
        a.height = r;
        a.channels = m;
        a.format = a.internalformat = Ma[m];
        a.needsFree = !0;
        h = q;
        c = c.offset;
        m = a.width;
        q = a.height;
        r = a.channels;
        for (var x = E.allocType(36193 === a.type ? 5126 : a.type, m * q * r), I = 0, ja = 0; ja < q; ++ja) for (var ka = 0; ka < m; ++ka) for (var Va = 0; Va < r; ++Va) x[I++] = g[e * ka + d * ja + h * Va + c];
        tb(a, x);
      } else if (ea(c) === Wa || ea(c) === Xa || ea(c) === vb) ea(c) === Wa || ea(c) === Xa ? a.element = c : a.element = c.canvas, a.width = a.element.width, a.height = a.element.height, a.channels = 4;else if (ea(c) === wb) a.element = c, a.width = c.width, a.height = c.height, a.channels = 4;else if (ea(c) === xb) a.element = c, a.width = c.naturalWidth, a.height = c.naturalHeight, a.channels = 4;else if (ea(c) === yb) a.element = c, a.width = c.videoWidth, a.height = c.videoHeight, a.channels = 4;else if (sb(c)) {
        g = a.width || c[0].length;
        e = a.height || c.length;
        d = a.channels;
        d = ma(c[0][0]) ? d || c[0][0].length : d || 1;
        h = Oa.shape(c);
        m = 1;
        for (q = 0; q < h.length; ++q) m *= h[q];
        m = E.allocType(36193 === a.type ? 5126 : a.type, m);
        Oa.flatten(c, h, "", m);
        tb(a, m);
        a.alignment = 1;
        a.width = g;
        a.height = e;
        a.channels = d;
        a.format = a.internalformat = Ma[d];
        a.needsFree = !0;
      }
    }
    function l(b, c, g, d, h) {
      var m = b.element,
        f = b.data,
        r = b.internalformat,
        q = b.format,
        l = b.type,
        x = b.width,
        I = b.height;
      w(b);
      m ? a.texSubImage2D(c, h, g, d, q, l, m) : b.compressed ? a.compressedTexSubImage2D(c, h, g, d, r, x, I, f) : b.needsCopy ? (e(), a.copyTexSubImage2D(c, h, g, d, b.xOffset, b.yOffset, x, I)) : a.texSubImage2D(c, h, g, d, x, I, q, l, f);
    }
    function h() {
      return J.pop() || new k();
    }
    function g(a) {
      a.needsFree && E.freeType(a.data);
      k.call(a);
      J.push(a);
    }
    function q() {
      n.call(this);
      this.genMipmaps = !1;
      this.mipmapHint = 4352;
      this.mipmask = 0;
      this.images = Array(16);
    }
    function r(a, b, c) {
      var g = a.images[0] = h();
      a.mipmask = 1;
      g.width = a.width = b;
      g.height = a.height = c;
      g.channels = a.channels = 4;
    }
    function m(a, b) {
      var c = null;
      if (Ua(b)) c = a.images[0] = h(), u(c, a), B(c, b), a.mipmask = 1;else if (t(a, b), Array.isArray(b.mipmap)) for (var g = b.mipmap, e = 0; e < g.length; ++e) c = a.images[e] = h(), u(c, a), c.width >>= e, c.height >>= e, B(c, g[e]), a.mipmask |= 1 << e;else c = a.images[0] = h(), u(c, a), B(c, b), a.mipmask = 1;
      u(a, a.images[0]);
    }
    function z(b, c) {
      for (var g = b.images, d = 0; d < g.length && g[d]; ++d) {
        var h = g[d],
          m = c,
          f = d,
          r = h.element,
          q = h.data,
          l = h.internalformat,
          x = h.format,
          I = h.type,
          ja = h.width,
          ka = h.height;
        w(h);
        r ? a.texImage2D(m, f, x, x, I, r) : h.compressed ? a.compressedTexImage2D(m, f, l, ja, ka, 0, q) : h.needsCopy ? (e(), a.copyTexImage2D(m, f, x, h.xOffset, h.yOffset, ja, ka, 0)) : a.texImage2D(m, f, x, ja, ka, 0, x, I, q || null);
      }
    }
    function Ha() {
      var a = L.pop() || new q();
      n.call(a);
      for (var b = a.mipmask = 0; 16 > b; ++b) a.images[b] = null;
      return a;
    }
    function nb(a) {
      for (var b = a.images, c = 0; c < b.length; ++c) b[c] && g(b[c]), b[c] = null;
      L.push(a);
    }
    function Z() {
      this.magFilter = this.minFilter = 9728;
      this.wrapT = this.wrapS = 33071;
      this.anisotropic = 1;
      this.genMipmaps = !1;
      this.mipmapHint = 4352;
    }
    function G(a, b) {
      "min" in b && (a.minFilter = R[b.min], 0 <= Qb.indexOf(a.minFilter) && !("faces" in b) && (a.genMipmaps = !0));
      "mag" in b && (a.magFilter = V[b.mag]);
      var c = a.wrapS,
        g = a.wrapT;
      if ("wrap" in b) {
        var e = b.wrap;
        "string" === typeof e ? c = g = la[e] : Array.isArray(e) && (c = la[e[0]], g = la[e[1]]);
      } else "wrapS" in b && (c = la[b.wrapS]), "wrapT" in b && (g = la[b.wrapT]);
      a.wrapS = c;
      a.wrapT = g;
      "anisotropic" in b && (a.anisotropic = b.anisotropic);
      if ("mipmap" in b) {
        c = !1;
        switch (_typeof(b.mipmap)) {
          case "string":
            a.mipmapHint = y[b.mipmap];
            c = a.genMipmaps = !0;
            break;
          case "boolean":
            c = a.genMipmaps = b.mipmap;
            break;
          case "object":
            a.genMipmaps = !1, c = !0;
        }
        !c || "min" in b || (a.minFilter = 9984);
      }
    }
    function H(c, g) {
      a.texParameteri(g, 10241, c.minFilter);
      a.texParameteri(g, 10240, c.magFilter);
      a.texParameteri(g, 10242, c.wrapS);
      a.texParameteri(g, 10243, c.wrapT);
      b.ext_texture_filter_anisotropic && a.texParameteri(g, 34046, c.anisotropic);
      c.genMipmaps && (a.hint(33170, c.mipmapHint), a.generateMipmap(g));
    }
    function O(b) {
      n.call(this);
      this.mipmask = 0;
      this.internalformat = 6408;
      this.id = Y++;
      this.refCount = 1;
      this.target = b;
      this.texture = a.createTexture();
      this.unit = -1;
      this.bindCount = 0;
      this.texInfo = new Z();
      p.profile && (this.stats = {
        size: 0
      });
    }
    function xa(b) {
      a.activeTexture(33984);
      a.bindTexture(b.target, b.texture);
    }
    function ya() {
      var b = W[0];
      b ? a.bindTexture(b.target, b.texture) : a.bindTexture(3553, null);
    }
    function D(b) {
      var c = b.texture,
        g = b.unit,
        e = b.target;
      0 <= g && (a.activeTexture(33984 + g), a.bindTexture(e, null), W[g] = null);
      a.deleteTexture(c);
      b.texture = null;
      b.params = null;
      b.pixels = null;
      b.refCount = 0;
      delete ia[b.id];
      d.textureCount--;
    }
    var y = {
        "don't care": 4352,
        "dont care": 4352,
        nice: 4354,
        fast: 4353
      },
      la = {
        repeat: 10497,
        clamp: 33071,
        mirror: 33648
      },
      V = {
        nearest: 9728,
        linear: 9729
      },
      R = A({
        mipmap: 9987,
        "nearest mipmap nearest": 9984,
        "linear mipmap nearest": 9985,
        "nearest mipmap linear": 9986,
        "linear mipmap linear": 9987
      }, V),
      Pb = {
        none: 0,
        browser: 37444
      },
      N = {
        uint8: 5121,
        rgba4: 32819,
        rgb565: 33635,
        "rgb5 a1": 32820
      },
      C = {
        alpha: 6406,
        luminance: 6409,
        "luminance alpha": 6410,
        rgb: 6407,
        rgba: 6408,
        rgba4: 32854,
        "rgb5 a1": 32855,
        rgb565: 36194
      },
      v = {};
    b.ext_srgb && (C.srgb = 35904, C.srgba = 35906);
    b.oes_texture_float && (N.float32 = N["float"] = 5126);
    b.oes_texture_half_float && (N.float16 = N["half float"] = 36193);
    b.webgl_depth_texture && (A(C, {
      depth: 6402,
      "depth stencil": 34041
    }), A(N, {
      uint16: 5123,
      uint32: 5125,
      "depth stencil": 34042
    }));
    b.webgl_compressed_texture_s3tc && A(v, {
      "rgb s3tc dxt1": 33776,
      "rgba s3tc dxt1": 33777,
      "rgba s3tc dxt3": 33778,
      "rgba s3tc dxt5": 33779
    });
    b.webgl_compressed_texture_atc && A(v, {
      "rgb atc": 35986,
      "rgba atc explicit alpha": 35987,
      "rgba atc interpolated alpha": 34798
    });
    b.webgl_compressed_texture_pvrtc && A(v, {
      "rgb pvrtc 4bppv1": 35840,
      "rgb pvrtc 2bppv1": 35841,
      "rgba pvrtc 4bppv1": 35842,
      "rgba pvrtc 2bppv1": 35843
    });
    b.webgl_compressed_texture_etc1 && (v["rgb etc1"] = 36196);
    var F = Array.prototype.slice.call(a.getParameter(34467));
    Object.keys(v).forEach(function (a) {
      var b = v[a];
      0 <= F.indexOf(b) && (C[a] = b);
    });
    var ta = Object.keys(C);
    c.textureFormats = ta;
    var aa = [];
    Object.keys(C).forEach(function (a) {
      aa[C[a]] = a;
    });
    var K = [];
    Object.keys(N).forEach(function (a) {
      K[N[a]] = a;
    });
    var fa = [];
    Object.keys(V).forEach(function (a) {
      fa[V[a]] = a;
    });
    var Da = [];
    Object.keys(R).forEach(function (a) {
      Da[R[a]] = a;
    });
    var ua = [];
    Object.keys(la).forEach(function (a) {
      ua[la[a]] = a;
    });
    var P = ta.reduce(function (a, c) {
        var g = C[c];
        6409 === g || 6406 === g || 6409 === g || 6410 === g || 6402 === g || 34041 === g || b.ext_srgb && (35904 === g || 35906 === g) ? a[g] = g : 32855 === g || 0 <= c.indexOf("rgba") ? a[g] = 6408 : a[g] = 6407;
        return a;
      }, {}),
      J = [],
      L = [],
      Y = 0,
      ia = {},
      ga = c.maxTextureUnits,
      W = Array(ga).map(function () {
        return null;
      });
    A(O.prototype, {
      bind: function bind() {
        this.bindCount += 1;
        var b = this.unit;
        if (0 > b) {
          for (var c = 0; c < ga; ++c) {
            var g = W[c];
            if (g) {
              if (0 < g.bindCount) continue;
              g.unit = -1;
            }
            W[c] = this;
            b = c;
            break;
          }
          p.profile && d.maxTextureUnits < b + 1 && (d.maxTextureUnits = b + 1);
          this.unit = b;
          a.activeTexture(33984 + b);
          a.bindTexture(this.target, this.texture);
        }
        return b;
      },
      unbind: function unbind() {
        --this.bindCount;
      },
      decRef: function decRef() {
        0 >= --this.refCount && D(this);
      }
    });
    p.profile && (d.getTotalTextureSize = function () {
      var a = 0;
      Object.keys(ia).forEach(function (b) {
        a += ia[b].stats.size;
      });
      return a;
    });
    return {
      create2D: function create2D(b, c) {
        function e(a, b) {
          var c = f.texInfo;
          Z.call(c);
          var g = Ha();
          "number" === typeof a ? "number" === typeof b ? r(g, a | 0, b | 0) : r(g, a | 0, a | 0) : a ? (G(c, a), m(g, a)) : r(g, 1, 1);
          c.genMipmaps && (g.mipmask = (g.width << 1) - 1);
          f.mipmask = g.mipmask;
          u(f, g);
          f.internalformat = g.internalformat;
          e.width = g.width;
          e.height = g.height;
          xa(f);
          z(g, 3553);
          H(c, 3553);
          ya();
          nb(g);
          p.profile && (f.stats.size = Ja(f.internalformat, f.type, g.width, g.height, c.genMipmaps, !1));
          e.format = aa[f.internalformat];
          e.type = K[f.type];
          e.mag = fa[c.magFilter];
          e.min = Da[c.minFilter];
          e.wrapS = ua[c.wrapS];
          e.wrapT = ua[c.wrapT];
          return e;
        }
        var f = new O(3553);
        ia[f.id] = f;
        d.textureCount++;
        e(b, c);
        e.subimage = function (a, b, c, d) {
          b |= 0;
          c |= 0;
          d |= 0;
          var m = h();
          u(m, f);
          m.width = 0;
          m.height = 0;
          B(m, a);
          m.width = m.width || (f.width >> d) - b;
          m.height = m.height || (f.height >> d) - c;
          xa(f);
          l(m, 3553, b, c, d);
          ya();
          g(m);
          return e;
        };
        e.resize = function (b, c) {
          var g = b | 0,
            d = c | 0 || g;
          if (g === f.width && d === f.height) return e;
          e.width = f.width = g;
          e.height = f.height = d;
          xa(f);
          for (var h = 0; f.mipmask >> h; ++h) {
            var m = g >> h,
              x = d >> h;
            if (!m || !x) break;
            a.texImage2D(3553, h, f.format, m, x, 0, f.format, f.type, null);
          }
          ya();
          p.profile && (f.stats.size = Ja(f.internalformat, f.type, g, d, !1, !1));
          return e;
        };
        e._reglType = "texture2d";
        e._texture = f;
        p.profile && (e.stats = f.stats);
        e.destroy = function () {
          f.decRef();
        };
        return e;
      },
      createCube: function createCube(b, c, e, f, q, n) {
        function k(a, b, c, g, e, d) {
          var f,
            ca = y.texInfo;
          Z.call(ca);
          for (f = 0; 6 > f; ++f) D[f] = Ha();
          if ("number" === typeof a || !a) for (a = a | 0 || 1, f = 0; 6 > f; ++f) r(D[f], a, a);else if ("object" === _typeof(a)) if (b) m(D[0], a), m(D[1], b), m(D[2], c), m(D[3], g), m(D[4], e), m(D[5], d);else if (G(ca, a), t(y, a), "faces" in a) for (a = a.faces, f = 0; 6 > f; ++f) u(D[f], y), m(D[f], a[f]);else for (f = 0; 6 > f; ++f) m(D[f], a);
          u(y, D[0]);
          y.mipmask = ca.genMipmaps ? (D[0].width << 1) - 1 : D[0].mipmask;
          y.internalformat = D[0].internalformat;
          k.width = D[0].width;
          k.height = D[0].height;
          xa(y);
          for (f = 0; 6 > f; ++f) z(D[f], 34069 + f);
          H(ca, 34067);
          ya();
          p.profile && (y.stats.size = Ja(y.internalformat, y.type, k.width, k.height, ca.genMipmaps, !0));
          k.format = aa[y.internalformat];
          k.type = K[y.type];
          k.mag = fa[ca.magFilter];
          k.min = Da[ca.minFilter];
          k.wrapS = ua[ca.wrapS];
          k.wrapT = ua[ca.wrapT];
          for (f = 0; 6 > f; ++f) nb(D[f]);
          return k;
        }
        var y = new O(34067);
        ia[y.id] = y;
        d.cubeCount++;
        var D = Array(6);
        k(b, c, e, f, q, n);
        k.subimage = function (a, b, c, e, f) {
          c |= 0;
          e |= 0;
          f |= 0;
          var d = h();
          u(d, y);
          d.width = 0;
          d.height = 0;
          B(d, b);
          d.width = d.width || (y.width >> f) - c;
          d.height = d.height || (y.height >> f) - e;
          xa(y);
          l(d, 34069 + a, c, e, f);
          ya();
          g(d);
          return k;
        };
        k.resize = function (b) {
          b |= 0;
          if (b !== y.width) {
            k.width = y.width = b;
            k.height = y.height = b;
            xa(y);
            for (var c = 0; 6 > c; ++c) for (var g = 0; y.mipmask >> g; ++g) a.texImage2D(34069 + c, g, y.format, b >> g, b >> g, 0, y.format, y.type, null);
            ya();
            p.profile && (y.stats.size = Ja(y.internalformat, y.type, k.width, k.height, !1, !0));
            return k;
          }
        };
        k._reglType = "textureCube";
        k._texture = y;
        p.profile && (k.stats = y.stats);
        k.destroy = function () {
          y.decRef();
        };
        return k;
      },
      clear: function clear() {
        for (var b = 0; b < ga; ++b) a.activeTexture(33984 + b), a.bindTexture(3553, null), W[b] = null;
        S(ia).forEach(D);
        d.cubeCount = 0;
        d.textureCount = 0;
      },
      getTexture: function getTexture(a) {
        return null;
      },
      restore: function restore() {
        for (var b = 0; b < ga; ++b) {
          var c = W[b];
          c && (c.bindCount = 0, c.unit = -1, W[b] = null);
        }
        S(ia).forEach(function (b) {
          b.texture = a.createTexture();
          a.bindTexture(b.target, b.texture);
          for (var c = 0; 32 > c; ++c) if (0 !== (b.mipmask & 1 << c)) if (3553 === b.target) a.texImage2D(3553, c, b.internalformat, b.width >> c, b.height >> c, 0, b.internalformat, b.type, null);else for (var g = 0; 6 > g; ++g) a.texImage2D(34069 + g, c, b.internalformat, b.width >> c, b.height >> c, 0, b.internalformat, b.type, null);
          H(b.texInfo, b.target);
        });
      },
      refresh: function refresh() {
        for (var b = 0; b < ga; ++b) {
          var c = W[b];
          c && (c.bindCount = 0, c.unit = -1, W[b] = null);
          a.activeTexture(33984 + b);
          a.bindTexture(3553, null);
          a.bindTexture(34067, null);
        }
      }
    };
  }
  function Rb(a, b, c, e, f, d) {
    function p(a, b, c) {
      this.target = a;
      this.texture = b;
      this.renderbuffer = c;
      var g = a = 0;
      b ? (a = b.width, g = b.height) : c && (a = c.width, g = c.height);
      this.width = a;
      this.height = g;
    }
    function n(a) {
      a && (a.texture && a.texture._texture.decRef(), a.renderbuffer && a.renderbuffer._renderbuffer.decRef());
    }
    function u(a, b, c) {
      a && (a.texture ? a.texture._texture.refCount += 1 : a.renderbuffer._renderbuffer.refCount += 1);
    }
    function t(b, c) {
      c && (c.texture ? a.framebufferTexture2D(36160, b, c.target, c.texture._texture.texture, 0) : a.framebufferRenderbuffer(36160, b, 36161, c.renderbuffer._renderbuffer.renderbuffer));
    }
    function w(a) {
      var b = 3553,
        c = null,
        g = null,
        e = a;
      "object" === _typeof(a) && (e = a.data, "target" in a && (b = a.target | 0));
      a = e._reglType;
      "texture2d" === a ? c = e : "textureCube" === a ? c = e : "renderbuffer" === a && (g = e, b = 36161);
      return new p(b, c, g);
    }
    function k(a, b, c, g, d) {
      if (c) return a = e.create2D({
        width: a,
        height: b,
        format: g,
        type: d
      }), a._texture.refCount = 0, new p(3553, a, null);
      a = f.create({
        width: a,
        height: b,
        format: g
      });
      a._renderbuffer.refCount = 0;
      return new p(36161, null, a);
    }
    function B(a) {
      return a && (a.texture || a.renderbuffer);
    }
    function l(a, b, c) {
      a && (a.texture ? a.texture.resize(b, c) : a.renderbuffer && a.renderbuffer.resize(b, c), a.width = b, a.height = c);
    }
    function h() {
      this.id = G++;
      H[this.id] = this;
      this.framebuffer = a.createFramebuffer();
      this.height = this.width = 0;
      this.colorAttachments = [];
      this.depthStencilAttachment = this.stencilAttachment = this.depthAttachment = null;
    }
    function g(a) {
      a.colorAttachments.forEach(n);
      n(a.depthAttachment);
      n(a.stencilAttachment);
      n(a.depthStencilAttachment);
    }
    function q(b) {
      a.deleteFramebuffer(b.framebuffer);
      b.framebuffer = null;
      d.framebufferCount--;
      delete H[b.id];
    }
    function r(b) {
      var g;
      a.bindFramebuffer(36160, b.framebuffer);
      var e = b.colorAttachments;
      for (g = 0; g < e.length; ++g) t(36064 + g, e[g]);
      for (g = e.length; g < c.maxColorAttachments; ++g) a.framebufferTexture2D(36160, 36064 + g, 3553, null, 0);
      a.framebufferTexture2D(36160, 33306, 3553, null, 0);
      a.framebufferTexture2D(36160, 36096, 3553, null, 0);
      a.framebufferTexture2D(36160, 36128, 3553, null, 0);
      t(36096, b.depthAttachment);
      t(36128, b.stencilAttachment);
      t(33306, b.depthStencilAttachment);
      a.checkFramebufferStatus(36160);
      a.isContextLost();
      a.bindFramebuffer(36160, z.next ? z.next.framebuffer : null);
      z.cur = z.next;
      a.getError();
    }
    function m(a, b) {
      function c(a, b) {
        var f,
          d = 0,
          h = 0,
          m = !0,
          q = !0;
        f = null;
        var l = !0,
          n = "rgba",
          t = "uint8",
          p = 1,
          G = null,
          fa = null,
          z = null,
          O = !1;
        if ("number" === typeof a) d = a | 0, h = b | 0 || d;else if (a) {
          "shape" in a ? (h = a.shape, d = h[0], h = h[1]) : ("radius" in a && (d = h = a.radius), "width" in a && (d = a.width), "height" in a && (h = a.height));
          if ("color" in a || "colors" in a) f = a.color || a.colors, Array.isArray(f);
          if (!f) {
            "colorCount" in a && (p = a.colorCount | 0);
            "colorTexture" in a && (l = !!a.colorTexture, n = "rgba4");
            if ("colorType" in a && (t = a.colorType, !l)) if ("half float" === t || "float16" === t) n = "rgba16f";else if ("float" === t || "float32" === t) n = "rgba32f";
            "colorFormat" in a && (n = a.colorFormat, 0 <= Ha.indexOf(n) ? l = !0 : 0 <= v.indexOf(n) && (l = !1));
          }
          if ("depthTexture" in a || "depthStencilTexture" in a) O = !(!a.depthTexture && !a.depthStencilTexture);
          "depth" in a && ("boolean" === typeof a.depth ? m = a.depth : (G = a.depth, q = !1));
          "stencil" in a && ("boolean" === typeof a.stencil ? q = a.stencil : (fa = a.stencil, m = !1));
          "depthStencil" in a && ("boolean" === typeof a.depthStencil ? m = q = a.depthStencil : (z = a.depthStencil, q = m = !1));
        } else d = h = 1;
        var P = null,
          Z = null,
          H = null,
          A = null;
        if (Array.isArray(f)) P = f.map(w);else if (f) P = [w(f)];else for (P = Array(p), f = 0; f < p; ++f) P[f] = k(d, h, l, n, t);
        d = d || P[0].width;
        h = h || P[0].height;
        G ? Z = w(G) : m && !q && (Z = k(d, h, O, "depth", "uint32"));
        fa ? H = w(fa) : q && !m && (H = k(d, h, !1, "stencil", "uint8"));
        z ? A = w(z) : !G && !fa && q && m && (A = k(d, h, O, "depth stencil", "depth stencil"));
        m = null;
        for (f = 0; f < P.length; ++f) u(P[f], d, h), P[f] && P[f].texture && (q = Ya[P[f].texture._texture.format] * Pa[P[f].texture._texture.type], null === m && (m = q));
        u(Z, d, h);
        u(H, d, h);
        u(A, d, h);
        g(e);
        e.width = d;
        e.height = h;
        e.colorAttachments = P;
        e.depthAttachment = Z;
        e.stencilAttachment = H;
        e.depthStencilAttachment = A;
        c.color = P.map(B);
        c.depth = B(Z);
        c.stencil = B(H);
        c.depthStencil = B(A);
        c.width = e.width;
        c.height = e.height;
        r(e);
        return c;
      }
      var e = new h();
      d.framebufferCount++;
      c(a, b);
      return A(c, {
        resize: function resize(a, b) {
          var g = Math.max(a | 0, 1),
            f = Math.max(b | 0 || g, 1);
          if (g === e.width && f === e.height) return c;
          for (var d = e.colorAttachments, h = 0; h < d.length; ++h) l(d[h], g, f);
          l(e.depthAttachment, g, f);
          l(e.stencilAttachment, g, f);
          l(e.depthStencilAttachment, g, f);
          e.width = c.width = g;
          e.height = c.height = f;
          r(e);
          return c;
        },
        _reglType: "framebuffer",
        _framebuffer: e,
        destroy: function destroy() {
          q(e);
          g(e);
        },
        use: function use(a) {
          z.setFBO({
            framebuffer: c
          }, a);
        }
      });
    }
    var z = {
        cur: null,
        next: null,
        dirty: !1,
        setFBO: null
      },
      Ha = ["rgba"],
      v = ["rgba4", "rgb565", "rgb5 a1"];
    b.ext_srgb && v.push("srgba");
    b.ext_color_buffer_half_float && v.push("rgba16f", "rgb16f");
    b.webgl_color_buffer_float && v.push("rgba32f");
    var Z = ["uint8"];
    b.oes_texture_half_float && Z.push("half float", "float16");
    b.oes_texture_float && Z.push("float", "float32");
    var G = 0,
      H = {};
    return A(z, {
      getFramebuffer: function getFramebuffer(a) {
        return "function" === typeof a && "framebuffer" === a._reglType && (a = a._framebuffer, a instanceof h) ? a : null;
      },
      create: m,
      createCube: function createCube(a) {
        function b(a) {
          var g,
            f = {
              color: null
            },
            d = 0,
            h = null;
          g = "rgba";
          var q = "uint8",
            r = 1;
          if ("number" === typeof a) d = a | 0;else if (a) {
            "shape" in a ? d = a.shape[0] : ("radius" in a && (d = a.radius | 0), "width" in a ? d = a.width | 0 : "height" in a && (d = a.height | 0));
            if ("color" in a || "colors" in a) h = a.color || a.colors, Array.isArray(h);
            h || ("colorCount" in a && (r = a.colorCount | 0), "colorType" in a && (q = a.colorType), "colorFormat" in a && (g = a.colorFormat));
            "depth" in a && (f.depth = a.depth);
            "stencil" in a && (f.stencil = a.stencil);
            "depthStencil" in a && (f.depthStencil = a.depthStencil);
          } else d = 1;
          if (h) {
            if (Array.isArray(h)) for (a = [], g = 0; g < h.length; ++g) a[g] = h[g];else a = [h];
          } else for (a = Array(r), h = {
            radius: d,
            format: g,
            type: q
          }, g = 0; g < r; ++g) a[g] = e.createCube(h);
          f.color = Array(a.length);
          for (g = 0; g < a.length; ++g) r = a[g], d = d || r.width, f.color[g] = {
            target: 34069,
            data: a[g]
          };
          for (g = 0; 6 > g; ++g) {
            for (r = 0; r < a.length; ++r) f.color[r].target = 34069 + g;
            0 < g && (f.depth = c[0].depth, f.stencil = c[0].stencil, f.depthStencil = c[0].depthStencil);
            if (c[g]) c[g](f);else c[g] = m(f);
          }
          return A(b, {
            width: d,
            height: d,
            color: a
          });
        }
        var c = Array(6);
        b(a);
        return A(b, {
          faces: c,
          resize: function resize(a) {
            var g = a | 0;
            if (g === b.width) return b;
            var e = b.color;
            for (a = 0; a < e.length; ++a) e[a].resize(g);
            for (a = 0; 6 > a; ++a) c[a].resize(g);
            b.width = b.height = g;
            return b;
          },
          _reglType: "framebufferCube",
          destroy: function destroy() {
            c.forEach(function (a) {
              a.destroy();
            });
          }
        });
      },
      clear: function clear() {
        S(H).forEach(q);
      },
      restore: function restore() {
        z.cur = null;
        z.next = null;
        z.dirty = !0;
        S(H).forEach(function (b) {
          b.framebuffer = a.createFramebuffer();
          r(b);
        });
      }
    });
  }
  function Za() {
    this.w = this.z = this.y = this.x = this.state = 0;
    this.buffer = null;
    this.size = 0;
    this.normalized = !1;
    this.type = 5126;
    this.divisor = this.stride = this.offset = 0;
  }
  function Sb(a, b, c, e, f) {
    function d(a) {
      if (a !== h.currentVAO) {
        var c = b.oes_vertex_array_object;
        a ? c.bindVertexArrayOES(a.vao) : c.bindVertexArrayOES(null);
        h.currentVAO = a;
      }
    }
    function p(c) {
      if (c !== h.currentVAO) {
        if (c) c.bindAttrs();else for (var e = b.angle_instanced_arrays, f = 0; f < k.length; ++f) {
          var d = k[f];
          d.buffer ? (a.enableVertexAttribArray(f), a.vertexAttribPointer(f, d.size, d.type, d.normalized, d.stride, d.offfset), e && d.divisor && e.vertexAttribDivisorANGLE(f, d.divisor)) : (a.disableVertexAttribArray(f), a.vertexAttrib4f(f, d.x, d.y, d.z, d.w));
        }
        h.currentVAO = c;
      }
    }
    function n() {
      S(l).forEach(function (a) {
        a.destroy();
      });
    }
    function u() {
      this.id = ++B;
      this.attributes = [];
      var a = b.oes_vertex_array_object;
      this.vao = a ? a.createVertexArrayOES() : null;
      l[this.id] = this;
      this.buffers = [];
    }
    function t() {
      b.oes_vertex_array_object && S(l).forEach(function (a) {
        a.refresh();
      });
    }
    var w = c.maxAttributes,
      k = Array(w);
    for (c = 0; c < w; ++c) k[c] = new Za();
    var B = 0,
      l = {},
      h = {
        Record: Za,
        scope: {},
        state: k,
        currentVAO: null,
        targetVAO: null,
        restore: b.oes_vertex_array_object ? t : function () {},
        createVAO: function createVAO(a) {
          function b(a) {
            var g = {},
              e = c.attributes;
            e.length = a.length;
            for (var d = 0; d < a.length; ++d) {
              var h = a[d],
                k = e[d] = new Za(),
                l = h.data || h;
              if (Array.isArray(l) || M(l) || da(l)) {
                var n;
                c.buffers[d] && (n = c.buffers[d], M(l) && n._buffer.byteLength >= l.byteLength ? n.subdata(l) : (n.destroy(), c.buffers[d] = null));
                c.buffers[d] || (n = c.buffers[d] = f.create(h, 34962, !1, !0));
                k.buffer = f.getBuffer(n);
                k.size = k.buffer.dimension | 0;
                k.normalized = !1;
                k.type = k.buffer.dtype;
                k.offset = 0;
                k.stride = 0;
                k.divisor = 0;
                k.state = 1;
                g[d] = 1;
              } else f.getBuffer(h) ? (k.buffer = f.getBuffer(h), k.size = k.buffer.dimension | 0, k.normalized = !1, k.type = k.buffer.dtype, k.offset = 0, k.stride = 0, k.divisor = 0, k.state = 1) : f.getBuffer(h.buffer) ? (k.buffer = f.getBuffer(h.buffer), k.size = (+h.size || k.buffer.dimension) | 0, k.normalized = !!h.normalized || !1, k.type = "type" in h ? Ia[h.type] : k.buffer.dtype, k.offset = (h.offset || 0) | 0, k.stride = (h.stride || 0) | 0, k.divisor = (h.divisor || 0) | 0, k.state = 1) : "x" in h && (k.x = +h.x || 0, k.y = +h.y || 0, k.z = +h.z || 0, k.w = +h.w || 0, k.state = 2);
            }
            for (a = 0; a < c.buffers.length; ++a) !g[a] && c.buffers[a] && (c.buffers[a].destroy(), c.buffers[a] = null);
            c.refresh();
            return b;
          }
          var c = new u();
          e.vaoCount += 1;
          b.destroy = function () {
            for (var a = 0; a < c.buffers.length; ++a) c.buffers[a] && c.buffers[a].destroy();
            c.buffers.length = 0;
            c.destroy();
          };
          b._vao = c;
          b._reglType = "vao";
          return b(a);
        },
        getVAO: function getVAO(a) {
          return "function" === typeof a && a._vao ? a._vao : null;
        },
        destroyBuffer: function destroyBuffer(b) {
          for (var c = 0; c < k.length; ++c) {
            var e = k[c];
            e.buffer === b && (a.disableVertexAttribArray(c), e.buffer = null);
          }
        },
        setVAO: b.oes_vertex_array_object ? d : p,
        clear: b.oes_vertex_array_object ? n : function () {}
      };
    u.prototype.bindAttrs = function () {
      for (var c = b.angle_instanced_arrays, e = this.attributes, f = 0; f < e.length; ++f) {
        var d = e[f];
        d.buffer ? (a.enableVertexAttribArray(f), a.bindBuffer(34962, d.buffer.buffer), a.vertexAttribPointer(f, d.size, d.type, d.normalized, d.stride, d.offset), c && d.divisor && c.vertexAttribDivisorANGLE(f, d.divisor)) : (a.disableVertexAttribArray(f), a.vertexAttrib4f(f, d.x, d.y, d.z, d.w));
      }
      for (c = e.length; c < w; ++c) a.disableVertexAttribArray(c);
    };
    u.prototype.refresh = function () {
      var a = b.oes_vertex_array_object;
      a && (a.bindVertexArrayOES(this.vao), this.bindAttrs(), h.currentVAO = this);
    };
    u.prototype.destroy = function () {
      if (this.vao) {
        var a = b.oes_vertex_array_object;
        this === h.currentVAO && (h.currentVAO = null, a.bindVertexArrayOES(null));
        a.deleteVertexArrayOES(this.vao);
        this.vao = null;
      }
      l[this.id] && (delete l[this.id], --e.vaoCount);
    };
    return h;
  }
  function Tb(a, b, c, e) {
    function f(a, b, c, e) {
      this.name = a;
      this.id = b;
      this.location = c;
      this.info = e;
    }
    function d(a, b) {
      for (var c = 0; c < a.length; ++c) if (a[c].id === b.id) {
        a[c].location = b.location;
        return;
      }
      a.push(b);
    }
    function p(c, g, e) {
      e = 35632 === c ? t : w;
      var d = e[g];
      if (!d) {
        var f = b.str(g),
          d = a.createShader(c);
        a.shaderSource(d, f);
        a.compileShader(d);
        e[g] = d;
      }
      return d;
    }
    function n(a, b) {
      this.id = l++;
      this.fragId = a;
      this.vertId = b;
      this.program = null;
      this.uniforms = [];
      this.attributes = [];
      this.refCount = 1;
      e.profile && (this.stats = {
        uniformsCount: 0,
        attributesCount: 0
      });
    }
    function u(c, g, k) {
      var l;
      l = p(35632, c.fragId);
      var m = p(35633, c.vertId);
      g = c.program = a.createProgram();
      a.attachShader(g, l);
      a.attachShader(g, m);
      if (k) for (l = 0; l < k.length; ++l) m = k[l], a.bindAttribLocation(g, m[0], m[1]);
      a.linkProgram(g);
      m = a.getProgramParameter(g, 35718);
      e.profile && (c.stats.uniformsCount = m);
      var n = c.uniforms;
      for (l = 0; l < m; ++l) if (k = a.getActiveUniform(g, l)) if (1 < k.size) for (var t = 0; t < k.size; ++t) {
        var u = k.name.replace("[0]", "[" + t + "]");
        d(n, new f(u, b.id(u), a.getUniformLocation(g, u), k));
      } else d(n, new f(k.name, b.id(k.name), a.getUniformLocation(g, k.name), k));
      m = a.getProgramParameter(g, 35721);
      e.profile && (c.stats.attributesCount = m);
      c = c.attributes;
      for (l = 0; l < m; ++l) (k = a.getActiveAttrib(g, l)) && d(c, new f(k.name, b.id(k.name), a.getAttribLocation(g, k.name), k));
    }
    var t = {},
      w = {},
      k = {},
      B = [],
      l = 0;
    e.profile && (c.getMaxUniformsCount = function () {
      var a = 0;
      B.forEach(function (b) {
        b.stats.uniformsCount > a && (a = b.stats.uniformsCount);
      });
      return a;
    }, c.getMaxAttributesCount = function () {
      var a = 0;
      B.forEach(function (b) {
        b.stats.attributesCount > a && (a = b.stats.attributesCount);
      });
      return a;
    });
    return {
      clear: function clear() {
        var b = a.deleteShader.bind(a);
        S(t).forEach(b);
        t = {};
        S(w).forEach(b);
        w = {};
        B.forEach(function (b) {
          a.deleteProgram(b.program);
        });
        B.length = 0;
        k = {};
        c.shaderCount = 0;
      },
      program: function program(b, e, d, f) {
        var l = k[e];
        l || (l = k[e] = {});
        var p = l[b];
        if (p && (p.refCount++, !f)) return p;
        var v = new n(e, b);
        c.shaderCount++;
        u(v, d, f);
        p || (l[b] = v);
        B.push(v);
        return A(v, {
          destroy: function destroy() {
            v.refCount--;
            if (0 >= v.refCount) {
              a.deleteProgram(v.program);
              var b = B.indexOf(v);
              B.splice(b, 1);
              c.shaderCount--;
            }
            0 >= l[v.vertId].refCount && (a.deleteShader(w[v.vertId]), delete w[v.vertId], delete k[v.fragId][v.vertId]);
            Object.keys(k[v.fragId]).length || (a.deleteShader(t[v.fragId]), delete t[v.fragId], delete k[v.fragId]);
          }
        });
      },
      restore: function restore() {
        t = {};
        w = {};
        for (var a = 0; a < B.length; ++a) u(B[a], null, B[a].attributes.map(function (a) {
          return [a.location, a.name];
        }));
      },
      shader: p,
      frag: -1,
      vert: -1
    };
  }
  function Ub(a, b, c, e, f, d, p) {
    function n(d) {
      var f;
      f = null === b.next ? 5121 : b.next.colorAttachments[0].texture._texture.type;
      var k = 0,
        n = 0,
        l = e.framebufferWidth,
        h = e.framebufferHeight,
        g = null;
      M(d) ? g = d : d && (k = d.x | 0, n = d.y | 0, l = (d.width || e.framebufferWidth - k) | 0, h = (d.height || e.framebufferHeight - n) | 0, g = d.data || null);
      c();
      d = l * h * 4;
      g || (5121 === f ? g = new Uint8Array(d) : 5126 === f && (g = g || new Float32Array(d)));
      a.pixelStorei(3333, 4);
      a.readPixels(k, n, l, h, 6408, f, g);
      return g;
    }
    function u(a) {
      var c;
      b.setFBO({
        framebuffer: a.framebuffer
      }, function () {
        c = n(a);
      });
      return c;
    }
    return function (a) {
      return a && "framebuffer" in a ? u(a) : n(a);
    };
  }
  function za(a) {
    return Array.prototype.slice.call(a);
  }
  function Aa(a) {
    return za(a).join("");
  }
  function Vb() {
    function a() {
      var a = [],
        b = [];
      return A(function () {
        a.push.apply(a, za(arguments));
      }, {
        def: function def() {
          var d = "v" + c++;
          b.push(d);
          0 < arguments.length && (a.push(d, "="), a.push.apply(a, za(arguments)), a.push(";"));
          return d;
        },
        toString: function toString() {
          return Aa([0 < b.length ? "var " + b.join(",") + ";" : "", Aa(a)]);
        }
      });
    }
    function b() {
      function b(a, e) {
        d(a, e, "=", c.def(a, e), ";");
      }
      var c = a(),
        d = a(),
        e = c.toString,
        f = d.toString;
      return A(function () {
        c.apply(c, za(arguments));
      }, {
        def: c.def,
        entry: c,
        exit: d,
        save: b,
        set: function set(a, d, e) {
          b(a, d);
          c(a, d, "=", e, ";");
        },
        toString: function toString() {
          return e() + f();
        }
      });
    }
    var c = 0,
      e = [],
      f = [],
      d = a(),
      p = {};
    return {
      global: d,
      link: function link(a) {
        for (var b = 0; b < f.length; ++b) if (f[b] === a) return e[b];
        b = "g" + c++;
        e.push(b);
        f.push(a);
        return b;
      },
      block: a,
      proc: function proc(a, c) {
        function d() {
          var a = "a" + e.length;
          e.push(a);
          return a;
        }
        var e = [];
        c = c || 0;
        for (var f = 0; f < c; ++f) d();
        var f = b(),
          B = f.toString;
        return p[a] = A(f, {
          arg: d,
          toString: function toString() {
            return Aa(["function(", e.join(), "){", B(), "}"]);
          }
        });
      },
      scope: b,
      cond: function cond() {
        var a = Aa(arguments),
          c = b(),
          d = b(),
          e = c.toString,
          f = d.toString;
        return A(c, {
          then: function then() {
            c.apply(c, za(arguments));
            return this;
          },
          "else": function _else() {
            d.apply(d, za(arguments));
            return this;
          },
          toString: function toString() {
            var b = f();
            b && (b = "else{" + b + "}");
            return Aa(["if(", a, "){", e(), "}", b]);
          }
        });
      },
      compile: function compile() {
        var a = ['"use strict";', d, "return {"];
        Object.keys(p).forEach(function (b) {
          a.push('"', b, '":', p[b].toString(), ",");
        });
        a.push("}");
        var b = Aa(a).replace(/;/g, ";\n").replace(/}/g, "}\n").replace(/{/g, "{\n");
        return Function.apply(null, e.concat(b)).apply(null, f);
      }
    };
  }
  function Qa(a) {
    return Array.isArray(a) || M(a) || da(a);
  }
  function zb(a) {
    return a.sort(function (a, c) {
      return "viewport" === a ? -1 : "viewport" === c ? 1 : a < c ? -1 : 1;
    });
  }
  function K(a, b, c, e) {
    this.thisDep = a;
    this.contextDep = b;
    this.propDep = c;
    this.append = e;
  }
  function sa(a) {
    return a && !(a.thisDep || a.contextDep || a.propDep);
  }
  function v(a) {
    return new K(!1, !1, !1, a);
  }
  function L(a, b) {
    var c = a.type;
    if (0 === c) return c = a.data.length, new K(!0, 1 <= c, 2 <= c, b);
    if (4 === c) return c = a.data, new K(c.thisDep, c.contextDep, c.propDep, b);
    if (5 === c) return new K(!1, !1, !1, b);
    if (6 === c) {
      for (var e = c = !1, f = !1, d = 0; d < a.data.length; ++d) {
        var p = a.data[d];
        1 === p.type ? f = !0 : 2 === p.type ? e = !0 : 3 === p.type ? c = !0 : 0 === p.type ? (c = !0, p = p.data, 1 <= p && (e = !0), 2 <= p && (f = !0)) : 4 === p.type && (c = c || p.data.thisDep, e = e || p.data.contextDep, f = f || p.data.propDep);
      }
      return new K(c, e, f, b);
    }
    return new K(3 === c, 2 === c, 1 === c, b);
  }
  function Wb(a, b, c, e, f, d, p, n, u, t, w, k, B, l, h) {
    function g(a) {
      return a.replace(".", "_");
    }
    function q(a, b, c) {
      var d = g(a);
      La.push(a);
      Ca[d] = pa[d] = !!c;
      qa[d] = b;
    }
    function r(a, b, c) {
      var d = g(a);
      La.push(a);
      Array.isArray(c) ? (pa[d] = c.slice(), Ca[d] = c.slice()) : pa[d] = Ca[d] = c;
      ra[d] = b;
    }
    function m() {
      var a = Vb(),
        c = a.link,
        d = a.global;
      a.id = na++;
      a.batchId = "0";
      var e = c(ub),
        f = a.shared = {
          props: "a0"
        };
      Object.keys(ub).forEach(function (a) {
        f[a] = d.def(e, ".", a);
      });
      var g = a.next = {},
        h = a.current = {};
      Object.keys(ra).forEach(function (a) {
        Array.isArray(pa[a]) && (g[a] = d.def(f.next, ".", a), h[a] = d.def(f.current, ".", a));
      });
      var ba = a.constants = {};
      Object.keys(Na).forEach(function (a) {
        ba[a] = d.def(JSON.stringify(Na[a]));
      });
      a.invoke = function (b, d) {
        switch (d.type) {
          case 0:
            var e = ["this", f.context, f.props, a.batchId];
            return b.def(c(d.data), ".call(", e.slice(0, Math.max(d.data.length + 1, 4)), ")");
          case 1:
            return b.def(f.props, d.data);
          case 2:
            return b.def(f.context, d.data);
          case 3:
            return b.def("this", d.data);
          case 4:
            return d.data.append(a, b), d.data.ref;
          case 5:
            return d.data.toString();
          case 6:
            return d.data.map(function (c) {
              return a.invoke(b, c);
            });
        }
      };
      a.attribCache = {};
      var va = {};
      a.scopeAttrib = function (a) {
        a = b.id(a);
        if (a in va) return va[a];
        var d = t.scope[a];
        d || (d = t.scope[a] = new ga());
        return va[a] = c(d);
      };
      return a;
    }
    function z(a) {
      var b = a["static"];
      a = a.dynamic;
      var c;
      if ("profile" in b) {
        var d = !!b.profile;
        c = v(function (a, b) {
          return d;
        });
        c.enable = d;
      } else if ("profile" in a) {
        var e = a.profile;
        c = L(e, function (a, b) {
          return a.invoke(b, e);
        });
      }
      return c;
    }
    function E(a, b) {
      var c = a["static"],
        d = a.dynamic;
      if ("framebuffer" in c) {
        var e = c.framebuffer;
        return e ? (e = n.getFramebuffer(e), v(function (a, b) {
          var c = a.link(e),
            d = a.shared;
          b.set(d.framebuffer, ".next", c);
          d = d.context;
          b.set(d, ".framebufferWidth", c + ".width");
          b.set(d, ".framebufferHeight", c + ".height");
          return c;
        })) : v(function (a, b) {
          var c = a.shared;
          b.set(c.framebuffer, ".next", "null");
          c = c.context;
          b.set(c, ".framebufferWidth", c + ".drawingBufferWidth");
          b.set(c, ".framebufferHeight", c + ".drawingBufferHeight");
          return "null";
        });
      }
      if ("framebuffer" in d) {
        var f = d.framebuffer;
        return L(f, function (a, b) {
          var c = a.invoke(b, f),
            d = a.shared,
            e = d.framebuffer,
            c = b.def(e, ".getFramebuffer(", c, ")");
          b.set(e, ".next", c);
          d = d.context;
          b.set(d, ".framebufferWidth", c + "?" + c + ".width:" + d + ".drawingBufferWidth");
          b.set(d, ".framebufferHeight", c + "?" + c + ".height:" + d + ".drawingBufferHeight");
          return c;
        });
      }
      return null;
    }
    function F(a, b, c) {
      function d(a) {
        if (a in e) {
          var c = e[a];
          a = !0;
          var g = c.x | 0,
            x = c.y | 0,
            h,
            k;
          "width" in c ? h = c.width | 0 : a = !1;
          "height" in c ? k = c.height | 0 : a = !1;
          return new K(!a && b && b.thisDep, !a && b && b.contextDep, !a && b && b.propDep, function (a, b) {
            var d = a.shared.context,
              e = h;
            "width" in c || (e = b.def(d, ".", "framebufferWidth", "-", g));
            var f = k;
            "height" in c || (f = b.def(d, ".", "framebufferHeight", "-", x));
            return [g, x, e, f];
          });
        }
        if (a in f) {
          var ca = f[a];
          a = L(ca, function (a, b) {
            var c = a.invoke(b, ca),
              d = a.shared.context,
              e = b.def(c, ".x|0"),
              f = b.def(c, ".y|0"),
              g = b.def('"width" in ', c, "?", c, ".width|0:", "(", d, ".", "framebufferWidth", "-", e, ")"),
              c = b.def('"height" in ', c, "?", c, ".height|0:", "(", d, ".", "framebufferHeight", "-", f, ")");
            return [e, f, g, c];
          });
          b && (a.thisDep = a.thisDep || b.thisDep, a.contextDep = a.contextDep || b.contextDep, a.propDep = a.propDep || b.propDep);
          return a;
        }
        return b ? new K(b.thisDep, b.contextDep, b.propDep, function (a, b) {
          var c = a.shared.context;
          return [0, 0, b.def(c, ".", "framebufferWidth"), b.def(c, ".", "framebufferHeight")];
        }) : null;
      }
      var e = a["static"],
        f = a.dynamic;
      if (a = d("viewport")) {
        var g = a;
        a = new K(a.thisDep, a.contextDep, a.propDep, function (a, b) {
          var c = g.append(a, b),
            d = a.shared.context;
          b.set(d, ".viewportWidth", c[2]);
          b.set(d, ".viewportHeight", c[3]);
          return c;
        });
      }
      return {
        viewport: a,
        scissor_box: d("scissor.box")
      };
    }
    function Z(a, b) {
      var c = a["static"];
      if ("string" === typeof c.frag && "string" === typeof c.vert) {
        if (0 < Object.keys(b.dynamic).length) return null;
        var c = b["static"],
          d = Object.keys(c);
        if (0 < d.length && "number" === typeof c[d[0]]) {
          for (var e = [], f = 0; f < d.length; ++f) e.push([c[d[f]] | 0, d[f]]);
          return e;
        }
      }
      return null;
    }
    function G(a, c, d) {
      function e(a) {
        if (a in f) {
          var c = b.id(f[a]);
          a = v(function () {
            return c;
          });
          a.id = c;
          return a;
        }
        if (a in g) {
          var d = g[a];
          return L(d, function (a, b) {
            var c = a.invoke(b, d);
            return b.def(a.shared.strings, ".id(", c, ")");
          });
        }
        return null;
      }
      var f = a["static"],
        g = a.dynamic,
        h = e("frag"),
        ba = e("vert"),
        va = null;
      sa(h) && sa(ba) ? (va = w.program(ba.id, h.id, null, d), a = v(function (a, b) {
        return a.link(va);
      })) : a = new K(h && h.thisDep || ba && ba.thisDep, h && h.contextDep || ba && ba.contextDep, h && h.propDep || ba && ba.propDep, function (a, b) {
        var c = a.shared.shader,
          d;
        d = h ? h.append(a, b) : b.def(c, ".", "frag");
        var e;
        e = ba ? ba.append(a, b) : b.def(c, ".", "vert");
        return b.def(c + ".program(" + e + "," + d + ")");
      });
      return {
        frag: h,
        vert: ba,
        progVar: a,
        program: va
      };
    }
    function H(a, b) {
      function c(a, b) {
        if (a in e) {
          var d = e[a] | 0;
          return v(function (a, c) {
            b && (a.OFFSET = d);
            return d;
          });
        }
        if (a in f) {
          var x = f[a];
          return L(x, function (a, c) {
            var d = a.invoke(c, x);
            b && (a.OFFSET = d);
            return d;
          });
        }
        return b && g ? v(function (a, b) {
          a.OFFSET = "0";
          return 0;
        }) : null;
      }
      var e = a["static"],
        f = a.dynamic,
        g = function () {
          if ("elements" in e) {
            var a = e.elements;
            Qa(a) ? a = d.getElements(d.create(a, !0)) : a && (a = d.getElements(a));
            var b = v(function (b, c) {
              if (a) {
                var d = b.link(a);
                return b.ELEMENTS = d;
              }
              return b.ELEMENTS = null;
            });
            b.value = a;
            return b;
          }
          if ("elements" in f) {
            var c = f.elements;
            return L(c, function (a, b) {
              var d = a.shared,
                e = d.isBufferArgs,
                d = d.elements,
                f = a.invoke(b, c),
                g = b.def("null"),
                e = b.def(e, "(", f, ")"),
                f = a.cond(e).then(g, "=", d, ".createStream(", f, ");")["else"](g, "=", d, ".getElements(", f, ");");
              b.entry(f);
              b.exit(a.cond(e).then(d, ".destroyStream(", g, ");"));
              return a.ELEMENTS = g;
            });
          }
          return null;
        }(),
        h = c("offset", !0);
      return {
        elements: g,
        primitive: function () {
          if ("primitive" in e) {
            var a = e.primitive;
            return v(function (b, c) {
              return Ta[a];
            });
          }
          if ("primitive" in f) {
            var b = f.primitive;
            return L(b, function (a, c) {
              var d = a.constants.primTypes,
                e = a.invoke(c, b);
              return c.def(d, "[", e, "]");
            });
          }
          return g ? sa(g) ? g.value ? v(function (a, b) {
            return b.def(a.ELEMENTS, ".primType");
          }) : v(function () {
            return 4;
          }) : new K(g.thisDep, g.contextDep, g.propDep, function (a, b) {
            var c = a.ELEMENTS;
            return b.def(c, "?", c, ".primType:", 4);
          }) : null;
        }(),
        count: function () {
          if ("count" in e) {
            var a = e.count | 0;
            return v(function () {
              return a;
            });
          }
          if ("count" in f) {
            var b = f.count;
            return L(b, function (a, c) {
              return a.invoke(c, b);
            });
          }
          return g ? sa(g) ? g ? h ? new K(h.thisDep, h.contextDep, h.propDep, function (a, b) {
            return b.def(a.ELEMENTS, ".vertCount-", a.OFFSET);
          }) : v(function (a, b) {
            return b.def(a.ELEMENTS, ".vertCount");
          }) : v(function () {
            return -1;
          }) : new K(g.thisDep || h.thisDep, g.contextDep || h.contextDep, g.propDep || h.propDep, function (a, b) {
            var c = a.ELEMENTS;
            return a.OFFSET ? b.def(c, "?", c, ".vertCount-", a.OFFSET, ":-1") : b.def(c, "?", c, ".vertCount:-1");
          }) : null;
        }(),
        instances: c("instances", !1),
        offset: h
      };
    }
    function O(a, b) {
      var c = a["static"],
        d = a.dynamic,
        e = {};
      La.forEach(function (a) {
        function b(g, x) {
          if (a in c) {
            var h = g(c[a]);
            e[f] = v(function () {
              return h;
            });
          } else if (a in d) {
            var I = d[a];
            e[f] = L(I, function (a, b) {
              return x(a, b, a.invoke(b, I));
            });
          }
        }
        var f = g(a);
        switch (a) {
          case "cull.enable":
          case "blend.enable":
          case "dither":
          case "stencil.enable":
          case "depth.enable":
          case "scissor.enable":
          case "polygonOffset.enable":
          case "sample.alpha":
          case "sample.enable":
          case "depth.mask":
            return b(function (a) {
              return a;
            }, function (a, b, c) {
              return c;
            });
          case "depth.func":
            return b(function (a) {
              return ab[a];
            }, function (a, b, c) {
              return b.def(a.constants.compareFuncs, "[", c, "]");
            });
          case "depth.range":
            return b(function (a) {
              return a;
            }, function (a, b, c) {
              a = b.def("+", c, "[0]");
              b = b.def("+", c, "[1]");
              return [a, b];
            });
          case "blend.func":
            return b(function (a) {
              return [Ea["srcRGB" in a ? a.srcRGB : a.src], Ea["dstRGB" in a ? a.dstRGB : a.dst], Ea["srcAlpha" in a ? a.srcAlpha : a.src], Ea["dstAlpha" in a ? a.dstAlpha : a.dst]];
            }, function (a, b, c) {
              function d(a, e) {
                return b.def('"', a, e, '" in ', c, "?", c, ".", a, e, ":", c, ".", a);
              }
              a = a.constants.blendFuncs;
              var e = d("src", "RGB"),
                f = d("dst", "RGB"),
                e = b.def(a, "[", e, "]"),
                g = b.def(a, "[", d("src", "Alpha"), "]"),
                f = b.def(a, "[", f, "]");
              a = b.def(a, "[", d("dst", "Alpha"), "]");
              return [e, f, g, a];
            });
          case "blend.equation":
            return b(function (a) {
              if ("string" === typeof a) return [W[a], W[a]];
              if ("object" === _typeof(a)) return [W[a.rgb], W[a.alpha]];
            }, function (a, b, c) {
              var d = a.constants.blendEquations,
                e = b.def(),
                f = b.def();
              a = a.cond("typeof ", c, '==="string"');
              a.then(e, "=", f, "=", d, "[", c, "];");
              a["else"](e, "=", d, "[", c, ".rgb];", f, "=", d, "[", c, ".alpha];");
              b(a);
              return [e, f];
            });
          case "blend.color":
            return b(function (a) {
              return J(4, function (b) {
                return +a[b];
              });
            }, function (a, b, c) {
              return J(4, function (a) {
                return b.def("+", c, "[", a, "]");
              });
            });
          case "stencil.mask":
            return b(function (a) {
              return a | 0;
            }, function (a, b, c) {
              return b.def(c, "|0");
            });
          case "stencil.func":
            return b(function (a) {
              return [ab[a.cmp || "keep"], a.ref || 0, "mask" in a ? a.mask : -1];
            }, function (a, b, c) {
              a = b.def('"cmp" in ', c, "?", a.constants.compareFuncs, "[", c, ".cmp]", ":", 7680);
              var d = b.def(c, ".ref|0");
              b = b.def('"mask" in ', c, "?", c, ".mask|0:-1");
              return [a, d, b];
            });
          case "stencil.opFront":
          case "stencil.opBack":
            return b(function (b) {
              return ["stencil.opBack" === a ? 1029 : 1028, Ra[b.fail || "keep"], Ra[b.zfail || "keep"], Ra[b.zpass || "keep"]];
            }, function (b, c, d) {
              function e(a) {
                return c.def('"', a, '" in ', d, "?", f, "[", d, ".", a, "]:", 7680);
              }
              var f = b.constants.stencilOps;
              return ["stencil.opBack" === a ? 1029 : 1028, e("fail"), e("zfail"), e("zpass")];
            });
          case "polygonOffset.offset":
            return b(function (a) {
              return [a.factor | 0, a.units | 0];
            }, function (a, b, c) {
              a = b.def(c, ".factor|0");
              b = b.def(c, ".units|0");
              return [a, b];
            });
          case "cull.face":
            return b(function (a) {
              var b = 0;
              "front" === a ? b = 1028 : "back" === a && (b = 1029);
              return b;
            }, function (a, b, c) {
              return b.def(c, '==="front"?', 1028, ":", 1029);
            });
          case "lineWidth":
            return b(function (a) {
              return a;
            }, function (a, b, c) {
              return c;
            });
          case "frontFace":
            return b(function (a) {
              return Ab[a];
            }, function (a, b, c) {
              return b.def(c + '==="cw"?2304:2305');
            });
          case "colorMask":
            return b(function (a) {
              return a.map(function (a) {
                return !!a;
              });
            }, function (a, b, c) {
              return J(4, function (a) {
                return "!!" + c + "[" + a + "]";
              });
            });
          case "sample.coverage":
            return b(function (a) {
              return ["value" in a ? a.value : 1, !!a.invert];
            }, function (a, b, c) {
              a = b.def('"value" in ', c, "?+", c, ".value:1");
              b = b.def("!!", c, ".invert");
              return [a, b];
            });
        }
      });
      return e;
    }
    function M(a, b) {
      var c = a["static"],
        d = a.dynamic,
        e = {};
      Object.keys(c).forEach(function (a) {
        var b = c[a],
          d;
        if ("number" === typeof b || "boolean" === typeof b) d = v(function () {
          return b;
        });else if ("function" === typeof b) {
          var f = b._reglType;
          if ("texture2d" === f || "textureCube" === f) d = v(function (a) {
            return a.link(b);
          });else if ("framebuffer" === f || "framebufferCube" === f) d = v(function (a) {
            return a.link(b.color[0]);
          });
        } else ma(b) && (d = v(function (a) {
          return a.global.def("[", J(b.length, function (a) {
            return b[a];
          }), "]");
        }));
        d.value = b;
        e[a] = d;
      });
      Object.keys(d).forEach(function (a) {
        var b = d[a];
        e[a] = L(b, function (a, c) {
          return a.invoke(c, b);
        });
      });
      return e;
    }
    function S(a, c) {
      var d = a["static"],
        e = a.dynamic,
        g = {};
      Object.keys(d).forEach(function (a) {
        var c = d[a],
          e = b.id(a),
          x = new ga();
        if (Qa(c)) x.state = 1, x.buffer = f.getBuffer(f.create(c, 34962, !1, !0)), x.type = 0;else {
          var h = f.getBuffer(c);
          if (h) x.state = 1, x.buffer = h, x.type = 0;else if ("constant" in c) {
            var I = c.constant;
            x.buffer = "null";
            x.state = 2;
            "number" === typeof I ? x.x = I : Ba.forEach(function (a, b) {
              b < I.length && (x[a] = I[b]);
            });
          } else {
            var h = Qa(c.buffer) ? f.getBuffer(f.create(c.buffer, 34962, !1, !0)) : f.getBuffer(c.buffer),
              k = c.offset | 0,
              l = c.stride | 0,
              m = c.size | 0,
              ka = !!c.normalized,
              n = 0;
            "type" in c && (n = Ia[c.type]);
            c = c.divisor | 0;
            x.buffer = h;
            x.state = 1;
            x.size = m;
            x.normalized = ka;
            x.type = n || h.dtype;
            x.offset = k;
            x.stride = l;
            x.divisor = c;
          }
        }
        g[a] = v(function (a, b) {
          var c = a.attribCache;
          if (e in c) return c[e];
          var d = {
            isStream: !1
          };
          Object.keys(x).forEach(function (a) {
            d[a] = x[a];
          });
          x.buffer && (d.buffer = a.link(x.buffer), d.type = d.type || d.buffer + ".dtype");
          return c[e] = d;
        });
      });
      Object.keys(e).forEach(function (a) {
        var b = e[a];
        g[a] = L(b, function (a, c) {
          function d(a) {
            c(h[a], "=", e, ".", a, "|0;");
          }
          var e = a.invoke(c, b),
            f = a.shared,
            g = a.constants,
            x = f.isBufferArgs,
            f = f.buffer,
            h = {
              isStream: c.def(!1)
            },
            I = new ga();
          I.state = 1;
          Object.keys(I).forEach(function (a) {
            h[a] = c.def("" + I[a]);
          });
          var k = h.buffer,
            l = h.type;
          c("if(", x, "(", e, ")){", h.isStream, "=true;", k, "=", f, ".createStream(", 34962, ",", e, ");", l, "=", k, ".dtype;", "}else{", k, "=", f, ".getBuffer(", e, ");", "if(", k, "){", l, "=", k, ".dtype;", '}else if("constant" in ', e, "){", h.state, "=", 2, ";", "if(typeof " + e + '.constant === "number"){', h[Ba[0]], "=", e, ".constant;", Ba.slice(1).map(function (a) {
            return h[a];
          }).join("="), "=0;", "}else{", Ba.map(function (a, b) {
            return h[a] + "=" + e + ".constant.length>" + b + "?" + e + ".constant[" + b + "]:0;";
          }).join(""), "}}else{", "if(", x, "(", e, ".buffer)){", k, "=", f, ".createStream(", 34962, ",", e, ".buffer);", "}else{", k, "=", f, ".getBuffer(", e, ".buffer);", "}", l, '="type" in ', e, "?", g.glTypes, "[", e, ".type]:", k, ".dtype;", h.normalized, "=!!", e, ".normalized;");
          d("size");
          d("offset");
          d("stride");
          d("divisor");
          c("}}");
          c.exit("if(", h.isStream, "){", f, ".destroyStream(", k, ");", "}");
          return h;
        });
      });
      return g;
    }
    function D(a, b) {
      var c = a["static"],
        d = a.dynamic;
      if ("vao" in c) {
        var e = c.vao;
        null !== e && null === t.getVAO(e) && (e = t.createVAO(e));
        return v(function (a) {
          return a.link(t.getVAO(e));
        });
      }
      if ("vao" in d) {
        var f = d.vao;
        return L(f, function (a, b) {
          var c = a.invoke(b, f);
          return b.def(a.shared.vao + ".getVAO(" + c + ")");
        });
      }
      return null;
    }
    function y(a) {
      var b = a["static"],
        c = a.dynamic,
        d = {};
      Object.keys(b).forEach(function (a) {
        var c = b[a];
        d[a] = v(function (a, b) {
          return "number" === typeof c || "boolean" === typeof c ? "" + c : a.link(c);
        });
      });
      Object.keys(c).forEach(function (a) {
        var b = c[a];
        d[a] = L(b, function (a, c) {
          return a.invoke(c, b);
        });
      });
      return d;
    }
    function la(a, b, d, e, f) {
      function h(a) {
        var b = m[a];
        b && ($a[a] = b);
      }
      var k = Z(a, b),
        l = E(a, f),
        m = F(a, l, f),
        n = H(a, f),
        $a = O(a, f),
        p = G(a, f, k);
      h("viewport");
      h(g("scissor.box"));
      var q = 0 < Object.keys($a).length,
        l = {
          framebuffer: l,
          draw: n,
          shader: p,
          state: $a,
          dirty: q,
          scopeVAO: null,
          drawVAO: null,
          useVAO: !1,
          attributes: {}
        };
      l.profile = z(a, f);
      l.uniforms = M(d, f);
      l.drawVAO = l.scopeVAO = D(a, f);
      if (!l.drawVAO && p.program && !k && c.angle_instanced_arrays) {
        var r = !0;
        a = p.program.attributes.map(function (a) {
          a = b["static"][a];
          r = r && !!a;
          return a;
        });
        if (r && 0 < a.length) {
          var w = t.getVAO(t.createVAO(a));
          l.drawVAO = new K(null, null, null, function (a, b) {
            return a.link(w);
          });
          l.useVAO = !0;
        }
      }
      k ? l.useVAO = !0 : l.attributes = S(b, f);
      l.context = y(e, f);
      return l;
    }
    function V(a, b, c) {
      var d = a.shared.context,
        e = a.scope();
      Object.keys(c).forEach(function (f) {
        b.save(d, "." + f);
        var g = c[f].append(a, b);
        Array.isArray(g) ? e(d, ".", f, "=[", g.join(), "];") : e(d, ".", f, "=", g, ";");
      });
      b(e);
    }
    function R(a, b, c, d) {
      var e = a.shared,
        f = e.gl,
        g = e.framebuffer,
        h;
      Ka && (h = b.def(e.extensions, ".webgl_draw_buffers"));
      var k = a.constants,
        e = k.drawBuffer,
        k = k.backBuffer;
      a = c ? c.append(a, b) : b.def(g, ".next");
      d || b("if(", a, "!==", g, ".cur){");
      b("if(", a, "){", f, ".bindFramebuffer(", 36160, ",", a, ".framebuffer);");
      Ka && b(h, ".drawBuffersWEBGL(", e, "[", a, ".colorAttachments.length]);");
      b("}else{", f, ".bindFramebuffer(", 36160, ",null);");
      Ka && b(h, ".drawBuffersWEBGL(", k, ");");
      b("}", g, ".cur=", a, ";");
      d || b("}");
    }
    function T(a, b, c) {
      var d = a.shared,
        e = d.gl,
        f = a.current,
        h = a.next,
        k = d.current,
        l = d.next,
        m = a.cond(k, ".dirty");
      La.forEach(function (b) {
        b = g(b);
        if (!(b in c.state)) {
          var d, I;
          if (b in h) {
            d = h[b];
            I = f[b];
            var n = J(pa[b].length, function (a) {
              return m.def(d, "[", a, "]");
            });
            m(a.cond(n.map(function (a, b) {
              return a + "!==" + I + "[" + b + "]";
            }).join("||")).then(e, ".", ra[b], "(", n, ");", n.map(function (a, b) {
              return I + "[" + b + "]=" + a;
            }).join(";"), ";"));
          } else d = m.def(l, ".", b), n = a.cond(d, "!==", k, ".", b), m(n), b in qa ? n(a.cond(d).then(e, ".enable(", qa[b], ");")["else"](e, ".disable(", qa[b], ");"), k, ".", b, "=", d, ";") : n(e, ".", ra[b], "(", d, ");", k, ".", b, "=", d, ";");
        }
      });
      0 === Object.keys(c.state).length && m(k, ".dirty=false;");
      b(m);
    }
    function N(a, b, c, d) {
      var e = a.shared,
        f = a.current,
        g = e.current,
        h = e.gl;
      zb(Object.keys(c)).forEach(function (e) {
        var k = c[e];
        if (!d || d(k)) {
          var l = k.append(a, b);
          if (qa[e]) {
            var m = qa[e];
            sa(k) ? l ? b(h, ".enable(", m, ");") : b(h, ".disable(", m, ");") : b(a.cond(l).then(h, ".enable(", m, ");")["else"](h, ".disable(", m, ");"));
            b(g, ".", e, "=", l, ";");
          } else if (ma(l)) {
            var n = f[e];
            b(h, ".", ra[e], "(", l, ");", l.map(function (a, b) {
              return n + "[" + b + "]=" + a;
            }).join(";"), ";");
          } else b(h, ".", ra[e], "(", l, ");", g, ".", e, "=", l, ";");
        }
      });
    }
    function C(a, b) {
      oa && (a.instancing = b.def(a.shared.extensions, ".angle_instanced_arrays"));
    }
    function Q(a, b, c, d, e) {
      function f() {
        return "undefined" === typeof performance ? "Date.now()" : "performance.now()";
      }
      function g(a) {
        r = b.def();
        a(r, "=", f(), ";");
        "string" === typeof e ? a(n, ".count+=", e, ";") : a(n, ".count++;");
        l && (d ? (t = b.def(), a(t, "=", q, ".getNumPendingQueries();")) : a(q, ".beginQuery(", n, ");"));
      }
      function h(a) {
        a(n, ".cpuTime+=", f(), "-", r, ";");
        l && (d ? a(q, ".pushScopeStats(", t, ",", q, ".getNumPendingQueries(),", n, ");") : a(q, ".endQuery();"));
      }
      function k(a) {
        var c = b.def(p, ".profile");
        b(p, ".profile=", a, ";");
        b.exit(p, ".profile=", c, ";");
      }
      var m = a.shared,
        n = a.stats,
        p = m.current,
        q = m.timer;
      c = c.profile;
      var r, t;
      if (c) {
        if (sa(c)) {
          c.enable ? (g(b), h(b.exit), k("true")) : k("false");
          return;
        }
        c = c.append(a, b);
        k(c);
      } else c = b.def(p, ".profile");
      m = a.block();
      g(m);
      b("if(", c, "){", m, "}");
      a = a.block();
      h(a);
      b.exit("if(", c, "){", a, "}");
    }
    function U(a, b, c, d, e) {
      function f(a) {
        switch (a) {
          case 35664:
          case 35667:
          case 35671:
            return 2;
          case 35665:
          case 35668:
          case 35672:
            return 3;
          case 35666:
          case 35669:
          case 35673:
            return 4;
          default:
            return 1;
        }
      }
      function g(c, d, e) {
        function f() {
          b("if(!", n, ".buffer){", l, ".enableVertexAttribArray(", m, ");}");
          var c = e.type,
            g;
          g = e.size ? b.def(e.size, "||", d) : d;
          b("if(", n, ".type!==", c, "||", n, ".size!==", g, "||", q.map(function (a) {
            return n + "." + a + "!==" + e[a];
          }).join("||"), "){", l, ".bindBuffer(", 34962, ",", ja, ".buffer);", l, ".vertexAttribPointer(", [m, g, c, e.normalized, e.stride, e.offset], ");", n, ".type=", c, ";", n, ".size=", g, ";", q.map(function (a) {
            return n + "." + a + "=" + e[a] + ";";
          }).join(""), "}");
          oa && (c = e.divisor, b("if(", n, ".divisor!==", c, "){", a.instancing, ".vertexAttribDivisorANGLE(", [m, c], ");", n, ".divisor=", c, ";}"));
        }
        function k() {
          b("if(", n, ".buffer){", l, ".disableVertexAttribArray(", m, ");", n, ".buffer=null;", "}if(", Ba.map(function (a, b) {
            return n + "." + a + "!==" + p[b];
          }).join("||"), "){", l, ".vertexAttrib4f(", m, ",", p, ");", Ba.map(function (a, b) {
            return n + "." + a + "=" + p[b] + ";";
          }).join(""), "}");
        }
        var l = h.gl,
          m = b.def(c, ".location"),
          n = b.def(h.attributes, "[", m, "]");
        c = e.state;
        var ja = e.buffer,
          p = [e.x, e.y, e.z, e.w],
          q = ["buffer", "normalized", "offset", "stride"];
        1 === c ? f() : 2 === c ? k() : (b("if(", c, "===", 1, "){"), f(), b("}else{"), k(), b("}"));
      }
      var h = a.shared;
      d.forEach(function (d) {
        var h = d.name,
          k = c.attributes[h],
          l;
        if (k) {
          if (!e(k)) return;
          l = k.append(a, b);
        } else {
          if (!e(Bb)) return;
          var m = a.scopeAttrib(h);
          l = {};
          Object.keys(new ga()).forEach(function (a) {
            l[a] = b.def(m, ".", a);
          });
        }
        g(a.link(d), f(d.info.type), l);
      });
    }
    function ta(a, c, d, e, f) {
      for (var g = a.shared, h = g.gl, k, l = 0; l < e.length; ++l) {
        var m = e[l],
          n = m.name,
          p = m.info.type,
          q = d.uniforms[n],
          m = a.link(m) + ".location",
          r;
        if (q) {
          if (!f(q)) continue;
          if (sa(q)) {
            n = q.value;
            if (35678 === p || 35680 === p) p = a.link(n._texture || n.color[0]._texture), c(h, ".uniform1i(", m, ",", p + ".bind());"), c.exit(p, ".unbind();");else if (35674 === p || 35675 === p || 35676 === p) n = a.global.def("new Float32Array([" + Array.prototype.slice.call(n) + "])"), q = 2, 35675 === p ? q = 3 : 35676 === p && (q = 4), c(h, ".uniformMatrix", q, "fv(", m, ",false,", n, ");");else {
              switch (p) {
                case 5126:
                  k = "1f";
                  break;
                case 35664:
                  k = "2f";
                  break;
                case 35665:
                  k = "3f";
                  break;
                case 35666:
                  k = "4f";
                  break;
                case 35670:
                  k = "1i";
                  break;
                case 5124:
                  k = "1i";
                  break;
                case 35671:
                  k = "2i";
                  break;
                case 35667:
                  k = "2i";
                  break;
                case 35672:
                  k = "3i";
                  break;
                case 35668:
                  k = "3i";
                  break;
                case 35673:
                  k = "4i";
                  break;
                case 35669:
                  k = "4i";
              }
              c(h, ".uniform", k, "(", m, ",", ma(n) ? Array.prototype.slice.call(n) : n, ");");
            }
            continue;
          } else r = q.append(a, c);
        } else {
          if (!f(Bb)) continue;
          r = c.def(g.uniforms, "[", b.id(n), "]");
        }
        35678 === p ? c("if(", r, "&&", r, '._reglType==="framebuffer"){', r, "=", r, ".color[0];", "}") : 35680 === p && c("if(", r, "&&", r, '._reglType==="framebufferCube"){', r, "=", r, ".color[0];", "}");
        n = 1;
        switch (p) {
          case 35678:
          case 35680:
            p = c.def(r, "._texture");
            c(h, ".uniform1i(", m, ",", p, ".bind());");
            c.exit(p, ".unbind();");
            continue;
          case 5124:
          case 35670:
            k = "1i";
            break;
          case 35667:
          case 35671:
            k = "2i";
            n = 2;
            break;
          case 35668:
          case 35672:
            k = "3i";
            n = 3;
            break;
          case 35669:
          case 35673:
            k = "4i";
            n = 4;
            break;
          case 5126:
            k = "1f";
            break;
          case 35664:
            k = "2f";
            n = 2;
            break;
          case 35665:
            k = "3f";
            n = 3;
            break;
          case 35666:
            k = "4f";
            n = 4;
            break;
          case 35674:
            k = "Matrix2fv";
            break;
          case 35675:
            k = "Matrix3fv";
            break;
          case 35676:
            k = "Matrix4fv";
        }
        c(h, ".uniform", k, "(", m, ",");
        if ("M" === k.charAt(0)) {
          var m = Math.pow(p - 35674 + 2, 2),
            t = a.global.def("new Float32Array(", m, ")");
          Array.isArray(r) ? c("false,(", J(m, function (a) {
            return t + "[" + a + "]=" + r[a];
          }), ",", t, ")") : c("false,(Array.isArray(", r, ")||", r, " instanceof Float32Array)?", r, ":(", J(m, function (a) {
            return t + "[" + a + "]=" + r + "[" + a + "]";
          }), ",", t, ")");
        } else 1 < n ? c(J(n, function (a) {
          return Array.isArray(r) ? r[a] : r + "[" + a + "]";
        })) : c(r);
        c(");");
      }
    }
    function aa(a, b, c, d) {
      function e(f) {
        var g = m[f];
        return g ? g.contextDep && d.contextDynamic || g.propDep ? g.append(a, c) : g.append(a, b) : b.def(l, ".", f);
      }
      function f() {
        function a() {
          c(w, ".drawElementsInstancedANGLE(", [p, q, u, r + "<<((" + u + "-5121)>>1)", t], ");");
        }
        function b() {
          c(w, ".drawArraysInstancedANGLE(", [p, r, q, t], ");");
        }
        n ? B ? a() : (c("if(", n, "){"), a(), c("}else{"), b(), c("}")) : b();
      }
      function g() {
        function a() {
          c(k + ".drawElements(" + [p, q, u, r + "<<((" + u + "-5121)>>1)"] + ");");
        }
        function b() {
          c(k + ".drawArrays(" + [p, r, q] + ");");
        }
        n ? B ? a() : (c("if(", n, "){"), a(), c("}else{"), b(), c("}")) : b();
      }
      var h = a.shared,
        k = h.gl,
        l = h.draw,
        m = d.draw,
        n = function () {
          var e = m.elements,
            f = b;
          if (e) {
            if (e.contextDep && d.contextDynamic || e.propDep) f = c;
            e = e.append(a, f);
          } else e = f.def(l, ".", "elements");
          e && f("if(" + e + ")" + k + ".bindBuffer(34963," + e + ".buffer.buffer);");
          return e;
        }(),
        p = e("primitive"),
        r = e("offset"),
        q = function () {
          var e = m.count,
            f = b;
          if (e) {
            if (e.contextDep && d.contextDynamic || e.propDep) f = c;
            e = e.append(a, f);
          } else e = f.def(l, ".", "count");
          return e;
        }();
      if ("number" === typeof q) {
        if (0 === q) return;
      } else c("if(", q, "){"), c.exit("}");
      var t, w;
      oa && (t = e("instances"), w = a.instancing);
      var u = n + ".type",
        B = m.elements && sa(m.elements);
      oa && ("number" !== typeof t || 0 <= t) ? "string" === typeof t ? (c("if(", t, ">0){"), f(), c("}else if(", t, "<0){"), g(), c("}")) : f() : g();
    }
    function X(a, b, c, d, e) {
      b = m();
      e = b.proc("body", e);
      oa && (b.instancing = e.def(b.shared.extensions, ".angle_instanced_arrays"));
      a(b, e, c, d);
      return b.compile().body;
    }
    function fa(a, b, c, d) {
      C(a, b);
      c.useVAO ? c.drawVAO ? b(a.shared.vao, ".setVAO(", c.drawVAO.append(a, b), ");") : b(a.shared.vao, ".setVAO(", a.shared.vao, ".targetVAO);") : (b(a.shared.vao, ".setVAO(null);"), U(a, b, c, d.attributes, function () {
        return !0;
      }));
      ta(a, b, c, d.uniforms, function () {
        return !0;
      });
      aa(a, b, b, c);
    }
    function Da(a, b) {
      var c = a.proc("draw", 1);
      C(a, c);
      V(a, c, b.context);
      R(a, c, b.framebuffer);
      T(a, c, b);
      N(a, c, b.state);
      Q(a, c, b, !1, !0);
      var d = b.shader.progVar.append(a, c);
      c(a.shared.gl, ".useProgram(", d, ".program);");
      if (b.shader.program) fa(a, c, b, b.shader.program);else {
        c(a.shared.vao, ".setVAO(null);");
        var e = a.global.def("{}"),
          f = c.def(d, ".id"),
          g = c.def(e, "[", f, "]");
        c(a.cond(g).then(g, ".call(this,a0);")["else"](g, "=", e, "[", f, "]=", a.link(function (c) {
          return X(fa, a, b, c, 1);
        }), "(", d, ");", g, ".call(this,a0);"));
      }
      0 < Object.keys(b.state).length && c(a.shared.current, ".dirty=true;");
    }
    function ua(a, b, c, d) {
      function e() {
        return !0;
      }
      a.batchId = "a1";
      C(a, b);
      U(a, b, c, d.attributes, e);
      ta(a, b, c, d.uniforms, e);
      aa(a, b, b, c);
    }
    function P(a, b, c, d) {
      function e(a) {
        return a.contextDep && g || a.propDep;
      }
      function f(a) {
        return !e(a);
      }
      C(a, b);
      var g = c.contextDep,
        h = b.def(),
        k = b.def();
      a.shared.props = k;
      a.batchId = h;
      var l = a.scope(),
        m = a.scope();
      b(l.entry, "for(", h, "=0;", h, "<", "a1", ";++", h, "){", k, "=", "a0", "[", h, "];", m, "}", l.exit);
      c.needsContext && V(a, m, c.context);
      c.needsFramebuffer && R(a, m, c.framebuffer);
      N(a, m, c.state, e);
      c.profile && e(c.profile) && Q(a, m, c, !1, !0);
      d ? (c.useVAO ? c.drawVAO ? e(c.drawVAO) ? m(a.shared.vao, ".setVAO(", c.drawVAO.append(a, m), ");") : l(a.shared.vao, ".setVAO(", c.drawVAO.append(a, l), ");") : l(a.shared.vao, ".setVAO(", a.shared.vao, ".targetVAO);") : (l(a.shared.vao, ".setVAO(null);"), U(a, l, c, d.attributes, f), U(a, m, c, d.attributes, e)), ta(a, l, c, d.uniforms, f), ta(a, m, c, d.uniforms, e), aa(a, l, m, c)) : (b = a.global.def("{}"), d = c.shader.progVar.append(a, m), k = m.def(d, ".id"), l = m.def(b, "[", k, "]"), m(a.shared.gl, ".useProgram(", d, ".program);", "if(!", l, "){", l, "=", b, "[", k, "]=", a.link(function (b) {
        return X(ua, a, c, b, 2);
      }), "(", d, ");}", l, ".call(this,a0[", h, "],", h, ");"));
    }
    function da(a, b) {
      function c(a) {
        return a.contextDep && e || a.propDep;
      }
      var d = a.proc("batch", 2);
      a.batchId = "0";
      C(a, d);
      var e = !1,
        f = !0;
      Object.keys(b.context).forEach(function (a) {
        e = e || b.context[a].propDep;
      });
      e || (V(a, d, b.context), f = !1);
      var g = b.framebuffer,
        h = !1;
      g ? (g.propDep ? e = h = !0 : g.contextDep && e && (h = !0), h || R(a, d, g)) : R(a, d, null);
      b.state.viewport && b.state.viewport.propDep && (e = !0);
      T(a, d, b);
      N(a, d, b.state, function (a) {
        return !c(a);
      });
      b.profile && c(b.profile) || Q(a, d, b, !1, "a1");
      b.contextDep = e;
      b.needsContext = f;
      b.needsFramebuffer = h;
      f = b.shader.progVar;
      if (f.contextDep && e || f.propDep) P(a, d, b, null);else if (f = f.append(a, d), d(a.shared.gl, ".useProgram(", f, ".program);"), b.shader.program) P(a, d, b, b.shader.program);else {
        d(a.shared.vao, ".setVAO(null);");
        var g = a.global.def("{}"),
          h = d.def(f, ".id"),
          k = d.def(g, "[", h, "]");
        d(a.cond(k).then(k, ".call(this,a0,a1);")["else"](k, "=", g, "[", h, "]=", a.link(function (c) {
          return X(P, a, b, c, 2);
        }), "(", f, ");", k, ".call(this,a0,a1);"));
      }
      0 < Object.keys(b.state).length && d(a.shared.current, ".dirty=true;");
    }
    function ea(a, c) {
      function d(b) {
        var g = c.shader[b];
        g && e.set(f.shader, "." + b, g.append(a, e));
      }
      var e = a.proc("scope", 3);
      a.batchId = "a2";
      var f = a.shared,
        g = f.current;
      V(a, e, c.context);
      c.framebuffer && c.framebuffer.append(a, e);
      zb(Object.keys(c.state)).forEach(function (b) {
        var d = c.state[b].append(a, e);
        ma(d) ? d.forEach(function (c, d) {
          e.set(a.next[b], "[" + d + "]", c);
        }) : e.set(f.next, "." + b, d);
      });
      Q(a, e, c, !0, !0);
      ["elements", "offset", "count", "instances", "primitive"].forEach(function (b) {
        var d = c.draw[b];
        d && e.set(f.draw, "." + b, "" + d.append(a, e));
      });
      Object.keys(c.uniforms).forEach(function (d) {
        var g = c.uniforms[d].append(a, e);
        Array.isArray(g) && (g = "[" + g.join() + "]");
        e.set(f.uniforms, "[" + b.id(d) + "]", g);
      });
      Object.keys(c.attributes).forEach(function (b) {
        var d = c.attributes[b].append(a, e),
          f = a.scopeAttrib(b);
        Object.keys(new ga()).forEach(function (a) {
          e.set(f, "." + a, d[a]);
        });
      });
      c.scopeVAO && e.set(f.vao, ".targetVAO", c.scopeVAO.append(a, e));
      d("vert");
      d("frag");
      0 < Object.keys(c.state).length && (e(g, ".dirty=true;"), e.exit(g, ".dirty=true;"));
      e("a1(", a.shared.context, ",a0,", a.batchId, ");");
    }
    function ha(a) {
      if ("object" === _typeof(a) && !ma(a)) {
        for (var b = Object.keys(a), c = 0; c < b.length; ++c) if (Y.isDynamic(a[b[c]])) return !0;
        return !1;
      }
    }
    function ia(a, b, c) {
      function d(a, b) {
        g.forEach(function (c) {
          var d = e[c];
          Y.isDynamic(d) && (d = a.invoke(b, d), b(m, ".", c, "=", d, ";"));
        });
      }
      var e = b["static"][c];
      if (e && ha(e)) {
        var f = a.global,
          g = Object.keys(e),
          h = !1,
          k = !1,
          l = !1,
          m = a.global.def("{}");
        g.forEach(function (b) {
          var c = e[b];
          if (Y.isDynamic(c)) "function" === typeof c && (c = e[b] = Y.unbox(c)), b = L(c, null), h = h || b.thisDep, l = l || b.propDep, k = k || b.contextDep;else {
            f(m, ".", b, "=");
            switch (_typeof(c)) {
              case "number":
                f(c);
                break;
              case "string":
                f('"', c, '"');
                break;
              case "object":
                Array.isArray(c) && f("[", c.join(), "]");
                break;
              default:
                f(a.link(c));
            }
            f(";");
          }
        });
        b.dynamic[c] = new Y.DynamicVariable(4, {
          thisDep: h,
          contextDep: k,
          propDep: l,
          ref: m,
          append: d
        });
        delete b["static"][c];
      }
    }
    var ga = t.Record,
      W = {
        add: 32774,
        subtract: 32778,
        "reverse subtract": 32779
      };
    c.ext_blend_minmax && (W.min = 32775, W.max = 32776);
    var oa = c.angle_instanced_arrays,
      Ka = c.webgl_draw_buffers,
      pa = {
        dirty: !0,
        profile: h.profile
      },
      Ca = {},
      La = [],
      qa = {},
      ra = {};
    q("dither", 3024);
    q("blend.enable", 3042);
    r("blend.color", "blendColor", [0, 0, 0, 0]);
    r("blend.equation", "blendEquationSeparate", [32774, 32774]);
    r("blend.func", "blendFuncSeparate", [1, 0, 1, 0]);
    q("depth.enable", 2929, !0);
    r("depth.func", "depthFunc", 513);
    r("depth.range", "depthRange", [0, 1]);
    r("depth.mask", "depthMask", !0);
    r("colorMask", "colorMask", [!0, !0, !0, !0]);
    q("cull.enable", 2884);
    r("cull.face", "cullFace", 1029);
    r("frontFace", "frontFace", 2305);
    r("lineWidth", "lineWidth", 1);
    q("polygonOffset.enable", 32823);
    r("polygonOffset.offset", "polygonOffset", [0, 0]);
    q("sample.alpha", 32926);
    q("sample.enable", 32928);
    r("sample.coverage", "sampleCoverage", [1, !1]);
    q("stencil.enable", 2960);
    r("stencil.mask", "stencilMask", -1);
    r("stencil.func", "stencilFunc", [519, 0, -1]);
    r("stencil.opFront", "stencilOpSeparate", [1028, 7680, 7680, 7680]);
    r("stencil.opBack", "stencilOpSeparate", [1029, 7680, 7680, 7680]);
    q("scissor.enable", 3089);
    r("scissor.box", "scissor", [0, 0, a.drawingBufferWidth, a.drawingBufferHeight]);
    r("viewport", "viewport", [0, 0, a.drawingBufferWidth, a.drawingBufferHeight]);
    var ub = {
        gl: a,
        context: B,
        strings: b,
        next: Ca,
        current: pa,
        draw: k,
        elements: d,
        buffer: f,
        shader: w,
        attributes: t.state,
        vao: t,
        uniforms: u,
        framebuffer: n,
        extensions: c,
        timer: l,
        isBufferArgs: Qa
      },
      Na = {
        primTypes: Ta,
        compareFuncs: ab,
        blendFuncs: Ea,
        blendEquations: W,
        stencilOps: Ra,
        glTypes: Ia,
        orientationType: Ab
      };
    Ka && (Na.backBuffer = [1029], Na.drawBuffer = J(e.maxDrawbuffers, function (a) {
      return 0 === a ? [0] : J(a, function (a) {
        return 36064 + a;
      });
    }));
    var na = 0;
    return {
      next: Ca,
      current: pa,
      procs: function () {
        var a = m(),
          b = a.proc("poll"),
          d = a.proc("refresh"),
          f = a.block();
        b(f);
        d(f);
        var g = a.shared,
          h = g.gl,
          k = g.next,
          l = g.current;
        f(l, ".dirty=false;");
        R(a, b);
        R(a, d, null, !0);
        var n;
        oa && (n = a.link(oa));
        c.oes_vertex_array_object && d(a.link(c.oes_vertex_array_object), ".bindVertexArrayOES(null);");
        for (var p = 0; p < e.maxAttributes; ++p) {
          var q = d.def(g.attributes, "[", p, "]"),
            r = a.cond(q, ".buffer");
          r.then(h, ".enableVertexAttribArray(", p, ");", h, ".bindBuffer(", 34962, ",", q, ".buffer.buffer);", h, ".vertexAttribPointer(", p, ",", q, ".size,", q, ".type,", q, ".normalized,", q, ".stride,", q, ".offset);")["else"](h, ".disableVertexAttribArray(", p, ");", h, ".vertexAttrib4f(", p, ",", q, ".x,", q, ".y,", q, ".z,", q, ".w);", q, ".buffer=null;");
          d(r);
          oa && d(n, ".vertexAttribDivisorANGLE(", p, ",", q, ".divisor);");
        }
        d(a.shared.vao, ".currentVAO=null;", a.shared.vao, ".setVAO(", a.shared.vao, ".targetVAO);");
        Object.keys(qa).forEach(function (c) {
          var e = qa[c],
            g = f.def(k, ".", c),
            m = a.block();
          m("if(", g, "){", h, ".enable(", e, ")}else{", h, ".disable(", e, ")}", l, ".", c, "=", g, ";");
          d(m);
          b("if(", g, "!==", l, ".", c, "){", m, "}");
        });
        Object.keys(ra).forEach(function (c) {
          var e = ra[c],
            g = pa[c],
            m,
            n,
            p = a.block();
          p(h, ".", e, "(");
          ma(g) ? (e = g.length, m = a.global.def(k, ".", c), n = a.global.def(l, ".", c), p(J(e, function (a) {
            return m + "[" + a + "]";
          }), ");", J(e, function (a) {
            return n + "[" + a + "]=" + m + "[" + a + "];";
          }).join("")), b("if(", J(e, function (a) {
            return m + "[" + a + "]!==" + n + "[" + a + "]";
          }).join("||"), "){", p, "}")) : (m = f.def(k, ".", c), n = f.def(l, ".", c), p(m, ");", l, ".", c, "=", m, ";"), b("if(", m, "!==", n, "){", p, "}"));
          d(p);
        });
        return a.compile();
      }(),
      compile: function compile(a, b, c, d, e) {
        var f = m();
        f.stats = f.link(e);
        Object.keys(b["static"]).forEach(function (a) {
          ia(f, b, a);
        });
        Xb.forEach(function (b) {
          ia(f, a, b);
        });
        var g = la(a, b, c, d, f);
        Da(f, g);
        ea(f, g);
        da(f, g);
        return A(f.compile(), {
          destroy: function destroy() {
            g.shader.program.destroy();
          }
        });
      }
    };
  }
  function Cb(a, b) {
    for (var c = 0; c < a.length; ++c) if (a[c] === b) return c;
    return -1;
  }
  var A = function A(a, b) {
      for (var c = Object.keys(b), e = 0; e < c.length; ++e) a[c[e]] = b[c[e]];
      return a;
    },
    Eb = 0,
    Y = {
      DynamicVariable: U,
      define: function define(a, b) {
        return new U(a, cb(b + ""));
      },
      isDynamic: function isDynamic(a) {
        return "function" === typeof a && !a._reglType || a instanceof U;
      },
      unbox: db,
      accessor: cb
    },
    bb = {
      next: "function" === typeof requestAnimationFrame ? function (a) {
        return requestAnimationFrame(a);
      } : function (a) {
        return setTimeout(a, 16);
      },
      cancel: "function" === typeof cancelAnimationFrame ? function (a) {
        return cancelAnimationFrame(a);
      } : clearTimeout
    },
    Db = "undefined" !== typeof performance && performance.now ? function () {
      return performance.now();
    } : function () {
      return +new Date();
    },
    E = hb();
  E.zero = hb();
  var Yb = function Yb(a, b) {
      var c = 1;
      b.ext_texture_filter_anisotropic && (c = a.getParameter(34047));
      var e = 1,
        f = 1;
      b.webgl_draw_buffers && (e = a.getParameter(34852), f = a.getParameter(36063));
      var d = !!b.oes_texture_float;
      if (d) {
        d = a.createTexture();
        a.bindTexture(3553, d);
        a.texImage2D(3553, 0, 6408, 1, 1, 0, 6408, 5126, null);
        var p = a.createFramebuffer();
        a.bindFramebuffer(36160, p);
        a.framebufferTexture2D(36160, 36064, 3553, d, 0);
        a.bindTexture(3553, null);
        if (36053 !== a.checkFramebufferStatus(36160)) d = !1;else {
          a.viewport(0, 0, 1, 1);
          a.clearColor(1, 0, 0, 1);
          a.clear(16384);
          var n = E.allocType(5126, 4);
          a.readPixels(0, 0, 1, 1, 6408, 5126, n);
          a.getError() ? d = !1 : (a.deleteFramebuffer(p), a.deleteTexture(d), d = 1 === n[0]);
          E.freeType(n);
        }
      }
      n = !0;
      "undefined" !== typeof navigator && (/MSIE/.test(navigator.userAgent) || /Trident\//.test(navigator.appVersion) || /Edge/.test(navigator.userAgent)) || (n = a.createTexture(), p = E.allocType(5121, 36), a.activeTexture(33984), a.bindTexture(34067, n), a.texImage2D(34069, 0, 6408, 3, 3, 0, 6408, 5121, p), E.freeType(p), a.bindTexture(34067, null), a.deleteTexture(n), n = !a.getError());
      return {
        colorBits: [a.getParameter(3410), a.getParameter(3411), a.getParameter(3412), a.getParameter(3413)],
        depthBits: a.getParameter(3414),
        stencilBits: a.getParameter(3415),
        subpixelBits: a.getParameter(3408),
        extensions: Object.keys(b).filter(function (a) {
          return !!b[a];
        }),
        maxAnisotropic: c,
        maxDrawbuffers: e,
        maxColorAttachments: f,
        pointSizeDims: a.getParameter(33901),
        lineWidthDims: a.getParameter(33902),
        maxViewportDims: a.getParameter(3386),
        maxCombinedTextureUnits: a.getParameter(35661),
        maxCubeMapSize: a.getParameter(34076),
        maxRenderbufferSize: a.getParameter(34024),
        maxTextureUnits: a.getParameter(34930),
        maxTextureSize: a.getParameter(3379),
        maxAttributes: a.getParameter(34921),
        maxVertexUniforms: a.getParameter(36347),
        maxVertexTextureUnits: a.getParameter(35660),
        maxVaryingVectors: a.getParameter(36348),
        maxFragmentUniforms: a.getParameter(36349),
        glsl: a.getParameter(35724),
        renderer: a.getParameter(7937),
        vendor: a.getParameter(7936),
        version: a.getParameter(7938),
        readFloat: d,
        npotTextureCube: n
      };
    },
    M = function M(a) {
      return a instanceof Uint8Array || a instanceof Uint16Array || a instanceof Uint32Array || a instanceof Int8Array || a instanceof Int16Array || a instanceof Int32Array || a instanceof Float32Array || a instanceof Float64Array || a instanceof Uint8ClampedArray;
    },
    S = function S(a) {
      return Object.keys(a).map(function (b) {
        return a[b];
      });
    },
    Oa = {
      shape: function shape(a) {
        for (var b = []; a.length; a = a[0]) b.push(a.length);
        return b;
      },
      flatten: function flatten(a, b, c, e) {
        var f = 1;
        if (b.length) for (var d = 0; d < b.length; ++d) f *= b[d];else f = 0;
        c = e || E.allocType(c, f);
        switch (b.length) {
          case 0:
            break;
          case 1:
            e = b[0];
            for (b = 0; b < e; ++b) c[b] = a[b];
            break;
          case 2:
            e = b[0];
            b = b[1];
            for (d = f = 0; d < e; ++d) for (var p = a[d], n = 0; n < b; ++n) c[f++] = p[n];
            break;
          case 3:
            ib(a, b[0], b[1], b[2], c, 0);
            break;
          default:
            jb(a, b, 0, c, 0);
        }
        return c;
      }
    },
    Ga = {
      "[object Int8Array]": 5120,
      "[object Int16Array]": 5122,
      "[object Int32Array]": 5124,
      "[object Uint8Array]": 5121,
      "[object Uint8ClampedArray]": 5121,
      "[object Uint16Array]": 5123,
      "[object Uint32Array]": 5125,
      "[object Float32Array]": 5126,
      "[object Float64Array]": 5121,
      "[object ArrayBuffer]": 5121
    },
    Ia = {
      int8: 5120,
      int16: 5122,
      int32: 5124,
      uint8: 5121,
      uint16: 5123,
      uint32: 5125,
      "float": 5126,
      float32: 5126
    },
    ob = {
      dynamic: 35048,
      stream: 35040,
      "static": 35044
    },
    Sa = Oa.flatten,
    mb = Oa.shape,
    ha = [];
  ha[5120] = 1;
  ha[5122] = 2;
  ha[5124] = 4;
  ha[5121] = 1;
  ha[5123] = 2;
  ha[5125] = 4;
  ha[5126] = 4;
  var Ta = {
      points: 0,
      point: 0,
      lines: 1,
      line: 1,
      triangles: 4,
      triangle: 4,
      "line loop": 2,
      "line strip": 3,
      "triangle strip": 5,
      "triangle fan": 6
    },
    qb = new Float32Array(1),
    Mb = new Uint32Array(qb.buffer),
    Qb = [9984, 9986, 9985, 9987],
    Ma = [0, 6409, 6410, 6407, 6408],
    Q = {};
  Q[6409] = Q[6406] = Q[6402] = 1;
  Q[34041] = Q[6410] = 2;
  Q[6407] = Q[35904] = 3;
  Q[6408] = Q[35906] = 4;
  var Wa = na("HTMLCanvasElement"),
    Xa = na("OffscreenCanvas"),
    vb = na("CanvasRenderingContext2D"),
    wb = na("ImageBitmap"),
    xb = na("HTMLImageElement"),
    yb = na("HTMLVideoElement"),
    Nb = Object.keys(Ga).concat([Wa, Xa, vb, wb, xb, yb]),
    wa = [];
  wa[5121] = 1;
  wa[5126] = 4;
  wa[36193] = 2;
  wa[5123] = 2;
  wa[5125] = 4;
  var F = [];
  F[32854] = 2;
  F[32855] = 2;
  F[36194] = 2;
  F[34041] = 4;
  F[33776] = .5;
  F[33777] = .5;
  F[33778] = 1;
  F[33779] = 1;
  F[35986] = .5;
  F[35987] = 1;
  F[34798] = 1;
  F[35840] = .5;
  F[35841] = .25;
  F[35842] = .5;
  F[35843] = .25;
  F[36196] = .5;
  var T = [];
  T[32854] = 2;
  T[32855] = 2;
  T[36194] = 2;
  T[33189] = 2;
  T[36168] = 1;
  T[34041] = 4;
  T[35907] = 4;
  T[34836] = 16;
  T[34842] = 8;
  T[34843] = 6;
  var Zb = function Zb(a, b, c, e, f) {
      function d(a) {
        this.id = t++;
        this.refCount = 1;
        this.renderbuffer = a;
        this.format = 32854;
        this.height = this.width = 0;
        f.profile && (this.stats = {
          size: 0
        });
      }
      function p(b) {
        var c = b.renderbuffer;
        a.bindRenderbuffer(36161, null);
        a.deleteRenderbuffer(c);
        b.renderbuffer = null;
        b.refCount = 0;
        delete w[b.id];
        e.renderbufferCount--;
      }
      var n = {
        rgba4: 32854,
        rgb565: 36194,
        "rgb5 a1": 32855,
        depth: 33189,
        stencil: 36168,
        "depth stencil": 34041
      };
      b.ext_srgb && (n.srgba = 35907);
      b.ext_color_buffer_half_float && (n.rgba16f = 34842, n.rgb16f = 34843);
      b.webgl_color_buffer_float && (n.rgba32f = 34836);
      var u = [];
      Object.keys(n).forEach(function (a) {
        u[n[a]] = a;
      });
      var t = 0,
        w = {};
      d.prototype.decRef = function () {
        0 >= --this.refCount && p(this);
      };
      f.profile && (e.getTotalRenderbufferSize = function () {
        var a = 0;
        Object.keys(w).forEach(function (b) {
          a += w[b].stats.size;
        });
        return a;
      });
      return {
        create: function create(b, c) {
          function l(b, c) {
            var d = 0,
              e = 0,
              k = 32854;
            "object" === _typeof(b) && b ? ("shape" in b ? (e = b.shape, d = e[0] | 0, e = e[1] | 0) : ("radius" in b && (d = e = b.radius | 0), "width" in b && (d = b.width | 0), "height" in b && (e = b.height | 0)), "format" in b && (k = n[b.format])) : "number" === typeof b ? (d = b | 0, e = "number" === typeof c ? c | 0 : d) : b || (d = e = 1);
            if (d !== h.width || e !== h.height || k !== h.format) return l.width = h.width = d, l.height = h.height = e, h.format = k, a.bindRenderbuffer(36161, h.renderbuffer), a.renderbufferStorage(36161, k, d, e), f.profile && (h.stats.size = T[h.format] * h.width * h.height), l.format = u[h.format], l;
          }
          var h = new d(a.createRenderbuffer());
          w[h.id] = h;
          e.renderbufferCount++;
          l(b, c);
          l.resize = function (b, c) {
            var d = b | 0,
              e = c | 0 || d;
            if (d === h.width && e === h.height) return l;
            l.width = h.width = d;
            l.height = h.height = e;
            a.bindRenderbuffer(36161, h.renderbuffer);
            a.renderbufferStorage(36161, h.format, d, e);
            f.profile && (h.stats.size = T[h.format] * h.width * h.height);
            return l;
          };
          l._reglType = "renderbuffer";
          l._renderbuffer = h;
          f.profile && (l.stats = h.stats);
          l.destroy = function () {
            h.decRef();
          };
          return l;
        },
        clear: function clear() {
          S(w).forEach(p);
        },
        restore: function restore() {
          S(w).forEach(function (b) {
            b.renderbuffer = a.createRenderbuffer();
            a.bindRenderbuffer(36161, b.renderbuffer);
            a.renderbufferStorage(36161, b.format, b.width, b.height);
          });
          a.bindRenderbuffer(36161, null);
        }
      };
    },
    Ya = [];
  Ya[6408] = 4;
  Ya[6407] = 3;
  var Pa = [];
  Pa[5121] = 1;
  Pa[5126] = 4;
  Pa[36193] = 2;
  var Ba = ["x", "y", "z", "w"],
    Xb = "blend.func blend.equation stencil.func stencil.opFront stencil.opBack sample.coverage viewport scissor.box polygonOffset.offset".split(" "),
    Ea = {
      0: 0,
      1: 1,
      zero: 0,
      one: 1,
      "src color": 768,
      "one minus src color": 769,
      "src alpha": 770,
      "one minus src alpha": 771,
      "dst color": 774,
      "one minus dst color": 775,
      "dst alpha": 772,
      "one minus dst alpha": 773,
      "constant color": 32769,
      "one minus constant color": 32770,
      "constant alpha": 32771,
      "one minus constant alpha": 32772,
      "src alpha saturate": 776
    },
    ab = {
      never: 512,
      less: 513,
      "<": 513,
      equal: 514,
      "=": 514,
      "==": 514,
      "===": 514,
      lequal: 515,
      "<=": 515,
      greater: 516,
      ">": 516,
      notequal: 517,
      "!=": 517,
      "!==": 517,
      gequal: 518,
      ">=": 518,
      always: 519
    },
    Ra = {
      0: 0,
      zero: 0,
      keep: 7680,
      replace: 7681,
      increment: 7682,
      decrement: 7683,
      "increment wrap": 34055,
      "decrement wrap": 34056,
      invert: 5386
    },
    Ab = {
      cw: 2304,
      ccw: 2305
    },
    Bb = new K(!1, !1, !1, function () {}),
    $b = function $b(a, b) {
      function c() {
        this.endQueryIndex = this.startQueryIndex = -1;
        this.sum = 0;
        this.stats = null;
      }
      function e(a, b, d) {
        var e = p.pop() || new c();
        e.startQueryIndex = a;
        e.endQueryIndex = b;
        e.sum = 0;
        e.stats = d;
        n.push(e);
      }
      if (!b.ext_disjoint_timer_query) return null;
      var f = [],
        d = [],
        p = [],
        n = [],
        u = [],
        t = [];
      return {
        beginQuery: function beginQuery(a) {
          var c = f.pop() || b.ext_disjoint_timer_query.createQueryEXT();
          b.ext_disjoint_timer_query.beginQueryEXT(35007, c);
          d.push(c);
          e(d.length - 1, d.length, a);
        },
        endQuery: function endQuery() {
          b.ext_disjoint_timer_query.endQueryEXT(35007);
        },
        pushScopeStats: e,
        update: function update() {
          var a, c;
          a = d.length;
          if (0 !== a) {
            t.length = Math.max(t.length, a + 1);
            u.length = Math.max(u.length, a + 1);
            u[0] = 0;
            var e = t[0] = 0;
            for (c = a = 0; c < d.length; ++c) {
              var l = d[c];
              b.ext_disjoint_timer_query.getQueryObjectEXT(l, 34919) ? (e += b.ext_disjoint_timer_query.getQueryObjectEXT(l, 34918), f.push(l)) : d[a++] = l;
              u[c + 1] = e;
              t[c + 1] = a;
            }
            d.length = a;
            for (c = a = 0; c < n.length; ++c) {
              var e = n[c],
                h = e.startQueryIndex,
                l = e.endQueryIndex;
              e.sum += u[l] - u[h];
              h = t[h];
              l = t[l];
              l === h ? (e.stats.gpuTime += e.sum / 1E6, p.push(e)) : (e.startQueryIndex = h, e.endQueryIndex = l, n[a++] = e);
            }
            n.length = a;
          }
        },
        getNumPendingQueries: function getNumPendingQueries() {
          return d.length;
        },
        clear: function clear() {
          f.push.apply(f, d);
          for (var a = 0; a < f.length; a++) b.ext_disjoint_timer_query.deleteQueryEXT(f[a]);
          d.length = 0;
          f.length = 0;
        },
        restore: function restore() {
          d.length = 0;
          f.length = 0;
        }
      };
    };
  return function (a) {
    function b() {
      if (0 === C.length) z && z.update(), aa = null;else {
        aa = bb.next(b);
        w();
        for (var a = C.length - 1; 0 <= a; --a) {
          var c = C[a];
          c && c(G, null, 0);
        }
        l.flush();
        z && z.update();
      }
    }
    function c() {
      !aa && 0 < C.length && (aa = bb.next(b));
    }
    function e() {
      aa && (bb.cancel(b), aa = null);
    }
    function f(a) {
      a.preventDefault();
      e();
      S.forEach(function (a) {
        a();
      });
    }
    function d(a) {
      l.getError();
      g.restore();
      D.restore();
      O.restore();
      y.restore();
      L.restore();
      V.restore();
      J.restore();
      z && z.restore();
      R.procs.refresh();
      c();
      T.forEach(function (a) {
        a();
      });
    }
    function p(a) {
      function b(a, c) {
        var d = {},
          e = {};
        Object.keys(a).forEach(function (b) {
          var f = a[b];
          if (Y.isDynamic(f)) e[b] = Y.unbox(f, b);else {
            if (c && Array.isArray(f)) for (var g = 0; g < f.length; ++g) if (Y.isDynamic(f[g])) {
              e[b] = Y.unbox(f, b);
              return;
            }
            d[b] = f;
          }
        });
        return {
          dynamic: e,
          "static": d
        };
      }
      function c(a) {
        for (; n.length < a;) n.push(null);
        return n;
      }
      var d = b(a.context || {}, !0),
        e = b(a.uniforms || {}, !0),
        f = b(a.attributes || {}, !1);
      a = b(function (a) {
        function b(a) {
          if (a in c) {
            var d = c[a];
            delete c[a];
            Object.keys(d).forEach(function (b) {
              c[a + "." + b] = d[b];
            });
          }
        }
        var c = A({}, a);
        delete c.uniforms;
        delete c.attributes;
        delete c.context;
        delete c.vao;
        "stencil" in c && c.stencil.op && (c.stencil.opBack = c.stencil.opFront = c.stencil.op, delete c.stencil.op);
        b("blend");
        b("depth");
        b("cull");
        b("stencil");
        b("polygonOffset");
        b("scissor");
        b("sample");
        "vao" in a && (c.vao = a.vao);
        return c;
      }(a), !1);
      var g = {
          gpuTime: 0,
          cpuTime: 0,
          count: 0
        },
        h = R.compile(a, f, e, d, g),
        k = h.draw,
        l = h.batch,
        m = h.scope,
        n = [];
      return A(function (a, b) {
        var d;
        if ("function" === typeof a) return m.call(this, null, a, 0);
        if ("function" === typeof b) {
          if ("number" === typeof a) for (d = 0; d < a; ++d) m.call(this, null, b, d);else if (Array.isArray(a)) for (d = 0; d < a.length; ++d) m.call(this, a[d], b, d);else return m.call(this, a, b, 0);
        } else if ("number" === typeof a) {
          if (0 < a) return l.call(this, c(a | 0), a | 0);
        } else if (Array.isArray(a)) {
          if (a.length) return l.call(this, a, a.length);
        } else return k.call(this, a);
      }, {
        stats: g,
        destroy: function destroy() {
          h.destroy();
        }
      });
    }
    function n(a, b) {
      var c = 0;
      R.procs.poll();
      var d = b.color;
      d && (l.clearColor(+d[0] || 0, +d[1] || 0, +d[2] || 0, +d[3] || 0), c |= 16384);
      "depth" in b && (l.clearDepth(+b.depth), c |= 256);
      "stencil" in b && (l.clearStencil(b.stencil | 0), c |= 1024);
      l.clear(c);
    }
    function u(a) {
      C.push(a);
      c();
      return {
        cancel: function cancel() {
          function b() {
            var a = Cb(C, b);
            C[a] = C[C.length - 1];
            --C.length;
            0 >= C.length && e();
          }
          var c = Cb(C, a);
          C[c] = b;
        }
      };
    }
    function t() {
      var a = Q.viewport,
        b = Q.scissor_box;
      a[0] = a[1] = b[0] = b[1] = 0;
      G.viewportWidth = G.framebufferWidth = G.drawingBufferWidth = a[2] = b[2] = l.drawingBufferWidth;
      G.viewportHeight = G.framebufferHeight = G.drawingBufferHeight = a[3] = b[3] = l.drawingBufferHeight;
    }
    function w() {
      G.tick += 1;
      G.time = v();
      t();
      R.procs.poll();
    }
    function k() {
      y.refresh();
      t();
      R.procs.refresh();
      z && z.update();
    }
    function v() {
      return (Db() - E) / 1E3;
    }
    a = Ib(a);
    if (!a) return null;
    var l = a.gl,
      h = l.getContextAttributes();
    l.isContextLost();
    var g = Jb(l, a);
    if (!g) return null;
    var q = Fb(),
      r = {
        vaoCount: 0,
        bufferCount: 0,
        elementsCount: 0,
        framebufferCount: 0,
        shaderCount: 0,
        textureCount: 0,
        cubeCount: 0,
        renderbufferCount: 0,
        maxTextureUnits: 0
      },
      m = g.extensions,
      z = $b(l, m),
      E = Db(),
      F = l.drawingBufferWidth,
      K = l.drawingBufferHeight,
      G = {
        tick: 0,
        time: 0,
        viewportWidth: F,
        viewportHeight: K,
        framebufferWidth: F,
        framebufferHeight: K,
        drawingBufferWidth: F,
        drawingBufferHeight: K,
        pixelRatio: a.pixelRatio
      },
      H = Yb(l, m),
      O = Kb(l, r, a, function (a) {
        return J.destroyBuffer(a);
      }),
      J = Sb(l, m, H, r, O),
      M = Lb(l, m, O, r),
      D = Tb(l, q, r, a),
      y = Ob(l, m, H, function () {
        R.procs.poll();
      }, G, r, a),
      L = Zb(l, m, H, r, a),
      V = Rb(l, m, H, y, L, r),
      R = Wb(l, q, m, H, O, M, y, V, {}, J, D, {
        elements: null,
        primitive: 4,
        count: -1,
        offset: 0,
        instances: -1
      }, G, z, a),
      q = Ub(l, V, R.procs.poll, G, h, m, H),
      Q = R.next,
      N = l.canvas,
      C = [],
      S = [],
      T = [],
      U = [a.onDestroy],
      aa = null;
    N && (N.addEventListener("webglcontextlost", f, !1), N.addEventListener("webglcontextrestored", d, !1));
    var X = V.setFBO = p({
      framebuffer: Y.define.call(null, 1, "framebuffer")
    });
    k();
    h = A(p, {
      clear: function clear(a) {
        if ("framebuffer" in a) {
          if (a.framebuffer && "framebufferCube" === a.framebuffer_reglType) for (var b = 0; 6 > b; ++b) X(A({
            framebuffer: a.framebuffer.faces[b]
          }, a), n);else X(a, n);
        } else n(null, a);
      },
      prop: Y.define.bind(null, 1),
      context: Y.define.bind(null, 2),
      "this": Y.define.bind(null, 3),
      draw: p({}),
      buffer: function buffer(a) {
        return O.create(a, 34962, !1, !1);
      },
      elements: function elements(a) {
        return M.create(a, !1);
      },
      texture: y.create2D,
      cube: y.createCube,
      renderbuffer: L.create,
      framebuffer: V.create,
      framebufferCube: V.createCube,
      vao: J.createVAO,
      attributes: h,
      frame: u,
      on: function on(a, b) {
        var c;
        switch (a) {
          case "frame":
            return u(b);
          case "lost":
            c = S;
            break;
          case "restore":
            c = T;
            break;
          case "destroy":
            c = U;
        }
        c.push(b);
        return {
          cancel: function cancel() {
            for (var a = 0; a < c.length; ++a) if (c[a] === b) {
              c[a] = c[c.length - 1];
              c.pop();
              break;
            }
          }
        };
      },
      limits: H,
      hasExtension: function hasExtension(a) {
        return 0 <= H.extensions.indexOf(a.toLowerCase());
      },
      read: q,
      destroy: function destroy() {
        C.length = 0;
        e();
        N && (N.removeEventListener("webglcontextlost", f), N.removeEventListener("webglcontextrestored", d));
        D.clear();
        V.clear();
        L.clear();
        y.clear();
        M.clear();
        O.clear();
        J.clear();
        z && z.clear();
        U.forEach(function (a) {
          a();
        });
      },
      _gl: l,
      _refresh: k,
      poll: function poll() {
        w();
        z && z.update();
      },
      now: v,
      stats: r
    });
    a.onDone(null, h);
    return h;
  };
});

},{}],30:[function(require,module,exports){
(function (global){(function (){
"use strict";

module.exports = global.performance && global.performance.now ? function now() {
  return performance.now();
} : Date.now || function now() {
  return +new Date();
};

}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1]);
