import Team from "./Team";
import Battle from "./Battle";

class TeamBattle{
    team_id: Team;
    battle_id: Battle;
    result: boolean;
    winnings_gold: number

    constructor(t_id: Team, b_id: Battle, result: boolean, winnings_gold: number){
        this.team_id = t_id;
        this.battle_id = b_id;
        this.result = result;
        this.winnings_gold = winnings_gold;
    }

}

export default TeamBattle;