class Figure{
    readonly id:number;
    public color:string;
    public position: number;
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
            this.position += rolledNum           
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
    getEndzonePosition(): number{
        return this.position - 41;
    }
    getIsInEndzone(): boolean{
        return this.isInEndzone;
    }
    getMaxDistance(newPos: number): boolean{
        return newPos <= 44;
    }

}

export {Figure};