import { Link, Outlet } from "react-router-dom";
import "../assets/css/style.css";
import logo from "../assets/images/Logo-white.png"


const AuthCommon = () => {
    return (
        <div className="login-wrapper">
            <div className="login-container">
                <div className="welcome-section">
                    <h1>Welcome to PSG</h1>
                    <p>We Make it For You</p>
                    <img src={logo} alt="PSG Logo" />
                </div>
                <div className="login-section">

                    <Outlet />
                </div>
            </div>
        </div>

    );
}

export default AuthCommon;