import "../styles/NavBar.css"
import SettingsIcon from "../assets/SettingsIcon.png";
// import IconPlaceholder from "../assets/HomeIconPlaceHolder.png";
import { HomeIcon, ShieldIcon, ColosseumIcon, AboutIcon, SpartanHelmetIcon } from "./Icons";
import { Link } from "react-router-dom";

function Sidebar(){
    return(
        <div className="side-bar">
            <ul>
                <li>
                    <button >
                        <Link to='/'>
                            <HomeIcon className="side-bar-icon" aria-label="Homepage Icon" />
                        </Link>
                    </button>
                    <p>Home</p>
                </li>
                <li>
                    <button>
                        <Link to='/fighters'>
                            <SpartanHelmetIcon className="side-bar-icon" aria-label="Fighter Icon" />
                        </Link>
                    </button>
                    <p>Fighters</p>
                </li>
                <li>
                    <button>
                        <Link to='/armoury'>
                            <ShieldIcon className="side-bar-icon" aria-label="Armoury Icon" />
                        </Link>
                    </button>

                    <p>Armoury</p>
                </li>
                <li>
                    <button>
                        <Link to='/arena'>
                            <ColosseumIcon className="side-bar-icon" aria-label="Colosseum Icon" />
                        </Link>
                    </button>
                    <p>Arena</p>
                </li>
                <li>
                    <button>
                        <Link to='/aboutus'>
                            <AboutIcon className="side-bar-icon" aria-label="About Us Icon" />
                        </Link>
                    </button>
                    <p>About Us</p>
                </li>
            </ul>
            <div className="side-bar-user">
                <img src={SettingsIcon} alt="Settings Icon"></img>
                <Link to='/login'><p>Login</p></Link>
            </div>
        </div>
        
    )
}

export default Sidebar;