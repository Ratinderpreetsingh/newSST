import { Link } from "react-router-dom";
import "../assets/css/dashboard.css";
import profile_icon from "../assets/images/profile-icon.png";
import { useDispatch, useSelector } from "react-redux";
import { isToogle } from "../redux/Slice/toggleSlice";


const Header = () => {
    const dispatch = useDispatch()
    const state = useSelector((state)=>state?.toggle)

    return (
 <div className="header-container">
            <header id="header">
                {/* Toggle Button */}
                <button id="toggleBtn" className="border-0 site-color" onClick={()=>dispatch(isToogle())}>
                    <i className="bi bi-list"></i>
                </button>

                {/* Search Bar */}
                <div className="search-bar">
                    <input type="text" name="search" className="form-control" placeholder="Search..." />
                </div>

                {/* Icons */}
                <div className="icons">
                    {/* Notifications Dropdown */}
                    <div className="dropdown me-1">
                        <i
                            className="bi bi-bell icon dropdown-toggle fs-5"
                            id="notificationDropdown"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            data-bs-toggles="tooltip"
                            data-bs-placement="top"
                            title="You have new notifications"
                        ></i>
                        <ul className="dropdown-menu" aria-labelledby="notificationDropdown">
                            <li><Link className="dropdown-item" to="#">Notification 2</Link></li>
                            <li><Link className="dropdown-item" to="#">Notification 1</Link></li>
                            <li><Link className="dropdown-item" to="#">Notification 3</Link></li>
                        </ul>
                    </div>

                    {/* Profile Dropdown */}
                    <div className="nav-item dropdown">
                        <div
                            className="profile-user dropdown-toggle"
                            id="userDropdown"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <img src={profile_icon} alt="profile" />
                        </div>
                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
                            <li><Link className="dropdown-item" to="#">Profile</Link></li>
                            <li><Link className="dropdown-item" to="#">Setting</Link></li>
                            {/* Uncomment below to enable logout */}
                            {/* <li><a className="dropdown-item" onClick={logoutUser}>Logout</a></li> */}
                        </ul>
                    </div>
                </div>
            </header>
        </div>
          
        
    );
};

export default Header;
