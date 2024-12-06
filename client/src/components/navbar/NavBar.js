import { NavLink } from 'react-router-dom';
import './style.css'
import {ADMIN_ROUTE, CONTACTS_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, SKILLS_ROUTE} from "../../utils/consts";
import {useContext} from "react";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";

const Navbar = observer(() => {
    const activeLink = 'nav-list__link nav-list__link--active';
    const normalLink = 'nav-list__link';
    const {user} = useContext(Context);

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    return (
        <nav className="nav">
            <div className="container">
                {user.isAuth ?
                    <div className="nav-row">
                        <NavLink to={MAIN_ROUTE} className="logo">
                            <strong>Your</strong> portfolio
                        </NavLink>
                        <ul className="nav-list">
                            <li className="nav-list__item">
                                <NavLink
                                    to={ADMIN_ROUTE}
                                    className={({ isActive }) =>
                                        isActive ? activeLink : normalLink
                                    }
                                >
                                    Admin
                                </NavLink>
                            </li>
                            <li className="nav-list__item">
                                <NavLink
                                    to={MAIN_ROUTE}
                                    className={({ isActive }) =>
                                        isActive ? activeLink : normalLink
                                    }
                                >
                                    Projects
                                </NavLink>
                            </li>
                            <li className="nav-list__item">
                                <NavLink
                                    to={SKILLS_ROUTE}
                                    className={({ isActive }) =>
                                        isActive ? activeLink : normalLink
                                    }
                                >
                                    Skills
                                </NavLink>
                            </li>
                            <li className="nav-list__item">
                                <NavLink
                                    to={CONTACTS_ROUTE}
                                    className={({ isActive }) =>
                                        isActive ? activeLink : normalLink
                                    }
                                >
                                    Contacts
                                </NavLink>
                            </li>
                            <li className="nav-list__item">
                                <NavLink
                                    to={LOGIN_ROUTE}
                                    className={({ isActive }) =>
                                        isActive ? activeLink : normalLink
                                    }
                                    onClick={() => logOut()}
                                >
                                    Exit
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                     :
                    <div className="nav-row">
                        <NavLink to={MAIN_ROUTE} className="logo">
                            <strong>Your</strong> portfolio
                        </NavLink>
                        <ul className="nav-list">
                            <li className="nav-list__item">

                            </li>
                        </ul>
                    </div>
                }
            </div>
        </nav>
    );
});

export default Navbar;