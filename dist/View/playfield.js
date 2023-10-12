class PlayField {
    constructor() {
        this.playFieldCoords = [
            [10, 4], [9, 4], [8, 4], [7, 4], [6, 4], [6, 3], [6, 2], [6, 1], [6, 0], [5, 0],
            [4, 0], [4, 1], [4, 2], [4, 3], [4, 4], [3, 4], [2, 4], [1, 4], [0, 4], [0, 5],
            [0, 6], [1, 6], [2, 6], [3, 6], [4, 6], [4, 7], [4, 8], [4, 9], [4, 10], [5, 10],
            [6, 10], [6, 9], [6, 8], [6, 7], [6, 6], [7, 6], [8, 6], [9, 6], [10, 6], [10, 5]
        ];
    }
    addId(newDiv, coordinates) {
        const indexOfCoords = this.playFieldCoords.findIndex(coord => coord[0] === coordinates[0] && coord[1] === coordinates[1]);
        if (indexOfCoords !== -1) {
            newDiv.classList.add("playContainer");
            newDiv.id = `playfield-${indexOfCoords}`;
        }
    }
}
export { PlayField };
//# sourceMappingURL=playfield.js.map