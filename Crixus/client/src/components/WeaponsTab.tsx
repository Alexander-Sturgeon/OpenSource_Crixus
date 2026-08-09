import { useState, useEffect } from "react";
import ItemCard from "./ItemCard";
import type Weapon from "../data/Weapon";

//  Search filter 
function filterWeapons(items: Weapon[], search:string){
    const query = search.trim().toLowerCase()
    if (!query) return items;
    return items.filter((item)=>
    item.name.toLowerCase().includes(query) ||
    item.type.toLowerCase().includes(query)||
    item.rarity.toString().includes(query)
    );
}

function WeaponsTab({search}:{search:string}){
    const [weapons, setWeapons] =  useState<Weapon[]>([]);
    useEffect(() => {
        fetch("http://localhost:3000/armory/api/weapon", { credentials: "include" })
            .then((res) => res.json())
            .then((data:Weapon[]) => setWeapons(data))
            .catch((err) => console.error("Weapons failed to fetch.", err));
    }, []);

    const filteredWeapons  = filterWeapons(weapons,search)

    return(
        <div>
            <div className="home-tool-highlights">
                {filteredWeapons.slice(0,3).map((weapon) => (
                    <ItemCard key={weapon.weapon_id} item={weapon}/>
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
                        {filteredWeapons.map((weapon)=>(
                          <tr key={weapon.weapon_id}>
                            <td>
                                <p>{weapon.name}</p>
                            </td>
                            <td>
                                <p>{weapon.type}</p>
                            </td>
                            <td>
                                <p>{weapon.damage}</p>
                            </td>
                            <td>
                                <p>{weapon.price}</p>
                            </td>
                        </tr>  
                        ))}
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default WeaponsTab;