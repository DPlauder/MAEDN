"use strict";
class Figure {
    constructor(color, position) {
        this.color = color;
        this.position = 0;
        this.isOnField = false;
        this.isInEndzone = false;
    }
}
class Player {
    constructor(color) {
        this.color = color;
        this.myFigures = [];
    }
}
//# sourceMappingURL=main.js.map