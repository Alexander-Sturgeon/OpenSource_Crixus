import "../styles/HomePage.css";
import ItemCard from "../components/ItemCard";
import { useState, useEffect } from "react";
import type Weapon from "../data/Weapon";
import type Armour from "../data/Armour";

function pickRandomThree(items: (Weapon | Armour)[]): (Weapon | Armour)[] {
    return [...items].sort(() => Math.random() - 0.5).slice(0, 3);
}

//Image srced from pixabay by MARTINOPHUC
function HomePage(){
    const [weapons, setWeapons] = useState<Weapon[]>([]);
    const [armour, setArmour] = useState<Armour[]>([]);

    useEffect(() => {
        fetch("http://localhost:3000/home/api/weapon/home")
            .then((res) => res.json())
            .then((data: Weapon[]) => setWeapons(data))
            .catch((err) => console.error("Weapons failed to fetch.", err));

        fetch("http://localhost:3000/home/api/armor/home")
            .then((res) => res.json())
            .then((data: Armour[]) => setArmour(data))
            .catch((err) => console.error("Armour failed to fetch.", err));
    }, []);

    const pool: (Weapon | Armour)[] = [...weapons, ...armour];
    const randomThree = pickRandomThree(pool);

    return(
        <div className="home-main">
            {/* Highlights */}
            <div className="home-highlights">
                <h2 className="highlights-heading">Welcome to Crixus!</h2>
                <p className="highlights-p">Hello Lanista. Your arena awaits you. The Crixus arena is one of strength, virtue and glory. Create your fighters, arm and shield them. Than take your champions and pit them against others for the greatest rewards Rome has to offer. Become the Number one Lanista if you dare to try</p>
            </div>
            {/* Item Display */}
            <div className="home-tool-highlights">
                {randomThree.map((item) => (
                    <ItemCard
                        key={"armourId" in item ? item.armourId : item.weapon_id}
                        item={item}
                    />
                ))}
            </div>
        </div>
    )
}

export default HomePage;