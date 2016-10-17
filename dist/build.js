(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vcSteps"] = factory();
	else
		root["vcSteps"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 43);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(2)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ },
/* 2 */
/***/ function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ },
/* 3 */
/***/ function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 4 */
/***/ function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ },
/* 5 */,
/* 6 */
/***/ function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ },
/* 7 */
/***/ function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(27)
  , defined = __webpack_require__(6);
module.exports = function(it){
  return IObject(defined(it));
};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(11)
module.exports = __webpack_require__(42)

if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(14)
if (false) {
(function () {
var hotAPI = require("vue-hot-reload-api")
hotAPI.install(require("vue"))
if (!hotAPI.compatible) return
var id = "-!babel!./../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Steps.vue"
hotAPI.createRecord(id, module.exports)
module.hot.accept(["-!babel!./../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Steps.vue","-!vue-html-loader!./../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Steps.vue"], function () {
var newOptions = require("-!babel!./../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Steps.vue")
if (newOptions && newOptions.__esModule) newOptions = newOptions.default
var newTemplate = require("-!vue-html-loader!./../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Steps.vue")
hotAPI.update(id, newOptions, newTemplate)
})
})()
}

/***/ },
/* 10 */
/***/ function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(12);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(10)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../node_modules/.0.21.0@css-loader/index.js!./../../node_modules/.7.1.7@vue-loader/lib/style-rewriter.js?id=_v-1a764dfa&file=Steps.vue!./../../node_modules/.2.2.3@less-loader/index.js!./../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=style&index=0!./Steps.vue", function() {
			var newContent = require("!!./../../node_modules/.0.21.0@css-loader/index.js!./../../node_modules/.7.1.7@vue-loader/lib/style-rewriter.js?id=_v-1a764dfa&file=Steps.vue!./../../node_modules/.2.2.3@less-loader/index.js!./../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=style&index=0!./Steps.vue");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, ".vc-steps-component {\n  position: relative;\n  padding: 10px 15px 20px 15px;\n  background-color: #fff;\n  border-radius: 3px;\n  border: 1px solid #eee;\n  -webkit-transition: all ease-in 0.2s;\n  transition: all ease-in 0.2s;\n}\n.vc-steps-component:hover {\n  box-shadow: 0 0 6px rgba(0, 0, 0, 0.15);\n}\n.vc-steps-component .btn-close {\n  position: absolute;\n  top: 5px;\n  right: 10px;\n  font-size: 16px;\n  font-weight: bold;\n  color: #666;\n}\n.vc-steps-component .steps-header {\n  border-bottom: 1px solid #eee;\n}\n.vc-steps-component .steps-header .title {\n  font-size: 16px;\n}\n.vc-steps-component .steps-header .sub-title {\n  margin-top: 5px;\n  margin-bottom: 15px;\n  font-size: 14px;\n}\n.vc-steps-component .steps-body .step-item {\n  text-align: center;\n  display: inline-block;\n  vertical-align: top;\n}\n.vc-steps-component .steps-body .step-item.finish .step-progress .step-icon,\n.vc-steps-component .steps-body .step-item.finish .step-progress .step-line {\n  background-color: #87d068;\n}\n.vc-steps-component .steps-body .step-item.finish .step-progress .step-icon i,\n.vc-steps-component .steps-body .step-item.finish .step-progress .step-line i {\n  background-color: #87d068;\n  color: whiteSmoke;\n  margin-top: -1px;\n}\n.vc-steps-component .steps-body .step-item.error .step-progress .step-icon {\n  background-color: #f50;\n}\n.vc-steps-component .steps-body .step-item.error .step-progress .step-icon i {\n  background-color: #f50;\n  color: whiteSmoke;\n}\n.vc-steps-component .steps-body .step-item.wait .step-progress .step-icon {\n  background-color: #ddd;\n}\n.vc-steps-component .steps-body .step-item.wait .step-progress .step-icon i {\n  background-color: #ddd;\n  color: whiteSmoke;\n}\n.vc-steps-component .steps-body .step-item .step-progress {\n  position: relative;\n  margin: 15px 5px;\n}\n.vc-steps-component .steps-body .step-item .step-progress .step-icon {\n  z-index: 2;\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background-color: whiteSmoke;\n}\n.vc-steps-component .steps-body .step-item .step-progress .step-icon i {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  margin-top: -1px;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  background-color: whiteSmoke;\n}\n.vc-steps-component .steps-body .step-item .step-progress .step-icon i::before {\n  font-size: 12px;\n}\n.vc-steps-component .steps-body .step-item .step-progress .step-line {\n  background-color: whiteSmoke;\n  width: 100%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(20px);\n  transform: translate(10px);\n  height: 4px;\n}\n.vc-steps-component .steps-body .step-item .record {\n  font-size: 14px;\n}\n.vc-steps-component .steps-body .step-item .time {\n  font-size: 12px;\n}\n", ""]);

// exports


/***/ },
/* 13 */
/***/ function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ },
/* 14 */
/***/ function(module, exports) {

module.exports = "<div class=\"vc-steps-component\" v-show=\"show\">\n        <slot name=\"header\">\n        <div class=\"steps-header\">\n            <div class=\"title\">{{ title }}</div>\n            <div class=\"sub-title\">{{ subTitle }}</div>\n        </div>\n        </slot>\n        <div v-if=\"closeable\" class=\"btn-close\" @click=\"show = false\">\n            <span>&times;</span>\n        </div>\n        <div class=\"steps-body\">\n            <div :class=\"[ 'step-item', step.status ]\" v-for=\"(index, step) in s\" :style=\"{ 'width': calc(index) }\">\n                <div class=\"step-progress\" v-if=\"!isLast(index)\">\n                    <div class=\"step-icon\">\n                        <i v-if=\"step.status === 'finish'\" class=\"glyphicon glyphicon-ok\"></i>\n                        <i v-if=\"step.status === 'error'\" class=\"glyphicon glyphicon-remove\"></i>\n                        <i v-if=\"step.status === 'wait'\" class=\"glyphicon glyphicon-off\"></i>\n                    </div>\n                    <div class=\"step-line\"></div>\n                </div>\n                <div class=\"step-progress\" v-if=\"isLast(index)\">\n                    <div class=\"step-icon\">\n                        <i v-if=\"step.status === 'finish'\" class=\"glyphicon glyphicon-ok\"></i>\n                        <i v-if=\"step.status === 'error'\" class=\"glyphicon glyphicon-remove\"></i>\n                        <i v-if=\"step.status === 'wait'\" class=\"glyphicon glyphicon-off\"></i>\n                    </div>\n                </div>\n                <div class=\"record\">{{ step.record }}</div>\n                <div class=\"time\">{{ step.time }}</div>\n            </div>\n        </div>\n    </div>";

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(40);
module.exports = __webpack_require__(0).Object.keys;

/***/ },
/* 16 */
/***/ function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(8)
  , toLength  = __webpack_require__(36)
  , toIndex   = __webpack_require__(35);
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

/***/ },
/* 19 */
/***/ function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(16);
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4)
  , document = __webpack_require__(3).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ },
/* 22 */
/***/ function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

var global    = __webpack_require__(3)
  , core      = __webpack_require__(0)
  , ctx       = __webpack_require__(20)
  , hide      = __webpack_require__(25)
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;

/***/ },
/* 24 */
/***/ function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(28)
  , createDesc = __webpack_require__(32);
module.exports = __webpack_require__(1) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(1) && !__webpack_require__(2)(function(){
  return Object.defineProperty(__webpack_require__(21)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(19);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(17)
  , IE8_DOM_DEFINE = __webpack_require__(26)
  , toPrimitive    = __webpack_require__(38)
  , dP             = Object.defineProperty;

exports.f = __webpack_require__(1) ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

var has          = __webpack_require__(24)
  , toIObject    = __webpack_require__(8)
  , arrayIndexOf = __webpack_require__(18)(false)
  , IE_PROTO     = __webpack_require__(33)('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = __webpack_require__(29)
  , enumBugKeys = __webpack_require__(22);

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(23)
  , core    = __webpack_require__(0)
  , fails   = __webpack_require__(2);
module.exports = function(KEY, exec){
  var fn  = (core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
};

/***/ },
/* 32 */
/***/ function(module, exports) {

module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

var shared = __webpack_require__(34)('keys')
  , uid    = __webpack_require__(39);
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

var global = __webpack_require__(3)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(7)
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(7)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(6);
module.exports = function(it){
  return Object(defined(it));
};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(4);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ },
/* 39 */
/***/ function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(37)
  , $keys    = __webpack_require__(30);

__webpack_require__(31)('keys', function(){
  return function keys(it){
    return $keys(toObject(it));
  };
});

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(15), __esModule: true };

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _keys = __webpack_require__(41);

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// <template>
//     <div class="vc-steps-component" v-show="show">
//         <slot name="header">
//         <div class="steps-header">
//             <div class="title">{{ title }}</div>
//             <div class="sub-title">{{ subTitle }}</div>
//         </div>
//         </slot>
//         <div v-if="closeable" class="btn-close" @click="show = false">
//             <span>&times;</span>
//         </div>
//         <div class="steps-body">
//             <div :class="[ 'step-item', step.status ]" v-for="(index, step) in s" :style="{ 'width': calc(index) }">
//                 <div class="step-progress" v-if="!isLast(index)">
//                     <div class="step-icon">
//                         <i v-if="step.status === 'finish'" class="glyphicon glyphicon-ok"></i>
//                         <i v-if="step.status === 'error'" class="glyphicon glyphicon-remove"></i>
//                         <i v-if="step.status === 'wait'" class="glyphicon glyphicon-off"></i>
//                     </div>
//                     <div class="step-line"></div>
//                 </div>
//                 <div class="step-progress" v-if="isLast(index)">
//                     <div class="step-icon">
//                         <i v-if="step.status === 'finish'" class="glyphicon glyphicon-ok"></i>
//                         <i v-if="step.status === 'error'" class="glyphicon glyphicon-remove"></i>
//                         <i v-if="step.status === 'wait'" class="glyphicon glyphicon-off"></i>
//                     </div>
//                 </div>
//                 <div class="record">{{ step.record }}</div>
//                 <div class="time">{{ step.time }}</div>
//             </div>
//         </div>
//     </div>
// </template>

// <style lang="less">
// .vc-steps-component {
//     position: relative;
//     padding: 10px 15px 20px 15px;
//     background-color: #fff;
//     border-radius: 3px;
//     border: 1px solid #eee;
//     -webkit-transition: all ease-in .2s;
//     transition: all ease-in .2s;

//     &:hover {
//         box-shadow: 0 0 6px rgba(0,0,0,.15);
//     }

//     .btn-close {
//         position: absolute;
//         top: 5px;
//         right: 10px;
//         font-size: 16px;
//         font-weight: bold;
//         color: #666;
//     }

//     .steps-header {
//         border-bottom: 1px solid #eee;

//         .title {
//             font-size: 16px;
//         }
//         .sub-title {
//             margin-top: 5px;
//             margin-bottom: 15px;
//             font-size: 14px;
//         }
//     }
//     .steps-body {

//         .step-item {
//             text-align: center;
//             display: inline-block;
//             vertical-align: top;

//             @size: 30px;
//             @statusFinish: #87d068;
//             @statusError: #f50;
//             @statusWait: #ddd;
//             @bgColor: whiteSmoke;

//             &.finish {
//                 .step-progress {
//                     .step-icon,
//                     .step-line {
//                         background-color: @statusFinish;
//                         i {
//                             background-color: @statusFinish;
//                             color: @bgColor;
//                             margin-top: -1px;
//                         }
//                     }
//                 }
//             }
//             &.error {
//                 .step-progress {
//                     .step-icon {
//                         background-color: @statusError;
//                         i {
//                             background-color: @statusError;
//                             color: @bgColor;
//                         }
//                     }
//                 }
//             }

//             &.wait {
//                 .step-progress {
//                     .step-icon {
//                         background-color: @statusWait;
//                         i {
//                             background-color: @statusWait;
//                             color: @bgColor;
//                         }
//                     }
//                 }
//             }

//             .step-progress {
//                 position: relative;
//                 margin: 15px 5px;

//                 .step-icon {
//                     z-index: 2;
//                     position: relative;
//                     display: inline-block;
//                     vertical-align: middle;
//                     width: @size;
//                     height: @size;
//                     border-radius: 50%;
//                     background-color: @bgColor;

//                     i {
//                         position: absolute;
//                         left: 50%;
//                         top: 50%;
//                         margin-top: -1px;
//                         transform: translate(-50%, -50%);
//                         background-color: @bgColor; 
//                         &::before {
//                             font-size: 12px;
//                         }
//                     }
//                 }
//                 .step-line {
//                     background-color: @bgColor;
//                     width: 100%;
//                     position: absolute;
//                     top: 50%;
//                     left: 50%;
//                     -webkit-transform: translate(20px);
//                     transform: translate(10px);
//                     height: 4px;
//                 }
//             }
//             .record { // 进度文字
//                 font-size: 14px;
//             }
//             .time { // 达成时间
//                 font-size: 12px;
//             }
//         }
//     }
// }
// </style>

// <script>
var STEP_FINISH = 'finish';
var STEP_WAIT = 'wait';

exports.default = {
    name: 'vc-steps',
    props: {
        show: {
            type: Boolean,
            twoWay: true,
            default: true
        },
        // 传入的steps，如果传入合法的 `allSteps` 预设，则会合并
        steps: {
            type: Array
        },
        // 可选的预设，多用于系统通用的流程，可传入通用预设
        // 只有长度大于传入的`steps` 才会进行预设追加的合并
        allSteps: {
            type: Array
        },
        title: {
            default: 'title'
        },
        subTitle: {
            default: 'subTitle'
        },
        closeable: {
            type: Boolean,
            default: true
        }
    },
    methods: {
        isLast: function isLast(index) {
            if (this.total) {
                if (index === this.total - 1) {
                    return true;
                }
            }
            return false;
        },
        calc: function calc(index) {
            // 使用 `99` 避免溢出
            return 99 / this.total + '%';
        }
    },
    computed: {
        // computed allSteps
        as: function as() {
            var ass = this.allSteps;
            if (ass) {
                ass.forEach(function (step) {
                    var keys = (0, _keys2.default)(step);
                    // 只有一个键，就默认为文案
                    if (keys.length === 1) {
                        step['record'] = step[keys[0]];
                        delete step[keys[0]];
                    }
                    if (!step['status']) {
                        step['status'] = STEP_WAIT;
                    }
                });
                return ass;
            }
        },

        // computed finial render steps
        s: function s() {
            if (!this.steps) {
                console.warn('props `step` must be Array with `record` key');
                return;
            }
            var ss = this.steps.slice();
            ss.forEach(function (step) {
                if (!step['status']) {
                    step['status'] = STEP_FINISH;
                }
            });
            var as = this.as;
            // 如果传入了合法的 `allSteps` 才使用，否则只使用 `steps`
            if (as && as.length > 0 && as.length > ss.length) {
                // 组合 `steps` 和 `allSteps`
                var delta = as.length - ss.length;
                for (var i = ss.length, len = ss.length + delta; i < len; i++) {
                    ss.push(as[i]);
                }
                return ss;
            } else {
                return this.steps;
            }
        },
        total: function total() {
            if (this.s && Array.isArray(this.s)) {
                return (0, _keys2.default)(this.s).length;
            }
            console.warn('pay attention to steps: ' + this.steps + ', allSteps: ' + allSteps);
            return null;
        }
    }
};
// </script>

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var _Steps = __webpack_require__(9);

var _Steps2 = _interopRequireDefault(_Steps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _Steps2.default;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=build.js.map