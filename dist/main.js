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

/***/ "./app/application.js":
/*!****************************!*\
  !*** ./app/application.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ \"./app/game.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (doc) {\n  document.addEventListener('DOMContentLoaded', function () {\n    var submitBtn = doc.querySelector('.submit');\n    var newRoundBtn = doc.querySelector(\".new-round\");\n    var newGameBtn = doc.querySelector(\".new-game\");\n    submitBtn.addEventListener(\"click\", _game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].initializeGame.bind(_game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\n    newRoundBtn.addEventListener(\"click\", _game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].startRound.bind(_game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\n    newGameBtn.addEventListener(\"click\", _game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].newGame);\n  });\n});\n\n//# sourceURL=webpack:///./app/application.js?");

/***/ }),

/***/ "./app/board.js":
/*!**********************!*\
  !*** ./app/board.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _boardCase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boardCase.js */ \"./app/boardCase.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((function (doc) {\n  var boardCases = function (gridSize) {\n    //Instanciation of the boardcases. \"boardCases\" variable is assigned the return of the IIFE invokation\n    var boardCasesIDs = _generateBoardCasesIDsArray(gridSize);\n\n    return boardCasesIDs.map(function (caseID) {\n      return Object(_boardCase_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(caseID, doc);\n    });\n  }(3); //Here we select a 3x3 grid size\n\n\n  var _winningCombinationsIDs = [//work only for 3x3 grid\n  [\"a1\", \"b1\", \"c1\"], [\"a2\", \"b2\", \"c2\"], [\"a3\", \"b3\", \"c3\"], [\"a1\", \"a2\", \"a3\"], [\"b1\", \"b2\", \"b3\"], [\"c1\", \"c2\", \"c3\"], [\"a1\", \"b2\", \"c3\"], [\"a3\", \"b2\", \"c1\"]]; // Private methods\n\n  function _generateBoardCasesIDsArray(gridSize) {\n    //Method that generate cases ID's names depending on the desired gridsize\n    var arrayOfCases = [];\n    var gridColumnID = Array.from({\n      length: gridSize\n    }, function (_, i) {\n      return String.fromCharCode('a'.charCodeAt(0) + i);\n    }); //[\"a\", \"b\", \"c\"...]\n\n    var gridRowsID = _toConsumableArray(Array(gridSize + 1).keys()).slice(1); //[\"1\", \"2\", \"3\"...]\n\n\n    gridColumnID.forEach(function (columnID) {\n      gridRowsID.forEach(function (rowID) {\n        arrayOfCases.push(columnID + rowID);\n      });\n    });\n    return arrayOfCases; //[\"a1\", \"a2\", \"a3\", \"b1\"...]\n  }\n\n  function _isFull() {\n    return boardCases.every(function (boardcase) {\n      return boardcase.caseContent;\n    });\n  } // Public methods\n\n\n  function findCaseByID(boardID) {\n    //Maps the HTML id's attribute of the div element with the corresponding boardcase object in the Board.boardCase property\n    return boardCases.find(function (boardCase) {\n      return boardCase.id === boardID;\n    });\n  }\n\n  function hasWinningCombination() {\n    return _winningCombinationsIDs.some(function (combinationIDsarray) {\n      return combinationIDsarray.every(function (caseID) {\n        return findCaseByID(caseID).caseContent === \"X\";\n      }) || combinationIDsarray.every(function (caseID) {\n        return findCaseByID(caseID).caseContent === \"O\";\n      });\n    });\n  }\n\n  function hasAnEndingCondition() {\n    return hasWinningCombination() || _isFull(); //Check for the winning combinations first in case there's both a winning combination & full board on the last move\n  }\n\n  function clear() {\n    boardCases.forEach(function (boardcase) {\n      return boardcase.caseContent = \"\";\n    });\n  }\n\n  var self = {\n    boardCases: boardCases,\n    hasAnEndingCondition: hasAnEndingCondition,\n    hasWinningCombination: hasWinningCombination,\n    clear: clear,\n    findCaseByID: findCaseByID\n  };\n  return self;\n})(document));\n\n//# sourceURL=webpack:///./app/board.js?");

/***/ }),

/***/ "./app/boardCase.js":
/*!**************************!*\
  !*** ./app/boardCase.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (caseID, doc) {\n  var _content = \"\"; // protected in the closure (not returned in the object). Accessible to the public only through setter and getter (APIs).\n  //It's unique to each instance of the \"boardCase\" factory. Because each instanciation create a new closure.\n\n  function _writeToDOM(caseID, contentToWrite) {\n    doc.querySelector(\"#\".concat(caseID)).innerHTML = contentToWrite;\n  }\n\n  function isAvailable() {\n    return _content === \"\"; //return true if content's value is \"\" (aka if the boardcase is empty)\n  }\n\n  var proto = {\n    set caseContent(playerPawn) {\n      //We don't use \"this\" otherwise we'd set a new property on the object.\n      _content = playerPawn; // Here we assign a new value to the content variable wich is directly accessible because in the same scope.\n\n      _writeToDOM(caseID, playerPawn); //By using the setter we both change the \"content\" property of the boardcase object & write into the html div the player's pawn shape\n\n    },\n\n    get caseContent() {\n      return _content;\n    },\n\n    isAvailable: isAvailable\n  };\n  var self = Object.assign(Object.create(proto), {\n    id: caseID\n  }); //caseID is a local variable got through the function parametre. We make it available to the public with the \"id\" property\n\n  return self;\n});\n\n//# sourceURL=webpack:///./app/boardCase.js?");

/***/ }),

/***/ "./app/game.js":
/*!*********************!*\
  !*** ./app/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player.js */ \"./app/player.js\");\n/* harmony import */ var _board_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./board.js */ \"./app/board.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((function (doc, player, board) {\n  var _overlayDiv; //Declaration of variables that will be in the scope of the whole module\n\n\n  var _scorePara;\n\n  var _results;\n\n  var _boardCasesDivs;\n\n  var _newRoundBtn;\n\n  var _handler;\n\n  document.addEventListener('DOMContentLoaded', function () {\n    //Assign HTML elements to vars once the document is lodaded\n    _overlayDiv = doc.querySelector(\".starting-overlay\");\n    _scorePara = doc.querySelector('.score');\n    _results = doc.querySelector('.results');\n    _boardCasesDivs = Array.from(doc.getElementsByClassName(\"boardcase\"));\n    _newRoundBtn = doc.querySelector(\".new-round\");\n  });\n\n  function initializeGame() {\n    _initializePlayers();\n\n    _closeOverlay();\n\n    startRound();\n  }\n\n  function startRound() {\n    if (_results.innerHTML) {\n      //Skip if it's not the first round played\n      _results.innerHTML = \"\";\n\n      _newRoundBtn.classList.remove(\"animate-btn\");\n    }\n\n    _listenToCases(true); //We \"turn on\" the eventlistener on the board cases\n\n\n    self.board.clear();\n\n    _displayScore();\n  }\n\n  function newGame() {\n    //Just put the _overlayDiv back to the screen. The click to its submit button triggers a new game\n    _overlayDiv.style.display = \"flex\";\n  } //Private Methods\n\n\n  function _initializePlayers() {\n    var nameP1 = doc.querySelector(\"#name_p1\").value; //Retrieve values from the form fields (users inputs)\n\n    var nameP2 = doc.querySelector(\"#name_p2\").value;\n    var pawnP1 = doc.querySelector('input[name=\"pawn_shape\"]:checked').value;\n\n    var pawnP2 = function () {\n      return pawnP1 == \"X\" ? \"O\" : \"X\";\n    }();\n\n    self.players = {\n      //Set the \"players\" property on the \"Game\" module, once we get users inputs to initialize the Players. \"player\" is part of \"Game\" API\n      player1: player(nameP1, pawnP1, true),\n      player2: player(nameP2, pawnP2, false)\n    };\n  }\n\n  function _listenToCases(_boolean) {\n    if (_boolean) {\n      _boardCasesDivs.forEach(function (boardCase) {\n        return boardCase.addEventListener(\"click\", _playerMove, true);\n      }); //same reference used in both listeners.\n\n    } else {\n      _boardCasesDivs.forEach(function (boardCase) {\n        return boardCase.removeEventListener(\"click\", _playerMove, true);\n      });\n    }\n  }\n\n  function _playerTurn() {\n    //return the player whose turn to play based on players \"turn\" property value (true/false)\n    for (var _player in self.players) {\n      if (self.players[_player].turn == true) return self.players[_player];\n    }\n  }\n\n  function _changePlayersTurn() {\n    //Switch players \"turn\" property value from true to false and vice versa\n    for (var _player2 in self.players) {\n      if (self.players[_player2].turn == true) {\n        self.players[_player2].turn = false;\n      } else {\n        self.players[_player2].turn = true;\n      }\n    }\n  }\n\n  function _playerMove(e) {\n    var playedCase = self.board.findCaseByID(e.target.id); //Maps the HTML \"case\" element clicked with the \"caseboard\" object in the Game.board.boardCases property\n\n    _playerTurn().play(playedCase);\n\n    if (self.board.hasAnEndingCondition()) {\n      _endRound();\n    } else {\n      _changePlayersTurn();\n    }\n  }\n\n  function _endRound() {\n    _newRoundBtn.classList.add(\"animate-btn\");\n\n    _listenToCases(false); //remove click listener from HTML cases\n\n\n    if (self.board.hasWinningCombination()) {\n      var winner = _playerTurn(); // player who has his turn property to 'true' is the last one who played\n\n\n      winner.points += 1;\n\n      _displayScore();\n\n      _results.innerHTML = \"\".concat(winner.name, \" wins the round !\");\n    } else {\n      _results.innerHTML = \"Tie !\";\n    }\n  }\n\n  function _closeOverlay() {\n    _overlayDiv.style.display = \"none\";\n    doc.forms[0].reset(); //Rests the fields of the form for the next Game\n  }\n\n  function _displayScore() {\n    _scorePara.innerHTML = \"Score: \".concat(self.players.player1.name, \"(\").concat(self.players.player1.pawnShape, \") \").concat(self.players.player1.points, \" - \").concat(self.players.player2.points, \" \").concat(self.players.player2.name, \"(\").concat(self.players.player2.pawnShape, \")\");\n  }\n\n  var self = {\n    //\"Game\" API. Properties and methods accessible to the public\n    initializeGame: initializeGame,\n    startRound: startRound,\n    newGame: newGame,\n    board: board\n  };\n  return self;\n})(document, _player_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _board_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])); //Dependencies injection\n\n//# sourceURL=webpack:///./app/game.js?");

/***/ }),

/***/ "./app/player.js":
/*!***********************!*\
  !*** ./app/player.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (name, pawnShape, turn) {\n  function play(boardCase) {\n    if (boardCase.isAvailable()) boardCase.caseContent = this.pawnShape;\n  } // \".caseContent\" setter both write player's pawnshape into the HTML div & change the \"content\" property of the boardcase object\n\n\n  var proto = {\n    play: play\n  };\n  var self = Object.assign(Object.create(proto), {\n    name: name,\n    pawnShape: pawnShape,\n    turn: turn,\n    points: 0\n  });\n  return self;\n});\n\n//# sourceURL=webpack:///./app/player.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_application_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../app/application.js */ \"./app/application.js\");\n\nObject(_app_application_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(document);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });