import "../styles/NavBar.css"
import SettingsIcon from "../assets/SettingsIcon.png";
import IconPlaceholder from "../assets/HomeIconPlaceHolder.png";

function Sidebar(){
    return(
        <div className="side-bar">
            <ul>
                <li>
                    <button >
                       <img src={IconPlaceholder} alt="Homepage Icon"/> 
                    </button>
                    
                    <p>Home</p>
                </li>
                <li>
                    <button>
                        <img src={IconPlaceholder} alt="Fighters Icon"/>
                    </button>
                    
                    <p>Fighters</p>
                </li>
                <li>
                    <button>
                        <img src={IconPlaceholder} alt="Armory Icon"/>
                    </button>
                    
                    <p>Armory</p>
                </li>
                <li>
                    <button>
                        <img src={IconPlaceholder} alt="Arena Icon"/>
                    </button>
                    
                    <p>Arena</p>
                </li>
                <li>
                    <button>
                        <img src={IconPlaceholder} alt="About Us Icon"/>
                    </button>
                    
                    <p>About Us</p>
                </li>
            </ul>
            <div className="side-bar-user">
                <img src={SettingsIcon} alt="Settings Icon"></img>
                <p>Login</p>
            </div>
        </div>
        
    )
}

export default Sidebar;