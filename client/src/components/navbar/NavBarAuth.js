import { NavLink } from 'react-router-dom';
import './style.css'


const NavbarAuth = () => {

    return (
        <nav className="nav">
            <div className="container">
                    <div className="nav-row">
                        <NavLink to= "#" className="logo">
                            <strong>Your</strong> portfolio
                        </NavLink>
                        <ul className="nav-list">
                            <li className="nav-list__item">

                            </li>
                        </ul>
                    </div>
            </div>
        </nav>
    );
};


export default NavbarAuth;