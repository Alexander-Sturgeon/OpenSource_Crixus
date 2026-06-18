import type { Item } from "./Item";

class Weapon implements Item{
    weapon_id: number;
    name: string;
    damage: number;
    type: string;
    weaponTypes = ["Sword", "Spear"];
    price: number;
    appearance: string;
    rarity: number;

    constructor(w_id: number, dam: number, type: string, app: string, name: string, price: number, rarity: number){
        this.weapon_id = w_id;
        this.damage = dam;
        this.type = type;
        this.appearance = app;
        this.name = name;
        this.price = price;
        this.rarity = rarity;
    }

}

export default Weapon;