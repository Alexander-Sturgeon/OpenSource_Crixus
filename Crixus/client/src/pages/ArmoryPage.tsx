//Components
import WeaponsTab from "../components/WeaponsTab";
import ArmorTab from "../components/ArmorTab";
//Styles
import "../styles/Armory.css";
//Logic
import { useState } from "react";


function ArmoryPage(){
    const [page, setPage] = useState(true);
    const [tabColor, setTabColor] = useState(true);
    function pageChange(toggle:boolean){
        setPage(toggle)
        setTabColor(toggle)
    }
    return(
        <section>
            <div className="tab-btns">
               <div className={tabColor ? "tab-isActive": "tab-btn"}>
                    <button onClick={() => pageChange(true)}>Weapons</button>
                </div>
                <div className={tabColor ? "tab-btn" : "tab-isActive"}>
                    <button onClick={() => pageChange(false)}>Armor</button>
                </div> 
            </div>
            
            <div className="tab-view">
                
                <div className="tab-body">
                    <form className="search-bar">
                        <input placeholder="search by name or rarity.."/>
                        <button>Search</button>
                    </form>
                    <div>
                        {page ? <WeaponsTab/> : <ArmorTab/>}
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default ArmoryPage;