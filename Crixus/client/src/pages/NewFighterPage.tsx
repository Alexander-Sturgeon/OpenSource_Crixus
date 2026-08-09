//Styles
import { Navigate, useNavigate } from "react-router-dom";
import "../styles/NewFighterPage.css";
//Data
import { useState } from "react";

//New Fighter Type
interface NewFighter{
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
}
//For the Fighter Appearances
const fightersImg =[
    {label: "Fighter Red", path: "/fighters/Fighter.png"},
    {label: "Fighter Blue", path: "/fighters/Fighter2.png"},
    {label: "Fighter Purple", path: "/fighters/Fighter3.png"},
    {label: "Fighter Green", path: "/fighters/Fighter4.png"},
    {label: "Fighter Yellow", path: "/fighters/Fighter5.png"},
    {label: "Fighter Pink", path: "/fighters/Fighter6.png"},
]
//Pattern taken from react itself.  
interface FormElements extends HTMLFormControlsCollection {
    fighter_name_input: HTMLInputElement;
    fighter_l_name_input: HTMLInputElement;
    fighter_str_input: HTMLInputElement;
    fighter_dex_input: HTMLInputElement;
    fighter_con_input: HTMLInputElement;
    fighter_int_input: HTMLInputElement;

}

//MAIN page function
function NewFighterPage() {
    const[appearance,setAppearance] = useState("/fighters/Fighter.png");
    const [fighter, setFighter] = useState<NewFighter | null>(null);
    const navigate = useNavigate();
    const [stats, setStats] = useState({
        strength: 0,
        dexterity: 0,
        constitution: 0,
        intelligence: 0,
    })
    const pointPool = 53 - stats.strength - stats.dexterity - stats.constitution - stats.intelligence;
    
    //This is what keeps the attribute values max 20 or max no higher than what is left of the pool
    function ChangeStat(key: keyof typeof stats ,value: string){
        const remaining = (53 - pointPool) - stats[key];
        const hardCap = Math.min(Number(value) || 0, 20,53 - remaining);
        setStats({... stats, [key]: Math.max(0, hardCap)});
    }
    
    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault(); // stop the browser's default page reload
        const elements = event.currentTarget.elements as FormElements;
        const f_name = elements.fighter_name_input.value;
        const l_name = elements.fighter_l_name_input.value;
        const appear = appearance;
        const str = stats.strength;
        const dex = stats.dexterity;
        const con = stats.constitution;
        const int = stats.intelligence;
        const sal = 500; //Default salary for scalability one day
        const weapon = 1; //Default Weapon id
        const armour = 1; //Default Armour id
        try{
            //Try creating a NewFighter with the data.
            const createdFighter: NewFighter ={
                first_name: f_name,
                last_name: l_name,
                appearance: appear,
                strength: str,
                dexterity: dex,
                constitution: con,
                intelligence: int,
                salary: sal,
                weapon_id: weapon,
                armour_id: armour,
            }
            setFighter(createdFighter);
            CreateFighter(createdFighter);
        }catch{
            console.log("Failed to Create character. Input not valid.")
        }
        
        console.log("Fighter submitted with the first name of: ", f_name);
        
        
    }
    
    //POST function
    //These 3 SQL lines need to be run on your local db before you can create a fighter, its so it auto generates fighter_id
    //SET FOREIGN_KEY_CHECKS = 0;
    //ALTER TABLE `crixus`.`Fighter` MODIFY `fighter_id` INT NOT NULL AUTO_INCREMENT;
    //SET FOREIGN_KEY_CHECKS = 1;
    async function CreateFighter(new_fighter: NewFighter) {
        try {
            console.log("attempt to call POST on api");
            const res = await
            fetch("http://localhost:3000/api/newfighters/create", {
                method: "POST",
                headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify(new_fighter),
            });
            if (!res.ok) throw new Error(`Server responded ${res.status}`);
            const data = await res.json();
            console.log("Created fighter, id:", data.fighter_id);
            navigate('/fighters')
        } catch (err) {
            console.log("There was an error creating fighter", err);
        }
    }
    
    return (
        <section>
            <div className="new-fighter-body">
                <form onSubmit={handleSubmit}>
                    <div className="new-fighter-img">
                        <label htmlFor="fighter_appearance_input">Fighter Appearance:</label>
                        <select value={appearance} onChange={(event) => setAppearance(event.target.value)}>
                            {fightersImg.map((appearance) => (
                                <option key={appearance.label} value={appearance.path}>{appearance.label}</option>
                            ))}
                        </select>
                        <img className="fighter-preview" src={appearance} alt="Selected Fighters Appearance"></img>
                    </div>
                    <div className="new-fighter-form">
                        <div className="fighter-names">
                            <label htmlFor="fighter_name_input">Fighter First Name:</label>
                            <input id="fighter_name_input" name="fighter_name_input" type="text" required/>
                            
                            <label htmlFor="fighter_l_name_input">Fighter Last Name:</label>
                            <input id="fighter_l_name_input" name="fighter_l_name_input" type="text" required/>
                        </div>
                        
                        <span className="point-pool">Stat Points: {pointPool} - remaining</span>
                        <div className="stat-Group-One">
                            <label className="stat-label" htmlFor="fighter_str_input">Strength:</label>
                            <input className="stat-input" id="fighter_str_input" name="fighter_str_input" type="number" value={stats.strength} 
                                min={0}  onChange={(event) => ChangeStat("strength", event.target.value)}/>

                            <label className="stat-label" htmlFor="fighter_dex_input">Dexterity:</label>
                            <input className="stat-input" id="fighter_dex_input" name="fighter_dex_input" type="number" value={stats.dexterity} 
                                min={0}  onChange={(event) => ChangeStat("dexterity", event.target.value)}/>
                        </div>
                        <div className="stat-Group-Two">
                            <label className="stat-label" htmlFor="fighter_con_input">Constitution:</label>
                            <input className="stat-input" id="fighter_con_input" name="fighter_con_input" type="number" value={stats.constitution} 
                                min={0}  onChange={(event) => ChangeStat("constitution", event.target.value)}/>
                        <label className="stat-label" htmlFor="fighter_int_input">Intelligence:</label>
                        <input className="stat-input" id="fighter_int_input" name="fighter_int_input" type="number" value={stats.intelligence} 
                            min={0}  onChange={(event) => ChangeStat("intelligence", event.target.value)}/>
                        </div>
                        
                        
                        <div className="new-fighter-submit">
                            <button type="submit">Create Fighter</button>
                        </div>
                    </div>
                    
                </form>
            </div>
        </section>
    );
}

export default NewFighterPage;