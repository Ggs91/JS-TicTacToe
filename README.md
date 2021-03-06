# Tic Tac Toe game in vanilla JS
HTML/CSS for UI and webpack for assets management.
Part of the curriculum of [The Odin Project](https://www.theodinproject.com/)'s Javascript Course.

[>> Live demo <<](https://ggs91.github.io/JS-TicTacToe/dist/index.html)
## Learning outcomes

### Implementations:

**1. Encapsulation:**

* No code in the globale scope. Factory functions and module patterns are namespaced in modules.

* Dependencies are injected in parametres.

* Objects created are closures. Their interaction with other objects is only possible through APIs (public methods and properties), the rest of their methods are strictly private. This allow real data protection, as opposed to just using convention like appending an underscore at the begining of a variable.

**2. Separations of concerns:**

* Methods with multiple responsabilities are splited into small methods. This gives a cleaner and more maintainable code.
For exemple, here is the code of `initializeGame()` that takes care of initializing the players, closing an overlay div in the HTML, and starting a round:
```javascript
// src/lib/game.js

function initializeGame() {
  _initializePlayers();
  _closeOverlay();
  startRound();
}
```
* Files architecture: 1 module per file, using ES6 modules.

**3. Using webpack:**

This is my first project using webpack. After a lot of research and few headaches to configure it, I've managed to set it properly. I've a splited the configuration into 3 files, added babel, a linter and css autoprefixer. It's worth the time spent to learn it considering the huge benefits that it brings to the workflow.  

### Pieces I'm proud of:

**1. Algorithm that generate a grid of the desired size**

I made a function that generate an array of cases names depending on the desired gridsize.
For exemple for a regular 3x3 grid size it will return ["a1", "a2", "a3", ... , "c1", "c2", "c3"].
```javascript
// src/lib/board.js

function _generateBoardCasesIDsArray(gridSize) {
  const arrayOfCases = [];
  const gridColumnID = Array.from({ length: gridSize }, (_, i) =>
    String.fromCharCode("a".charCodeAt(0) + i)
  ); // ["a", "b", "c"...]
  const gridRowsID = [...Array(gridSize + 1).keys()].slice(1); // ["1", "2", "3"...]

  gridColumnID.forEach((columnID) => {
    gridRowsID.forEach((rowID) => {
      arrayOfCases.push(columnID + rowID);
    });
  });

  return arrayOfCases; // ["a1", "a2", "a3", "b1"...]
}
```
This can then be used by another method that will iterate over it and create the `BoardCase`s assigning each case an id of this array.
```javascript
// src/lib/board.js

const boardCases = (function (gridSize) {
  // Instanciation of the boardcases. "boardCases" variable is assigned the return of the IIFE invokation
  const boardCasesIDs = _generateBoardCasesIDsArray(gridSize);
  return boardCasesIDs.map((caseID) => BoardCase(caseID, doc));
})(3); // Here we select a 3x3 grid size
```
### To be improved:
1. Exctracting DOM manipulations into it's own module separated from the logic. Currently this is not respecting the single responsability principle.

2. Decoupling. Currently objects are tightly coupled. For exemple, to be created, a `Board` need to know about `BoardCase`s. And `Game` depend on `Player` and `Board`. Fixing this is possible using a Pub/Sub pattern.

## Installation

+ Clone this repo
```
git clone https://github.com/Ggs91/JS-TicTacToe.git
```
+ Enter the repo
```
cd JS-TicTacToe
```
+ Download dependencies

```
npm install
```

+ Launch dev server
```
npm run server
```

## Screenshots
![](/screenshots/screen1.png)
![](/screenshots/screen2.png)
![](/screenshots/screen3.png)
## Author
**Georges Atalla**

Email - georges_atalla@hotmail.fr

Github - https://github.com/Ggs91/
