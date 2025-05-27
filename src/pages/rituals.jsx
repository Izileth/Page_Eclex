import Bar from '../components/Bar';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

export function Rituals() {
    const container = useRef();
    const navigate = useNavigate();

    // Animação de entrada
    useGSAP(() => {
        // Configuração do ScrollSmoother (opcional)
        ScrollSmoother.create({
            smooth: 1.5,
            effects: true
        });
        
        // Animação do conteúdo principal
        gsap.fromTo('.rituals-bx',
            { opacity: 0 },
            {
                opacity: 1,
                duration: 1,
                ease: 'power2.inOut'
            }
        );

        // Animação da imagem
        gsap.from('.rituals-ig img', {
            opacity: 0,
            y: 80,
            x: 20,
            duration: 1.5,
            ease: 'power3.out'
        });
        
        gsap.from('.rituals-ig .rituals-ig-btn', {
            opacity: 0,
            y: 80,
            x: 20,
            duration: 1.5,
            ease: 'power3.out'
        });

        // Animação do botão
        // Animação dos textos
        gsap.from('.rituals-word', {
            opacity: 0,
            y: 50,
            duration: 1,
            stagger: 0.3,
            scrollTrigger: {
                trigger: '.rituals-ct',
                start: 'top center'
            }
        });
        
        gsap.from('.rituals-word-2', {
            opacity: 0,
            y: 50,
            duration: 1,
            stagger: 0.3,
            scrollTrigger: {
                trigger: '.rituals-ct',
                start: 'top center'
            }
        });

    }, { scope: container });

    const hadleNavigate = () => { navigate('/looks') }

    return (
        <>
            <Bar />
            <section className='rituals-bx' ref={container}>
                <div className='rituals-ct'>
                    <div className='rituals-ig'>
                        <img src='https://cdn.leonardo.ai/users/c60a0145-a4a8-4ee5-91cf-76495889e8b2/generations/712a67d6-94df-4ab8-afc3-0f67694a5d8a/Leonardo_Kino_XL_Hyperrealistic_3D_digital_sculpture_of_a_myst_2.jpg' />
                        <button 
                            onClick={hadleNavigate} 
                            className='rituals-ig-btn'
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-arrow-down" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"/>
                            </svg>
                        </button>
                    </div>
                    <div className='rituals-word'>
                        <p>Rituals <span>Filosofy</span></p>
                    </div>
                    <div className='rituals-word-2'>
                        <p className='word-p'>Buy our products and be how your master version</p>
                        <p>To be <span>Ecléx</span></p>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}