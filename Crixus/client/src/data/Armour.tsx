import type { Item } from "./Item";

class Armour implements Item{
    armourId: number;
    name: string;
    appearance: string;
    damage_protection: number;
    type: string;
    armourTypes = ["Helmet", "Shield"];
    price: number;
    rarity: number;

    constructor(a_id: number, name: string, app: string, dam_prot: number, type: string, price: number, rarity: number){
        this.armourId = a_id;
        this.name = name;
        this.appearance = app;
        this.damage_protection = dam_prot;
        this.type = type;
        this.price = price;
        this.rarity = rarity;
    }
}   

export default Armour;