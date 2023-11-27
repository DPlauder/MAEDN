import { Player } from "../Components/player";
import { GameCube } from "../Components/gamecube";
import { GameBoard } from "../Components/gameboard";
import { Figure } from "../Components/figure";
import { GameBoardUi } from "../View/gameboardview";
import { GameRules } from "./gamerules";

class Play{
    public players: Player[]
    private currentPlayerIndex: number;
    public gameCube: GameCube;
    public gameBoard: GameBoard;
    private gameBoardUi: GameBoardUi;
    private gameRules: GameRules;

    constructor(){
        this.gameBoard = new GameBoard();
        this.players = [];
        this.currentPlayerIndex = 0;
        this.gameCube = new GameCube();
        this.gameBoardUi = new GameBoardUi();
        this.createNewGame();
        this.gameRules = new GameRules();

    }

    createNewGame(): void{
        this.gameBoardUi.createGrid();
    }

    addPlayer(player: Player): void{
        this.players.push(player);
    }

    playGame(): void{       
        const grid = document.getElementById('playField') as HTMLDivElement;
        this.gameBoardUi.updateGameboardPlayerBank(this.players);
        grid.addEventListener('click', (e) => { 
            this.checkGamePhase(e.target);
            this.gameBoardUi.updateGameBoardUi(this.gameBoard);  
           
        })
    }
    checkGamePhase(element: EventTarget | null){
        let idNum: number | null;
        const currentPlayer = this.getCurrentPlayer();
        //this.gameBoardUi.updateGameBoardUi(this.gameBoard);
        if(this.gameRules.getGamePhase() === 0 && (element as HTMLElement).id === "gameCube"){
            this.rollDice();
            this.gameRules.setGamePhaseTwo();
        } else if(this.gameRules.getGamePhase() === 1){            
            idNum = this.getChosenFigureId(currentPlayer, (element as HTMLDivElement));
            if(typeof(idNum) == "number"){
                this.moveCurrentPlayerFigure(currentPlayer.myFigures[idNum]);
                this.gameBoardUi.updateGameboardPlayerBank(this.players);
                this.gameBoardUi.updateGameBoardPlayerEndzone(this.getCurrentPlayer());
                this.nextTurn();
                this.gameRules.setGamePhaseOne();
            }         
        }
        if(currentPlayer.checkAllFiguresInEndzone()){
            console.log(`Player ${currentPlayer.color} has won`);           
            this.endGame();
        }       
    }   
    endGame(): void{
        this.gameRules.setEndGame();
    }

    getChosenFigureId(currentPlayer: Player, element: EventTarget): number | null{
        let figureId = null;
        
        if((element as HTMLDivElement).classList.contains(`${currentPlayer.color}Figure1`)){
            //console.log('test1');         
            return figureId = 0;
        } else if((element as HTMLDivElement).classList.contains(`${currentPlayer.color}Figure2`)){
            //console.log('test2');
            return figureId = 1;
            
        }
        else if((element as HTMLDivElement).classList.contains(`${currentPlayer.color}Figure3`)){
            //console.log('test3');
            return figureId =  2;
        }
        else if((element as HTMLDivElement).classList.contains(`${currentPlayer.color}Figure4`)) {
            //console.log('test4');
            return figureId = 3;
        }
        return figureId;
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
        this.gameBoardUi.gameCubeUi.showGameCubeNum(this.gameCube.rolledNum);        
    }

    moveCurrentPlayerFigure(figureToMove: Figure): void{
        const currentPlayer = this.getCurrentPlayer();
        const rolledNum = this.gameCube.rolledNum;
        const targetPos = rolledNum + figureToMove.position;

        if(figureToMove.isOnField && targetPos <= 40 && figureToMove.getMaxDistance(targetPos)){
            this.gameBoard.moveFigure(figureToMove, rolledNum);
            figureToMove.moveOnPlayerBoard(rolledNum);          
        } else if(figureToMove.isOnField && targetPos > 40 && figureToMove.getMaxDistance(targetPos)){
            figureToMove.moveOnPlayerBoard(rolledNum);
            //currentPlayer.addFigureInEndzone(figureToMove);
            figureToMove.setIsInEndzone()
            this.gameBoard.moveFigure(figureToMove, rolledNum);
        } else if (!figureToMove.isOnField){
            figureToMove.placeOnField();
            this.gameBoard.placeFigure(currentPlayer, figureToMove);
        } else{
            console.log("Fehler moveCurrentPlayerFigure");            
        }
    }
    isGameEnd(player: Player): boolean{
        return player.checkAllFiguresInEndzone();
    }
}

export {Play};