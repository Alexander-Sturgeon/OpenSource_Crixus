import "./types.js";
import { Fighter } from "./types.js";

//gets a random integer value. Takes in minimum and maximum value (inclusive).
//Math.floor rounds a number down to it's nearest integer. 
//Math.abs ensures that the value is always positive.
//Math.random() returns a random value between 0-1.
//(max-min+1) calculates the range size. It ensures that the min/max is inclusive. If min is 1 and max is 6, 6-1 is only 5, which is wrong if you want it to be inclusive. 
//+ min shifts the values to your deserired range. 
function getRandomInt(min: number, max: number): number{
    return Math.floor(Math.abs(Math.random() * (max-min+1)) + min);
}

function simulate_fight(fighterA: Fighter, fighterB: Fighter): string{
    let fighterAResult: number = (fighterA.strength + fighterA.modifier + fighterA.attack) - fighterB.defense;
    
    let fighterBResult: number = (fighterB.strength + fighterB.modifier + fighterB.attack) - fighterB.defense;

    if(fighterAResult > fighterBResult){
        return `${fighterA.name} is victorious.\n${fighterA.name}: ${fighterAResult}\n${fighterB.name}: ${fighterBResult}`
    }
    else if(fighterBResult > fighterAResult){
        return `${fighterB.name} is victorious.\n${fighterA.name}: ${fighterAResult}\n${fighterB.name}: ${fighterBResult}`
    }
    return "tie";

}

const fighterA: Fighter = {
    name: "Tom",
    strength: 10,
    modifier: getRandomInt(1,6),
    attack: 1,
    defense: 5
}

const fighterB: Fighter = {
    name: "Peter",
    strength: 5,
    modifier: getRandomInt(1,6),
    attack: 6,
    defense: 1
}

console.log(simulate_fight(fighterA, fighterB));
export default simulate_fight(fighterA, fighterB);