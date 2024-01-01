import { Figure } from "./figure";

class Player {
  public color: string;
  public myFigures: Figure[];
  private myPlayerEndzone: Figure[] | number[];
  private name: string;
  constructor(color: string, myName: string = color) {
    this.color = color;
    this.name = myName;
    this.myFigures = [];
    this.createFigures();
    this.myPlayerEndzone = [0, 0, 0, 0];
  }
  createFigures(): void {
    for (let i = 1; i < 5; i++) {
      let figure = new Figure(this.color, i);
      this.myFigures.push(figure);
    }
  }
  addFigureInEndzone(figure: Figure): void {
    this.myPlayerEndzone[figure.getEndzonePosition()] = figure;
  }
  getFiguresOnBank() {
    let myFiguresOnBank: number[] = [];
    this.myFigures.forEach((element) => {
      if (!element.isOnField) {
        myFiguresOnBank.push(element.id);
      }
    });
    return myFiguresOnBank;
  }
  checkAllFiguresInEndzone(): boolean {
    return this.myFigures.every((figure) => figure.isInEndzone);
  }
  checkFiguresOnFieled(): boolean {
    if (this.myFigures.find((e) => e.isOnField === true)) {
      console.log("hello true on field");
      return true;
    } else {
      return false;
    }
  }
}

export { Player };
