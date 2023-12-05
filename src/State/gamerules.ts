import { Player } from "../Components/player";
import { GameCube } from "../Components/gamecube";

class GameRules{
    private gamePhase: number;
    private attempt: number;

    constructor(){
        this.gamePhase = 0;
        this.attempt = 0;
    }
    getGamePhase(){
        return this.gamePhase;
    }
    setGamePhaseOne(){
        this.gamePhase = 0;
    }
    setGamePhaseTwo(){
        this.gamePhase = 1;
    }
    setEndGame(){
        this.gamePhase = 3;
    }
    addNoFigureOnFieldAttempts(){
        this.attempt++;
    }
    getNoFigureOnFieldAttempts(){
        return this.attempt;
    }
    resetNoFigureOnFieldAttempts(){
        this.attempt = 0;
    }
    handleGameCube6(gamecube: GameCube): boolean{
        if(gamecube.checkFor6()){
            this.resetNoFigureOnFieldAttempts();
        }
        return gamecube.checkFor6();
    }
    checkCanMoveOnThrow(gamecube: GameCube, currentPlayer: Player):boolean{
        if(currentPlayer.checkFiguresOnFieled()){
            return true
        }else if(gamecube.checkFor6()){
            return true
        } else{
            return false;
        }
    }
}

export{GameRules};