"use strict";
class Figure {
    constructor(color, id) {
        this.id = id;
        this.color = color;
        this.positionInPlayerBoard = 0;
        this.isOnField = false;
        this.isInEndzone = false;
        this.positionOnGameBoard = 0;
    }
    figureMovePlayerBoard(rolledNum) {
        if (this.positionInPlayerBoard + rolledNum < 44) {
            this.positionInPlayerBoard += rolledNum;
        }
        else {
            console.log("Ziehen nicht möglich");
        }
    }
    placeOnField() {
        this.isOnField = true;
    }
    removeFromField() {
        this.isOnField = false;
    }
    setIsInEndzone() {
        this.isInEndzone = true;
    }
}
//------------------------------------------PLAYER---------------------------------------------------
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
}
//------------------------------------------WÜRFEL---------------------------------------------------
class GameCube {
    constructor() {
        this.rolledNum = 0;
    }
    rollCube() {
        this.rolledNum = Math.floor(Math.random() * (7 - 1) + 1);
    }
}
//------------------------------------------SPIELFELD---------------------------------------------------
class GameBoard {
    constructor() {
        this.gameboard = Array(41).fill(0);
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
    getFigurePosition() {
    }
}
const myGameboard = new GameBoard();
const myPlayer1 = new Player("blue");
//const myPlayer2 = new Player("blue");
myGameboard.addPlayer(myPlayer1);
const myWurfel = new GameCube();
myGameboard.placeFigure(myGameboard.playerList[0]);
myWurfel.rollCube();
myGameboard.playerList[0].myFigures[0].figureMovePlayerBoard(myWurfel.rolledNum);
console.log(myGameboard);
//# sourceMappingURL=main.js.map