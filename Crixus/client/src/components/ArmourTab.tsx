//Components
import ItemCard from "./ItemCard";
import {useState, useEffect} from 'react';
import type Armour from "../data/Armour";
//Styles
import "../styles/Armoury.css";
import "../styles/HomePage.css";


//  Search filter 
function filterArmours(items: Armour[], search:string){
    const query = search.trim().toLowerCase()
    if (!query) return items;
    return items.filter((item)=>
    item.name.toLowerCase().includes(query) ||
    item.type.toLowerCase().includes(query)||
    item.rarity.toString().includes(query)
    );

}

function ArmoryTab({search}:{search:string}){
    const [armour, setArmour] =  useState<Armour[]>([]);
    useEffect(() => {
        fetch("http://localhost:3000/armory/api/armor")
            .then((res) => res.json())
            .then((data:Armour[]) => setArmour(data))
            .catch((err) => console.error("Armour failed to fetch.", err));
    }, []);
    
    const filteredArmours = filterArmours(armour,search)

    return(
        <div>
            <div className="home-tool-highlights">
                {filteredArmours.slice(0,3).map((armour) => (
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
                        {filteredArmours.map((armour)=>(
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