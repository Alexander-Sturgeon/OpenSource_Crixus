//Components
import WeaponsTab from "../components/WeaponsTab";
import ArmorTab from "../components/ArmourTab";
//Styles
import "../styles/Armoury.css";
//Logic
import { useState } from "react";


function ArmoryPage(){
    const [page, setPage] = useState(true);
    const [tabColor, setTabColor] = useState(true);
    function pageChange(toggle:boolean){
        setPage(toggle)
        setTabColor(toggle)
    }

//  storing the user's search
const[search, setSearch] = useState("");

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
                    <form className="search-bar" onSubmit={(e) => e.preventDefault()}>
                        <input placeholder="search by name, type or rarity.."
                        value={search}
                        onChange={(e)=> setSearch(e.target.value)}
                        />              
                        <button>Search</button>
                    </form>
                    <div>
                        {page ? <WeaponsTab search={search}/> : <ArmorTab search={search}/>}
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default ArmoryPage;