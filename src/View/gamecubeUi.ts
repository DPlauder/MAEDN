import { Play } from "../State/play.js";

class GameCubeUi {
  private gameCubeZone: number[];

  constructor() {
    this.gameCubeZone = [5, 5];
  }
  createGamecubeUi(newDiv: HTMLDivElement, coordinates: number[]): void {
    if (
      this.gameCubeZone[0] === coordinates[0] &&
      this.gameCubeZone[1] === coordinates[1]
    ) {
      newDiv.classList.add("gameCube");
      newDiv.id = `gameCube`;
      newDiv.innerHTML = "6";
    }
  }
  showGameCubeNum(rolledNum: number) {
    const gameCubeFrontend = document.getElementById(
      "gameCube"
    ) as HTMLDivElement;
    gameCubeFrontend.innerHTML = `${rolledNum}`;
  }
  diceAnimation(rolledNum: number) {
    let number = 0;
    const helper = () => {
      const interval = setInterval(() => {
        number = Math.floor(Math.random() * 6) + 1;
        this.showGameCubeNum(number);
      }, 30);
      setTimeout(() => {
        clearInterval(interval);
        this.showGameCubeNum(rolledNum);
        console.log("after intervall", rolledNum);
      }, 500);
    };
    helper();
  }
}

export { GameCubeUi };
