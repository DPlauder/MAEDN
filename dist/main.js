import { Player } from "./Components/player.js";
import { Play } from "./State/play.js";
//--------------------------------------------------AUSFÜHRUNG-----------------------------------------
const play = new Play();
const myPlayer1 = new Player("red");
play.addPlayer(myPlayer1);
play.playGame();
console.log(play);
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//TODO:     Figur spawn only on 6 
//TODO:     get Figures on Ui    
//-----------------------------------------------------------------------
//TODO      3xRoll when no Figur on Board
//TODO      Extra Roll when 6 rolled
//# sourceMappingURL=main.js.map