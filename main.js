

function BoardCase(caseID, doc = document){
    let content = "";//Protégé dans la closure (car non retuné dans l'objet), accessible que via getter et setter. Elle est unique à chaque objet car chaque instansiation cré un
    //pas besoin d'initiliser juste en faisant ca ca initilise des var qui seront dans l'objet grace a la closure
  function writeToDOM(caseID, contentToWrite){
    doc.querySelector(`#${caseID}`).innerHTML = contentToWrite;
  }

  function isAvailable(){
    return content === ""; //renvoi true si la variable content vaut "", (aka si la case est vide)
  }

  return {
    set caseContent(playerPawn){
      content = playerPawn; //On utilise pas this si non on set une nouvelle ppiété sur l'objet ! La on va chercher le content de la scope au dessus. L'objet transporte rien
      writeToDOM(caseID, playerPawn)
      return this; //on return this pour faire du methode chaineing si besoin
    },
    get caseContent(){
      return content;
    },
    isAvailable,
    id: caseID, //caseID est une variable set dans la scope de ma factory car c'est un paramètre à elle. Là, je peut la rendre accessible au public sou s la pripriété "id"
  }
}

const Board = (function(){ //Board est un module et non une simple factory function. On a besoin que d'une seule board dans le jeu. 1 seule closure sera crée donc. Il faut lancer un nouveau game pour réinitilisé unenouvelle board.
  const boardCases = (function(gridSize){ //Instanciation des BoardeCases via une IIFE qui set dans la variable "boardCases" le resultat de la fonction.
    const boardCasesIDs = generateBoardCasesIDsArray(gridSize);
    return boardCasesIDs.map(caseID => BoardCase(caseID))
  })(3) //Ici on choisi la taille de la grille (ici 3x3)

  const winningCombinationsIDs = [
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
    return  hasWinningCombination() || isFull();
  }

  function clear(){
    boardCases.forEach(boardcase => boardcase.caseContent = "")
  }
  return {
    hasAnEndingCondition,
    clear,
    boardCases,
  }
})()

function Player(name, pawnShape){
  return {
    name,
    pawnShape,
    turn: undefined,
  }
}

const Game = (function(doc){

  document.addEventListener('DOMContentLoaded', () => { // Game est IIFE, donc cette fonction sera de suite mise en place (une fois la page loaded).
    const submitBtn = doc.querySelector('.submit');  //On aura le click en attente getPlayer sera effective QUE lors du click du user.
    submitBtn.addEventListener("click", getPlayersInfos, false);
  });


  function getPlayersInfos(e){ //Initilise les players uniquement lors du click
    e.preventDefault();
    closeOverlay();
    let nameP1 = doc.querySelector("#name_p1").value;
    let nameP2 = doc.querySelector("#name_p2").value;
    let pawnP1 = doc.querySelector(".pawn").value;
    let pawnP2 = (function(){ return pawnP1 == "X" ? "O" : "X"})()
    Game.players =  { // On set ici (lors de l'appel de getPlayrInfo) la propriété players sur Game, pas possible au bas du module.
      player1: (Player(nameP1, pawnP1, true))(),     //On a pas le choix car la constante Game sera déjà assignée car c'est une IIFE donc elle a déjà return le contenu de Game
      player2: (Player(nameP2, pawnP2, false))(),
    }
  }

  function closeOverlay(){
    let overlayDiv = doc.querySelector(".starting-overlay");
    overlayDiv.style.display = "none";
  }

  return { //Obliger de return un objet (même s'il est vide) pour qu'on assigne Game avec qqchose right away. Si des element doivent etre ajouter apparaissent par la suite (suite à des event)
            //On les mettra via "Game.property = ".
  }
})(document)
