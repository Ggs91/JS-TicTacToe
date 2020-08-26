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
