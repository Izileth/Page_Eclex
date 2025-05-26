import Bar from '../components/Bar';
import Footer from '../components/Footer';
import { useNavigate} from 'react-router-dom';

export function Rituals() {

    const navigate = useNavigate()

    const hadleNaevigate = () => {
        navigate('/looks')
    }
    return (
        <>
        <>
        <Bar/>
        </>
            <section className='rituals-bx'>
            <div className='rituals-ct'>
                <div className='rituals-ig'>
                    <img src='https://cdn.leonardo.ai/users/c60a0145-a4a8-4ee5-91cf-76495889e8b2/generations/712a67d6-94df-4ab8-afc3-0f67694a5d8a/Leonardo_Kino_XL_Hyperrealistic_3D_digital_sculpture_of_a_myst_2.jpg'></img>
                    <button onClick={hadleNaevigate} className='rituals-ig-btn'><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"/></svg></button>
                </div>
                <div className='rituals-word'>
                    <p>Rituals <span>Filosofy</span></p>
                </div>
                <div className='rituals-word-2'>
                    <p className='word-p'>Buy our products and be how your master verstion</p>
                    <p>To be <span>Ecléx</span></p>
                </div>
            </div>
            </section>
            <>
                <Footer/>
            </>
        </>
    );
}