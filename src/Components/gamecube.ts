
class GameCube{
    public rolledNum: number;
    constructor(){   
        this.rolledNum = 0;   
    }
    rollCube(): void{
        this.rolledNum = Math.floor(Math.random() * 6) + 1;
    }
    checkFor6(): boolean{
        return this.rolledNum === 6;
    }
}

export {GameCube};