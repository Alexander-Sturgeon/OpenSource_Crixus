//Logic
import { useState, useEffect } from "react";
//Styles
import "../styles/ViewFighterPage.css";
import Fighter from "../data/Fighter";
//Test Object of Fighter
import testFighter from "../data/TestFighter";
import testFighter2 from "../data/TestFighterTwo";
//Components
import FighterCard from "../components/FighterCard";
import { Link } from "react-router-dom";

function FightersView(){
    const [fighterCount, setFighterCount] = useState(0);
    const [selectedToggle, setSelectedToggle] = useState(false)
    const [selectedFighter, setSelectedFighter] = useState<Fighter | null>();

    //DEFAULTS WITH A TEST FIGHTER REMOVE LATER
    const [fighters, setFighters] = useState<Fighter[]>([testFighter,testFighter2]);

    useEffect(() =>{
        setFighterCount(fighters.length)
    }, [fighters]);
    function selectFighter(fighter:Fighter){
        setSelectedToggle(true);
        setSelectedFighter(fighter);
    }
    return(
        <section className="fighters-view">
            <div className="fighter-detail">
                <div className="fighters-count-display">
                    <h2>Fighters</h2>
                    <h3>{fighterCount}/4</h3>
                </div>
                <div className="fighter-selected-body">
                    {!selectedToggle ? 
                        <div><p>Select a fighter or create a new fighter below.</p></div> 
                        :
                        <div className="fighter-selected">
                            <h3>Fighter selected</h3>
                            <div className="fighter-selected-details-view">
                                <div><img src={selectedFighter?.appearance} alt="Fighter Image"/></div>
                                <div className="fighter-selected-details">
                                    <div className="fighter-name-pay">
                                        <p>First Name: {selectedFighter?.first_name}</p>
                                        <p>Last Name: {selectedFighter?.last_name}</p>
                                        <p>Salary: {selectedFighter?.salary}</p>
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
                                    
                                    <div className="fighter-wpn">
                                        {/* Run a get on weapon by selectedFighter.weaponId */}
                                    </div>
                                    <div className="fighter-armor">
                                        {/* Run a get on a armor by selectedFighter.armorId */}
                                    </div>
                                </div>
                                
                            </div>

                            
                        </div> 
                    }      
                </div>
                
            </div>
            <div className="fighter-edt-dlt-btns">
                <button className="fighter-edit-btn">
                    Edit Fighter
                </button>
                <button className="fighter-delete-btn">
                    Delete Fighter
                </button>
            </div>
            <div className="fighter-list">
                {fighters.map((fighter) =>(
                    <button className="fighter-card-btn" style={{transform: selectedFighter?.fighterId == fighter.fighterId ? "translateY(-1rem)":"none"}} onClick={() => selectFighter(fighter)}>
                        <FighterCard key={fighter.fighterId} fighter={fighter}/>
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