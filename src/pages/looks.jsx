
import RadomImage from '../../public/assets/images/Destact-none.png'
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Bar from '../components/Bar';
export function LookBooks() {
    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate('/roots')
    }
    return (
        <>
            <>
                <Bar/>
            </>
            <section className="lookbooks-bx" >
                <div className="looks-ct">
                    <div className="looks-ig">
                        <div className='looks-ig-word'>
                            <span className='looks-icon'>Styles</span>
                            <h2>Meet Tour</h2>
                        </div>
                        <div className="looks-dst">
                            <img src='https://cdn.leonardo.ai/users/c60a0145-a4a8-4ee5-91cf-76495889e8b2/generations/d0093578-d817-4a80-8667-570d2d43f4c4/AlbedoBase_XL_Hyperrealistic_3D_digital_sculpture_of_a_mysteri_1.jpg'></img>
                        </div>
                    </div>
                    <div className="looks-ct-grid">
                        <div className="looks-word">
                            <span>Complete Lineup</span>
                        </div>
                        <div className="looks-at">
                            <h2>Understand <span>Your Style</span></h2>
                            <p>Skincare is not just about the products you
                            use, but it’s also about how you use those
                            products effectively. Head over to clean
                            journal to read more.
                            </p>
                            <button onClick={handleNavigate} className="looks-btn">Read More</button>
                        </div>
                    </div>
                </div>
            </section>
            <>
                <Footer/>
            </>
        </>
    );
}