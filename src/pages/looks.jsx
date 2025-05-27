import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Bar from '../components/Bar';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

export function LookBooks() {
    const container = useRef();
    const navigate = useNavigate();

    useGSAP(() => {
        ScrollSmoother.create({
            wrapper: '#smooth-wrapper',
            content: '#smooth-content',
            smooth: 1.5,
            effects: true
        });

        const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
   
        // Animação do cabeçalho principal
        tl.from('.looks-ig-word', {
            y: 100,
            duration: 1.2,
            stagger: 0.2
        })
        .from('.looks-dst img', {
            scale: 1.2,
            duration: 1.5,
            ease: 'power3.out'
        }, '-=0.5');

        // Animação do grid
        gsap.from('.looks-ct-grid', {
            opacity: 0,
            y: 50,
            duration: 1,
            stagger: 0.3,
            scrollTrigger: {
                trigger: '.looks-ct-grid',
                start: 'top 70%'
            }
        });
        gsap.from('.looks-word', {
            opacity: 0,
            y: 80,
            x: 10,
            duration: 1.5,
            ease: 'power3.inOut'
        });

        gsap.from('.looks-ig-word', {
            opacity: 0,
            y: 100,
            x: 20,
            duration: 1.5,
            ease: 'power3.out'
        });

        // Animação do botão
        gsap.from('.looks-btn', {
            opacity: 0,
            scale: 0.8,
            rotation: 15,
            duration: 0.8,
            ease: 'back.out(1.7)',
            scrollTrigger: {
                trigger: '.looks-at',
                start: 'top 80%'
            }
        });

        
        gsap.from('.looks-at', {
            y: 100,
            opacity: 0,
            duration: 1.5,
            stagger: {
                amount: 0.3,
                from: 'start'
            }
        });

       

    }, { scope: container });

    const handleNavigate = () => navigate('/roots');

    return (
        <div id="smooth-wrapper">
            <div id="smooth-content">
                <Bar />
                <section className="lookbooks-bx" ref={container}>
                    <div className="looks-ct">
                        <div className="looks-ig">
                            <div className='looks-ig-word' data-speed="0.95">
                                <span className='looks-icon' data-speed="1.1">Styles</span>
                                <h2 data-speed="0.9">Meet Tour</h2>
                            </div>
                            <div className="looks-dst" data-speed="0.85">
                                <img 
                                    src='https://cdn.leonardo.ai/users/c60a0145-a4a8-4ee5-91cf-76495889e8b2/generations/d0093578-d817-4a80-8667-570d2d43f4c4/AlbedoBase_XL_Hyperrealistic_3D_digital_sculpture_of_a_mysteri_1.jpg' 
                                    alt="Style presentation"
                                />
                            </div>
                        </div>
                        <div className="looks-ct-grid">
                            <div className="looks-word" data-speed="1.05">
                                <span>Complete Lineup</span>
                            </div>
                            <div className="looks-at" data-speed="0.95">
                                <h2>Understand <span data-speed="1.1">Your Style</span></h2>
                                <p>Skincare is not just about the products you
                                use, but it’s also about how you use those
                                products effectively. Head over to clean
                                journal to read more.
                                </p>
                                <button onClick={handleNavigate} className="looks-btn" data-speed="0.9">
                                    Read More
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        </div>
    );
}