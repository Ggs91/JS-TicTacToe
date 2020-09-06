import Game from './game.js'

export default function(doc) {

  document.addEventListener('DOMContentLoaded', () => {
    const submitBtn = doc.querySelector('.submit');
    const newRoundBtn = doc.querySelector(".new-round");
    const newGameBtn = doc.querySelector(".new-game");

    submitBtn.addEventListener("click", Game.initializeGame.bind(Game));
    newRoundBtn.addEventListener("click", Game.startRound.bind(Game));  //utilisation de startRound de manirer externe.Ici on vaz chercher startRound (l'expression de la fction) chez son hote. Et on lui donne un context car addevent listener le change
    newGameBtn.addEventListener("click", Game.newGame);
  });
}
