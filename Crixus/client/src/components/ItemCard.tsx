import "../styles/ItemCard.css"
import type Weapon from "../data/Weapon";
import type Armour from "../data/Armour";

type CardItem = Weapon | Armour;
interface ItemCardProps{
    item: CardItem;
}


function ItemCard({item}: ItemCardProps){
    // const isWeapon = "damage" in item;
    return(
        <div className="item-card-main" style={{backgroundImage: `url(${item.appearance})`}}>
              <h3 className="item-card-name">{item.name}</h3>
              <p className="item-card-type">{item.type}</p>
              {/* <p className="item-card-stat">
                  {isWeapon
                      ? `Damage: ${item.damage}`
                      : `Protection: ${item.damage_protection}`}
              </p> */}
              <p className="item-card-price">{item.price} gold</p>
              <p className="item-card-rarity">Rarity:{item.rarity}</p>
          </div>
    )
}

export default ItemCard;