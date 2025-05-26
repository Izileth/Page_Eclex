
import { NavLink } from "react-router-dom"
function Bar () {
    return(
        <header className="header-bar">
            <nav className="nav-bar">
                <div className="nav-brand">
                    <h2>Eclex <span>Brand</span></h2>
                </div>
                <div className="nav-links">
                    <NavLink 
                        to={'/rituals'}
                        className={({ isActive }) => isActive ? 'nav-active' : 'nav-default'}
                    >
                        Rituals
                    </NavLink>
                    <NavLink 
                        to={'/roots'}
                        className={({ isActive }) => isActive ? 'nav-active' : 'nav-default'}
                    >
                        Our Roots
                    </NavLink>
                    <NavLink 
                        to={'/looks'}
                        className={({ isActive }) => isActive ? 'nav-active' : 'nav-default'}
                    >
                        Look Books
                    </NavLink>
                    <NavLink 
                        to={'/stories'}
                        className={({ isActive }) => isActive ? 'nav-active' : 'nav-default'}
                    >
                        Stories
                    </NavLink>
                </div>
                <div className="nav-cart">
                    <button className="cart">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
                        </svg>
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Bar