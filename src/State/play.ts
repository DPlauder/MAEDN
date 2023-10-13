import { Player } from "../Components/player.js";
import { GameCube } from "../Components/gamecube.js";
import { GameBoard } from "../Components/gameboard.js";
import { Figure } from "../Components/figure.js";
import { GameBoardUi } from "../View/gameboardview.js";

class Play{
    public players: Player[]
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
        this.createNewGame();
        this.gamePhase = 0;
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
        let idNum: number;
        const currentPlayer = this.getCurrentPlayer();
        this.gameBoardUi.updateGameBoardUi(this.gameBoard);
        if(this.gamePhase === 0 && (element as HTMLElement).id === "gameCube"){
            this.rollDice();
            this.setGamePhase();
        } else if(this.gamePhase === 1){
            idNum = this.getChosenFigureInput();
            this.moveCurrentPlayerFigure(currentPlayer.myFigures[idNum]);
            this.gameBoardUi.updateGameboardPlayerBank(this.players);
            this.gameBoardUi.updateGameBoardPlayerEndzone(this.getCurrentPlayer());
            this.nextTurn();
            this.setGamePhase(); 
        }
        if(currentPlayer.checkAllFiguresInEndzone()){
            console.log(`Player ${currentPlayer.color} has won`);
            
            this.endGame();
        }
         
    }   
    setGamePhase(): void{
        if(this.gamePhase === 0){
            this.gamePhase++;
        } else{
            this.gamePhase = 0;
        }
    }
    endGame(): void{
        this.gamePhase = 2;
    }

    getChosenFigureInput(): number{
        let figureId = prompt("Gib Nummer ein");
            if(figureId){
                let idNum = parseInt(figureId);
                return idNum;
            }
            return 0;
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