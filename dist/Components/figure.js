class Figure {
    constructor(color, id) {
        this.id = id;
        this.color = color;
        this.position = 0;
        this.isOnField = false;
        this.isInEndzone = false;
    }
    moveOnPlayerBoard(rolledNum) {
        if (this.position + rolledNum < 44) {
            this.position += rolledNum;
        }
        else {
            console.log("Ziehen nicht möglich");
        }
    }
    placeOnField() {
        this.isOnField = true;
        this.position = 1;
    }
    removeFromField() {
        this.isOnField = false;
        this.position = 0;
    }
    setIsInEndzone() {
        this.isInEndzone = true;
    }
    checkMaxDistance(newPos) {
        return newPos <= 44;
    }
}
export { Figure };
//# sourceMappingURL=figure.js.map