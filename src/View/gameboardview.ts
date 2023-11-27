import { PlayField } from "./playfield";
import { PlayerZones } from "./playerZones";
import { GameCubeUi } from "./gamecubeUi";
import { GameBoard } from "../Components/gameboard";
import { Figure } from "../Components/figure";
import { Player } from "../Components/player";

class GameBoardUi {
  playField: PlayField;
  playerZones: PlayerZones;
  gameCubeUi: GameCubeUi;
  constructor() {
    this.playField = new PlayField();
    this.playerZones = new PlayerZones();
    this.gameCubeUi = new GameCubeUi();
  }
  createGrid(): void {
    const parentElement = document.getElementById(
      "playField"
    ) as HTMLDivElement;
    for (let row = 0; row < 11; row++) {
      for (let column = 0; column < 11; column++) {
        const newDiv = document.createElement("div");

        const targetCoordinates = [row, column];
        this.playField.addId(newDiv, targetCoordinates);

        this.playerZones.setEndzone(newDiv, targetCoordinates);
        this.playerZones.setStartPoints(newDiv, targetCoordinates);
        this.playerZones.setReserveBank(newDiv, targetCoordinates);
        this.gameCubeUi.createGamecubeUi(newDiv, targetCoordinates);
        parentElement.appendChild(newDiv);

        //newDiv.innerHTML = `${row} + ${column}`;
      }
    }
  }
  updateGameBoardUi(gameBoard: GameBoard) {
    //Das Gameboard ist hier schon aktualisiert, deshalb funktioniert die else anweisung nicht
    //Am Gameboard ist schon 0 eingetragen und nicht das Objekt
    //irgendwie muss hier die Information herkommen, welche Figur bzw. farbe aktuell gespielt wird.
    //ansonsten hast du eh schon die Lösung mit plyField.className = "playContainer";
    for (let i = 0; i < gameBoard.gameboard.length; i++) {

      const figure = gameBoard.gameboard[i] as Figure;
      const playField = document.getElementById(`playfield-${i}`) as HTMLDivElement;
      playField.className = "playContainer";
      if (gameBoard.gameboard[i] !== 0) {
        playField.classList.add(`${figure.color}Figure`);
        playField.classList.add(`figure`);
        playField.classList.add(`${figure.color}Figure${figure.id}`);
      }
    }
  }

  updateGameboardPlayerBank(players: Player[]) {
    players.forEach((element) => {
      let myFiguresOnBank: number[] = element.getFiguresOnBank();
      if (myFiguresOnBank) {
        for (let i = 1; i <= element.myFigures.length; i++) {
          const bankElement = document.getElementById(
            `${element.color}Bank-${i}`
          ) as HTMLDivElement;
          if (myFiguresOnBank.includes(i)) {
            bankElement.classList.add(`${element.color}Figure`);
            bankElement.classList.add(`figure`);
            bankElement.classList.add(`${element.color}Figure${i}`);
          } else {
            bankElement.classList.remove(`${element.color}Figure`);
            bankElement.classList.remove(`figure`);
            bankElement.classList.remove(`${element.color}Figure${i}`);
          }
        }
      }
    });
  }
  updateGameBoardPlayerEndzone(player: Player) {
    for (let i = 0; i < player.myFigures.length; i++) {
      const endzoneElement = document.getElementById(
        `${player.color}-${i}`
      ) as HTMLDivElement;
      if (player.myFigures[i].isInEndzone) {
        endzoneElement.classList.add(`${player.color}Figure`);
      } else {
        endzoneElement.classList.remove(`${player.color}Figure`);
      }
    }
  }
}

export { GameBoardUi };
