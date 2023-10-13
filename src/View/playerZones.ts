class PlayerZones{
    private redEndzone: number[][];
    private blueEndzone: number[][];
    private yellowEndzone: number[][];
    private greenEndzone: number[][];
    private redStartPoint: number[];
    private blueStartPoint: number[];
    private yellowStartPoint: number[];
    private greenStartPoint: number[];
    private redReserve: number[][];
    private blueReserve: number[][];
    private yellowReserve: number[][];
    private greenReserve: number[][];
    constructor(){
        this.redEndzone = [[9,5],[8,5],[7,5],[6,5]];
        this.blueEndzone = [[5,1],[5,2],[5,3],[5,4]];
        this.greenEndzone = [[1,5],[2,5],[3,5],[4,5]];
        this.yellowEndzone = [[5,9],[5,8],[5,7],[5,6]];
        this.redStartPoint = [10,4];
        this.blueStartPoint = [4,0];
        this.yellowStartPoint = [6,10];
        this.greenStartPoint = [0,6];
        this.redReserve = [[8,1],[8,2],[9,1],[9,2]];
        this.blueReserve = [[1,1],[1,2],[2,1],[2,2]];
        this.greenReserve = [[1,8],[1,9],[2,8],[2,9]];
        this.yellowReserve = [[8,8],[8,9],[9,8],[9,9]];
    }
    setEndzone(newDiv: HTMLDivElement, coordinates: number[]): void{
        const indexOfRed = this.redEndzone.findIndex(coord => coord[0] === coordinates[0] && coord[1] === coordinates[1]);
        const indexOfBlue = this.blueEndzone.findIndex(coord => coord[0] === coordinates[0] && coord[1] === coordinates[1]);
        const indexOfYellow = this.yellowEndzone.findIndex(coord => coord[0] === coordinates[0] && coord[1] === coordinates[1]);
        const indexOfGreen = this.greenEndzone.findIndex(coord => coord[0] === coordinates[0] && coord[1] === coordinates[1]);
        
        if(indexOfRed !== -1){
            newDiv.classList.add(`redZone`, `endZone`);
            newDiv.id = `red-${indexOfRed}`;
        }
        if(indexOfBlue !== -1){
            newDiv.classList.add(`blueZone`, `endZone`);
            newDiv.id = `blue-${indexOfBlue}`;
        }
        if(indexOfYellow !== -1){
            newDiv.classList.add(`yellowZone`, `endZone`);
            newDiv.id = `yellow-${indexOfYellow}`;
        }
        if(indexOfGreen !== -1){
            newDiv.classList.add(`greenZone`, `endZone`);
            newDiv.id = `green-${indexOfGreen}`;
        }
    }
    setStartPoints(newDiv: HTMLDivElement, coordinates: number[]):void{
        if(this.redStartPoint[0] === coordinates[0] && this.redStartPoint[1] === coordinates[1]){
            newDiv.classList.add("redZone", "startPoint");
        }         
        if(this.blueStartPoint[0] === coordinates[0] && this.blueStartPoint[1] === coordinates[1]){
            newDiv.classList.add("blueZone", "startPoint");
        }          
        if(this.yellowStartPoint[0] === coordinates[0] && this.yellowStartPoint[1] === coordinates[1]){
            newDiv.classList.add("yellowZone", "startPoint");
        }               
        if(this.greenStartPoint[0] === coordinates[0] && this.greenStartPoint[1] === coordinates[1]){
            newDiv.classList.add("greenZone", "startPoint");
        }
    }
    setReserveBank(newDiv: HTMLDivElement, coordinates: number[]):void{
        const indexOfRed = this.redReserve.findIndex(coord => coord[0] === coordinates[0] && coord[1] === coordinates[1]);
        const indexOfBlue = this.blueReserve.findIndex(coord => coord[0] === coordinates[0] && coord[1] === coordinates[1]);
        const indexOfYellow = this.yellowReserve.findIndex(coord => coord[0] === coordinates[0] && coord[1] === coordinates[1]);
        const indexOfGreen = this.greenReserve.findIndex(coord => coord[0] === coordinates[0] && coord[1] === coordinates[1]);
        if(indexOfRed !== -1){
            newDiv.classList.add(`redBank`, `playContainer`, `redZone`);
            newDiv.id = `redBank-${indexOfRed + 1}`;
        }
        if(indexOfBlue !== -1){
            newDiv.classList.add(`blueBank`, `playContainer`, `blueZone`);
            newDiv.id = `blueBank-${indexOfBlue + 1}`;

        }
        if(indexOfYellow !== -1){
            newDiv.classList.add(`yellowBank`, `playContainer`, `yellowZone`);
            newDiv.id = `yellowBank-${indexOfYellow + 1}`;
        }
        if(indexOfGreen !== -1){
            newDiv.classList.add(`greenBank`, `playContainer`, `greenZone`);
            newDiv.id = `greenBank-${indexOfGreen + 1}`;

        }
    }
}

export {PlayerZones};