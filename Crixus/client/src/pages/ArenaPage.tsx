import { useState } from "react";
import "../styles/ArenaPage.css";
import ItemCard from "../components/ItemCard";

function ArenaPage(){
    const [outcomeToggle, setOutcomeToggle] = useState(true);
    return(
        <section className="arena-section">
            <div className="arena-body">
                <div className="arena-select">
                    <h2 className="select-heading">Arena</h2>
                    <div className="arena-selections">
                        <select>
                            <optgroup label="GameMode">
                                <option>Game Mode</option>
                                <option>Arena Combat</option>
                            </optgroup>
                        </select>
                        <select>
                            <optgroup label="Fighters">
                                <option>Fighters</option>
                                <option>Single Fighter</option>
                            </optgroup>
                        </select>
                    </div>
                </div>
                <div className="arena-combat">
                    <div className="arena-details">
                        <div className="details-salary">
                            <h3 className="details-heading">Salary Cost:</h3>
                            <p>Placeholder</p>
                            {/* Add the accumilative fighters salary */}
                        </div>
                        <div className="arena-user-fighters">
                            <h3 className="details-heading">Game Mode:</h3>
                            <p>Arena Combat</p>
                        </div>
                        <div className="arena-npc-fighters">
                            <h3 className="details-heading">Fighters:</h3>
                            <p>Single Fighter</p>
                        </div>
                    </div>
                    <div className="arena-fighter-display">
                        {/* Map fighters on get and map 2 random seeded fighters */}
                        {/* Placeholders below */}
                        <div className="fighter-display-row">
                            <h4>Name:</h4>
                            <p className="fighter-display-name">Decimus Maximus</p>
                            <h4>Salary: </h4>
                            <p className="fighter-display-sal">500</p>
                        </div>
                        <div className="fighter-npc-display-row">
                            <h4>Name:</h4>
                            <p className="fighter-display-name">Decimus Maximus</p>
                            <h4>Salary: </h4>
                            <p className="fighter-display-sal">500</p>
                        </div>
                    </div>
                    <div className="arena-fighter-appearance-display">
                        <div className="appearance-user-fighters">
                            {/* Map through users fighters appearance here */}
                            <div className="appearance-placeholder">Placeholder</div>
                        </div>
                        <p className="appearance-vs">VS</p>
                        <div className="appearance-npc-figthers">
                            {/* Map through a seeded fighter appearance here */}
                            <div className="appearance-placeholder">Placeholder</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Outcome toggle shows outcome after a fight */}
            {outcomeToggle && 
            <div className="arena-outcome">
                <div className="outcome-header">
                    <h3>Outcome & Rewards</h3>
                </div>
                <div className="outcome-result">
                    {/* Ken this is for you likly some sort of ? operator likley */}
                    <h4 id="placeholder">WINNER!</h4>
                </div>
                <div className="outcome-items">
                    {/* grab a random weapon & armor to display it the Item Card Component */}
                    {/* <ItemCard/> */}
                    {/* <ItemCard/> */}
                    <div className="outcome-item-placeholder">placeholder item</div>
                    <div className="outcome-item-placeholder">placeholder item</div>
                </div>
                <div className="outcome-money">
                    <h5>Gold:</h5>
                    {/* Add a random value between 500-2000 gold and add to users account */}
                    <p>1500</p>
                </div>
            </div>}
            
        </section>
    )
}

export default ArenaPage;