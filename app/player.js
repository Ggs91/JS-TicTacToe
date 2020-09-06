export default function (name, pawnShape, turn){

  function play(boardCase){
    if (boardCase.isAvailable()) boardCase.caseContent = this.pawnShape;
  }  // ".caseContent" setter both write player's pawnshape into the HTML div & change the "content" property of the boardcase object

  return{
    name,
    pawnShape,
    turn,
    points: 0,
    play,
  }
}
