/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/assets/stylesheets/main.css":
/*!*****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./src/assets/stylesheets/main.css ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"/* http://meyerweb.com/eric/tools/css/reset/\\n   v2.0 | 20110126\\n   License: none (public domain)\\n*/\\n\\nhtml, body, div, span, applet, object, iframe,\\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\\na, abbr, acronym, address, big, cite, code,\\ndel, dfn, em, img, ins, kbd, q, s, samp,\\nsmall, strike, strong, sub, sup, tt, var,\\nb, u, i, center,\\ndl, dt, dd, ol, ul, li,\\nfieldset, form, label, legend,\\ntable, caption, tbody, tfoot, thead, tr, th, td,\\narticle, aside, canvas, details, embed,\\nfigure, figcaption, footer, header, hgroup,\\nmenu, nav, output, ruby, section, summary,\\ntime, mark, audio, video {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline;\\n}\\n/* HTML5 display-role reset for older browsers */\\narticle, aside, details, figcaption, figure,\\nfooter, header, hgroup, menu, nav, section {\\n  display: block;\\n}\\nbody {\\n  line-height: 1;\\n}\\nol, ul {\\n  list-style: none;\\n}\\nblockquote, q {\\n  quotes: none;\\n}\\nblockquote:before, blockquote:after,\\nq:before, q:after {\\n  content: '';\\n  content: none;\\n}\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n\\nhtml{\\n  -webkit-box-sizing: border-box;\\n     -moz-box-sizing: border-box;\\n          box-sizing: border-box;\\n}\\n\\n*,\\n*:before,\\n*:after {\\n  box-sizing: inherit;\\n}\\n\\nstrong {\\n  font-weight: 400;\\n}\\n\\ncite,\\nem {\\n  font-style: italic;\\n}\\n\\n/*\\n  ========================================\\n  Clearfix\\n  ========================================\\n*/\\n\\n.group:before,\\n.group:after {\\n  content: \\\"\\\";\\n  display: table;\\n}\\n.group:after {\\n  clear: both;\\n}\\n.group {\\n  clear: both;\\n  *zoom: 1;\\n}\\n\\n/*\\n  ========================================\\n  Custom styles\\n  ========================================\\n*/\\n\\nhtml,\\nbody {\\n  height: 100%\\n}\\nbody {\\n  background:#F5F5DC;\\n  font: 700 1.5rem/0.8  'Balsamiq Sans', \\\"Open Sans\\\", \\\"Helvetica Neue\\\", Helvetica, Arial, sans-serif;\\n}\\n/*\\n  ========================================\\n  Primary header\\n  ========================================\\n*/\\nheader {\\n  text-align: center;\\n  font: 5rem/1 \\\"Lobster\\\", \\\"Open Sans\\\", \\\"Helvetica Neue\\\", Helvetica, Arial, sans-serif;\\n  color:#8B4513;\\n  font-weight: bold;\\n  text-shadow: -3px -1px 8px rgba(150, 150, 150, 1);\\n}\\n\\n/*\\n  ========================================\\n  Grid\\n  ========================================\\n*/\\n.grid-bottom {\\n  height:65vmin;\\n  width:65vmin;\\n  grid-gap: 10px;\\n  margin: 1rem auto;\\n  display: grid;\\n  grid-template-columns: repeat(3, 1fr);\\n  grid-template-rows: repeat(3, 1fr);\\n  justify-content: center;\\n  text-align: center;\\n  background: black;\\n}\\n\\n/* Flex Container  */\\n\\n.flex-container {\\n  height:100%;\\n  padding: 1rem 0;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-between;\\n}\\n\\n.flex-buttons {\\n  display: flex;\\n  flex-wrap: wrap;\\n}\\n\\n.new-round {\\n  margin-left: auto;\\n  margin-right: 20px;\\n}\\n.new-game {\\n  margin-right: auto;\\n  margin-left: 20px;\\n}\\n\\n.new-round,\\n.new-game {\\n  display: block;\\n  cursor:pointer;\\n  background: none;\\n  border:8px solid black;\\n  padding:0.5rem 0;\\n  border-radius:18px;\\n  font: 700 1.6rem/1  'Balsamiq Sans', sans-serif;\\n  color:#000000;\\n  text-decoration:none;\\n  width:200px;\\n}\\n\\n.new-round:hover,\\n.new-game:hover {\\n  color:#F5F5DC;\\n  background: black;\\n}\\n\\n.boardcase {\\n  display: grid;\\n  align-items: center;\\n  font-size: 17vmin;\\n  overflow:hidden;\\n  background: #F5F5DC;\\n}\\n\\n.results {\\n  text-align: center;\\n  font-size: 3rem;\\n  height: 1rem;\\n  margin-bottom: 1rem;\\n  color:#10d304;\\n  text-shadow: 2px -1px 10px rgba(0, 0, 0, 0.78);\\n}\\n\\n.score {\\n  font-size: 1.5rem;\\n  text-align: center;\\n  margin-bottom: 1rem;\\n}\\n\\n/* Utilities */\\n.animate-btn {\\n    animation: effect 0.35s infinite;\\n}\\n\\n.highlight {\\n  background:red;\\n}\\n\\n/*\\n  ========================================\\n  Overlay Div\\n  ========================================\\n*/\\n\\n.starting-overlay {\\n  position:absolute;\\n  top:0;\\n  left:0;\\n  height:100vh;\\n  width:100vw;\\n  right:0;\\n  bottom:0;\\n  color:white;\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: center;\\n  align-items: center;\\n  align-content: center;\\n  background: rgba(0, 0, 0, 0.8);\\n  text-align: center;\\n}\\n\\n.starting-overlay > * {\\n  flex-basis: 80%;\\n}\\n\\n.p1-header,\\n.p2-header,\\nlabel{\\n  text-shadow: 1px 0px 1px rgba(0, 0, 0, 1);\\n  letter-spacing: 0.1rem;\\n}\\n\\n.p1-header {\\n  font-size: 3rem;\\n  color:#DC143C;\\n}\\n\\n.p2-header {\\n  font-size: 3rem;\\n  color:#128ef0;\\n}\\n\\n.welcome-title {\\n  font: 4rem/1.2 \\\"Lobster\\\", \\\"Open Sans\\\", sans-serif;\\n  font-weight: bold;\\n}\\n\\nform {\\n  border: 5px white solid;\\n  width:70%;\\n  background: #606060;\\n  border-radius: 5px;\\n}\\n\\nform section {\\n  margin-bottom: 2rem;\\n}\\n\\nform h1 {\\n  font-size: 1.5rem;\\n  padding:1rem;\\n  font-weight: bold;\\n}\\n\\nform p {\\n  margin-bottom: 1rem;\\n}\\n\\nfieldset {\\n  margin-top: 3rem;\\n}\\n\\nfieldset legend {\\n  margin:auto;\\n  text-shadow: 1px 0px 1px rgba(0, 0, 0, 1);\\n  letter-spacing: 0.1rem;\\n}\\n\\ninput {\\n  background:none;\\n  border: 1px solid white;\\n  color:white;\\n  padding: 0.5rem;\\n}\\ninput[type=\\\"submit\\\"] {\\n  margin-bottom: 1rem;\\n  width:50%;\\n  background:none;\\n  border: 5px solid white;\\n  color:white;\\n  padding:0.5rem;\\n  font-size: 1.5rem;\\n  cursor: pointer;\\n  border-radius: 70px;\\n}\\n\\ninput[type=\\\"submit\\\"]:hover {\\n  color: #606060;\\n  background-color: white;\\n}\\n\\ninput[type=\\\"text\\\"] {\\n  margin-left: 0.5rem;\\n}\\n\\n@keyframes effect {\\n  0% {\\n      transform: translateX(0px) rotate(0deg);\\n  }\\n\\n  20% {\\n      transform: translateX(-6px) rotate(-6deg);\\n  }\\n\\n  40% {\\n      transform: translateX(-4px) rotate(-4deg);\\n  }\\n\\n  60% {\\n      transform: translateX(6px) rotate(6deg);\\n  }\\n\\n  80% {\\n      transform: translateX(4px) rotate(4deg);\\n  }\\n\\n  100% {\\n      transform: translateX(0px) rotate(0deg);\\n  }\\n}\\n\\n@media only screen and (max-width: 880px) {\\n\\n  header {\\n    font-size: 4rem;\\n    margin-bottom: 0.5rem;\\n  }\\n\\n  .grid-bottom {\\n    height:80vmin;\\n    width:80vmin;\\n  }\\n\\n  .results {\\n    text-align: center;\\n    font-size: 2.5rem;\\n    height: 1rem;\\n    margin-bottom: 1rem;\\n    color:#10d304;\\n    text-shadow: 2px -1px 10px rgba(0, 0, 0, 0.78);\\n  }\\n\\n  .flex-buttons {\\n    flex-direction: column;\\n    align-items: center;\\n  }\\n\\n  .new-round {\\n    margin: 0;\\n    margin-bottom: 1rem;\\n  }\\n  .new-game {\\n    margin:0;\\n  }\\n\\n  /* Overlay */\\n\\n  .starting-overlay {\\n    position:absolute;\\n    top: 0;\\n    left: 0;\\n    width: 100%;\\n    display: flex;\\n    flex-wrap: wrap;\\n    justify-content: center;\\n    align-items: center;\\n    align-content: center;\\n    background: rgba(0, 0, 0, 0.8);\\n    text-align: center;\\n  }\\n\\n  .starting-overlay > * {\\n    flex-basis: 80%;\\n  }\\n\\n  .p1-header,\\n  .p2-header,\\n  label{\\n    text-shadow: 1px 0px 1px rgba(0, 0, 0, 1);\\n    letter-spacing: 0.1rem;\\n  }\\n\\n  .p1-header {\\n    font-size: 2rem;\\n    color:#DC143C;\\n  }\\n\\n  .p2-header {\\n    font-size: 2rem;\\n    color:#128ef0;\\n  }\\n\\n  .welcome-title {\\n    font: 2.5rem/1.2 \\\"Lobster\\\", \\\"Open Sans\\\", \\\"Helvetica Neue\\\", Helvetica, Arial, sans-serif;\\n    margin-bottom: 1rem;\\n    font-weight: bold;\\n  }\\n\\n    /* Overlay */\\n  form {\\n    border: 5px white solid;\\n    width:70%;\\n    background: #606060;\\n    border-radius: 5px;\\n  }\\n\\n  form section {\\n    margin-bottom: 0rem;\\n  }\\n\\n  form h1 {\\n    font-size: 1.5rem;\\n    padding:1rem;\\n    font-weight: bold;\\n  }\\n\\n  form p {\\n    margin-bottom: 1rem;\\n  }\\n\\n  fieldset {\\n    margin-top: 1rem;\\n  }\\n\\n  fieldset legend {\\n    margin:auto;\\n    text-shadow: 1px 0px 1px rgba(0, 0, 0, 1);\\n    letter-spacing: 0.1rem;\\n  }\\n\\n  input {\\n    background:none;\\n    border: 1px solid white;\\n    color:white;\\n    padding: 0.5rem;\\n  }\\n  input[type=\\\"submit\\\"] {\\n    margin-bottom: 1rem;\\n    width:40%;\\n    background:none;\\n    border: 3px solid white;\\n    color:white;\\n    padding:0.5rem;\\n    font-size: 1rem;\\n    cursor: pointer;\\n    border-radius: 70px;\\n  }\\n\\n  input[type=\\\"submit\\\"]:hover {\\n    color: #606060;\\n    background-color: white;\\n  }\\n\\n  input[type=\\\"text\\\"] {\\n    margin-left: 0.5rem;\\n  }\\n\\n  label[for=\\\"name\\\"],\\n  label[for=\\\"pawn_x\\\"],\\n  label[for=\\\"pawn_o\\\"] {\\n    font-size: 1rem;\\n  }\\n\\n  legend {\\n    font-size: 1rem;\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/assets/stylesheets/main.css?./node_modules/css-loader/dist/cjs.js??ref--6-1");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/assets/stylesheets/main.css":
/*!*****************************************!*\
  !*** ./src/assets/stylesheets/main.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-1!./main.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/assets/stylesheets/main.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/assets/stylesheets/main.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_application_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/application.js */ \"./src/lib/application.js\");\n/* harmony import */ var _assets_stylesheets_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/stylesheets/main.css */ \"./src/assets/stylesheets/main.css\");\n/* harmony import */ var _assets_stylesheets_main_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_stylesheets_main_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nObject(_lib_application_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(document)\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/lib/application.js":
/*!********************************!*\
  !*** ./src/lib/application.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ \"./src/lib/game.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (doc) {\n  document.addEventListener('DOMContentLoaded', () => {\n    const submitBtn = doc.querySelector('.submit')\n    const newRoundBtn = doc.querySelector('.new-round')\n    const newGameBtn = doc.querySelector('.new-game')\n\n    submitBtn.addEventListener('click', _game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].initializeGame.bind(_game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]))\n    newRoundBtn.addEventListener('click', _game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].startRound.bind(_game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]))\n    newGameBtn.addEventListener('click', _game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].newGame)\n  })\n});\n\n\n//# sourceURL=webpack:///./src/lib/application.js?");

/***/ }),

/***/ "./src/lib/board.js":
/*!**************************!*\
  !*** ./src/lib/board.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _boardCase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boardCase.js */ \"./src/lib/boardCase.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((function (doc) {\n  const boardCases = (function (gridSize) {\n    // Instanciation of the boardcases. \"boardCases\" variable is assigned the return of the IIFE invokation\n    const boardCasesIDs = _generateBoardCasesIDsArray(gridSize);\n    return boardCasesIDs.map((caseID) => Object(_boardCase_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(caseID, doc));\n  })(3); // Here we select a 3x3 grid size\n\n  const _winningCombinationsIDs = [\n    // work only for 3x3 grid\n    [\"a1\", \"b1\", \"c1\"],\n    [\"a2\", \"b2\", \"c2\"],\n    [\"a3\", \"b3\", \"c3\"],\n    [\"a1\", \"a2\", \"a3\"],\n    [\"b1\", \"b2\", \"b3\"],\n    [\"c1\", \"c2\", \"c3\"],\n    [\"a1\", \"b2\", \"c3\"],\n    [\"a3\", \"b2\", \"c1\"],\n  ];\n\n  //  Private methods\n\n  function _generateBoardCasesIDsArray(gridSize) {\n    // Method that generate cases ID's names depending on the desired gridsize\n    const arrayOfCases = [];\n    const gridColumnID = Array.from({ length: gridSize }, (_, i) =>\n      String.fromCharCode(\"a\".charCodeAt(0) + i)\n    ); // [\"a\", \"b\", \"c\"...]\n    const gridRowsID = [...Array(gridSize + 1).keys()].slice(1); // [\"1\", \"2\", \"3\"...]\n\n    gridColumnID.forEach((columnID) => {\n      gridRowsID.forEach((rowID) => {\n        arrayOfCases.push(columnID + rowID);\n      });\n    });\n\n    return arrayOfCases; // [\"a1\", \"a2\", \"a3\", \"b1\"...]\n  }\n\n  function _isFull() {\n    return boardCases.every((boardcase) => boardcase.caseContent);\n  }\n\n  function _findWinningCombinationArray() {\n    //Find the winning combination arrray\n    const WinningCombinationArray = _winningCombinationsIDs.find((combinationIDsarray) => {\n      return (\n        combinationIDsarray.every(\n          (caseID) => findCaseByID(caseID).caseContent === \"X\"\n        ) ||\n        combinationIDsarray.every(\n          (caseID) => findCaseByID(caseID).caseContent === \"O\"\n        )\n      );\n    });\n    return WinningCombinationArray\n  }\n\n  //  Public methods\n\n  function toggleHighlightWinningCombination() { //a mettre dans new game et end game\n    if (hasWinningCombination()) {\n      const winningArray = _findWinningCombinationArray();\n      winningArray.forEach((boardID) => {\n        doc.getElementById(boardID).classList.toggle(\"highlight\");\n      });\n    }\n  }\n\n  function findCaseByID(boardID) {\n    // Maps the HTML id's attribute of the div element with the corresponding boardcase object in the Board.boardCase property\n    return boardCases.find((boardCase) => boardCase.id === boardID);\n  }\n\n  function hasWinningCombination() {\n    return _winningCombinationsIDs.some((combinationIDsarray) => {\n      return (\n        combinationIDsarray.every(\n          (caseID) => findCaseByID(caseID).caseContent === \"X\"\n        ) ||\n        combinationIDsarray.every(\n          (caseID) => findCaseByID(caseID).caseContent === \"O\"\n        )\n      );\n    });\n  }\n\n  function hasAnEndingCondition() {\n    return hasWinningCombination() || _isFull(); // Check for the winning combinations first in case there's both a winning combination & full board on the last move\n  }\n\n  function clear() {\n    boardCases.forEach((boardcase) => (boardcase.caseContent = \"\"));\n  }\n\n  const self = {\n    boardCases,\n    hasAnEndingCondition,\n    hasWinningCombination,\n    toggleHighlightWinningCombination,\n    clear,\n    findCaseByID,\n  };\n\n  return self;\n})(document));\n\n\n//# sourceURL=webpack:///./src/lib/board.js?");

/***/ }),

/***/ "./src/lib/boardCase.js":
/*!******************************!*\
  !*** ./src/lib/boardCase.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(caseID, doc) {\n  let _content = \"\"; // protected in the closure (not returned in the object). Accessible to the public only through setter and getter (APIs).\n  //It's unique to each instance of the \"boardCase\" factory. Because each instanciation create a new closure.\n\n  function _writeToDOM(caseID, contentToWrite) {\n    doc.querySelector(`#${caseID}`).innerHTML = contentToWrite;\n  }\n\n  function isAvailable() {\n    return _content === \"\"; //return true if content's value is \"\" (aka if the boardcase is empty)\n  }\n\n  const proto = {\n    set caseContent(playerPawn) {\n      //We don't use \"this\" otherwise we'd set a new property on the object.\n      _content = playerPawn; // Here we assign a new value to the content variable wich is directly accessible because in the same scope.\n      _writeToDOM(caseID, playerPawn); //By using the setter we both change the \"content\" property of the boardcase object & write into the html div the player's pawn shape\n    },\n    get caseContent() {\n      return _content;\n    },\n    isAvailable\n  };\n  const self = Object.assign(Object.create(proto), { id: caseID }); //caseID is a local variable got through the function parametre. We make it available to the public with the \"id\" property\n  return self;\n});\n\n\n//# sourceURL=webpack:///./src/lib/boardCase.js?");

/***/ }),

/***/ "./src/lib/game.js":
/*!*************************!*\
  !*** ./src/lib/game.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player.js */ \"./src/lib/player.js\");\n/* harmony import */ var _board_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./board.js */ \"./src/lib/board.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((function(doc, player, board) {\n  let _overlayDiv; //Declaration of variables that will be in the scope of the whole module\n  let _scorePara;\n  let _results;\n  let _boardCasesDivs;\n  let _newRoundBtn;\n  let _handler;\n\n  document.addEventListener(\"DOMContentLoaded\", () => {\n    //Assign HTML elements to vars once the document is lodaded\n    _overlayDiv = doc.querySelector(\".starting-overlay\");\n    _scorePara = doc.querySelector(\".score\");\n    _results = doc.querySelector(\".results\");\n    _boardCasesDivs = Array.from(doc.getElementsByClassName(\"boardcase\"));\n    _newRoundBtn = doc.querySelector(\".new-round\");\n  });\n\n  function initializeGame() {\n    _initializePlayers();\n    _closeOverlay();\n    startRound();\n  }\n\n  function startRound() {\n    if (_results.innerHTML) {\n      //Skip if it's not the first round played\n      _results.innerHTML = \"\";\n      self.board.toggleHighlightWinningCombination();\n      _newRoundBtn.classList.remove(\"animate-btn\");\n    }\n    _listenToCases(true); //We \"turn on\" the eventlistener on the board cases\n    self.board.clear();\n    _displayScore();\n  }\n\n  function newGame() {\n    //Just put the _overlayDiv back to the screen. The click to its submit button triggers a new game\n    _overlayDiv.style.display = \"flex\";\n  }\n\n  //Private Methods\n\n  function _initializePlayers() {\n    const nameP1 = doc.querySelector(\"#name_p1\").value; //Retrieve values from the form fields (users inputs)\n    const nameP2 = doc.querySelector(\"#name_p2\").value;\n    const pawnP1 = doc.querySelector('input[name=\"pawn_shape\"]:checked').value;\n    const pawnP2 = pawnP1 == \"X\" ? \"O\" : \"X\";\n\n\n    self.players = {\n      //Set the \"players\" property on the \"Game\" module, once we get users inputs to initialize the Players. \"player\" is part of \"Game\" API\n      player1: player(nameP1, pawnP1, true),\n      player2: player(nameP2, pawnP2, false)\n    };\n  }\n\n  function _listenToCases(boolean) {\n    if (boolean) {\n      _boardCasesDivs.forEach(boardCase =>\n        boardCase.addEventListener(\"click\", _playerMove, true)\n      ); //same reference used in both listeners.\n    } else {\n      _boardCasesDivs.forEach(boardCase =>\n        boardCase.removeEventListener(\"click\", _playerMove, true)\n      );\n    }\n  }\n\n  function _playerTurn() {\n    //return the player whose turn to play based on players \"turn\" property value (true/false)\n    for (let player in self.players) {\n      if (self.players[player].turn == true) return self.players[player];\n    }\n  }\n\n  function _changePlayersTurn() {\n    //Switch players \"turn\" property value from true to false and vice versa\n    for (let player in self.players) {\n      if (self.players[player].turn == true) {\n        self.players[player].turn = false;\n      } else {\n        self.players[player].turn = true;\n      }\n    }\n  }\n\n  function _playerMove(e) {\n    const playedCase = self.board.findCaseByID(e.target.id); //Maps the HTML \"case\" element clicked with the \"caseboard\" object in the Game.board.boardCases property\n    _playerTurn().play(playedCase);\n    if (self.board.hasAnEndingCondition()) {\n      _endRound();\n    } else {\n      _changePlayersTurn();\n    }\n  }\n\n  function _endRound() {\n    _newRoundBtn.classList.add(\"animate-btn\");\n    _listenToCases(false); //remove click listener from HTML cases\n    if (self.board.hasWinningCombination()) {\n      self.board.toggleHighlightWinningCombination();\n      const winner = _playerTurn(); // player who has his turn property to 'true' is the last one who played\n      winner.points += 1;\n      _displayScore();\n      _results.innerHTML = `${winner.name} wins the round !`;\n    } else {\n      _results.innerHTML = \"Tie !\";\n    }\n  }\n\n  function _closeOverlay() {\n    _overlayDiv.style.display = \"none\";\n    doc.forms[0].reset(); //Rests the fields of the form for the next Game\n  }\n\n  function _displayScore() {\n    _scorePara.innerHTML = `Score: ${self.players.player1.name}(${self.players.player1.pawnShape}) ${self.players.player1.points} - ${self.players.player2.points} ${self.players.player2.name}(${self.players.player2.pawnShape})`;\n  }\n\n  const self = {\n    //\"Game\" API. Properties and methods accessible to the public\n    initializeGame,\n    startRound,\n    newGame,\n    board\n  };\n\n  return self;\n})(document, _player_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _board_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])); //Dependencies injection\n\n\n//# sourceURL=webpack:///./src/lib/game.js?");

/***/ }),

/***/ "./src/lib/player.js":
/*!***************************!*\
  !*** ./src/lib/player.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(name, pawnShape, turn) {\n  function play(boardCase) {\n    if (boardCase.isAvailable()) boardCase.caseContent = this.pawnShape;\n  } // \".caseContent\" setter both write player's pawnshape into the HTML div & change the \"content\" property of the boardcase object\n\n  const proto = {\n    play\n  };\n  const self = Object.assign(Object.create(proto), {\n    name,\n    pawnShape,\n    turn,\n    points: 0\n  });\n  return self;\n});\n\n\n//# sourceURL=webpack:///./src/lib/player.js?");

/***/ })

/******/ });