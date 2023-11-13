import { PlayField } from "./playfield";
import { PlayerZones } from "./playerZones";
import { GameCubeUi } from "./gamecubeUi";
import { GameBoard } from "../Components/gameboard";
import { Figure } from "../Components/figure";
import { Player } from "../Components/player";


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

    updateGameboardPlayerBank(players: Player[]){
        players.forEach(element =>{
            let myFiguresOnBank: number[] = element.getFiguresOnBank();
            if(myFiguresOnBank){
                for(let i = 1; i <= element.myFigures.length; i++){                   
                    const bankElement = document.getElementById(`${element.color}Bank-${i}`) as HTMLDivElement;
                    if(myFiguresOnBank.includes(i)){
                        bankElement.classList.add(`${element.color}Figure`);
                    } else{
                        bankElement.classList.remove(`${element.color}Figure`);
                    }                                  
                }
            }
        });
    }
    updateGameBoardPlayerEndzone(player: Player){          
        for(let i = 0; i < player.myFigures.length; i++){  
            const endzoneElement = document.getElementById(`${player.color}-${i}`) as HTMLDivElement;                       
            if(player.myFigures[i].isInEndzone){
                endzoneElement.classList.add(`${player.color}Figure`);
            } else {
                endzoneElement.classList.remove(`${player.color}Figure`);
            }
        }
    }

}

export {GameBoardUi}