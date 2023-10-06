"use strict";
//------------------------------------------SPIELFELD---------------------------------------------------
class GameBoard {
    constructor() {
        this.gameboard = Array(40).fill(0);
        this.figureStartPoint = 0;
        this.playerList = [];
    }
    addPlayer(player) {
        this.playerList.push(player);
    }
    placeFigure(player) {
        const spawningFigure = player.myFigures.find(figure => !figure.isOnField);
        {
            if (spawningFigure) {
                if (player.color == "red") {
                    spawningFigure.placeOnField();
                    this.gameboard[this.figureStartPoint] = spawningFigure;
                }
                else if (player.color == "blue") {
                    this.figureStartPoint = 10;
                    spawningFigure.placeOnField();
                    this.gameboard[this.figureStartPoint] = spawningFigure;
                }
                else if (player.color == "green") {
                    this.figureStartPoint = 20;
                    spawningFigure.placeOnField();
                    this.gameboard[this.figureStartPoint] = spawningFigure;
                }
                else if (player.color == "yellow") {
                    this.figureStartPoint = 30;
                    spawningFigure.placeOnField();
                    this.gameboard[this.figureStartPoint] = spawningFigure;
                }
            }
            else {
                console.log("Alle Figuren am Feld");
            }
        }
    }
    moveFigure(figure) {
        let indexOfFigure = this.getIndexOfFigure(figure);
        if (indexOfFigure > 39) {
            indexOfFigure - 40;
        }
        this.gameboard[indexOfFigure + myWurfel.rolledNum] = figure;
    }
    removeFigure(figure) {
        const indexOffigure = this.getIndexOfFigure(figure);
        this.gameboard[indexOfFigure] = 0;
    }
    getIndexOfFigure(figure) {
        return this.gameboard.findIndex(x => figure);
    }
}
//# sourceMappingURL=GameBoard.js.map