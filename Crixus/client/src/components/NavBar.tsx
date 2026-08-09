//Styles
import "../styles/NavBar.css"
//Images
import Sidebar from "./SideBar";
import drawerIcon from "../assets/drawer.png";//Default Image (Replace later)
import Logo from "../assets/LogoPlaceholder.png";//Default Image (Replace later)
//Logic
import { useState, useEffect } from "react";

//Side Bar
function Navbar(){
    const [toggle, setToggle] = useState(false);
    const [username, setUsername] = useState<string | null>(null);

    useEffect(() => {
        async function checkAuth() {
            try {
                const res = await fetch("http://localhost:3000/api/auth/verify", { credentials: "include" });
                const data = res.ok ? await res.json() : null;
                setUsername(data?.username ?? null);
            } catch (err) {
                setUsername(null);
            }
        }

        checkAuth();
    }, []);

    async function handleLogout() {
        await fetch("http://localhost:3000/api/auth/logout", {
            method: "POST",
            credentials: "include",
        });
        window.location.href = "/login";
    }

    return(
        <nav className="nav-component">
            <div className="nav-bar">
                <div className="nav-left">
                <button className="nav-drawer" onClick={() => setToggle(!toggle)}>
                    <img src={drawerIcon} alt="Drawer Icon"/>
                </button>
                {username ? (
                    <>
                        <p className="username-or-login">{username}</p>
                        <button className="username-or-login logout-btn" onClick={handleLogout}>Logout</button>
                    </>
                ) : (
                    <p className="username-or-login">Login</p>
                )}
            </div>
            
            <div className="nav-title">
                <img src={Logo} alt="Logo"></img>
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