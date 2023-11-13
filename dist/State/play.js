import { GameCube } from "../Components/gamecube";
import { GameBoard } from "../Components/gameboard";
import { GameBoardUi } from "../View/gameboardview";
import { GameRules } from "./gamerules";
class Play {
    constructor() {
        this.gameBoard = new GameBoard();
        this.players = [];
        this.currentPlayerIndex = 0;
        this.gameCube = new GameCube();
        this.gameBoardUi = new GameBoardUi();
        this.createNewGame();
        this.gamePhase = 0;
        this.gameRules = new GameRules();
    }
    createNewGame() {
        this.gameBoardUi.createGrid();
    }
    addPlayer(player) {
        this.players.push(player);
    }
    playGame() {
        const grid = document.getElementById('playField');
        this.gameBoardUi.updateGameboardPlayerBank(this.players);
        grid.addEventListener('click', (e) => {
            this.checkGamePhase(e.target);
            this.gameBoardUi.updateGameBoardUi(this.gameBoard);
        });
    }
    checkGamePhase(element) {
        let idNum;
        const currentPlayer = this.getCurrentPlayer();
        this.gameBoardUi.updateGameBoardUi(this.gameBoard);
        if (this.gameRules.getGamePhase() === 0 && element.id === "gameCube") {
            this.rollDice();
            this.gameRules.setGamePhaseTwo();
        }
        else if (this.gameRules.getGamePhase() === 1) {
            idNum = this.getChosenFigureInput(currentPlayer);
            this.moveCurrentPlayerFigure(currentPlayer.myFigures[idNum]);
            this.gameBoardUi.updateGameboardPlayerBank(this.players);
            this.gameBoardUi.updateGameBoardPlayerEndzone(this.getCurrentPlayer());
            this.nextTurn();
            this.gameRules.setGamePhaseOne();
        }
        if (currentPlayer.checkAllFiguresInEndzone()) {
            console.log(`Player ${currentPlayer.color} has won`);
            this.endGame();
        }
    }
    endGame() {
        this.gameRules.setEndGame();
    }
    getChosenFigureInput(currentPlayer) {
        let figureId = prompt(`Player ${currentPlayer.color} choose a figure (0-3)`);
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
    }
    moveCurrentPlayerFigure(figureToMove) {
        const currentPlayer = this.getCurrentPlayer();
        const rolledNum = this.gameCube.rolledNum;
        const targetPos = rolledNum + figureToMove.position;
        if (figureToMove.isOnField && targetPos <= 40 && figureToMove.getMaxDistance(targetPos)) {
            this.gameBoard.moveFigure(figureToMove, rolledNum);
            figureToMove.moveOnPlayerBoard(rolledNum);
        }
        else if (figureToMove.isOnField && targetPos > 40 && figureToMove.getMaxDistance(targetPos)) {
            figureToMove.moveOnPlayerBoard(rolledNum);
            //currentPlayer.addFigureInEndzone(figureToMove);
            figureToMove.setIsInEndzone();
            this.gameBoard.moveFigure(figureToMove, rolledNum);
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