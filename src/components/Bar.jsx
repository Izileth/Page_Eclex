
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Bar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems] = useState([
        // Add The Intens
    ]);

    const navigate = useNavigate()
    const hadleNavigate = () => {
        navigate('/')
    }

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        if (isCartOpen) setIsCartOpen(false);
    };

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
        if (isMobileMenuOpen) setIsMobileMenuOpen(false);
    };

    const closeMenus = () => {
        setIsMobileMenuOpen(false);
        setIsCartOpen(false);
    };

    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    const getTotalItems = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    };

    return (
        <>
            <header className="header-bar">
                <nav className="nav-bar">
                    <div  className="nav-brand">
                        <h2 onClick={hadleNavigate}>Eclex <span>Life</span></h2>
                    </div>
                    
                    {/* Desktop Navigation Links */}
                    <div className="nav-links desktop-only">
                        <a href="/rituals" className="nav-default">
                            Rituals
                        </a>
                        <a href="/roots" className="nav-default">
                            Our Roots
                        </a>
                        <a href="/looks" className="nav-default">
                            Look Books
                        </a>
                        <a href="/stories" className="nav-default">
                            Stories
                        </a>
                    </div>

                    <div className="nav-actions">
                        {/* Cart Button */}
                        <div className="nav-cart">
                            <button className="cart" onClick={toggleCart}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
                                </svg>
                                {getTotalItems() > 0 && (
                                    <span className="cart-badge">{getTotalItems()}</span>
                                )}
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button className="mobile-menu-btn mobile-only" onClick={toggleMobileMenu}>
                            <div className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}>
                                <span></span>
                                <span></span>
                            </div>
                        </button>
                    </div>
                </nav>
            </header>

            {/* Overlay */}
            {(isMobileMenuOpen || isCartOpen) && (
                <div className="overlay" onClick={closeMenus}></div>
            )}

            {/* Mobile Sidebar Menu */}
            <div className={`mobile-sidebar ${isMobileMenuOpen ? 'open' : ''}`}>
                <div className="sidebar-header">
                    <div className="nav-cart">
                        <button className="cart" onClick={toggleCart}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
                            </svg>
                            {getTotalItems() > 0 && ( 
                                <span className="cart-badge">{getTotalItems()}</span>
                                )}
                        </button>     
                    </div>     
                    <h2>Eclex <span>Life</span></h2>
                    <button className="close-btn" onClick={toggleMobileMenu}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>
                <div className="sidebar-links">
                    <a href="/rituals" className="sidebar-link" onClick={closeMenus}>
                        Rituals
                    </a>
                    <a href="/roots" className="sidebar-link" onClick={closeMenus}>
                        Our Roots
                    </a>
                    <a href="/looks" className="sidebar-link" onClick={closeMenus}>
                        Look Books
                    </a>
                    <a href="/stories" className="sidebar-link" onClick={closeMenus}>
                        Stories
                    </a>
                    <div className='sidebar-social'>
                        <a href="">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                            </svg></a>
                        <a href="">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-threads" viewBox="0 0 16 16">
                            <path d="M6.321 6.016c-.27-.18-1.166-.802-1.166-.802.756-1.081 1.753-1.502 3.132-1.502.975 0 1.803.327 2.394.948s.928 1.509 1.005 2.644q.492.207.905.484c1.109.745 1.719 1.86 1.719 3.137 0 2.716-2.226 5.075-6.256 5.075C4.594 16 1 13.987 1 7.994 1 2.034 4.482 0 8.044 0 9.69 0 13.55.243 15 5.036l-1.36.353C12.516 1.974 10.163 1.43 8.006 1.43c-3.565 0-5.582 2.171-5.582 6.79 0 4.143 2.254 6.343 5.63 6.343 2.777 0 4.847-1.443 4.847-3.556 0-1.438-1.208-2.127-1.27-2.127-.236 1.234-.868 3.31-3.644 3.31-1.618 0-3.013-1.118-3.013-2.582 0-2.09 1.984-2.847 3.55-2.847.586 0 1.294.04 1.663.114 0-.637-.54-1.728-1.9-1.728-1.25 0-1.566.405-1.967.868ZM8.716 8.19c-2.04 0-2.304.87-2.304 1.416 0 .878 1.043 1.168 1.6 1.168 1.02 0 2.067-.282 2.232-2.423a6.2 6.2 0 0 0-1.528-.161"/>
                            </svg></a>
                        <a href="">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-messenger" viewBox="0 0 16 16">
                            <path d="M0 7.76C0 3.301 3.493 0 8 0s8 3.301 8 7.76-3.493 7.76-8 7.76c-.81 0-1.586-.107-2.316-.307a.64.64 0 0 0-.427.03l-1.588.702a.64.64 0 0 1-.898-.566l-.044-1.423a.64.64 0 0 0-.215-.456C.956 12.108 0 10.092 0 7.76m5.546-1.459-2.35 3.728c-.225.358.214.761.551.506l2.525-1.916a.48.48 0 0 1 .578-.002l1.869 1.402a1.2 1.2 0 0 0 1.735-.32l2.35-3.728c.226-.358-.214-.761-.551-.506L9.728 7.381a.48.48 0 0 1-.578.002L7.281 5.98a1.2 1.2 0 0 0-1.735.32z"/>
                            </svg>
                        </a>
                        <a href="">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cursor" viewBox="0 0 16 16">
                            <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103zM2.25 8.184l3.897 1.67a.5.5 0 0 1 .262.263l1.67 3.897L12.743 3.52z"/>
                            </svg>
                        </a>
                    </div>
                    <div className='sidebar-footer'>
                        <h3>Contact us</h3>
                        <p>eclex@email.com</p>
                        <p>+55 33 99223 9784</p>
                    </div>
                </div>
            </div>

            {/* Cart Sidebar */}
            <div className={`cart-sidebar ${isCartOpen ? 'open' : ''}`}>
                <div className="cart-header">
                    <h3>Cart</h3>
                    <button className="close-btn" onClick={toggleCart}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>
                
                <div className="cart-content">
                    {cartItems.length === 0 ? (
                        <div className="empty-cart">
                            <p>Your Cart is <span>Empty</span></p>
                            <a href='/rituals'>Browser Products <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                            </svg></a>
                        </div>
                    ) : (
                        <>
                            <div className="cart-items">
                                {cartItems.map(item => (
                                    <div key={item.id} className="cart-item">
                                        <div className="item-image">
                                            <div className="placeholder-image"></div>
                                        </div>
                                        <div className="item-details">
                                            <h4>{item.name}</h4>
                                            <p className="item-price">R$ {item.price.toFixed(2)}</p>
                                            <div className="item-quantity">
                                                <button className="qty-btn">-</button>
                                                <span>{item.quantity}</span>
                                                <button className="qty-btn">+</button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            
                            <div className="cart-footer">
                                <div className="cart-total">
                                    <h3>Total: R$ {getTotalPrice().toFixed(2)}</h3>
                                </div>
                                <button className="checkout-btn">
                                    Finalizar Compra
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>

            <style jsx>{`
                .header-bar {
                    background-color: #f8f8f8;
                    width: 100%;
                    height: 80px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: relative;
                    z-index: 100;
                }

                .nav-bar {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                    gap: 1.2rem;
                    padding: 0 10%;
                }

                .nav-brand {
                    flex-shrink: 0;
                }

                .nav-brand h2 {
                    margin: 0;
                    font-size: 1.5rem;
                    color: #000;
                }

                .nav-brand span {
                    font-weight: 300;
                    color: #666;
                }

                .nav-links {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 2rem;
                    flex: 1;
                }

                .nav-active, .nav-default {
                    color: #000;
                    text-decoration: none;
                    padding: 0.5rem 0;
                    transition: all 0.3s ease;
                    position: relative;
                }

                .nav-active {
                    border-bottom: 2px solid #000;
                }

                .nav-default:hover {
                    color: #666;
                }

                .nav-actions {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                }

                .nav-cart {
                    position: relative;
                }

                .cart {
                    width: 45px;
                    height: 45px;
                    background-color: transparent;
                    border: 1px solid #e0e0e0;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s ease;
                    cursor: pointer;
                    position: relative;
                }

                .cart:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
                }

                .cart-badge {
                    position: absolute;
                    top: -8px;
                    right: -8px;
                    background-color: #000;
                    color: white;
                    border-radius: 50%;
                    width: 20px;
                    height: 20px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 0.75rem;
                    font-weight: bold;
                }

                .mobile-menu-btn {
                    background: none;
                    border: none;
                    cursor: pointer;
                    padding: 8px;
                }

                .hamburger {
                    width: 24px;
                    height: 18px;
                    position: relative;
                    transform: rotate(0deg);
                    transition: 0.3s ease-in-out;
                }

                .hamburger span {
                    display: block;
                    position: absolute;
                    height: 2px;
                    width: 100%;
                    background: #000;
                    border-radius: 2px;
                    opacity: 1;
                    left: 0;
                    transform: rotate(0deg);
                    transition: 0.3s ease-in-out;
                }

                .hamburger span:nth-child(1) {
                    top: 0px;
                }

                .hamburger span:nth-child(2) {
                    top: 8px;
                }

                .hamburger span:nth-child(3) {
                    top: 16px;
                }

                .hamburger.active span:nth-child(1) {
                    top: 8px;
                    transform: rotate(135deg);
                }

                .hamburger.active span:nth-child(2) {
                    opacity: 0;
                    left: -60px;
                }

                .hamburger.active span:nth-child(3) {
                    top: 8px;
                    transform: rotate(-135deg);
                }

                .overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.5);
                    z-index: 998;
                    backdrop-filter: blur(2px);
                    animation: fadeIn 0.3s ease;
                }

                .mobile-sidebar, .cart-sidebar {
                    position: fixed;
                    top: 0;
                    height: 100%;
                    width: 320px;
                    background-color: #ffffff;
                    z-index: 999;
                    transform: translateX(-100%);
                    transition: transform 0.3s ease;
                    box-shadow: 2px 0 20px rgba(0,0,0,0.1);
                }

                .mobile-sidebar {
                    left: 0;
                }

                .cart-sidebar {
                    right: 0;
                    transform: translateX(100%);
                }

                .mobile-sidebar.open {
                    transform: translateX(0);
                }

                .cart-sidebar.open {
                    transform: translateX(0);
                }

                .sidebar-header, .cart-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 1.5rem;
                }

                .sidebar-header h3, .cart-header h3 {
                    margin: 0;
                    color: #303030;
                    font-size: 1.4rem;
                    font-family: "Playfair Display", serif;
                    font-weight: 400;
                }

                .close-btn {
                    background: none;
                    border: none;
                    cursor: pointer;
                    padding: 4px;
                    color: #666;
                    transition: color 0.3s ease;
                }

                .close-btn:hover {
                    color: #000;
                }

                .sidebar-links {
                    padding: 0.8rem 0;
                    gap: 2.0rem;
                }

                .sidebar-link {
                    display: block;
                    padding: 1rem 1.5rem;
                    color: #000;
                    font-size: 1.4rem;
                    text-decoration: none;
                    transition: all 0.3s ease;
                    border-left: 3px solid transparent;
                    font-family: "Noto Sans", sans-serif;
                    font-weight: 300;
                    -webkit-font-smoothing: antialiased;
                }

                .sidebar-link:hover {
                    background-color: #f8f8f8;
                    padding-left: 2rem;
                }

                .sidebar-link.active {
                    border-left-color: #000;
                    background-color: #f8f8f8;
                    font-weight: 500;
                }

                .cart-content {
                    display: flex;
                    flex-direction: column;
                    height: calc(100% - 80px);
                }

                .empty-cart {
                    flex: 1;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #666;
                }

                .cart-items {
                    flex: 1;
                    overflow-y: auto;
                    padding: 1rem;
                }

                .cart-item {
                    display: flex;
                    gap: 1rem;
                    padding: 1rem 0;
                    border-bottom: 1px solid #f0f0f0;
                }

                .item-image {
                    flex-shrink: 0;
                }

                .placeholder-image {
                    width: 60px;
                    height: 60px;
                    background-color: #f0f0f0;
                    border-radius: 8px;
                }

                .item-details {
                    flex: 1;
                }

                .item-details h4 {
                    margin: 0 0 0.5rem 0;
                    font-size: 0.9rem;
                    color: #000;
                }

                .item-price {
                    margin: 0 0 0.5rem 0;
                    font-weight: 600;
                    color: #000;
                }

                .item-quantity {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }

                .qty-btn {
                    width: 28px;
                    height: 28px;
                    border: 1px solid #e0e0e0;
                    background: white;
                    border-radius: 4px;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.2s ease;
                }

                .qty-btn:hover {
                    background-color: #f8f8f8;
                }

                .cart-footer {
                    padding: 1.5rem;
                    border-top: 1px solid #e0e0e0;
                    background-color: #fafafa;
                }

                .cart-total {
                    margin-bottom: 1rem;
                }

                .cart-total h3 {
                    margin: 0;
                    color: #000;
                }

                .checkout-btn {
                    width: 100%;
                    padding: 1rem;
                    background-color: #000;
                    color: white;
                    border: none;
                    border-radius: 8px;
                    font-size: 1rem;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }

                .checkout-btn:hover {
                    background-color: #333;
                    transform: translateY(-1px);
                }

                .desktop-only {
                    display: flex;
                }

                .mobile-only {
                    display: none;
                }

                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

                @media (max-width: 768px) {
                    .nav-bar {
                        padding: 0 5%;
                    }

                    .desktop-only {
                        display: none;
                    }

                    .mobile-only {
                        display: block;
                    }

                    .mobile-sidebar, .cart-sidebar {
                        width: 280px;
                    }
                }

                @media (max-width: 480px) {
                    .nav-bar {
                        padding: 0 4%;
                    }

                    .nav-brand h2 {
                        font-size: 1.25rem;
                    }

                    .mobile-sidebar, .cart-sidebar {
                        width: 100%;
                    }
                }
            `}</style>
        </>
    );
}

export default Bar;