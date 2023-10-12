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
        this.createNewGame();
        this.gamePhase = 0;
    }
    createNewGame() {
        this.gameBoardUi.createGrid();
    }
    addPlayer(player) {
        this.players.push(player);
    }
    playGame() {
        const grid = document.getElementById('playField');
        grid.addEventListener('click', (e) => {
            this.checkGamePhase(e.target);
            this.gameBoardUi.updateGameBoardUi(this.gameBoard);
            this.gameBoardUi.updateFiguresOnBank(this.players);
        });
    }
    checkGamePhase(element) {
        let idNum;
        const currentPlayer = this.getCurrentPlayer();
        this.gameBoardUi.updateGameBoardUi(this.gameBoard);
        if (this.gamePhase === 0 && element.id === "gameCube") {
            this.rollDice();
            this.setGamePhase();
        }
        else if (this.gamePhase === 1) {
            idNum = this.getChosenFigureInput();
            this.moveCurrentPlayerFigure(currentPlayer.myFigures[idNum]);
            this.nextTurn();
            this.setGamePhase();
        }
    }
    setGamePhase() {
        if (this.gamePhase === 0) {
            this.gamePhase++;
        }
        else {
            this.gamePhase = 0;
        }
    }
    getChosenFigureInput() {
        let figureId = prompt("Gib Nummer ein");
        if (figureId) {
            let idNum = parseInt(figureId);
            return idNum;
        }
        return 0;
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
        this.gameBoardUi.gameCubeUi.showGameCubeNum(this.gameCube.rolledNum);
        console.log(this.gameCube.rolledNum, " Wurf");
    }
    moveCurrentPlayerFigure(figureToMove) {
        const currentPlayer = this.getCurrentPlayer();
        const rolledNum = this.gameCube.rolledNum;
        const targetPos = rolledNum + figureToMove.position;
        if (figureToMove.isOnField && figureToMove.position < 40 && figureToMove.checkMaxDistance(targetPos)) {
            figureToMove.moveOnPlayerBoard(rolledNum);
            this.gameBoard.moveFigure(figureToMove, rolledNum);
        }
        else if (figureToMove.isOnField && figureToMove.position > 40 && figureToMove.checkMaxDistance(targetPos)) {
            figureToMove.moveOnPlayerBoard(rolledNum);
        }
        else if (!figureToMove.isOnField) {
            figureToMove.placeOnField();
            this.gameBoard.placeFigure(currentPlayer, figureToMove);
        }
        else {
            console.log("Fehler moveCurrentPlayerFigure");
        }
    }
    isGameEnd(player) {
        return player.checkAllFiguresInEndzone();
    }
}
export { Play };
//# sourceMappingURL=play.js.map