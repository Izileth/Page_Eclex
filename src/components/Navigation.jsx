import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { NavLink, Link } from 'react-router-dom';

function Navigation() {
    return (
        <div className="nav">
            <div className="logo">
                <Link to="/">Ecléx</Link>
            </div>
            <div className="nav-links">
                <NavLink 
                    to="/rituals" 
                    className={({ isActive }) => isActive ? 'nav-active' : ''}
                >
                    Rituals
                </NavLink>
                <NavLink 
                    to="/roots"
                    className={({ isActive }) => isActive ? 'nav-active' : ''}
                >
                    Our Roots
                </NavLink>
                <NavLink 
                    to="/looks"
                    className={({ isActive }) => isActive ? 'nav-active' : ''}
                >
                    Lookbook
                </NavLink>
                <NavLink 
                    to="/stories"
                    className={({ isActive }) => isActive ? 'nav-active' : ''}
                >
                    Stories
                </NavLink>
            </div>
            <div className="btn">
                <NavLink 
                    to="/cart"
                    className={({ isActive }) => isActive ? 'nav-active' : ''}
                >
                    <FontAwesomeIcon icon={faShoppingCart} />
                </NavLink>
            </div>
        </div>
    );
}

export default Navigation;