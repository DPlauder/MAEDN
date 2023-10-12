class Figure {
    constructor(color, id) {
        this.id = id;
        this.color = color;
        this.position = 0;
        this.isOnField = false;
        this.isInEndzone = false;
    }
    moveOnPlayerBoard(rolledNum) {
        this.position += rolledNum;
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
    getEndzonePosition() {
        return this.position - 41;
    }
    getIsInEndzone() {
        return this.isInEndzone;
    }
    getMaxDistance(newPos) {
        return newPos <= 44;
    }
}
export { Figure };
//# sourceMappingURL=figure.js.map