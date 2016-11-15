(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["fn128"] = factory();
	else
		root["fn128"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = array;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Created on 15.11.16 at 22:30
 * @author Stefan Wimmer <stefanwimmer128@gmail.com>
 */

function array(fn128) {
    return {
        each: function each(fn) {
            return function (arr) {
                for (var i in arr) {
                    fn(arr[i], i, arr);
                }
            };
        },

        reduce: function reduce(fn, start_pre) {
            return function (arr) {
                var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : start_pre;

                var ret = start;

                arr.each(function (val, i, arr) {
                    return void (ret = fn(val, i, arr));
                });

                return ret;
            };
        },

        map: function map(fn) {
            return fn128.reduce(function (val, ret, i, arr) {
                return [].concat(_toConsumableArray(ret), [fn(val, i, arr)]);
            }, []);
        },

        filter: function filter(fn) {
            return fn128.reduce(function (val, ret, i, arr) {
                return fn(val, i, arr) ? [].concat(_toConsumableArray(ret), [val]) : [];
            }, []);
        },

        find: function find(fn) {
            return function (arr) {
                return [fn128.filter(fn)(arr)[0]];
            };
        },

        reject: function reject(fn) {
            return fn128.find(fn128.invert(fn));
        },

        some: function some(fn) {
            return fn128.reduce(function (val, ret, i, arr) {
                return !ret ? fn(val, i, arr) : ret;
            }, false);
        },

        every: function every(fn) {
            return fn128.reduce(function (val, ret, i, arr) {
                return ret ? fn(val, i, arr) : ret;
            }, true);
        }
    };
}
module.exports = exports["default"];

/***/ },
/* 1 */
/***/ function(module, exports) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = fn;
/**
 * Created on 15.11.16 at 22:52
 * @author Stefan Wimmer <stefanwimmer128@gmail.com>
 */

function fn(fn128) {
    return {
        invert: function invert(fn) {
            return function () {
                return !fn.apply(undefined, arguments);
            };
        }
    };
}
module.exports = exports["default"];

/***/ },
/* 2 */
/***/ function(module, exports) {

module.exports = {
	"name": "fn128",
	"version": "1.0.0-alpha.1",
	"description": "Functional programming",
	"main": "dist/fn128.js",
	"scripts": {
		"build": "webpack"
	},
	"repository": {
		"type": "git",
		"url": "git+ssh://git@github.com/stefanwimmer128/fn128.git"
	},
	"keywords": [
		"function",
		"functional",
		"fn"
	],
	"author": "Stefan Wimmer <stefanwimmer128@gmail.com>",
	"license": "ISC",
	"bugs": {
		"url": "https://github.com/stefanwimmer128/fn128/issues"
	},
	"homepage": "https://github.com/stefanwimmer128/fn128#readme",
	"devDependencies": {
		"babel-core": "^6.18.2",
		"babel-loader": "^6.2.7",
		"babel-plugin-add-module-exports": "^0.2.1",
		"babel-preset-es2015": "^6.18.0",
		"json-loader": "^0.5.4",
		"webpack": "^2.1.0-beta.27"
	}
};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _package = __webpack_require__(2);

var _package2 = _interopRequireDefault(_package);

var _fn = __webpack_require__(1);

var _fn2 = _interopRequireDefault(_fn);

var _array = __webpack_require__(0);

var _array2 = _interopRequireDefault(_array);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fn128 = {
    get version() {
        return _package2.default.version;
    }
}; /**
    * Created on 15.11.16 at 22:03
    * @author Stefan Wimmer <stefanwimmer128@gmail.com>
    */

Object.assign(fn128, (0, _fn2.default)(fn128));

Object.assign(fn128, (0, _array2.default)(fn128));

exports.default = fn128;
module.exports = exports["default"];

/***/ }
/******/ ]);
});