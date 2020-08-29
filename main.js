function BoardCase(caseID, doc = document){
    let content = "";//Protégé dans la closure (car non retuné dans l'objet), accessible que via getter et setter. Elle est unique à chaque objet car chaque instansiation crée en une
    //pas besoin d'initiliser juste en faisant ca ca initilise des var qui seront unique à l'objet grace à la closure
  function writeToDOM(caseID, contentToWrite){
    doc.querySelector(`#${caseID}`).innerHTML = contentToWrite;
  }

  function isAvailable(){
    return content === ""; //renvoi true si la variable content vaut "", (aka si la case est vide)
  }

  return {
    set caseContent(playerPawn){
      content = playerPawn; //On utilise pas this si non on set une nouvelle ppiété sur l'objet ! La on va chercher le content de la scope au dessus. L'objet transporte rien
      writeToDOM(caseID, playerPawn) //En utilisant le setter on va en même temps ET changer la ppiété "content" de l'objet boardCase ET ecrire le pion dans la div élément HTML lui correspondant
      return this; //on return this pour faire du methode chaineing si besoin
    },
    get caseContent(){
      return content;
    },
    isAvailable,
    id: caseID, //caseID est une variable set dans la scope de ma factory car c'est un paramètre à elle. Là, je peut la rendre accessible au public sou s la pripriété "id"
  }
}


function Player(name, pawnShape, turn){
  function play(boardCase){
    if (boardCase.isAvailable()) boardCase.caseContent = this.pawnShape; //On utilise caseContent pour ecrire la div HTML et changer la ppiété content de l'objet boardcase
  }

  return{
    name,
    pawnShape,
    turn,
    points: 0,
    play,
  }
}
//les chose à sortir de game doivent êtr dans app: Addevent listerner et variable externe
const Game = (function(doc, Player){
  let scorePara; //doit être initiliser à l'exterieure car on l'utilise dans une fonction "displayScore()" plus bas. Pas juste une fois comme pour le submitBtn
  let overlayDiv; //Pareil on l'utilise dans plusieurs fonction. Si on la set direct dans le EventListener elle sera locale à cette fonction.
  let results;
  let boardCasesDivs;
  let newRound = doc.querySelector(".new-round");

  document.addEventListener('DOMContentLoaded', () => { // Game est IIFE, donc cette fonction sera de suite mise en place (une fois la page loaded)
    overlayDiv = doc.querySelector(".starting-overlay"); //On aura le click en attente initializeGame sera executée que lors du click du user
    const submitBtn = doc.querySelector('.submit');  //On initialize tous les elements qu'on veut target après que la page soit loadée. Même si on va pas faire de addeventlistener dessus mais un innerHTML par ex
    scorePara = doc.querySelector('.score');
    results = doc.querySelector('.results');
    submitBtn.addEventListener("click", initializeGame, false); //Le click trigger initilize game pour le 1er round mais aussi par la suite quand on fera newGame qui remet la div avec son form et donc le btn
    boardCasesDivs = Array.from(doc.getElementsByClassName("boardcase"));
    doc.querySelector(".new-game").addEventListener("click", newGame);
    newRound.addEventListener("click", startRound);
  });


  function initializeGame(e){ //Initilise les players uniquement lors du click
    e.preventDefault();
    const nameP1 = doc.querySelector("#name_p1").value;
    const nameP2 = doc.querySelector("#name_p2").value;
    const pawnP1 = doc.querySelector(".pawn").value;
    const pawnP2 = (function(){ return pawnP1 == "X" ? "O" : "X"})();
    Game.players =  { // On set ici (lors de l'appel de getPlayrInfo) la propriété players sur Game, pas possible au bas du module.
      player1: Player(nameP1, pawnP1, true),     //On a pas le choix car la constante Game sera déjà assignée car c'est une IIFE donc elle a déjà return le contenu de Game
      player2: Player(nameP2, pawnP2, false),
    }
    closeOverlay();
    startRound()
  }

  function newGame(){ //Remet juste la div overlay et donc le button en place. Son click trigger la suite
    overlayDiv.style.display = "flex";
  }

  function listenToCases(boolean){
    if (boolean){
      boardCasesDivs.forEach(boardCase => boardCase.addEventListener("click", playerMove, false));
    } else {
      boardCasesDivs.forEach(boardCase => boardCase.removeEventListener("click", playerMove, false));
    }
  }

  function startRound(){
    if (results.innerHTML) {  //Si ce n'est pas le 1er round joué
      results.innerHTML = "";
      newRound.classList.remove("animate-btn");
    }
    listenToCases(true);
    Game.Board.clear(); // Ici et pas dans newGame car on doit clear aussi pour chaque round
    displayScore();
  }

  function closeOverlay(){
    overlayDiv.style.display = "none";
    doc.forms[0].reset() //On reset pour le prochain Game
  }

  function playerTurn(){
    for (let player in Game.players){
      if (Game.players[player].turn == true) return Game.players[player];
    }
  }

  function changePlayersTurn(){
    for (let player in Game.players){
      if (Game.players[player].turn == true){
        Game.players[player].turn = false;
      } else {
        Game.players[player].turn = true;
      }
    }
  }

  function playerMove(e){
    const playedCase = Game.Board.findCaseByID(e.target.id);//je selectionne l'objet boardcase correspondanct de l'élément HTML
    playerTurn().play(playedCase)
    if (Game.Board.hasAnEndingCondition()){
      endRound();
    } else {
      changePlayersTurn();
    }
  }

  function endRound(){
    newRound.classList.add("animate-btn");
    listenToCases(false)
    if (Game.Board.hasWinningCombination()){
      const winner = playerTurn(); // joueur qui a encore sa ppiété turn à true est le dernier qui a joué.
      winner.points += 1;
      displayScore();
      results.innerHTML = `${winner.name} wins the round !`;
    } else {
      results.innerHTML = "Tie !";
    }
  }

  function displayScore(){ //elle meme mise dans game.startRound
    scorePara.innerHTML = `Score: ${Game.players.player1.name}(${Game.players.player1.pawnShape}) ${Game.players.player1.points} - ${Game.players.player2.points} ${Game.players.player2.name}(${Game.players.player2.pawnShape})`;
  }

  return { //Obliger de return un objet (même s'il est vide) pour qu'on assigne Game avec qqchose right away. Si des element doivent etre ajouter apparaissent par la suite (suite à des event) On les mettra via "Game.property = "
    displayScore,
  }
})(document, Player)



Game.Board = (function(){ //Board est moduel IIFE mais aussi une propréité de Game
  const boardCases = (function(gridSize){ //Instanciation des BoardeCases via une IIFE qui set dans la variable "boardCases" le resultat de la fonction.
    const boardCasesIDs = generateBoardCasesIDsArray(gridSize);
    return boardCasesIDs.map(caseID => BoardCase(caseID))
  })(3) //Ici on choisi la taille de la grille (ici 3x3)

  const winningCombinationsIDs = [ //que pour la grille 3x3
    ["a1", "b1", "c1"],
    ["a2", "b2", "c2"],
    ["a3", "b3", "c3"],
    ["a1", "a2", "a3"],
    ["b1", "b2", "b3"],
    ["c1", "c2", "c3"],
    ["a1", "b2", "c3"],
    ["a3", "b2", "c1"],
  ]

  function generateBoardCasesIDsArray(gridSize){ //Méthode qui génère tous les noms des cases en fonction de la taille de la grille qu'on veut.
    const arrayOfCases = [];
    const gridColumnID = Array.from({ length: gridSize }, (_, i) => String.fromCharCode('a'.charCodeAt(0) + i)); //["a", "b", "c"...]
    const gridRowsID = [...Array(gridSize + 1).keys()].slice(1); //["1", "2", "3"...]

    gridColumnID.forEach(columnID => {
      gridRowsID.forEach(rowID => {
        arrayOfCases.push(columnID + rowID);
      })
    })

    return arrayOfCases; //["a1", "a2", "a3", "b1"...]
  }

  function findCaseByID(boardID){
    return boardCases.find(boardCase => boardCase.id === boardID);
  }

  function hasWinningCombination(){
    return winningCombinationsIDs.some(combinationIDsarray => {
      return combinationIDsarray.every(caseID => findCaseByID(caseID).caseContent === "X") || combinationIDsarray.every(caseID => findCaseByID(caseID).caseContent === "O");
    })
  }

  function isFull(){
    return boardCases.every(boardcase => boardcase.caseContent)
  }

  function hasAnEndingCondition(){
    return  hasWinningCombination() || isFull(); //Ca peyu tres bien etre is full et winning combination
  }

  function clear(){
    boardCases.forEach(boardcase => boardcase.caseContent = "")
  }
  return {
    hasAnEndingCondition,
    hasWinningCombination,
    clear,
    boardCases,
    findCaseByID,
  }
})()
