

function RegisterUser(){
    return(
        <div className="login-comp-view">
            <h2>Register</h2>
            {/* Form in placeholder state */}
            <form method="POST" action="#" className="login-user-form">
                {/* I opted out of the labels as that seems to be the modern way to do it */}
                <input type="text" id="username" placeholder="Username"/>
                <input type="text" id="firstname" placeholder="First Name"/>
                <input type="text" id="lastname" placeholder="Last Name"/>
                <input type="email" id="email" placeholder="crixus@email.com"/>
                <input type="date" id="email" name="Birthday"/>
                <input type="password" id="password" placeholder="Password"/>
                <input type="password" id="confirm-password" placeholder="Confirm Password"/>

                <button type="submit">Register</button>
            </form>

        </div>
    )
}

export default RegisterUser;