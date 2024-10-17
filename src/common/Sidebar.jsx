
import { Link, NavLink, useLocation } from "react-router-dom";
import main_logo from "../assets/images/Logo.png";
import toggle_logo from "../assets/images/toggle-logo.png";
import { useSelector } from "react-redux";
import { sidebarRoutes } from "../routes/sidebar";

const Sidebar = () => {
    const { isTrue } = useSelector((state) => state?.toggle || {});
    const {pathname} = useLocation()
    const path = pathname.split('/').join('')

    return (
        <nav id="sidebar" className={`text-black ${isTrue ? 'collapsed' : ''}`}>
            <div className="logo" >
                {/* Normal and Collapsed logos */}
                <img src={main_logo} alt="Logo" className="normal" />
                <img src={toggle_logo} alt="Logo" className="collapsed" />
            </div>

            <ul className="nav flex-column">
                {sidebarRoutes.map((route, index) => (
                    <li className="nav-item" key={index}>
                        {route.submenu ? (
                            <div className="dropdown sidebar-dropdown">
                                <Link
                                    to="#"
                                    className={`nav-link text-black dropdown-toggle ${route.submenu.some((sub)=>{
                                        return path===sub.path? 'show':null

                                    })} `}
                                    id={`${route.path}Dropdown`}
                                    data-bs-toggle="dropdown"
                                    aria-expanded={`${route.submenu.some(sub => path.includes(sub.path)) ? 'true' : 'false'}`}
                                >
                                    <i className={`bi ${route.icon} icon-normal`}></i>
                                    <i className={`bi ${route.icon} icon-collapsed`}></i>
                                    <span>{route.title}<i class="bi bi-caret-down-fill" style={{fontSize:'12px'}}></i></span>
                                </Link>
                                <ul className={`dropdown-menu ${route.submenu.some(sub => path.includes(sub.path)) ? 'show' : ''}`} aria-labelledby={`${route.path}Dropdown`}>
                                    {route.submenu.map((sub, subIndex) => (
                                        <li key={subIndex}>
                                            <NavLink to={sub.path} active className="dropdown-item" target={sub?.isTarget ? '_blank':null}>{sub.title}</NavLink>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ) : (
                            <NavLink   to={`${route.path}`}  active  className="nav-link text-black">
                                <i className={`bi ${route.icon} icon-normal`}></i>
                                <i className={`bi ${route.icon} icon-collapsed`}></i>
                                <span>{route.title}</span>
                            </NavLink>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Sidebar;


