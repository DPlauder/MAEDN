import { PlayField } from "./playfield.js";
import { PlayerZones } from "./playerZones.js";
import { GameCubeUi } from "./gamecubeUi.js";
class GameBoardUi {
    constructor() {
        this.playField = new PlayField();
        this.playerZones = new PlayerZones();
        this.gameCubeUi = new GameCubeUi();
    }
    createGrid() {
        const parentElement = document.getElementById("playField");
        for (let row = 0; row < 11; row++) {
            for (let column = 0; column < 11; column++) {
                const newDiv = document.createElement("div");
                //newDiv.innerHTML = `${row} + ${column}`;
                const targetCoordinates = [row, column];
                this.playField.addId(newDiv, targetCoordinates);
                this.playerZones.setEndzone(newDiv, targetCoordinates);
                this.playerZones.setStartPoints(newDiv, targetCoordinates);
                this.playerZones.setReserveBank(newDiv, targetCoordinates);
                this.gameCubeUi.createGamecubeUi(newDiv, targetCoordinates);
                parentElement.appendChild(newDiv);
            }
        }
    }
    updateUi() {
    }
}
export { GameBoardUi };
//# sourceMappingURL=gameboardview.js.map