import { useState } from "react";

function RegisterUser(){
    const [username, setUsername] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [teamLabel, setTeamLabel] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setError("");

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        try {
            const res = await fetch("http://localhost:3000/api/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify({
                    username,
                    password,
                    confirmPassword,
                    firstName,
                    lastName,
                    email,
                    birthDate,
                    teamLabel,
                }),
            });

            const data = await res.json();

            if (!res.ok) {
                setError(data.error || "Registration failed");
                return;
            }

            console.log("Registered", data);
            window.location.href = "/login";

        } catch (err) {
            setError("Something went wrong. Try again.");
        }
    }

    return (
        <div className="login-comp-view">
            <h2>Register</h2>
            {error && <p className="login-error">{error}</p>}
            <form onSubmit={handleSubmit} className="login-user-form">
                <input type="text" id="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="text" id="firstname" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                <input type="text" id="lastname" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                <input type="email" id="email" placeholder="crixus@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label>Birthday</label>
                <input type="date" id="birthdate" name="Birthday" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} />
                <input type="text" id="teamlabel" placeholder="Team Name" value={teamLabel} onChange={(e) => setTeamLabel(e.target.value)} />
                <input type="password" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <input type="password" id="confirm-password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />

                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default RegisterUser;