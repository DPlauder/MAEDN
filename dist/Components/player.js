import { Figure } from "./figure";
class Player {
    constructor(color) {
        this.color = color;
        this.myFigures = [];
        this.createFigures();
        this.myPlayerEndzone = [0, 0, 0, 0];
    }
    createFigures() {
        for (let i = 1; i < 5; i++) {
            let figure = new Figure(this.color, i);
            this.myFigures.push(figure);
        }
    }
    addFigureInEndzone(figure) {
        this.myPlayerEndzone[figure.getEndzonePosition()] = figure;
    }
    getFiguresOnBank() {
        let myFiguresOnBank = [];
        this.myFigures.forEach(element => {
            if (!element.isOnField) {
                myFiguresOnBank.push(element.id);
            }
        });
        return myFiguresOnBank;
    }
    checkAllFiguresInEndzone() {
        return this.myFigures.every(figure => figure.isInEndzone);
    }
}
export { Player };
//# sourceMappingURL=player.js.map