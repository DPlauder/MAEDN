
class Figure{
    private id:number;
    private color:string;
    private positionInPlayerBoard: number;
    public positionOnGameBoard: number;
    public isOnField: boolean;
    private isInEndzone: boolean;

    constructor(color:string, id:number){
        this.id = id;
        this.color = color;
        this.positionInPlayerBoard = 0;
        this.isOnField = false;
        this.isInEndzone = false;
        this.positionOnGameBoard = 0;
    }
    figureMovePlayerBoard(rolledNum:number){
        if(this.positionInPlayerBoard + rolledNum < 44){
            this.positionInPlayerBoard += rolledNum
        } else{
            console.log("Ziehen nicht möglich");           
        }       
    }
    placeOnField(){
        this.isOnField = true;
    }
    
    removeFromField(){
        this.isOnField = false;
    }
    setIsInEndzone(){
        this.isInEndzone = true;
    }
}
//------------------------------------------PLAYER---------------------------------------------------
class Player{
    public color: string;
    public myFigures: Figure[];
    constructor(color:string){
        this.color = color;
        this.myFigures = [];
        this.createFigures();
    }
    createFigures(){
        for(let i = 1; i < 5; i++){
            let figure = new Figure(this.color, i);
            this.myFigures.push(figure);
        }           
    }
}
//------------------------------------------WÜRFEL---------------------------------------------------

class GameCube{
    rolledNum: number;
    constructor(){   
        this.rolledNum = 0;   
    }
    rollCube(){
        this.rolledNum = Math.floor(Math.random() * (7-1) + 1);
    }
}
//------------------------------------------SPIELFELD---------------------------------------------------

class GameBoard{
    gameboard: Figure[];
    playerList: Player[]
    figureStartPoint: number;

    constructor(){
        this.gameboard = Array(41).fill(0);
        this.figureStartPoint = 0;
        this.playerList = [];
    }
    addPlayer(player: Player){
        this.playerList.push(player);
    }

    placeFigure(player: Player){
        const spawningFigure = player.myFigures.find(figure => !figure.isOnField);
        {
            if(spawningFigure){
                if(player.color == "red"){
                    spawningFigure.placeOnField();
                    this.gameboard[this.figureStartPoint] = spawningFigure;           
                }
                else if(player.color == "blue"){
                    this.figureStartPoint = 10
                    spawningFigure.placeOnField();
                    this.gameboard[this.figureStartPoint] = spawningFigure;
                }
                else if(player.color == "green"){
                    this.figureStartPoint = 20
                    spawningFigure.placeOnField();
                    this.gameboard[this.figureStartPoint] = spawningFigure;
                }
                else if(player.color == "yellow"){
                    this.figureStartPoint = 30
                    spawningFigure.placeOnField();
                    this.gameboard[this.figureStartPoint] = spawningFigure;
                }
            } else{
                console.log("Alle Figuren am Feld");
                
            }
        }
    }
    getFigurePosition(){

    }
}

const myGameboard = new GameBoard();
const myPlayer1 = new Player("blue");
//const myPlayer2 = new Player("blue");
myGameboard.addPlayer(myPlayer1);

const myWurfel = new GameCube();
myGameboard.placeFigure(myGameboard.playerList[0]);

myWurfel.rollCube()

myGameboard.playerList[0].myFigures[0].figureMovePlayerBoard(myWurfel.rolledNum);


console.log(myGameboard);



