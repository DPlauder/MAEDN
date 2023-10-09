import { Play } from "../State/play.js";

class GameCubeUi{
    private gameCubeZone: number[];

    constructor(){
        this.gameCubeZone = [5,5];
    }
    createGamecubeUi(newDiv: HTMLDivElement, coordinates: number[]): void{
        if(this.gameCubeZone[0] === coordinates[0] && this.gameCubeZone[1] === coordinates[1]){
            newDiv.classList.add("gameCube");
            newDiv.id = `gameCube`;
        }
    }
    showGameCubeNum(rolledNum: number){
        const gameCubeFrontend = document.getElementById('gameCube') as HTMLDivElement;
        gameCubeFrontend.innerHTML = `${rolledNum}`;
    }
    
    gameCubeClickHandler(callback: () => void) {
        const gameCubeFrontend = document.getElementById('gameCube') as HTMLDivElement;
        gameCubeFrontend.addEventListener('click', callback);
    }
    
}

export {GameCubeUi};