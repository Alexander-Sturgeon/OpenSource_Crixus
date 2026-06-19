class Battle{
    battleId: number;
    battle_date: Date;

    constructor(b_id: number, b_date: Date){
        this.battleId = b_id;
        this.battle_date = b_date;
    }
}

export default Battle;