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
        grid.addEventListener('click', (e) => {
            this.checkGamePhase(e.target);
            this.gameBoardUi.updateGameBoardUi(this.gameBoard);
            this.gameBoardUi.updateFiguresOnBank(this.players);
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
            this.nextTurn();
            this.setGamePhase(); 
        }      
         
    }   
    setGamePhase(): void{
        if(this.gamePhase === 0){
            this.gamePhase++;
        } else{
            this.gamePhase = 0;
        }
    }

    getChosenFigureInput(){
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
        console.log(this.gameCube.rolledNum, " Wurf");
        
    }

    moveCurrentPlayerFigure(figureToMove: Figure): void{
        const currentPlayer = this.getCurrentPlayer();
        const rolledNum = this.gameCube.rolledNum;
        const targetPos = rolledNum + figureToMove.position;

        if(figureToMove.isOnField && figureToMove.position < 40 && figureToMove.checkMaxDistance(targetPos)){
            figureToMove.moveOnPlayerBoard(rolledNum);
            this.gameBoard.moveFigure(figureToMove, rolledNum);       
        } else if(figureToMove.isOnField && figureToMove.position > 40 && figureToMove.checkMaxDistance(targetPos)){
            figureToMove.moveOnPlayerBoard(rolledNum);
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