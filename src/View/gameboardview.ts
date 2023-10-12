import { PlayField } from "./playfield.js";
import { PlayerZones } from "./playerZones.js";
import { GameCubeUi } from "./gamecubeUi.js";
import { GameBoard } from "../Components/gameboard.js";
import { Figure } from "../Components/figure.js";
import { Player } from "../Components/player.js";


class GameBoardUi{
    playField: PlayField;
    playerZones: PlayerZones;
    gameCubeUi: GameCubeUi;
    constructor(){
        this.playField = new PlayField();
        this.playerZones = new PlayerZones();
        this.gameCubeUi = new GameCubeUi();
    }
    createGrid(): void{
        const parentElement = document.getElementById("playField") as HTMLDivElement
        for(let row = 0; row<11; row++){
            for(let column = 0; column<11; column++){
                const newDiv = document.createElement("div");

                const targetCoordinates = [row, column];
                this.playField.addId(newDiv, targetCoordinates);

                this.playerZones.setEndzone(newDiv, targetCoordinates)
                this.playerZones.setStartPoints(newDiv, targetCoordinates); 
                this.playerZones.setReserveBank(newDiv, targetCoordinates);          
                this.gameCubeUi.createGamecubeUi(newDiv, targetCoordinates) ;      
                parentElement.appendChild(newDiv);


                //newDiv.innerHTML = `${row} + ${column}`;
            }
        }
    }
    updateGameBoardUi(gameBoard: GameBoard){
        for(let i = 0; i < gameBoard.gameboard.length; i++){
            const playField = document.getElementById(`playfield-${i}`) as HTMLDivElement;                       
            if(gameBoard.gameboard[i] != 0){
                playField.classList.toggle(`${(gameBoard.gameboard[i] as Figure).color}Figure`);
            } else if (gameBoard.gameboard[i] === 0){
                playField.classList.toggle(`${(gameBoard.gameboard[i] as Figure).color}Figure`);
            }
        }       
    }
    updateFiguresOnBank(players: Player[]){
        players.forEach(element => {
            element.getFiguresOnBank();
            console.log(element);
            
        })
    }
}

export {GameBoardUi}