//Logic
import { useState, useEffect } from "react";
//Styles
import "../styles/ViewFighterPage.css";
import Fighter from "../data/Fighter";
//Components
import FighterCard from "../components/FighterCard";
import { Link } from "react-router-dom";
import ItemRarityRendered from "../utility/ItemRarityRendered";
//Data
import EditFighterPage from "./EditFighterPage";


function FightersView(){
    const [successMsg, setSuccessMsg] = useState(false);
    const [fighterCount, setFighterCount] = useState(0);
    const [selectedToggle, setSelectedToggle] = useState(false)
    const [editToggle, setEditToggle] = useState(false)
    const [selectedFighter, setSelectedFighter] = useState<Fighter | null>();
    const [selectedFighterId, setSelectedFighterId] = useState<number>(0);
    const fighterWeapon = selectedFighter?.weaponId;
    const fighterArmor = selectedFighter?.armourId;
    const [fighters, setFighters] = useState<Fighter[]>([]);

    function successfulEdit(){
        setEditToggle(false);
        setSuccessMsg(true);
        window.location.reload();
    }
    
    //LOAD FIGHTER
    async function loadFighters() {
            const response = await fetch(`http://localhost:3000/fighters/users/fighters`, {
                credentials: "include"
            });
            const data: Fighter[] = await response.json();
            setFighters(data)
        }
    useEffect(()=> {
        
        loadFighters()
    },[1]);

    //DELETE FIGHTER
    async function deleteFighter(id:Number) {
        try{
            const response = await fetch(`http://localhost:3000/fighters/fighters/${id}`, {
                method: "DELETE",
                credentials: "include"
            })

            if(!response.ok){
                console.error("Failed to delete fighter");
                return;
            }
            
            const message = await response.json();
            console.log(message);
            await loadFighters();
            setSelectedFighter(null);
            setSelectedToggle(false);

        }
        catch(err){
            console.error(err)
        }
            
    }
    useEffect(() =>{
        setFighterCount(fighters.length)
    }, [fighters]);

    //SELECT FIGHTER
    function selectFighter(fighter:Fighter){
        setSelectedToggle(true);
        setSelectedFighter(fighter);
        setSelectedFighterId(fighter.fighterId)

    }
    return(
        <section className="fighters-view">
            <div className="fighters-view-upper">
                <div className="fighters-count-display">
                    <h2>Fighters</h2>
                    <h3>{fighterCount}/∞</h3>
                </div>
                <div className="fighter-detail">
                    <div className="fighter-selected-body">
                        {!selectedToggle ? 
                            <div><p>Select a fighter or create a new fighter below.</p></div> 
                            :
                            <div className="fighter-selected-section">
                                <h3>Fighter selected</h3>
                                <div className="fighter-selected">
                                    <div className="fighter-selected-details-view">
                                        <div className="fighter-image-box"><img src={selectedFighter?.appearance} alt="Fighter Image"/></div>
                                        <div className="fighter-selected-details">
                                            <div className="fighter-name-pay">
                                                <p className="fighter-atr-label">First Name</p>
                                                <p className="fighter-atr-value">{selectedFighter?.first_name}</p>
                                                <p className="fighter-atr-label">Last Name</p>
                                                <p className="fighter-atr-value">{selectedFighter?.last_name}</p>
                                                <p className="fighter-atr-label">Salary</p>
                                                <p className="fighter-atr-value">{selectedFighter?.salary}</p>
                                            </div>
                                            <div className="fighter-attributes">
                                                <div className="fighter-str">
                                                    <h3>STR</h3>
                                                    <p>{selectedFighter?.strength}</p>
                                                </div>
                                                <div className="fighter-dex">
                                                    <h3>DEX</h3>
                                                    <p>{selectedFighter?.dexterity}</p>
                                                </div>
                                            </div>
                                            <div className="fighter-attributes">
                                                <div className="fighter-con">
                                                    <h3>CON</h3>
                                                    <p>{selectedFighter?.constitution}</p>
                                                </div>
                                                <div className="fighter-int">
                                                    <h3>INT</h3>
                                                    <p>{selectedFighter?.intelligence}</p>
                                                </div>
                                            </div>
                                            <div className="fighter-items">
                                                <div className="fighter-wpn" style={{backgroundColor: ItemRarityRendered(fighterWeapon?.rarity)}}>
                                                    <img src={fighterWeapon?.appearance} alt="Fighters Weapon Image" title={fighterWeapon?.name}/>
                                                </div>
                                                <div className="fighter-armor" style={{backgroundColor: ItemRarityRendered(fighterArmor?.rarity)}}>
                                                    <img src={fighterArmor?.appearance} alt="Fighters Armor Image" title={fighterArmor?.name}/>
                                                </div>
                                            </div>
                                            
                                        </div>                            
                                    </div>
                                </div>   
                            </div>
                        }      
                    </div>
                </div>
            </div>

            <div className="fighter-selected-edt-dlt">
                {!selectedToggle ?
                    <div></div>
                    :
                <div className="fighter-edt-dlt-btns">
                    <button className="fighter-edit-btn" onClick={() => setEditToggle(true)}>
                        Edit Fighter
                    </button>
                    <button className="fighter-delete-btn" onClick={() => selectedFighter && deleteFighter(selectedFighterId)}>

                        Delete Fighter
                    </button>
                </div>
                }
            </div>
            <div>
                {editToggle &&
                <div>
                    <EditFighterPage id={selectedFighterId} onSuccess={successfulEdit}/>
                </div>
                }
                <div>{successMsg && <p>Updated Fighter Successfully!</p>}</div>
            </div>

            <div className="fighter-list">
                {fighters.map((fighter) =>(
                    <button key={fighter.fighterId} className="fighter-card-btn" style={{transform: selectedFighter?.fighterId == fighter.fighterId ? "translateY(-1rem)":"none"}} onClick={() => selectFighter(fighter)}>
                        <FighterCard  fighter={fighter}/>
                    </button>
                    
                ))}
            </div>
            <div className="fighter-new-contain">
                <button className="fighter-new-btn">
                    <Link className="fighter-link" to='/newfighter'>New Fighter</Link>
                </button>
            </div>
        </section>
    )
}

export default FightersView