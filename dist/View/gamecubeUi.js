class GameCubeUi {
    constructor() {
        this.gameCubeZone = [5, 5];
    }
    createGamecubeUi(newDiv, coordinates) {
        if (this.gameCubeZone[0] === coordinates[0] && this.gameCubeZone[1] === coordinates[1]) {
            newDiv.classList.add("gameCube");
            newDiv.id = `gameCube`;
        }
    }
    showGameCubeNum(rolledNum) {
        const gameCubeFrontend = document.getElementById('gameCube');
        gameCubeFrontend.innerHTML = `${rolledNum}`;
    }
    gameCubeClickHandler(callback) {
        const gameCubeFrontend = document.getElementById('gameCube');
        gameCubeFrontend.addEventListener('click', callback);
    }
}
export { GameCubeUi };
//# sourceMappingURL=gamecubeUi.js.map