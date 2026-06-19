import Fighter from "./Fighter";
import Battle from "./Battle";

class FighterBattle{
    fighter_id: Fighter;
    battle_id: Battle;
    result: boolean;
    winnings_gold: number;

    constructor(f_id: Fighter, b_id: Battle, result: boolean, winnings_gold: number){
        this.fighter_id = f_id;
        this.battle_id = b_id;
        this.result = result;
        this.winnings_gold = winnings_gold;
    }
}

export default FighterBattle;