import React, { useContext } from "react";
import UserContext from "./context/UserContext.js";
function Profile() {
    const { user } = useContext(UserContext);
    if (!user) return <h1>Not Logged In</h1>;
    return (
        <div>
            Profile:{user.username}
            <h1>More Component</h1>
        </div>
    );
}

export default Profile;
