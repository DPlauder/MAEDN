import { Player } from "./Components/player";
import { Play } from "./State/play";
//--------------------------------------------------AUSFÜHRUNG-----------------------------------------
const play = new Play();
const myPlayer1 = new Player("red");
play.addPlayer(myPlayer1);
const myPlayer2 = new Player("blue");
play.addPlayer(myPlayer2);
const myPlayer3 = new Player("green");
play.addPlayer(myPlayer3);
const myPlayer4 = new Player("yellow");
play.addPlayer(myPlayer4);
play.playGame();
console.log(play);
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//TODO:     show Figures Endzone(movement)
//TODO      Errorhandler when all figures on field
//-----------------------------------------------------------------------
//TODO      3xRoll when no Figur on Board
//TODO:     Figur spawn only on 6 
//TODO      Extra Roll when 6 rolled
//# sourceMappingURL=main.js.map