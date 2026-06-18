import Weapon from "./Weapon";
import Armour from "./Armour";
import User from "./User";
import Team from "./Team";

class Fighter{
    fighterId: number; //fighter id
    first_name: string; //fighter's first name
    last_name: string; //fighter's last name
    appearance: string; //fighter's apperance description
    strength: number; //fighter's strength rank
    intelligence: number; //fighter's intelligence rank
    dexterity: number; //fighter's dexterity rank
    constitution: number; //fighter's constitution rank
    salary: number; //fighter's salary
    weaponId: Weapon; //foriegn key for fighter's weapon
    armourId: Armour; //foriegn key for fighter's armour
    userId: User; //foriegn key for fighter's user
    teamId: Team; //foriegn key for fighter's team

    constructor(f_id: number, f_name: string, l_name: string, app: string, str: number, int: number, dex: number, con: number, sal: number, weap_id: Weapon, arm_id: Armour, u_id: User, t_id: Team){
        this.fighterId = f_id;
        this.first_name = f_name;
        this.last_name = l_name;
        this.appearance = app;
        this.strength = str;
        this.intelligence = int;
        this.dexterity = dex;
        this.constitution = con;
        this.salary = sal;
        this.weaponId = weap_id;
        this.armourId = arm_id;
        this.userId = u_id;
        this.teamId = t_id;
    }
}

export default Fighter;