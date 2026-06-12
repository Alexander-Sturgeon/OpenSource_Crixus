import WeaponsTab from "../components/WeaponsArmory";
import ArmorTab from "../components/ArmorArmory";
import { useState } from "react";


function ArmoryPage(){
    const [page, setPage] = useState(true);
    return(
        <section>
            <div>
                <button onClick={() => setPage(!page)}>Weapons</button>
                <button onClick={() => setPage(!page)}>Armor</button>
                <div>
                    {page ? <WeaponsTab/> : <ArmorTab/>}
                </div>
            </div>
        </section>
    )
}

export default ArmoryPage;