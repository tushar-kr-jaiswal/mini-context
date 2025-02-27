import "./App.css";
import UserContextProvider from "./components/context/UserContextProvider.jsx";
import Login from "./components/Login.jsx";
import Profile from "./components/Profile.jsx";

function App() {
    return (
        <UserContextProvider>
            <h1>Mini Context : </h1>
            <Login />
            <Profile />
        </UserContextProvider>
    );
}

export default App;
