import { Figure } from "./figure";

class Player{
    public color: string;
    public myFigures: Figure[];
    private myPlayerEndzone: Figure[] | number[];
    constructor(color:string){
        this.color = color;
        this.myFigures = [];
        this.createFigures();
        this.myPlayerEndzone = [0,0,0,0];
    }
    createFigures(): void{
        for(let i = 1; i < 5; i++){
            let figure = new Figure(this.color, i);
            this.myFigures.push(figure);
        }           
    }
    addFigureInEndzone(figure: Figure): void{
        this.myPlayerEndzone[figure.getEndzonePosition()] = figure;
    }
    getFiguresOnBank(){
        let myFiguresOnBank: number[] = [];
        this.myFigures.forEach(element => {
            if(!element.isOnField){
                myFiguresOnBank.push(element.id);
            }        
        });
        return myFiguresOnBank;
    }
    checkAllFiguresInEndzone(): boolean{
        return this.myFigures.every(figure => figure.isInEndzone);
    }
    checkFiguresOnFiled(){
        return this.myFigures.every(figure => !figure.isOnField)
    }
}

export {Player};