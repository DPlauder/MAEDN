class GameCubeUi {
    constructor() {
        this.gameCubeZone = [5, 5];
    }
    createGamecubeUi(newDiv, coordinates) {
        if (this.gameCubeZone[0] === coordinates[0] && this.gameCubeZone[1] === coordinates[1]) {
            newDiv.classList.add("gameCube");
            newDiv.id = `gameCube`;
            newDiv.innerHTML = "6";
        }
    }
    showGameCubeNum(rolledNum) {
        const gameCubeFrontend = document.getElementById('gameCube');
        gameCubeFrontend.innerHTML = `${rolledNum}`;
    }
}
export { GameCubeUi };
//# sourceMappingURL=gamecubeUi.js.map