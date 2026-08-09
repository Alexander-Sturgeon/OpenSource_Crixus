import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
    const [status, setStatus] = useState<"loading" | "authed" | "unauthed">("loading");

    useEffect(() => {
        async function checkAuth() {
            try {
                const res = await fetch("http://localhost:3000/api/auth/verify", {
                    credentials: "include",
                });
                setStatus(res.ok ? "authed" : "unauthed");
            } catch (err) {
                setStatus("unauthed");
            }
        }

        checkAuth();
    }, []);

    if (status === "loading") {
        return <p>Loading...</p>;
    }

    return status === "authed" ? <Outlet /> : <Navigate to="/login" replace />;
}

export default ProtectedRoute;
