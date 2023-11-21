/*! For license information please see bundle.js.LICENSE.txt */
(()=>{"use strict";class e{constructor(e,t){this.id=t,this.color=e,this.position=0,this.isOnField=!1,this.isInEndzone=!1}moveOnPlayerBoard(e){this.position+=e}placeOnField(){this.isOnField=!0,this.position=1}removeFromField(){this.isOnField=!1,this.position=0}setIsInEndzone(){this.isInEndzone=!0}getEndzonePosition(){return this.position-41}getIsInEndzone(){return this.isInEndzone}getMaxDistance(e){return e<=44}}class t{constructor(e){this.color=e,this.myFigures=[],this.createFigures(),this.myPlayerEndzone=[0,0,0,0]}createFigures(){for(let t=1;t<5;t++){let s=new e(this.color,t);this.myFigures.push(s)}}addFigureInEndzone(e){this.myPlayerEndzone[e.getEndzonePosition()]=e}getFiguresOnBank(){let e=[];return this.myFigures.forEach((t=>{t.isOnField||e.push(t.id)})),e}checkAllFiguresInEndzone(){return this.myFigures.every((e=>e.isInEndzone))}}class s{constructor(){this.rolledNum=0}rollCube(){this.rolledNum=Math.floor(6*Math.random())+1}checkFor6(){return 6===this.rolledNum}}class i{constructor(){this.gameboard=Array(40).fill(0),this.figureStartPoint=0}placeFigure(e,t){const s=t;s?("red"==e.color?this.figureStartPoint=0:"blue"==e.color?this.figureStartPoint=10:"green"==e.color?this.figureStartPoint=20:"yellow"==e.color&&(this.figureStartPoint=30),this.isOccupied(this.figureStartPoint)&&this.resetFigure(this.figureStartPoint),this.gameboard[this.figureStartPoint]=s,s.placeOnField()):console.log("Alle Figuren am Feld")}moveFigure(e,t){let s=this.getIndexOfFigure(e)+t;s>=40&&(s-=40),this.isOccupied(s)&&this.resetFigure(s),this.removeFigureStartPoint(e),e.getIsInEndzone()||(this.gameboard[s]=e)}removeFigureStartPoint(e){const t=this.getIndexOfFigure(e);this.gameboard[t]=0}isOccupied(t){return this.gameboard[t]instanceof e}resetFigure(e){this.gameboard[e].removeFromField()}getIndexOfFigure(e){return this.gameboard.findIndex((t=>t===e))}}class r{constructor(){this.playFieldCoords=[[10,4],[9,4],[8,4],[7,4],[6,4],[6,3],[6,2],[6,1],[6,0],[5,0],[4,0],[4,1],[4,2],[4,3],[4,4],[3,4],[2,4],[1,4],[0,4],[0,5],[0,6],[1,6],[2,6],[3,6],[4,6],[4,7],[4,8],[4,9],[4,10],[5,10],[6,10],[6,9],[6,8],[6,7],[6,6],[7,6],[8,6],[9,6],[10,6],[10,5]]}addId(e,t){const s=this.playFieldCoords.findIndex((e=>e[0]===t[0]&&e[1]===t[1]));-1!==s&&(e.classList.add("playContainer"),e.id=`playfield-${s}`)}}class a{constructor(){this.redEndzone=[[9,5],[8,5],[7,5],[6,5]],this.blueEndzone=[[5,1],[5,2],[5,3],[5,4]],this.greenEndzone=[[1,5],[2,5],[3,5],[4,5]],this.yellowEndzone=[[5,9],[5,8],[5,7],[5,6]],this.redStartPoint=[10,4],this.blueStartPoint=[4,0],this.yellowStartPoint=[6,10],this.greenStartPoint=[0,6],this.redReserve=[[8,1],[8,2],[9,1],[9,2]],this.blueReserve=[[1,1],[1,2],[2,1],[2,2]],this.greenReserve=[[1,8],[1,9],[2,8],[2,9]],this.yellowReserve=[[8,8],[8,9],[9,8],[9,9]]}setEndzone(e,t){const s=this.redEndzone.findIndex((e=>e[0]===t[0]&&e[1]===t[1])),i=this.blueEndzone.findIndex((e=>e[0]===t[0]&&e[1]===t[1])),r=this.yellowEndzone.findIndex((e=>e[0]===t[0]&&e[1]===t[1])),a=this.greenEndzone.findIndex((e=>e[0]===t[0]&&e[1]===t[1]));-1!==s&&(e.classList.add("redZone","endZone"),e.id=`red-${s}`),-1!==i&&(e.classList.add("blueZone","endZone"),e.id=`blue-${i}`),-1!==r&&(e.classList.add("yellowZone","endZone"),e.id=`yellow-${r}`),-1!==a&&(e.classList.add("greenZone","endZone"),e.id=`green-${a}`)}setStartPoints(e,t){this.redStartPoint[0]===t[0]&&this.redStartPoint[1]===t[1]&&e.classList.add("redZone","startPoint"),this.blueStartPoint[0]===t[0]&&this.blueStartPoint[1]===t[1]&&e.classList.add("blueZone","startPoint"),this.yellowStartPoint[0]===t[0]&&this.yellowStartPoint[1]===t[1]&&e.classList.add("yellowZone","startPoint"),this.greenStartPoint[0]===t[0]&&this.greenStartPoint[1]===t[1]&&e.classList.add("greenZone","startPoint")}setReserveBank(e,t){const s=this.redReserve.findIndex((e=>e[0]===t[0]&&e[1]===t[1])),i=this.blueReserve.findIndex((e=>e[0]===t[0]&&e[1]===t[1])),r=this.yellowReserve.findIndex((e=>e[0]===t[0]&&e[1]===t[1])),a=this.greenReserve.findIndex((e=>e[0]===t[0]&&e[1]===t[1]));-1!==s&&(e.classList.add("redBank","playContainer","redZone"),e.id=`redBank-${s+1}`),-1!==i&&(e.classList.add("blueBank","playContainer","blueZone"),e.id=`blueBank-${i+1}`),-1!==r&&(e.classList.add("yellowBank","playContainer","yellowZone"),e.id=`yellowBank-${r+1}`),-1!==a&&(e.classList.add("greenBank","playContainer","greenZone"),e.id=`greenBank-${a+1}`)}}class n{constructor(){this.gameCubeZone=[5,5]}createGamecubeUi(e,t){this.gameCubeZone[0]===t[0]&&this.gameCubeZone[1]===t[1]&&(e.classList.add("gameCube"),e.id="gameCube",e.innerHTML="6")}showGameCubeNum(e){document.getElementById("gameCube").innerHTML=`${e}`}}class o{constructor(){this.playField=new r,this.playerZones=new a,this.gameCubeUi=new n}createGrid(){const e=document.getElementById("playField");for(let t=0;t<11;t++)for(let s=0;s<11;s++){const i=document.createElement("div"),r=[t,s];this.playField.addId(i,r),this.playerZones.setEndzone(i,r),this.playerZones.setStartPoints(i,r),this.playerZones.setReserveBank(i,r),this.gameCubeUi.createGamecubeUi(i,r),e.appendChild(i)}}updateGameBoardUi(e){for(let t=0;t<e.gameboard.length;t++){const s=document.getElementById(`playfield-${t}`);"object"==typeof e.gameboard[t]?(s.classList.add(`${e.gameboard[t].color}Figure`),s.classList.add("figure"),s.classList.add(`${e.gameboard[t].color}Figure${e.gameboard[t].id}`)):"number"==typeof e.gameboard[t]&&(console.log("hallo number"),s.classList.remove(`${e.gameboard[t].color}Figure`),s.classList.remove("figure"),s.classList.remove(`${e.gameboard[t].color}Figure${e.gameboard[t].id}`))}}updateGameboardPlayerBank(e){e.forEach((e=>{let t=e.getFiguresOnBank();if(t)for(let s=1;s<=e.myFigures.length;s++){const i=document.getElementById(`${e.color}Bank-${s}`);t.includes(s)?(i.classList.add(`${e.color}Figure`),i.classList.add("figure"),i.classList.add(`${e.color}Figure${s}`)):(i.classList.remove(`${e.color}Figure`),i.classList.remove("figure"),i.classList.remove(`${e.color}Figure${s}`))}}))}updateGameBoardPlayerEndzone(e){for(let t=0;t<e.myFigures.length;t++){const s=document.getElementById(`${e.color}-${t}`);e.myFigures[t].isInEndzone?s.classList.add(`${e.color}Figure`):s.classList.remove(`${e.color}Figure`)}}}class l{constructor(){this.gamePhase=0}getGamePhase(){return this.gamePhase}setGamePhaseOne(){this.gamePhase=0}setGamePhaseTwo(){this.gamePhase=1}setEndGame(){this.gamePhase=3}}const d=new class{constructor(){this.gameBoard=new i,this.players=[],this.currentPlayerIndex=0,this.gameCube=new s,this.gameBoardUi=new o,this.createNewGame(),this.gamePhase=0,this.gameRules=new l}createNewGame(){this.gameBoardUi.createGrid()}addPlayer(e){this.players.push(e)}playGame(){const e=document.getElementById("playField");this.gameBoardUi.updateGameboardPlayerBank(this.players),e.addEventListener("click",(e=>{this.checkGamePhase(e.target),this.gameBoardUi.updateGameBoardUi(this.gameBoard)}))}checkGamePhase(e){let t;const s=this.getCurrentPlayer();this.gameBoardUi.updateGameBoardUi(this.gameBoard),0===this.gameRules.getGamePhase()&&"gameCube"===e.id?(this.rollDice(),this.gameRules.setGamePhaseTwo()):1===this.gameRules.getGamePhase()&&(t=this.getChosenFigureId(s,e),this.moveCurrentPlayerFigure(s.myFigures[t]),this.gameBoardUi.updateGameboardPlayerBank(this.players),this.gameBoardUi.updateGameBoardPlayerEndzone(this.getCurrentPlayer()),this.nextTurn(),this.gameRules.setGamePhaseOne()),s.checkAllFiguresInEndzone()&&(console.log(`Player ${s.color} has won`),this.endGame())}endGame(){this.gameRules.setEndGame()}getChosenFigureId(e,t){let s=0;return t.classList.contains(`${e.color}Figure1`)?(console.log("test1"),s=0):t.classList.contains(`${e.color}Figure2`)?(console.log("test2"),s=1):t.classList.contains(`${e.color}Figure3`)?(console.log("test3"),s=2):t.classList.contains(`${e.color}Figure4`)&&(console.log("test4"),s=3),s}getCurrentPlayer(){return this.players[this.currentPlayerIndex]}nextTurn(){this.currentPlayerIndex=(this.currentPlayerIndex+1)%this.players.length}rollDice(){this.getCurrentPlayer(),this.gameCube.rollCube(),this.gameBoardUi.gameCubeUi.showGameCubeNum(this.gameCube.rolledNum)}moveCurrentPlayerFigure(e){const t=this.getCurrentPlayer(),s=this.gameCube.rolledNum,i=s+e.position;e.isOnField&&i<=40&&e.getMaxDistance(i)?(this.gameBoard.moveFigure(e,s),e.moveOnPlayerBoard(s)):e.isOnField&&i>40&&e.getMaxDistance(i)?(e.moveOnPlayerBoard(s),e.setIsInEndzone(),this.gameBoard.moveFigure(e,s)):e.isOnField?console.log("Fehler moveCurrentPlayerFigure"):(e.placeOnField(),this.gameBoard.placeFigure(t,e))}isGameEnd(e){return e.checkAllFiguresInEndzone()}},h=new t("red");d.addPlayer(h);const c=new t("blue");d.addPlayer(c);const g=new t("green");d.addPlayer(g);const u=new t("yellow");d.addPlayer(u),d.playGame(),console.log(d)})();