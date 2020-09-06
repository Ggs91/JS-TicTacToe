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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction BoardCase(caseID) {\n  var doc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;\n  var content = \"\"; //Protégé dans la closure (car non retuné dans l'objet), accessible que via getter et setter. Elle est unique à chaque objet car chaque instansiation crée en une\n  //pas besoin d'initiliser juste en faisant ca ca initilise des var qui seront unique à l'objet grace à la closure\n\n  function writeToDOM(caseID, contentToWrite) {\n    doc.querySelector(\"#\".concat(caseID)).innerHTML = contentToWrite;\n  }\n\n  function isAvailable() {\n    return content === \"\"; //renvoi true si la variable content vaut \"\", (aka si la case est vide)\n  }\n\n  return {\n    set caseContent(playerPawn) {\n      content = playerPawn; //On utilise pas this si non on set une nouvelle ppiété sur l'objet ! La on va chercher le content de la scope au dessus. L'objet transporte rien\n\n      writeToDOM(caseID, playerPawn); //En utilisant le setter on va en même temps ET changer la ppiété \"content\" de l'objet boardCase ET ecrire le pion dans la div élément HTML lui correspondant\n\n      return this; //on return this pour faire du methode chaineing si besoin\n    },\n\n    get caseContent() {\n      return content;\n    },\n\n    isAvailable: isAvailable,\n    id: caseID //caseID est une variable set dans la scope de ma factory car c'est un paramètre à elle. Là, je peut la rendre accessible au public sou s la pripriété \"id\"\n\n  };\n}\n\nfunction Player(name, pawnShape, turn) {\n  function play(boardCase) {\n    if (boardCase.isAvailable()) boardCase.caseContent = this.pawnShape; //On utilise caseContent pour ecrire la div HTML et changer la ppiété content de l'objet boardcase\n  }\n\n  return {\n    name: name,\n    pawnShape: pawnShape,\n    turn: turn,\n    points: 0,\n    play: play\n  };\n} //les chose à sortir de game doivent êtr dans app: Addevent listerner et variable externe\n\n\nvar Game = function (doc, Player) {\n  var scorePara; //doit être initiliser à l'exterieure car on l'utilise dans une fonction \"displayScore()\" plus bas. Pas juste une fois comme pour le submitBtn\n\n  var overlayDiv; //Pareil on l'utilise dans plusieurs fonction. Si on la set direct dans le EventListener elle sera locale à cette fonction.\n\n  var results;\n  var boardCasesDivs;\n  var newRound = doc.querySelector(\".new-round\");\n  document.addEventListener('DOMContentLoaded', function () {\n    // Game est IIFE, donc cette fonction sera de suite mise en place (une fois la page loaded)\n    overlayDiv = doc.querySelector(\".starting-overlay\"); //On aura le click en attente initializeGame sera executée que lors du click du user\n\n    var submitBtn = doc.querySelector('.submit'); //On initialize tous les elements qu'on veut target après que la page soit loadée. Même si on va pas faire de addeventlistener dessus mais un innerHTML par ex\n\n    scorePara = doc.querySelector('.score');\n    results = doc.querySelector('.results');\n    submitBtn.addEventListener(\"click\", initializeGame, false); //Le click trigger initilize game pour le 1er round mais aussi par la suite quand on fera newGame qui remet la div avec son form et donc le btn\n\n    boardCasesDivs = Array.from(doc.getElementsByClassName(\"boardcase\"));\n    doc.querySelector(\".new-game\").addEventListener(\"click\", newGame);\n    newRound.addEventListener(\"click\", startRound);\n  });\n\n  function initializeGame(e) {\n    //Initilise les players uniquement lors du click\n    e.preventDefault();\n    var nameP1 = doc.querySelector(\"#name_p1\").value;\n    var nameP2 = doc.querySelector(\"#name_p2\").value;\n    var pawnP1 = doc.querySelector('input[name=\"pawn_shape\"]:checked').value;\n\n    var pawnP2 = function () {\n      return pawnP1 == \"X\" ? \"O\" : \"X\";\n    }();\n\n    Game.players = {\n      // On set ici (lors de l'appel de getPlayrInfo) la propriété players sur Game, pas possible au bas du module.\n      player1: Player(nameP1, pawnP1, true),\n      //On a pas le choix car la constante Game sera déjà assignée car c'est une IIFE donc elle a déjà return le contenu de Game\n      player2: Player(nameP2, pawnP2, false)\n    };\n    closeOverlay();\n    startRound();\n  }\n\n  function newGame() {\n    //Remet juste la div overlay et donc le button en place. Son click trigger la suite\n    overlayDiv.style.display = \"flex\";\n  }\n\n  function listenToCases(_boolean) {\n    if (_boolean) {\n      boardCasesDivs.forEach(function (boardCase) {\n        return boardCase.addEventListener(\"click\", playerMove, false);\n      });\n    } else {\n      boardCasesDivs.forEach(function (boardCase) {\n        return boardCase.removeEventListener(\"click\", playerMove, false);\n      });\n    }\n  }\n\n  function startRound() {\n    if (results.innerHTML) {\n      //Si ce n'est pas le 1er round joué\n      results.innerHTML = \"\";\n      newRound.classList.remove(\"animate-btn\");\n    }\n\n    listenToCases(true);\n    Game.Board.clear(); // Ici et pas dans newGame car on doit clear aussi pour chaque round\n\n    displayScore();\n  }\n\n  function closeOverlay() {\n    overlayDiv.style.display = \"none\";\n    doc.forms[0].reset(); //On reset pour le prochain Game\n  }\n\n  function playerTurn() {\n    for (var player in Game.players) {\n      if (Game.players[player].turn == true) return Game.players[player];\n    }\n  }\n\n  function changePlayersTurn() {\n    for (var player in Game.players) {\n      if (Game.players[player].turn == true) {\n        Game.players[player].turn = false;\n      } else {\n        Game.players[player].turn = true;\n      }\n    }\n  }\n\n  function playerMove(e) {\n    var playedCase = Game.Board.findCaseByID(e.target.id); //je selectionne l'objet boardcase correspondanct de l'élément HTML\n\n    playerTurn().play(playedCase);\n\n    if (Game.Board.hasAnEndingCondition()) {\n      endRound();\n    } else {\n      changePlayersTurn();\n    }\n  }\n\n  function endRound() {\n    newRound.classList.add(\"animate-btn\");\n    listenToCases(false);\n\n    if (Game.Board.hasWinningCombination()) {\n      var winner = playerTurn(); // joueur qui a encore sa ppiété turn à true est le dernier qui a joué.\n\n      winner.points += 1;\n      displayScore();\n      results.innerHTML = \"\".concat(winner.name, \" wins the round !\");\n    } else {\n      results.innerHTML = \"Tie !\";\n    }\n  }\n\n  function displayScore() {\n    //elle meme mise dans game.startRound\n    scorePara.innerHTML = \"Score: \".concat(Game.players.player1.name, \"(\").concat(Game.players.player1.pawnShape, \") \").concat(Game.players.player1.points, \" - \").concat(Game.players.player2.points, \" \").concat(Game.players.player2.name, \"(\").concat(Game.players.player2.pawnShape, \")\");\n  }\n\n  return {\n    //Obliger de return un objet (même s'il est vide) pour qu'on assigne Game avec qqchose right away. Si des element doivent etre ajouter apparaissent par la suite (suite à des event) On les mettra via \"Game.property = \"\n    displayScore: displayScore\n  };\n}(document, Player);\n\nGame.Board = function () {\n  //Board est moduel IIFE mais aussi une propréité de Game\n  var boardCases = function (gridSize) {\n    //Instanciation des BoardeCases via une IIFE qui set dans la variable \"boardCases\" le resultat de la fonction.\n    var boardCasesIDs = generateBoardCasesIDsArray(gridSize);\n    return boardCasesIDs.map(function (caseID) {\n      return BoardCase(caseID);\n    });\n  }(3); //Ici on choisi la taille de la grille (ici 3x3)\n\n\n  var winningCombinationsIDs = [//que pour la grille 3x3\n  [\"a1\", \"b1\", \"c1\"], [\"a2\", \"b2\", \"c2\"], [\"a3\", \"b3\", \"c3\"], [\"a1\", \"a2\", \"a3\"], [\"b1\", \"b2\", \"b3\"], [\"c1\", \"c2\", \"c3\"], [\"a1\", \"b2\", \"c3\"], [\"a3\", \"b2\", \"c1\"]];\n\n  function generateBoardCasesIDsArray(gridSize) {\n    //Méthode qui génère tous les noms des cases en fonction de la taille de la grille qu'on veut.\n    var arrayOfCases = [];\n    var gridColumnID = Array.from({\n      length: gridSize\n    }, function (_, i) {\n      return String.fromCharCode('a'.charCodeAt(0) + i);\n    }); //[\"a\", \"b\", \"c\"...]\n\n    var gridRowsID = _toConsumableArray(Array(gridSize + 1).keys()).slice(1); //[\"1\", \"2\", \"3\"...]\n\n\n    gridColumnID.forEach(function (columnID) {\n      gridRowsID.forEach(function (rowID) {\n        arrayOfCases.push(columnID + rowID);\n      });\n    });\n    return arrayOfCases; //[\"a1\", \"a2\", \"a3\", \"b1\"...]\n  }\n\n  function findCaseByID(boardID) {\n    return boardCases.find(function (boardCase) {\n      return boardCase.id === boardID;\n    });\n  }\n\n  function hasWinningCombination() {\n    return winningCombinationsIDs.some(function (combinationIDsarray) {\n      return combinationIDsarray.every(function (caseID) {\n        return findCaseByID(caseID).caseContent === \"X\";\n      }) || combinationIDsarray.every(function (caseID) {\n        return findCaseByID(caseID).caseContent === \"O\";\n      });\n    });\n  }\n\n  function isFull() {\n    return boardCases.every(function (boardcase) {\n      return boardcase.caseContent;\n    });\n  }\n\n  function hasAnEndingCondition() {\n    return hasWinningCombination() || isFull(); //Ca peyu tres bien etre is full et winning combination\n  }\n\n  function clear() {\n    boardCases.forEach(function (boardcase) {\n      return boardcase.caseContent = \"\";\n    });\n  }\n\n  return {\n    hasAnEndingCondition: hasAnEndingCondition,\n    hasWinningCombination: hasWinningCombination,\n    clear: clear,\n    boardCases: boardCases,\n    findCaseByID: findCaseByID\n  };\n}();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });