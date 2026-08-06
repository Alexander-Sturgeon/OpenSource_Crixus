import "../styles/ItemCard.css"
import type Weapon from "../data/Weapon";
import type Armour from "../data/Armour";
import { useEffect, useState } from "react";
type CardItem = Weapon | Armour;
interface ItemCardProps{
    item: CardItem;
}


function ItemCard({item}: ItemCardProps){
    const [itemRarity,setItemRarity] = useState<String | null>(null);

    function ItemRaritySelector(rarity: number){
        switch(rarity){
            case 1:  
                setItemRarity("Legendary");
                break;
            case 2:
                setItemRarity("Rare");
                break;
            case 3:
                setItemRarity("Common")
                break;
            default:
                console.log("Error: Unknown rarity status");
                break;
        }
        
    }
    useEffect(() => {
        ItemRaritySelector(item.rarity);
    },[]);
    // const isWeapon = "damage" in item;
    
    return(
        <div className="item-card-main" style={{backgroundImage: `url(${item.appearance})`}}>
            <h3 className="item-card-name">{item.name}</h3>
            <div className="item-details">
                <p className="item-card-type">Type: {item.type}</p>
                {/* <p className="item-card-stat">
                    {isWeapon
                        ? `Damage: ${item.damage}`
                        : `Protection: ${item.damage_protection}`}
                </p> */}
                <p className="item-card-price">Price: {item.price} gold</p>
                <p className="item-card-rarity">Rarity: {itemRarity}</p>
            </div>
            
              
              
          </div>
    )
}

export default ItemCard;