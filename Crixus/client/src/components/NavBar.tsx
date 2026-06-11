import "../styles/NavBar.css"
import Sidebar from "./SideBar";
import drawerIcon from "../assets/drawer.png";//Default Image (Replace later)
import { useState } from "react";

//Side Bar

function Navbar(){
    const [toggle, setToggle] = useState(false);

    return(
        <nav className="nav-component">
            <div className="nav-bar">
                <div className="nav-left">
                <button className="nav-drawer" onClick={() => setToggle(!toggle)}>
                    <img src={drawerIcon} alt="Drawer Icon"/>
                </button>
                
                
                {/* <a>{isUser ?? User.name : Login}</a> */}
                <p>Login</p>
            </div>
            
            <div className="nav-title">
                <img src="" alt="Logo"></img>
                <h1>Crixus</h1>
            </div>
            <div className="nav-right"></div>
            </div>
            
            <div className="nav-side-pop">
                {toggle && <Sidebar/>}
            </div>
            
        </nav>
    )
}

export default Navbar;