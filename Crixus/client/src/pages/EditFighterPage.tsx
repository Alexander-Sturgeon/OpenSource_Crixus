// import "../styles/EditFighterPage.css";
import { useState, useEffect } from "react";

interface EditPageProp{
    id: number;
    onSuccess: () => void; //type means that it returns nothing
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
    Weapon_weapon_id: number;
    Armour_armour_id: number;
    User_user_id: number;
    Team_team_id: number;
}

const fightersImg =[
    {label: "Fighter Red", path: "/fighters/Fighter.png"},
    {label: "Fighter Blue", path: "/fighters/Fighter2.png"},
    {label: "Fighter Purple", path: "/fighters/Fighter3.png"},
    {label: "Fighter Green", path: "/fighters/Fighter4.png"},
    {label: "Fighter Yellow", path: "/fighters/Fighter5.png"},
    {label: "Fighter Pink", path: "/fighters/Fighter6.png"},
]

function EditFighterPage({id, onSuccess}: EditPageProp){
    const[selectedFighter, setSelectedFighter] = useState<EditFighter | null>();
    const pointPool = 53 - (selectedFighter?.strength ?? 0) - (selectedFighter?.dexterity ?? 0) - (selectedFighter?.constitution ?? 0) - (selectedFighter?.intelligence ?? 0);

    function ChangeStat(key: "strength" | "dexterity" | "constitution" | "intelligence" ,value: string){
        if(!selectedFighter) return;
        const remaining = (53 - pointPool) - selectedFighter[key];
        const hardCap = Math.min(Number(value) || 0, 20,53 - remaining);
        setSelectedFighter({... selectedFighter, [key]: Math.max(0, hardCap)});
    }

    //fetches fighter from db to populate stats and such for editing
    async function GetFighter(){
        try{
            console.log("Attempt to GET fighter");
            const res = await
            fetch(`http://localhost:3000/api/editFighters/get/${id}`, {
                method: "GET",
                headers: {
                    "Accept": "application/json"
                }
            });
            const data = await res.json();
            setSelectedFighter(data);
        }catch(err){
            console.log("There was an error getting fighter: ", err);
        }
    }

    useEffect(() => {GetFighter()}, [id])

    async function HandleSubmit(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault(); //stops the browsers default page reload
        if(!selectedFighter) return; //null check
        const ok = await
        EditFighter(selectedFighter); if (ok) onSuccess();
    }

    return(
        <section>                
            <h1>Edit Fighter</h1>
            <form onSubmit={HandleSubmit}>
                <div className="edit_appearnace">
                    {/* edit appearance section */}
                    <label htmlFor="edit_fighter_image">Fighter Appearance: </label>
                    <select value={selectedFighter?.appearance} onChange={(event) => {if (!selectedFighter) return;setSelectedFighter({...selectedFighter, appearance: event.target.value})}}>
                        {fightersImg.map((img) => (
                            <option key={img.label} value={img.path}>
                                {img.label}
                            </option>
                        ))}
                    </select>
                    <img className="fighter-preview" src={selectedFighter?.appearance} alt="Selected Fighters Appearance"></img>
                </div>

                <div className="edit_firstname">
                    {/* first name input  */}
                    <label htmlFor="first_name_input">First Name: </label>
                    <input type="text" id="first_name_input" name="first_name_input" value={selectedFighter?.first_name} onChange={(event) => {if (!selectedFighter) return; setSelectedFighter({...selectedFighter, first_name: event.target.value})}} required />
                </div>

                <div className="edit_lastname">
                    {/* last name input */}
                    <label htmlFor="last_name_input">Last Name: </label>
                    <input type="text" id="last_name_input" name="last_name_input" value={selectedFighter?.last_name} onChange={(event) => {if(!selectedFighter) return; {setSelectedFighter({...selectedFighter, last_name: event.target.value})}}} required/>
                </div>

                <div className="edit_stats">
                    <div className="edit_strength">
                        {/* edit strength */}
                        <label htmlFor="edit_strength_input">Strength: </label>
                        <input type="number" id="edit_strength_input" name="edit_strength_input" value={selectedFighter?.strength} onChange={(event) => ChangeStat("strength", event.target.value)} required/>
                    </div>

                    <div className="edit_dexterity">
                        {/* edit dexterity */}
                        <label htmlFor="edit_dexterity_input">Dexterity: </label>
                        <input type="number" id="edit_dexterity_input" name="edit_dexterity_input" value={selectedFighter?.dexterity} onChange={(event) => ChangeStat("dexterity", event.target.value)} required/>
                    </div>

                    <div className="edit_constitution">
                        {/* edit constitution  */}
                        <label htmlFor="edit_constitution_input">Constitution</label>
                        <input type="number" id="edit_constitution_input" name="edit_constitution_input" value={selectedFighter?.constitution} onChange={(event) => ChangeStat("constitution", event.target.value)} required/>
                    </div>

                    <div className="edit_intelligence">
                        {/* edit intelligence  */}
                        <label htmlFor="edit_intelligence_input">Intelligence</label>
                        <input type="number" id="edit_intelligence_input" name="edit_intelligence_input" value={selectedFighter?.intelligence} onChange={(event) => ChangeStat("intelligence", event.target.value)} required/>
                    </div>
                </div>

                <div className="submit_button">
                    <button type="submit">
                        Edit Fighter    
                    </button>
                </div>
            </form>
        </section>
    )
}

//put async/await that actually updates the entry
async function EditFighter(updated_fighter: EditFighter){
    try{
        console.log("attempt to call PUT on api");
        const res = await
        fetch(`http://localhost:3000/api/editFighters/edit/${updated_fighter.fighter_id}`, {
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
        return true;
    } catch (err) {
        console.log("There was an error updating fighter: ", err);
        return false;
    }
}

export default EditFighterPage;