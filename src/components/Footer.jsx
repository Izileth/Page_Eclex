import { Link } from "react-router-dom"

function Footer(){
    return(
        <footer className="footer">
            <div className="footer-bx">
                <div className="footer-tp">
                    <div className="footer-ct">
                        <h2>Explore</h2>
                        <Link className="footer-ic" to={'/rituals'}>Rituals</Link>
                        <Link className="footer-ic" to={'/roots'}>Ours Roots</Link>
                        <Link className="footer-ic" to={'/looks'}>Look Book</Link>
                        <Link className="footer-ic" to={'/stories'}>Stories</Link>
                    </div>
                    <div className="footer-ct">
                        <h2>Follw Us</h2>
                        <Link className="footer-ic" to={'/'}>Instagram</Link>
                        <Link className="footer-ic" to={'/'}>Facebook</Link>
                    </div>
                    <div className="footer-ct">
                        <h2>Contact Us</h2>
                        <a href="">eclex@gmail.com</a>
                        <a href="">+55 (33) 98855-2794</a>
                    </div>
                </div>
                <div className="footer-line"></div>
                <div className="footer-bt">
                    <div className="footer-brand">
                        <h2>Eclex <span>Shop</span></h2>
                        <p>Clean, Conscious, Clinical Skincare! Honest products that truly work</p>
                        <p>© 2025 TrueKind, All Rights Reserved</p>
                    </div>
                    <div className="footer-links">
                        <a href="">Disclaimer</a>
                        <a href="">Credits</a>
                        <p>Webisite by <a href="">Kawã Corriea</a> & <a href="">Juan Santos</a></p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer