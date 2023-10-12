import { Figure } from "./figure.js";
class Player {
    constructor(color) {
        this.color = color;
        this.myFigures = [];
        this.createFigures();
    }
    createFigures() {
        for (let i = 1; i < 5; i++) {
            let figure = new Figure(this.color, i);
            this.myFigures.push(figure);
        }
    }
    getFiguresOnBank() {
        this.myFigures.forEach(element => {
            if (!element.isOnField) {
                return element.id;
            }
        });
    }
    checkAllFiguresInEndzone() {
        return this.myFigures.every(figure => figure.isInEndzone);
    }
}
export { Player };
//# sourceMappingURL=player.js.map