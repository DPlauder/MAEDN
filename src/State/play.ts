import { Player } from "../Components/player.js";
import { GameCube } from "../Components/gamecube.js";
import { GameBoard } from "../Components/gameboard.js";
import { Figure } from "../Components/figure.js";
import { GameBoardUi } from "../View/gameboardview.js";

class Play{
    private players: Player[]
    private currentPlayerIndex: number;
    private gameCube: GameCube;
    public gameBoard: GameBoard;
    private gameBoardUi: GameBoardUi;

    constructor(){
        this.gameBoard = new GameBoard();
        this.players = [];
        this.currentPlayerIndex = 0;
        this.gameCube = new GameCube();
        this.gameBoardUi = new GameBoardUi();
        this.startGame();
    }

    startGame(){
        this.gameBoardUi.createGrid();
    }

    addPlayer(player: Player): void{
        this.players.push(player);
    }

    getCurrentPlayer(): Player{
        return this.players[this.currentPlayerIndex];
    }

    nextTurn(): void{
        this.currentPlayerIndex = (this.currentPlayerIndex + 1) % this.players.length;
    }

    rollDice(): void{
        const getCurrentPlayer = this.getCurrentPlayer();
        this.gameCube.rollCube();
        console.log(this.gameCube.rolledNum, " Wurf");
        
    }

    moveCurrentPlayerFigure(figureToMove: Figure): void{
        const currentPlayer = this.getCurrentPlayer();
        const rolledNum = this.gameCube.rolledNum;

        if(figureToMove.isOnField){
            figureToMove.moveOnPlayerBoard(rolledNum);
            this.gameBoard.moveFigure(figureToMove, rolledNum);
            console.log("if onfield");
            
        } else{
            figureToMove.placeOnField();
            this.gameBoard.placeFigure(currentPlayer, figureToMove);
            console.log("not onfield");
        }
    }
    isGameEnd(player: Player){
        return player.checkAllFiguresInEndzone();
    }
}

export {Play};