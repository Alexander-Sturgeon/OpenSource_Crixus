import "../styles/EditFighterPage.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function GetFighterId(){
    const {id} = useParams();
}

interface EditFighter{
    fighter_id: number;
    first_name: string;
    last_name: string;
    appearance: string;
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    salary: number;
    weapon_id: number;
    armour_id: number;
    user_id: number;
    team_id: number;
}

const fightersImg =[
    {label: "Fighter Red", path: "/fighters/Fighter.png"},
    {label: "Fighter Blue", path: "/fighters/Fighter2.png"},
    {label: "Fighter Purple", path: "/fighters/Fighter3.png"},
    {label: "Fighter Green", path: "/fighters/Fighter4.png"},
    {label: "Fighter Yellow", path: "/fighters/Fighter5.png"},
    {label: "Fighter Pink", path: "/fighters/Fighter6.png"},
]

function EditFighterPage(){

}

//put async/await that actually updates the entry
async function EditFighter(updated_fighter: EditFighter){
    try{
        console.log("attempt to call PUT on api");
        const res = await
        fetch(`http://localhost:3000/api/updateFighter/edit/${updated_fighter.fighter_id}`, {
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'Content-Type': "application/json",
            },
            body: JSON.stringify(updated_fighter),
        });
        if(!res.ok) throw new Error(`Server responded ${res.status}`);
        const data = await res.json();
        console.log("Updated fighter, id: ", data.fighter_id);
    } catch (err) {
        console.log("There was an error updating fighter: ", err);
    }
}