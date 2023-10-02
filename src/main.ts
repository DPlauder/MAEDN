class Figure{
    color:string;
    position: number;
    isOnField: boolean;
    isInEndzone: boolean;

    constructor(color:string, position:number){
        this.color = color;
        this.position = 0;
        this.isOnField = false;
        this.isInEndzone = false;
    }
}

class Player{
    color: string;
    myFigures: Figure[];
    constructor(color:string){
        this.color = color;
        this.myFigures = [];
    }
}