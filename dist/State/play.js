import { GameCube } from "../Components/gamecube.js";
import { GameBoard } from "../Components/gameboard.js";
import { GameBoardUi } from "../View/gameboardview.js";
class Play {
    constructor() {
        this.gameBoard = new GameBoard();
        this.players = [];
        this.currentPlayerIndex = 0;
        this.gameCube = new GameCube();
        this.gameBoardUi = new GameBoardUi();
        this.startGame();
    }
    startGame() {
        this.gameBoardUi.createGrid();
    }
    addPlayer(player) {
        this.players.push(player);
    }
    getCurrentPlayer() {
        return this.players[this.currentPlayerIndex];
    }
    nextTurn() {
        this.currentPlayerIndex = (this.currentPlayerIndex + 1) % this.players.length;
    }
    rollDice() {
        const getCurrentPlayer = this.getCurrentPlayer();
        this.gameCube.rollCube();
        console.log(this.gameCube.rolledNum, " Wurf");
    }
    moveCurrentPlayerFigure(figureToMove) {
        const currentPlayer = this.getCurrentPlayer();
        const rolledNum = this.gameCube.rolledNum;
        if (figureToMove.isOnField) {
            figureToMove.moveOnPlayerBoard(rolledNum);
            this.gameBoard.moveFigure(figureToMove, rolledNum);
            console.log("if onfield");
        }
        else {
            figureToMove.placeOnField();
            this.gameBoard.placeFigure(currentPlayer, figureToMove);
            console.log("not onfield");
        }
    }
    isGameEnd(player) {
        return player.checkAllFiguresInEndzone();
    }
}
export { Play };
//# sourceMappingURL=play.js.map