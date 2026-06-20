//Logic
import { useState, useEffect } from "react";
//Styles
import "../styles/ViewFighterPage.css";

function FightersView(){
    const [fighterCount, setFighterCount] = useState(0);
    const [selectedFighter, setSelectedFighter] = useState(false);
    const [fighters, setFighters] = useState([]);

    useEffect(() =>{

    }, [fighters]);
    return(
        <section className="fighters-view">
            <div className="fighter-detail">
                <div className="fighters-count-display">
                    <h2>Fighters</h2>
                    <h3>{fighterCount}/IV</h3>
                </div>
                <div className="fighter-selected-body">
                    {!selectedFighter ? 
                        <div><p>Select a fighter or create a new fighter below.</p></div> 
                        :
                        <div className="fighter-selected">

                        </div> 
                    }      
                </div>
                <div className="fighter-edt-dlt-btns">
                    <button>
                        Edit
                    </button>
                    <button>
                        Delete
                    </button>
                </div>
            </div>
            

        </section>
    )
}

export default FightersView