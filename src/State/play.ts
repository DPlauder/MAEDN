import { Player } from "../Components/player.js";
import { GameCube } from "../Components/gamecube.js";
import { GameBoard } from "../Components/gameboard.js";
import { Figure } from "../Components/figure.js";
import { GameBoardUi } from "../View/gameboardview.js";

class Play{
    private players: Player[]
    private currentPlayerIndex: number;
    public gameCube: GameCube;
    public gameBoard: GameBoard;
    private gameBoardUi: GameBoardUi;
    private gamePhase: number;

    constructor(){
        this.gameBoard = new GameBoard();
        this.players = [];
        this.currentPlayerIndex = 0;
        this.gameCube = new GameCube();
        this.gameBoardUi = new GameBoardUi();
        this.createGame();
        this.gamePhase = 0;
    }

    createGame(): void{
        this.gameBoardUi.createGrid();
    }

    addPlayer(player: Player): void{
        this.players.push(player);
    }

    playGame(): void{       
        const grid = document.getElementById('playField') as HTMLDivElement;
        grid.addEventListener('click', (e) => {
            this.checkGamePhase(e.target);           
        })
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
    checkGamePhase(element: EventTarget | null){
        console.log((element as HTMLElement).id);
        let figureId;
        let idNum;
        const currentPlayer = this.getCurrentPlayer();
        if(this.gamePhase === 0 && (element as HTMLElement).id === "gameCube"){
            this.rollDice();
            this.setGamePhase();
        } else if(this.gamePhase === 1){
            //this.getChosenFigureInput();
        } else if(this.gamePhase == 2){
            this.moveCurrentPlayerFigure(currentPlayer.myFigures[idNum]);
            this.nextTurn();
            this.setGamePhase();       
            console.log(this.gamePhase);           
        }      
    }   
    setGamePhase(){
        if(this.gamePhase <= 1){
            this.gamePhase++;
        } else{
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
    getCurrentPlayer(): Player{
        return this.players[this.currentPlayerIndex];
    }

    nextTurn(): void{
        this.currentPlayerIndex = (this.currentPlayerIndex + 1) % this.players.length;
    }

    rollDice(): void{ 
        const getCurrentPlayer = this.getCurrentPlayer();
        this.gameCube.rollCube();
        this.gameBoardUi.gameCubeUi.showGameCubeNum(this.gameCube.rolledNum);
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