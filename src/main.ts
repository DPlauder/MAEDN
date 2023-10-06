import { Player } from "./Components/player.js";
import { Play } from "./State/play.js";

//--------------------------------------------------AUSFÜHRUNG-----------------------------------------
const play = new Play();
const myPlayer1 = new Player("red");
play.addPlayer(myPlayer1);
const myPlayer2 = new Player("blue");
play.addPlayer(myPlayer2);
const myPlayer3 = new Player("yellow");
play.addPlayer(myPlayer3);
const myPlayer4 = new Player("green");
play.addPlayer(myPlayer4);

/*
while(isGameFinished){
    console.log("testfunc");
    const currentPlayer = play.getCurrentPlayer();
    play.rollDice();
    let figureId = prompt(" Gib nummer von 0-4 ein");
    if(figureId){
        let idNumb = parseInt(figureId);
        play.moveCurrentPlayerFigure(currentPlayer.myFigures[idNumb]);
        play.nextTurn();
        console.log("test");
    }
    if(play.isGameEnd(currentPlayer)){
        isGameFinished()
    }
    console.log(play.gameBoard);
}
function isGameFinished(){
    return false;
}
*/
console.log(play);




//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//TODO:     Figur spawn only on 6
//TODO      WinConditions -> all 4 in Endzone

//-----------------------------------------------------------------------
//TODO      3xRoll when no Figur on Board
//TODO      Extra Roll when 6 rolled
