import { useState } from "react";


function Navbar(){
    const [toggle, setToggle] = useState(false);

    void function ToggleNav(){
        setToggle(!toggle)
    }
    return(
        <nav>
            <ul>
                <li></li>
            </ul>
        </nav>
    )
}

export default Navbar;