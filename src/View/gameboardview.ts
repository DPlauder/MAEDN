import { PlayField } from "./playfield.js";
import { PlayerZones } from "./playerZones.js";
import { Player } from "../Components/player.js";

class GameBoardUi{
    playField: PlayField;
    playerZones: PlayerZones;
    constructor(){
        this.playField = new PlayField();
        this.playerZones = new PlayerZones();
    }
    createGrid(): void{
        const parentElement = document.getElementById("playField") as HTMLDivElement
        for(let row = 0; row<11; row++){
            for(let column = 0; column<11; column++){
                const newDiv = document.createElement("div");
                //newDiv.innerHTML = `${row} + ${column}`;

                const targetCoordinates = [row, column];
                this.playField.addId(newDiv, targetCoordinates);

                this.playerZones.setEndzone(newDiv, targetCoordinates)
                this.playerZones.setStartPoints(newDiv, targetCoordinates); 
                this.playerZones.setReserveBank(newDiv, targetCoordinates);          
                                   
                parentElement.appendChild(newDiv);
            }
        }
    }
}

export {GameBoardUi}