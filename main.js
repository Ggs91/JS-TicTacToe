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
  return{
    name,
    pawnShape,
    turn: undefined,
  }
}
