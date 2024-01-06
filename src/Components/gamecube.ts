class GameCube {
  public rolledNum: number;
  constructor() {
    this.rolledNum = 0;
  }
  rollCube(): void {
    this.rolledNum = Math.floor(Math.random() * 6) + 1;
  }
  getRolledNum() {
    return this.rolledNum;
  }
  checkFor6(): boolean {
    if (this.rolledNum === 6) return true;
    return false;
  }
}

export { GameCube };
