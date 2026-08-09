//Components
import ItemCard from "./ItemCard";
import {useState, useEffect} from 'react';
import type Armour from "../data/Armour";
//Styles
import "../styles/Armory.css";
import "../styles/HomePage.css";

function ArmoryTab(){
    const [armour, setArmour] =  useState<Armour[]>([]);
    useEffect(() => {
        fetch("http://localhost:3000/armory/api/armor", { credentials: "include" })
            .then((res) => res.json())
            .then((data:Armour[]) => setArmour(data))
            .catch((err) => console.error("Armour failed to fetch.", err));
    }, []);
    return(
        <div>
            <div className="home-tool-highlights">
                {armour.slice(0,3).map((armour) => (
                    <ItemCard key={armour.armourId} item={armour}/>
                ))}
            </div>
            <div className="item-table-container">
                <table className="item-table">
                    <thead>
                        <tr className="item-table-header">
                            <th>Name</th>
                            <th>Type</th>
                            <th>Damage</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {armour.map((armour)=>(
                          <tr key={armour.armourId}>
                            <td>
                                <p>{armour.name}</p>
                            </td>
                            <td>
                                <p>{armour.type}</p>
                            </td>
                            <td>
                                <p>{armour.damage_protection}</p>
                            </td>
                            <td>
                                <p>{armour.price}</p>
                            </td>
                        </tr>  
                        ))}
                    </tbody>
                    
                </table>
            </div>
        </div>
    )

}

export default ArmoryTab;