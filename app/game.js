import Player from './player.js'
import Board from './board.js'

export default (function(doc){

  let _overlayDiv; //Declaration of vars that will be in the scope of the whole module
  let _scorePara;
  let _results;
  let _boardCasesDivs;
  let _newRoundBtn;
  let _handler;

  document.addEventListener('DOMContentLoaded', () => { //Assign HTML elements to vars once the document is lodaded
    _overlayDiv = doc.querySelector(".starting-overlay");
    _scorePara = doc.querySelector('.score');
    _results = doc.querySelector('.results');
    _boardCasesDivs = Array.from(doc.getElementsByClassName("boardcase"));
    _newRoundBtn = doc.querySelector(".new-round");
  })

  function initializeGame(e){
    e.preventDefault();               // Assign "playerMove" expression binded to "Game" context
    _handler = playerMove.bind(this); // So we store a single reference that will be used in addEventListener & removeEventListener

    const nameP1 = doc.querySelector("#name_p1").value; //Retrieve values from the form fields (users inputs)
    const nameP2 = doc.querySelector("#name_p2").value;
    const pawnP1 = doc.querySelector('input[name="pawn_shape"]:checked').value;
    const pawnP2 = (function(){ return pawnP1 == "X" ? "O" : "X"})();

    this.players =  { //Set the "players" property on the "Game" module, once we get users inputs to initialize the Players. "player" is part of "Game" API
      player1: Player(nameP1, pawnP1, true),
      player2: Player(nameP2, pawnP2, false),
    }
    _closeOverlay();
    this.startRound();
  }



  function startRound(){
    if (_results.innerHTML) { //Skip if it's not the first round played
      _results.innerHTML = "";
      _newRoundBtn.classList.remove("animate-btn");
    }
    this.listenToCases(true); //We "turn on" the eventlistener on the board cases
    this.board.clear();
    this.displayScore();
  }

  function newGame(){ //Just put the _overlayDiv back to the screen. The click to its submit button triggers a new game
    _overlayDiv.style.display = "flex";
  }


  function listenToCases(boolean){
    if (boolean){
      _boardCasesDivs.forEach(boardCase => boardCase.addEventListener("click", _handler, true)); //same reference used in both listeners.
    } else {
      _boardCasesDivs.forEach(boardCase => boardCase.removeEventListener("click", _handler, true));
    }
  }

  function playerTurn(){ //return the player whose turn to play based on players "turn" property value (true/false)
    for (let player in this.players){
      if (this.players[player].turn == true) return this.players[player];
    }
  }

  function changePlayersTurn(){ //Switch players "turn" property value from true to false and vice versa
    for (let player in this.players){
      if (this.players[player].turn == true){
        this.players[player].turn = false;
      } else {
        this.players[player].turn = true;
      }
    }
  }

  function playerMove(e){
    const playedCase = this.board.findCaseByID(e.target.id); //Maps the HTML "case" element clicked with the "caseboard" object in the Game.board.boardCases property
    this.playerTurn().play(playedCase)
    if (this.board.hasAnEndingCondition()){
      this.endRound();
    } else {
      this.changePlayersTurn();
    }
  }

  function endRound(){
    _newRoundBtn.classList.add("animate-btn");
    this.listenToCases(false); //remove click listener from HTML cases
    if (this.board.hasWinningCombination()){
      const winner = this.playerTurn(); // player who has his turn property to 'true' is the last one who played
      winner.points += 1;
      this.displayScore();
      _results.innerHTML = `${winner.name} wins the round !`;
    } else {
      _results.innerHTML = "Tie !";
    }
  }

  //Private Methods

  function _closeOverlay(){
    _overlayDiv.style.display = "none";
    doc.forms[0].reset() //Rests the fields of the form for the next Game
  }

  function displayScore(){
    _scorePara.innerHTML = `Score: ${this.players.player1.name}(${this.players.player1.pawnShape}) ${this.players.player1.points} - ${this.players.player2.points} ${this.players.player2.name}(${this.players.player2.pawnShape})`;
  }

  return { //"Game" API. Properties and methods accessible to the public
    initializeGame,
    startRound,
    newGame,
    displayScore,
    listenToCases,
    endRound,
    changePlayersTurn,
    playerTurn,
    playerMove,
    board: Board,
  }
})(document)
