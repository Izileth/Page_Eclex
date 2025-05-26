import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import usePageTransition from '../scripts/usePageTransition';
gsap.registerPlugin(ScrollTrigger);

export function LookBooks() {
    const sectionRef = useRef();
    const { initiateTransition } = usePageTransition();
    const looks = [
        { id: 1, category: 'Urban Armor', theme: 'night' },
        { id: 2, category: 'Concrete Bloom', theme: 'dawn' },
        { id: 3, category: 'Neon Nomad', theme: 'dusk' },
        { id: 4, category: 'Digital Shaman', theme: 'midnight' },
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
        // Animação de entrada holográfica
        gsap.from('.lookbook-hero__overlay', {
            clipPath: 'polygon(0% 50%, 100% 50%, 100% 50%, 0% 50%)',
            duration: 2.5,
            ease: 'power4.out'
        });

        // Grid Matrix Effect
        gsap.from('.lookbook-grid__item', {
            scrollTrigger: {
            trigger: '.lookbook-grid',
            start: 'top 80%',
            },
            opacity: 0,
            y: 40,
            scale: 0.95,
            duration: 1.2,
            stagger: {
            amount: 0.8,
            grid: 'auto',
            from: 'center'
            },
            ease: 'back.out(1.4)'
        });

        // Categoria Flutuante
        gsap.to('.lookbook-category', {
            scrollTrigger: {
            trigger: '.lookbook-category',
            scrub: 1,
            start: 'top 80%',
            end: 'bottom 20%'
            },
            y: -60,
            opacity: 1,
            ease: 'none'
        });

        // Efeito de Distorção na Imagem
        ScrollTrigger.create({
            trigger: '.lookbook-featured',
            start: 'top center',
            end: 'bottom center',
            onEnter: () => animateGlitch(),
            onEnterBack: () => animateGlitch()
        });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const animateGlitch = () => {
        gsap.fromTo('.featured-image', 
        { 
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
            filter: 'brightness(100%)' 
        },
        {
            clipPath: [
            'polygon(0 6%, 100% 16%, 95% 90%, 5% 90%)',
            'polygon(5% 0, 90% 15%, 85% 85%, 15% 100%)',
            'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
            ],
            filter: ['brightness(150%)', 'brightness(90%)', 'brightness(100%)'],
            duration: 0.4,
            ease: 'power2.inOut'
        }
        );
    };

    return (
        <section className="lookbooks-page" ref={sectionRef}>
        <div className="lookbook-hero">
            <div className="lookbook-hero__overlay" />
            <h1 className="matrix-text">
            <span>Code</span>
            <span className="amp">&</span>
            <span>Canvas</span>
            </h1>
        </div>

        <div className="lookbook-grid">
            {looks.map((look) => (
            <article 
                key={look.id} 
                className={`lookbook-grid__item theme-${look.theme}`}
                onClick={(e) => initiateTransition(() => {/* Navegação */}, e)}
            >
                <div className="item-overlay" />
                <h2>{look.category}</h2>
                <div className="grid-line vertical" />
                <div className="grid-line horizontal" />
            </article>
            ))}
        </div>

        <div className="lookbook-featured">
            <div className="lookbook-category">
            <span>Featured Collection</span>
            <h3>Cyber Renaissance</h3>
            </div>
            <div className="featured-image" />
        </div>

        <div className="lookbook-cta">
            <button 
            className="neon-btn"
            onClick={(e) => initiateTransition(() => window.history.back(), e)}
            >
            <span>Initiate Experience</span>
            <div className="neon-pulse" />
            </button>
        </div>
        </section>
    );
}