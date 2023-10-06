class GameCube {
    constructor() {
        this.rolledNum = 0;
    }
    rollCube() {
        this.rolledNum = Math.floor(Math.random() * 6) + 1;
    }
    checkFor6() {
        return this.rolledNum === 6;
    }
}
export { GameCube };
//# sourceMappingURL=gamecube.js.map