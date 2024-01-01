import { node } from "../../node_modules/webpack/types";

class StartScreen {
  constructor() {
    this.createStartScreen();
  }
  createStartScreen() {
    const container = document.getElementById("start_ui");
    const ue1 = document.createElement("h1");
    ue1.textContent = "Mensch Ärgere Dich Nicht";
    container?.appendChild(ue1);

    const p1 = document.createElement("input");
    p1.setAttribute("type", "text");
    p1.placeholder = "Spieler 1";
    p1.id = "playerOne";
    container?.appendChild(p1);

    const p2 = document.createElement("input");
    p2.setAttribute("type", "text");
    p2.placeholder = "Spieler 2";
    p2.id = "playerTwo";
    container?.appendChild(p2);

    const p3 = document.createElement("input");
    p3.setAttribute("type", "text");
    p3.placeholder = "Spieler 3";
    p3.id = "playerThree";
    container?.appendChild(p3);

    const p4 = document.createElement("input");
    p4.setAttribute("type", "text");
    p4.placeholder = "Spieler 4";
    p4.id = "playerFour";
    container?.appendChild(p4);

    const startButton = document.createElement("button");
    startButton.textContent = "Start";
    startButton.id = "startButton";
    container?.appendChild(startButton);
  }
  changeScreens() {
    const startScreen = document.getElementById("start");
    const gameScreen = document.getElementById("content");
    startScreen!.style.display = "none";
    gameScreen!.style.display = "flex";
  }
}

export { StartScreen };
