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
                const targetCoordinates = [row, column];
                this.playField.addId(newDiv, targetCoordinates);
                this.playerZones.setEndzone(newDiv, targetCoordinates);
                this.playerZones.setStartPoints(newDiv, targetCoordinates);
                this.playerZones.setReserveBank(newDiv, targetCoordinates);
                this.gameCubeUi.createGamecubeUi(newDiv, targetCoordinates);
                parentElement.appendChild(newDiv);
                //newDiv.innerHTML = `${row} + ${column}`;
            }
        }
    }
    updateGameBoardUi(gameBoard) {
        for (let i = 0; i < gameBoard.gameboard.length; i++) {
            const playField = document.getElementById(`playfield-${i}`);
            if (gameBoard.gameboard[i] != 0) {
                playField.classList.toggle(`${gameBoard.gameboard[i].color}Figure`);
            }
            else if (gameBoard.gameboard[i] === 0) {
                playField.classList.toggle(`${gameBoard.gameboard[i].color}Figure`);
            }
        }
    }
    updateFiguresOnBank(players) {
        players.forEach(element => {
            element.getFiguresOnBank();
            console.log(element);
        });
    }
}
export { GameBoardUi };
//# sourceMappingURL=gameboardview.js.map