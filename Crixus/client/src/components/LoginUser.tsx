import "../styles/LoginPage.css";
import { useState } from "react";

function LoginUser() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setError("");

        try {
            const res = await fetch("http://localhost:3000/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify({ username, password }),
            });

            const data = await res.json();

            if (!res.ok) {
                setError(data.error || "Login failed");
                return;
            }

            console.log("Logged in", data);
            window.location.href = "/";

        } catch (err) {
            setError("Something went wrong. Try again.");
        }
    }
    return (
        <div className="login-comp-view">
            <h2>Login</h2>
             {error && <p className="login-error">{error}</p>}
            {/* Form in placeholder state */}
            <form onSubmit={handleSubmit} className="login-user-form">
                {/* I opted out of the labels as that seems to be the modern way to do it */}
                <input type="text" id="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                <input type="password" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>

                <button type="submit">Log In</button>
            </form>

        </div>
    )
}

export default LoginUser;