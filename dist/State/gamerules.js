class GameRules {
    constructor() {
        this.gamePhase = 0;
    }
    getGamePhase() {
        return this.gamePhase;
    }
    setGamePhaseOne() {
        this.gamePhase = 0;
    }
    setGamePhaseTwo() {
        this.gamePhase = 1;
    }
    setEndGame() {
        this.gamePhase = 3;
    }
}
export { GameRules };
//# sourceMappingURL=gamerules.js.map