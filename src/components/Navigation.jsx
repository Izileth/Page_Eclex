import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function Navigation() {
    return (
        <div className="nav">
            <div className="logo">
                <a href="#">Ecléx</a>
            </div>
            <div className="nav-links">
                <a href="#">Rituals</a>
                <a href="#">Our Roots</a>
                <a href="#">Lookbook</a>
                <a href="#">Stories</a>
            </div>
            <div className="btn">
                <a href="#"><FontAwesomeIcon icon={faShoppingCart} /></a>
            </div>
        </div>
    );
}

export default Navigation;