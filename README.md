# Tic Tac Toe game in vanilla JS.
HTML/CSS for UI and webpack for assets management. 
Part of the curriculum of [The Odin Project](https://www.theodinproject.com/)'s Javascript Course.

## Learning outcomes

### Implementations:

1. Encapsulation

* No code in the globale scope. Factory functions and module patterns are namespaced in modules. 

* Dependencies are injected in parametres.

* Objects created are closures. Their interaction with other objects is only possible through APIs (public methods and properties), the rest of their methods are strictly private. This allow real data protection, as opposed to just using convention like appending an underscore at the begining of a variable.

2. Separations of concerns:

* Methods with multiple responsabilities are splited into small methods. This gives a cleaner and more maintainable code. 
For exemple, here is the code of `initializeGame()` that takes care of initializing the players, closeing an overlay div in the HTML, and starting a round:
```
function initializeGame() {
  _initializePlayers();
  _closeOverlay();
  startRound();
}
```
* Files architecture: 1 module per file, using ES6 modules.

### To be imporved
1. Exctracting DOM manipulations into it's own module separated from the logic. Currently this is not respecting the single responsability principle.

2. Decoupling. Currently objects are tightly coupled. For exemple, to be created, a `Board` need to know about `BoardCase`s. And `Game` depend on `Player` and `Board`. Fixing this is possible using a Pub/Sub pattern.

