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
        this.createGame();
        this.gamePhase = 0;
    }
    createGame() {
        this.gameBoardUi.createGrid();
    }
    addPlayer(player) {
        this.players.push(player);
    }
    playGame() {
        const grid = document.getElementById('playField');
        grid.addEventListener('click', (e) => {
            this.checkGamePhase(e.target);
        });
        /*
                this.gameBoardUi.gameCubeUi.showGameCubeNum(this.gameCube.rolledNum);
                let figureId = prompt("Gib Nummer ein");
                if(figureId){
                    let idNum = parseInt(figureId);
                    this.moveCurrentPlayerFigure(currentPlayer.myFigures[idNum]);
                    this.nextTurn();
                }
                if(this.isGameEnd(currentPlayer)){
                    isGameRunning = false;
                }
                */
    }
    checkGamePhase(element) {
        console.log(element.id);
        let figureId;
        let idNum;
        const currentPlayer = this.getCurrentPlayer();
        if (this.gamePhase === 0 && element.id === "gameCube") {
            this.rollDice();
            this.setGamePhase();
        }
        else if (this.gamePhase === 1) {
            //this.getChosenFigureInput();
        }
        else if (this.gamePhase == 2) {
            this.moveCurrentPlayerFigure(currentPlayer.myFigures[idNum]);
            this.nextTurn();
            this.setGamePhase();
            console.log(this.gamePhase);
        }
    }
    setGamePhase() {
        if (this.gamePhase <= 1) {
            this.gamePhase++;
        }
        else {
            this.gamePhase = 0;
        }
    }
    /*
    getChosenFigureInput(){
        figureId = prompt("Gib Nummer ein");
            if(figureId){
                idNum = parseInt(figureId);
                this.setGamePhase();
            }
    }
*/
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