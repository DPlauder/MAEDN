import { Figure } from "./figure.js";

class Player{
    public color: string;
    public myFigures: Figure[];
    constructor(color:string){
        this.color = color;
        this.myFigures = [];
        this.createFigures();
    }
    createFigures(): void{
        for(let i = 1; i < 5; i++){
            let figure = new Figure(this.color, i);
            this.myFigures.push(figure);
        }           
    }
    getFiguresOnBank(): void{
        this.myFigures.forEach(element => {
            if(!element.isOnField){
                return element.id
            }
    })
    }
    checkAllFiguresInEndzone(): boolean{
        return this.myFigures.every(figure => figure.isInEndzone)
    }
}

export {Player};