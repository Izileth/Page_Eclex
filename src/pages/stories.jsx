import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Bar from "../components/Bar";
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

export function Stories() {
    const container = useRef();
    const navigate = useNavigate()

        useGSAP(() => {
        // Configuração do ScrollSmoother (opcional)
        ScrollSmoother.create({
            smooth: 1.5,
            effects: true
        });
        
        // Animação do conteúdo principal
        gsap.fromTo('stories-bx',
            { opacity: 0 },
            {
                opacity: 1,
                duration: 1,
                ease: 'power2.inOut'
            }
        );

        // Animação da imagem
        gsap.from('.stories-grid', {
            opacity: 0,
            y: 80,
            x: 20,
            duration: 1.5,
            ease: 'power3.out'
        });
        
        gsap.from('.stories-ct-ig', {
            opacity: 0,
            y: 80,
            x: 20,
            duration: 1.5,
            ease: 'power3.out'
        });

        // Animação do botão
        // Animação dos textos
        gsap.from('.stories-ig', {
            opacity: 0,
            y: 50,
            duration: 1,
            stagger: 0.3,
            scrollTrigger: {
                trigger: '.rituals-ct',
                start: 'top center'
            }
        });
        
        gsap.from('.stories-ig h2', {
            opacity: 0,
            y: 80,
            x: 10,
            duration: 1.5,
            ease: 'power3.inOut'
        });
        gsap.from('.stories-ig .stories-ig-btn', {
            y: 80,
            x: 10,
            duration: 1.5,
            ease: 'power3.inOut'
        });
        gsap.from('.stories-ig .lg-icon',{
            opacity: 0,
            y: 20,
            duration: 1.5,
            ease: 'power4.out'
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

    const handleNavigate = () => 
        navigate('/rituals')
    
    return (
        <>
        <>
        <Bar/>
        </>
            <section ref={container} className="stories-bx">
                <div className="stories-ct">
                    <div className="stories-ig">
                        <span className="lg-icon">Destacts</span>
                        <h2>Our Stories <span>In Details</span> About Our Products</h2>
                        <div className="stories-ig-btn">
                            <button onClick={handleNavigate} className="stories-ig-btn"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/></svg></button>
                            <p>Our <span>Philosofy.</span></p>
                        </div>
                    </div>    
                    <div className="stories-grid">
                        <div className="stories-ct-grid">
                            <div className="stories-ct-ig">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2z"/> <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466"/></svg>
                                <span>100% Transparent Aspect</span>
                            </div>
                            <div className="stories-ct-word">
                                <h2>Our<span>Destacs</span></h2>
                                <p>We formulate to the highest standards of efficacyand safety – using only proven, verifiedingredients in bio-compatible bases; and freefrom over 1800 questionable ingredients</p>
                            </div>
                        </div>
                        <div className="stories-ct-grid">
                            <div className="stories-ct-ig">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-box-arrow-down-left" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M7.364 12.5a.5.5 0 0 0 .5.5H14.5a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 14.5 0h-10A1.5 1.5 0 0 0 3 1.5v6.636a.5.5 0 1 0 1 0V1.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5H7.864a.5.5 0 0 0-.5.5"/>
                                <path fill-rule="evenodd" d="M0 15.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1H1.707l8.147-8.146a.5.5 0 0 0-.708-.708L1 14.293V10.5a.5.5 0 0 0-1 0z"/>
                                </svg>
                                <span>100% Transparent Aspect</span>
                            </div>
                            <div className="stories-ct-word">
                                <h2>Our<span>Destacs</span></h2>
                                <p>We formulate to the highest standards of efficacyand safety – using only proven, verifiedingredients in bio-compatible bases; and freefrom over 1800 questionable ingredients</p>
                            </div>
                        </div>
                        <div className="stories-ct-grid">
                            <div className="stories-ct-ig">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-arrows-fullscreen" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707m4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707m0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707m-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707"/>
                                </svg>
                                <span>100% Transparent Aspect</span>
                            </div>
                            <div className="stories-ct-word">
                                <h2>Our<span>Destacs</span></h2>
                                <p>We formulate to the highest standards of efficacyand safety – using only proven, verifiedingredients in bio-compatible bases; and freefrom over 1800 questionable ingredients</p>
                            </div>
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