import "../styles/LoginPage.css";

function LoginUser(){

    return(
        <div className="login-comp-view">
            <h2>Login</h2>
            {/* Form in placeholder state */}
            <form method="POST" action="#" className="login-user-form">
                {/* I opted out of the labels as that seems to be the modern way to do it */}
                <input type="text" id="username" placeholder="Username"/>
                <input type="password" id="password" placeholder="Password"/>

                <button type="submit">Log In</button>
            </form>

        </div>
    )
}

export default LoginUser;