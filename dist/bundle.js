/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Components/figure.ts":
/*!**********************************!*\
  !*** ./src/Components/figure.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Figure: () => (/* binding */ Figure)\n/* harmony export */ });\nclass Figure {\n    constructor(color, id) {\n        this.id = id;\n        this.color = color;\n        this.position = 0;\n        this.isOnField = false;\n        this.isInEndzone = false;\n    }\n    moveOnPlayerBoard(rolledNum) {\n        this.position += rolledNum;\n    }\n    placeOnField() {\n        this.isOnField = true;\n        this.position = 1;\n    }\n    removeFromField() {\n        this.isOnField = false;\n        this.position = 0;\n    }\n    setIsInEndzone() {\n        this.isInEndzone = true;\n    }\n    getEndzonePosition() {\n        return this.position - 41;\n    }\n    getIsInEndzone() {\n        return this.isInEndzone;\n    }\n    getMaxDistance(newPos) {\n        return newPos <= 44;\n    }\n}\n\n\n\n//# sourceURL=webpack://maedn/./src/Components/figure.ts?");

/***/ }),

/***/ "./src/Components/gameboard.ts":
/*!*************************************!*\
  !*** ./src/Components/gameboard.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameBoard: () => (/* binding */ GameBoard)\n/* harmony export */ });\n/* harmony import */ var _figure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./figure */ \"./src/Components/figure.ts\");\n\nclass GameBoard {\n    constructor() {\n        this.gameboard = Array(40).fill(0);\n        this.figureStartPoint = 0;\n    }\n    placeFigure(player, figure) {\n        const spawningFigure = figure;\n        {\n            if (spawningFigure) {\n                if (player.color == \"red\") {\n                    this.figureStartPoint = 0;\n                }\n                else if (player.color == \"blue\") {\n                    this.figureStartPoint = 10;\n                }\n                else if (player.color == \"green\") {\n                    this.figureStartPoint = 20;\n                }\n                else if (player.color == \"yellow\") {\n                    this.figureStartPoint = 30;\n                }\n                if (this.isOccupied(this.figureStartPoint)) {\n                    this.resetFigure(this.figureStartPoint);\n                }\n                this.gameboard[this.figureStartPoint] = spawningFigure;\n                spawningFigure.placeOnField();\n            }\n            else {\n                console.log(\"Alle Figuren am Feld\");\n            }\n        }\n    }\n    moveFigure(figure, rolledNum) {\n        const indexOfFigure = this.getIndexOfFigure(figure);\n        let newPosition = indexOfFigure + rolledNum;\n        if (newPosition >= 40) {\n            newPosition = newPosition - 40;\n        }\n        if (this.isOccupied(newPosition)) {\n            this.resetFigure(newPosition);\n        }\n        this.removeFigureStartPoint(figure);\n        if (!figure.getIsInEndzone()) {\n            this.gameboard[newPosition] = figure;\n        }\n    }\n    removeFigureStartPoint(figure) {\n        const indexOfFigure = this.getIndexOfFigure(figure);\n        this.gameboard[indexOfFigure] = 0;\n    }\n    isOccupied(position) {\n        return this.gameboard[position] instanceof _figure__WEBPACK_IMPORTED_MODULE_0__.Figure;\n    }\n    resetFigure(position) {\n        const occupiedFigure = this.gameboard[position];\n        occupiedFigure.removeFromField();\n    }\n    getIndexOfFigure(figure) {\n        return this.gameboard.findIndex((x) => x === figure);\n    }\n}\n\n\n\n//# sourceURL=webpack://maedn/./src/Components/gameboard.ts?");

/***/ }),

/***/ "./src/Components/gamecube.ts":
/*!************************************!*\
  !*** ./src/Components/gamecube.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameCube: () => (/* binding */ GameCube)\n/* harmony export */ });\nclass GameCube {\n    constructor() {\n        this.rolledNum = 0;\n    }\n    rollCube() {\n        this.rolledNum = Math.floor(Math.random() * 6) + 1;\n    }\n    checkFor6() {\n        return this.rolledNum === 6;\n    }\n}\n\n\n\n//# sourceURL=webpack://maedn/./src/Components/gamecube.ts?");

/***/ }),

/***/ "./src/Components/player.ts":
/*!**********************************!*\
  !*** ./src/Components/player.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Player: () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _figure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./figure */ \"./src/Components/figure.ts\");\n\nclass Player {\n    constructor(color) {\n        this.color = color;\n        this.myFigures = [];\n        this.createFigures();\n        this.myPlayerEndzone = [0, 0, 0, 0];\n    }\n    createFigures() {\n        for (let i = 1; i < 5; i++) {\n            let figure = new _figure__WEBPACK_IMPORTED_MODULE_0__.Figure(this.color, i);\n            this.myFigures.push(figure);\n        }\n    }\n    addFigureInEndzone(figure) {\n        this.myPlayerEndzone[figure.getEndzonePosition()] = figure;\n    }\n    getFiguresOnBank() {\n        let myFiguresOnBank = [];\n        this.myFigures.forEach(element => {\n            if (!element.isOnField) {\n                myFiguresOnBank.push(element.id);\n            }\n        });\n        return myFiguresOnBank;\n    }\n    checkAllFiguresInEndzone() {\n        return this.myFigures.every(figure => figure.isInEndzone);\n    }\n}\n\n\n\n//# sourceURL=webpack://maedn/./src/Components/player.ts?");

/***/ }),

/***/ "./src/State/gamerules.ts":
/*!********************************!*\
  !*** ./src/State/gamerules.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameRules: () => (/* binding */ GameRules)\n/* harmony export */ });\nclass GameRules {\n    constructor() {\n        this.gamePhase = 0;\n    }\n    getGamePhase() {\n        return this.gamePhase;\n    }\n    setGamePhaseOne() {\n        this.gamePhase = 0;\n    }\n    setGamePhaseTwo() {\n        this.gamePhase = 1;\n    }\n    setEndGame() {\n        this.gamePhase = 3;\n    }\n}\n\n\n\n//# sourceURL=webpack://maedn/./src/State/gamerules.ts?");

/***/ }),

/***/ "./src/State/play.ts":
/*!***************************!*\
  !*** ./src/State/play.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Play: () => (/* binding */ Play)\n/* harmony export */ });\n/* harmony import */ var _Components_gamecube__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Components/gamecube */ \"./src/Components/gamecube.ts\");\n/* harmony import */ var _Components_gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/gameboard */ \"./src/Components/gameboard.ts\");\n/* harmony import */ var _View_gameboardview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../View/gameboardview */ \"./src/View/gameboardview.ts\");\n/* harmony import */ var _gamerules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gamerules */ \"./src/State/gamerules.ts\");\n\n\n\n\nclass Play {\n    constructor() {\n        this.gameBoard = new _Components_gameboard__WEBPACK_IMPORTED_MODULE_1__.GameBoard();\n        this.players = [];\n        this.currentPlayerIndex = 0;\n        this.gameCube = new _Components_gamecube__WEBPACK_IMPORTED_MODULE_0__.GameCube();\n        this.gameBoardUi = new _View_gameboardview__WEBPACK_IMPORTED_MODULE_2__.GameBoardUi();\n        this.createNewGame();\n        this.gamePhase = 0;\n        this.gameRules = new _gamerules__WEBPACK_IMPORTED_MODULE_3__.GameRules();\n    }\n    createNewGame() {\n        this.gameBoardUi.createGrid();\n    }\n    addPlayer(player) {\n        this.players.push(player);\n    }\n    playGame() {\n        const grid = document.getElementById('playField');\n        this.gameBoardUi.updateGameboardPlayerBank(this.players);\n        grid.addEventListener('click', (e) => {\n            //console.log(\"hallo target\", e.target);  \n            this.checkGamePhase(e.target);\n            this.gameBoardUi.updateGameBoardUi(this.gameBoard);\n        });\n    }\n    checkGamePhase(element) {\n        let idNum;\n        const currentPlayer = this.getCurrentPlayer();\n        this.gameBoardUi.updateGameBoardUi(this.gameBoard);\n        if (this.gameRules.getGamePhase() === 0 && element.id === \"gameCube\") {\n            this.rollDice();\n            this.gameRules.setGamePhaseTwo();\n        }\n        else if (this.gameRules.getGamePhase() === 1) {\n            idNum = this.getChosenFigureId(currentPlayer, element);\n            this.moveCurrentPlayerFigure(currentPlayer.myFigures[idNum]);\n            this.gameBoardUi.updateGameboardPlayerBank(this.players);\n            this.gameBoardUi.updateGameBoardPlayerEndzone(this.getCurrentPlayer());\n            this.nextTurn();\n            this.gameRules.setGamePhaseOne();\n        }\n        if (currentPlayer.checkAllFiguresInEndzone()) {\n            console.log(`Player ${currentPlayer.color} has won`);\n            this.endGame();\n        }\n    }\n    endGame() {\n        this.gameRules.setEndGame();\n    }\n    getChosenFigureId(currentPlayer, element) {\n        let figureId = 0;\n        if (element.classList.contains(`${currentPlayer.color}Figure1`)) {\n            //console.log('test1');         \n            figureId = 0;\n        }\n        else if (element.classList.contains(`${currentPlayer.color}Figure2`)) {\n            //console.log('test2');\n            figureId = 1;\n        }\n        else if (element.classList.contains(`${currentPlayer.color}Figure3`)) {\n            //console.log('test3');\n            figureId = 2;\n        }\n        else if (element.classList.contains(`${currentPlayer.color}Figure4`)) {\n            //console.log('test4');\n            figureId = 3;\n        }\n        return figureId;\n    }\n    getCurrentPlayer() {\n        return this.players[this.currentPlayerIndex];\n    }\n    nextTurn() {\n        this.currentPlayerIndex = (this.currentPlayerIndex + 1) % this.players.length;\n    }\n    rollDice() {\n        const getCurrentPlayer = this.getCurrentPlayer();\n        this.gameCube.rollCube();\n        this.gameBoardUi.gameCubeUi.showGameCubeNum(this.gameCube.rolledNum);\n    }\n    moveCurrentPlayerFigure(figureToMove) {\n        const currentPlayer = this.getCurrentPlayer();\n        const rolledNum = this.gameCube.rolledNum;\n        const targetPos = rolledNum + figureToMove.position;\n        if (figureToMove.isOnField && targetPos <= 40 && figureToMove.getMaxDistance(targetPos)) {\n            this.gameBoard.moveFigure(figureToMove, rolledNum);\n            figureToMove.moveOnPlayerBoard(rolledNum);\n        }\n        else if (figureToMove.isOnField && targetPos > 40 && figureToMove.getMaxDistance(targetPos)) {\n            figureToMove.moveOnPlayerBoard(rolledNum);\n            //currentPlayer.addFigureInEndzone(figureToMove);\n            figureToMove.setIsInEndzone();\n            this.gameBoard.moveFigure(figureToMove, rolledNum);\n        }\n        else if (!figureToMove.isOnField) {\n            figureToMove.placeOnField();\n            this.gameBoard.placeFigure(currentPlayer, figureToMove);\n        }\n        else {\n            console.log(\"Fehler moveCurrentPlayerFigure\");\n        }\n    }\n    isGameEnd(player) {\n        return player.checkAllFiguresInEndzone();\n    }\n}\n\n\n\n//# sourceURL=webpack://maedn/./src/State/play.ts?");

/***/ }),

/***/ "./src/View/gameboardview.ts":
/*!***********************************!*\
  !*** ./src/View/gameboardview.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameBoardUi: () => (/* binding */ GameBoardUi)\n/* harmony export */ });\n/* harmony import */ var _playfield__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./playfield */ \"./src/View/playfield.ts\");\n/* harmony import */ var _playerZones__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./playerZones */ \"./src/View/playerZones.ts\");\n/* harmony import */ var _gamecubeUi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gamecubeUi */ \"./src/View/gamecubeUi.ts\");\n\n\n\nclass GameBoardUi {\n    constructor() {\n        this.playField = new _playfield__WEBPACK_IMPORTED_MODULE_0__.PlayField();\n        this.playerZones = new _playerZones__WEBPACK_IMPORTED_MODULE_1__.PlayerZones();\n        this.gameCubeUi = new _gamecubeUi__WEBPACK_IMPORTED_MODULE_2__.GameCubeUi();\n    }\n    createGrid() {\n        const parentElement = document.getElementById(\"playField\");\n        for (let row = 0; row < 11; row++) {\n            for (let column = 0; column < 11; column++) {\n                const newDiv = document.createElement(\"div\");\n                const targetCoordinates = [row, column];\n                this.playField.addId(newDiv, targetCoordinates);\n                this.playerZones.setEndzone(newDiv, targetCoordinates);\n                this.playerZones.setStartPoints(newDiv, targetCoordinates);\n                this.playerZones.setReserveBank(newDiv, targetCoordinates);\n                this.gameCubeUi.createGamecubeUi(newDiv, targetCoordinates);\n                parentElement.appendChild(newDiv);\n                //newDiv.innerHTML = `${row} + ${column}`;\n            }\n        }\n    }\n    updateGameBoardUi(gameBoard) {\n        //Das Gameboard ist hier schon aktualisiert, deshalb funktioniert die else anweisung nicht\n        //Am Gameboard ist schon 0 eingetragen und nicht das Objekt\n        //irgendwie muss hier die Information herkommen, welche Figur bzw. farbe aktuell gespielt wird.\n        //ansonsten hast du eh schon die Lösung mit plyField.className = \"playContainer\";\n        for (let i = 0; i < gameBoard.gameboard.length; i++) {\n            const figure = gameBoard.gameboard[i];\n            const playField = document.getElementById(`playfield-${i}`);\n            playField.className = \"playContainer\";\n            if (gameBoard.gameboard[i] !== 0) {\n                playField.classList.add(`${figure.color}Figure`);\n                playField.classList.add(`figure`);\n                playField.classList.add(`${figure.color}Figure${figure.id}`);\n            }\n        }\n    }\n    updateGameboardPlayerBank(players) {\n        players.forEach((element) => {\n            let myFiguresOnBank = element.getFiguresOnBank();\n            if (myFiguresOnBank) {\n                for (let i = 1; i <= element.myFigures.length; i++) {\n                    const bankElement = document.getElementById(`${element.color}Bank-${i}`);\n                    if (myFiguresOnBank.includes(i)) {\n                        bankElement.classList.add(`${element.color}Figure`);\n                        bankElement.classList.add(`figure`);\n                        bankElement.classList.add(`${element.color}Figure${i}`);\n                    }\n                    else {\n                        bankElement.classList.remove(`${element.color}Figure`);\n                        bankElement.classList.remove(`figure`);\n                        bankElement.classList.remove(`${element.color}Figure${i}`);\n                    }\n                }\n            }\n        });\n    }\n    updateGameBoardPlayerEndzone(player) {\n        for (let i = 0; i < player.myFigures.length; i++) {\n            const endzoneElement = document.getElementById(`${player.color}-${i}`);\n            if (player.myFigures[i].isInEndzone) {\n                endzoneElement.classList.add(`${player.color}Figure`);\n            }\n            else {\n                endzoneElement.classList.remove(`${player.color}Figure`);\n            }\n        }\n    }\n}\n\n\n\n//# sourceURL=webpack://maedn/./src/View/gameboardview.ts?");

/***/ }),

/***/ "./src/View/gamecubeUi.ts":
/*!********************************!*\
  !*** ./src/View/gamecubeUi.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameCubeUi: () => (/* binding */ GameCubeUi)\n/* harmony export */ });\nclass GameCubeUi {\n    constructor() {\n        this.gameCubeZone = [5, 5];\n    }\n    createGamecubeUi(newDiv, coordinates) {\n        if (this.gameCubeZone[0] === coordinates[0] && this.gameCubeZone[1] === coordinates[1]) {\n            newDiv.classList.add(\"gameCube\");\n            newDiv.id = `gameCube`;\n            newDiv.innerHTML = \"6\";\n        }\n    }\n    showGameCubeNum(rolledNum) {\n        const gameCubeFrontend = document.getElementById('gameCube');\n        gameCubeFrontend.innerHTML = `${rolledNum}`;\n    }\n}\n\n\n\n//# sourceURL=webpack://maedn/./src/View/gamecubeUi.ts?");

/***/ }),

/***/ "./src/View/playerZones.ts":
/*!*********************************!*\
  !*** ./src/View/playerZones.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PlayerZones: () => (/* binding */ PlayerZones)\n/* harmony export */ });\nclass PlayerZones {\n    constructor() {\n        this.redEndzone = [[9, 5], [8, 5], [7, 5], [6, 5]];\n        this.blueEndzone = [[5, 1], [5, 2], [5, 3], [5, 4]];\n        this.greenEndzone = [[1, 5], [2, 5], [3, 5], [4, 5]];\n        this.yellowEndzone = [[5, 9], [5, 8], [5, 7], [5, 6]];\n        this.redStartPoint = [10, 4];\n        this.blueStartPoint = [4, 0];\n        this.yellowStartPoint = [6, 10];\n        this.greenStartPoint = [0, 6];\n        this.redReserve = [[8, 1], [8, 2], [9, 1], [9, 2]];\n        this.blueReserve = [[1, 1], [1, 2], [2, 1], [2, 2]];\n        this.greenReserve = [[1, 8], [1, 9], [2, 8], [2, 9]];\n        this.yellowReserve = [[8, 8], [8, 9], [9, 8], [9, 9]];\n    }\n    setEndzone(newDiv, coordinates) {\n        const indexOfRed = this.redEndzone.findIndex(coord => coord[0] === coordinates[0] && coord[1] === coordinates[1]);\n        const indexOfBlue = this.blueEndzone.findIndex(coord => coord[0] === coordinates[0] && coord[1] === coordinates[1]);\n        const indexOfYellow = this.yellowEndzone.findIndex(coord => coord[0] === coordinates[0] && coord[1] === coordinates[1]);\n        const indexOfGreen = this.greenEndzone.findIndex(coord => coord[0] === coordinates[0] && coord[1] === coordinates[1]);\n        if (indexOfRed !== -1) {\n            newDiv.classList.add(`redZone`, `endZone`);\n            newDiv.id = `red-${indexOfRed}`;\n        }\n        if (indexOfBlue !== -1) {\n            newDiv.classList.add(`blueZone`, `endZone`);\n            newDiv.id = `blue-${indexOfBlue}`;\n        }\n        if (indexOfYellow !== -1) {\n            newDiv.classList.add(`yellowZone`, `endZone`);\n            newDiv.id = `yellow-${indexOfYellow}`;\n        }\n        if (indexOfGreen !== -1) {\n            newDiv.classList.add(`greenZone`, `endZone`);\n            newDiv.id = `green-${indexOfGreen}`;\n        }\n    }\n    setStartPoints(newDiv, coordinates) {\n        if (this.redStartPoint[0] === coordinates[0] && this.redStartPoint[1] === coordinates[1]) {\n            newDiv.classList.add(\"redZone\", \"startPoint\");\n        }\n        if (this.blueStartPoint[0] === coordinates[0] && this.blueStartPoint[1] === coordinates[1]) {\n            newDiv.classList.add(\"blueZone\", \"startPoint\");\n        }\n        if (this.yellowStartPoint[0] === coordinates[0] && this.yellowStartPoint[1] === coordinates[1]) {\n            newDiv.classList.add(\"yellowZone\", \"startPoint\");\n        }\n        if (this.greenStartPoint[0] === coordinates[0] && this.greenStartPoint[1] === coordinates[1]) {\n            newDiv.classList.add(\"greenZone\", \"startPoint\");\n        }\n    }\n    setReserveBank(newDiv, coordinates) {\n        const indexOfRed = this.redReserve.findIndex(coord => coord[0] === coordinates[0] && coord[1] === coordinates[1]);\n        const indexOfBlue = this.blueReserve.findIndex(coord => coord[0] === coordinates[0] && coord[1] === coordinates[1]);\n        const indexOfYellow = this.yellowReserve.findIndex(coord => coord[0] === coordinates[0] && coord[1] === coordinates[1]);\n        const indexOfGreen = this.greenReserve.findIndex(coord => coord[0] === coordinates[0] && coord[1] === coordinates[1]);\n        if (indexOfRed !== -1) {\n            newDiv.classList.add(`redBank`, `playContainer`, `redZone`);\n            newDiv.id = `redBank-${indexOfRed + 1}`;\n        }\n        if (indexOfBlue !== -1) {\n            newDiv.classList.add(`blueBank`, `playContainer`, `blueZone`);\n            newDiv.id = `blueBank-${indexOfBlue + 1}`;\n        }\n        if (indexOfYellow !== -1) {\n            newDiv.classList.add(`yellowBank`, `playContainer`, `yellowZone`);\n            newDiv.id = `yellowBank-${indexOfYellow + 1}`;\n        }\n        if (indexOfGreen !== -1) {\n            newDiv.classList.add(`greenBank`, `playContainer`, `greenZone`);\n            newDiv.id = `greenBank-${indexOfGreen + 1}`;\n        }\n    }\n}\n\n\n\n//# sourceURL=webpack://maedn/./src/View/playerZones.ts?");

/***/ }),

/***/ "./src/View/playfield.ts":
/*!*******************************!*\
  !*** ./src/View/playfield.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PlayField: () => (/* binding */ PlayField)\n/* harmony export */ });\nclass PlayField {\n    constructor() {\n        this.playFieldCoords = [\n            [10, 4], [9, 4], [8, 4], [7, 4], [6, 4], [6, 3], [6, 2], [6, 1], [6, 0], [5, 0],\n            [4, 0], [4, 1], [4, 2], [4, 3], [4, 4], [3, 4], [2, 4], [1, 4], [0, 4], [0, 5],\n            [0, 6], [1, 6], [2, 6], [3, 6], [4, 6], [4, 7], [4, 8], [4, 9], [4, 10], [5, 10],\n            [6, 10], [6, 9], [6, 8], [6, 7], [6, 6], [7, 6], [8, 6], [9, 6], [10, 6], [10, 5]\n        ];\n    }\n    addId(newDiv, coordinates) {\n        const indexOfCoords = this.playFieldCoords.findIndex(coord => coord[0] === coordinates[0] && coord[1] === coordinates[1]);\n        if (indexOfCoords !== -1) {\n            newDiv.classList.add(\"playContainer\");\n            newDiv.id = `playfield-${indexOfCoords}`;\n        }\n    }\n}\n\n\n\n//# sourceURL=webpack://maedn/./src/View/playfield.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Components_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Components/player */ \"./src/Components/player.ts\");\n/* harmony import */ var _State_play__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./State/play */ \"./src/State/play.ts\");\n\n\n//--------------------------------------------------AUSFÜHRUNG-----------------------------------------\nconst play = new _State_play__WEBPACK_IMPORTED_MODULE_1__.Play();\nconst myPlayer1 = new _Components_player__WEBPACK_IMPORTED_MODULE_0__.Player(\"red\");\nplay.addPlayer(myPlayer1);\nconst myPlayer2 = new _Components_player__WEBPACK_IMPORTED_MODULE_0__.Player(\"blue\");\nplay.addPlayer(myPlayer2);\nconst myPlayer3 = new _Components_player__WEBPACK_IMPORTED_MODULE_0__.Player(\"green\");\nplay.addPlayer(myPlayer3);\nconst myPlayer4 = new _Components_player__WEBPACK_IMPORTED_MODULE_0__.Player(\"yellow\");\nplay.addPlayer(myPlayer4);\nplay.playGame();\nconsole.log(play);\n//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\n//TODO:     show Figures Endzone(movement)\n//TODO      Errorhandler when all figures on field\n//-----------------------------------------------------------------------\n//TODO      3xRoll when no Figur on Board\n//TODO:     Figur spawn only on 6 \n//TODO      Extra Roll when 6 rolled\n\n\n//# sourceURL=webpack://maedn/./src/main.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.ts");
/******/ 	
/******/ })()
;