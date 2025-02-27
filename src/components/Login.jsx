import React, { useState, useContext } from "react";
import UserContext from "./context/UserContext.js";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { setUser } = useContext(UserContext);

    const handleClick = (e) => {
        // Prevent the page from refreshing
        e.preventDefault();
        setUser({ username, password });
    };

    return (
        <div>
            <h2>Login</h2>
            <input
                type="text"
                value={username}
                id=""
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
            />{" "}
            <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                name=""
                id=""
                value={password}
                placeholder="Password"
            />
            <button type="submit" onClick={handleClick}>
                Submit
            </button>
        </div>
    );
}

export default Login;
