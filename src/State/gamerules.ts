import { Player } from "../Components/player";

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
}

export{GameRules};