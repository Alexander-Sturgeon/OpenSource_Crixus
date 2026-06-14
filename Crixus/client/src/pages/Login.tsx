//Components
import { useState } from "react";
import LoginUser from "../components/LoginUser";
import RegisterUser from "../components/RegisterUser";
//Styles
import "../styles/LoginPage.css";
function LoginPage(){
    const [toggle, setToggle] = useState(true);

    return(
        <section>
            <div className="login-banner">

            </div>
            <div className="login-view">
                
                {toggle ? <LoginUser/> : <RegisterUser/>}
                <div>
                    <button className="login-option" onClick={() => setToggle(!toggle)}>{toggle ? "Create a new account" : "Already have an account?"}</button>
                </div>
            </div>
        </section>
    )
}

export default LoginPage;