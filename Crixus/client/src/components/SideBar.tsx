import "../styles/NavBar.css"
import SettingsIcon from "../assets/SettingsIcon.png";
import IconPlaceholder from "../assets/HomeIconPlaceHolder.png";
import { Link } from "react-router-dom";

function Sidebar(){
    return(
        <div className="side-bar">
            <ul>
                <li>
                    <button >
                        <Link to='/'>
                            <img src={IconPlaceholder} alt="Homepage Icon"/>
                        </Link>
                    </button>
                    <p>Home</p>
                </li>
                <li>
                    <button>
                        <Link to='/fighters'>
                            <img src={IconPlaceholder} alt="Fighters Icon"/>
                        </Link>
                    </button>
                    <p>Fighters</p>
                </li>
                <li>
                    <button>
                        <Link to='/armory'>
                            <img src={IconPlaceholder} alt="Armory Icon"/>
                        </Link>
                    </button>

                    <p>Armory</p>
                </li>
                <li>
                    <button>
                        <Link to='/'>
                            <img src={IconPlaceholder} alt="Arena Icon"/>
                        </Link>
                    </button>
                    <p>Arena</p>
                </li>
                <li>
                    <button>
                        <Link to='/aboutus'>
                            <img src={IconPlaceholder} alt="About Us Icon"/>
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