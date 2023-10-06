class Figure{
    readonly id:number;
    private color:string;
    private position: number;
    public isOnField: boolean;
    public isInEndzone: boolean;

    constructor(color:string, id:number){
        this.id = id;
        this.color = color;
        this.position = 0;
        this.isOnField = false;
        this.isInEndzone = false;
    }
    moveOnPlayerBoard(rolledNum:number): void{
        if(this.position + rolledNum < 44){
            this.position += rolledNum
        } else{
            console.log("Ziehen nicht möglich");           
        }       
    }
    placeOnField(): void{
        this.isOnField = true;
        this.position = 1;
    }   
    removeFromField(): void{
        this.isOnField = false;
        this.position = 0;
    }
    setIsInEndzone(): void{
        this.isInEndzone = true;
    }
    checkMaxDistance(newPos: number): boolean{
        return newPos >= 45
    }
}

export {Figure};