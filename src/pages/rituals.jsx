import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CustomEase } from 'gsap/all';
import usePageTransition from '../scripts/usePageTransition';

gsap.registerPlugin(ScrollTrigger, CustomEase);

export function Rituals() {
    const sectionRef = useRef();
    const { initiateTransition } = usePageTransition();
    const rituals = [
        {
        step: '01',
        title: 'The Awakening',
        text: 'Cada peça começa com a seleção cerimonial de materiais virgens, onde apenas 2% das matérias-primas cruas são consideradas dignas do processo Ecléx.'
        },
        {
        step: '02',
        title: 'The Forge',
        text: 'Nossos mestres artesãos empregam técnicas de século XVIII em temperaturas precisamente controladas, transformando o cru em sublime através de 144 horas de trabalho contínuo.'
        },
        {
        step: '03',
        title: 'The Enlightenment',
        text: 'Cada criação repousa em câmaras de equilíbrio por 7 dias, absorvendo a essência da moderna alquimia onde tecnologia e tradição se fundem.'
        }
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
        // Animação de entrada épica
        gsap.from('.ritual-hero__overlay', {
            clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
            duration: 2.5,
            ease: 'power4.out'
        });

        // Animação do texto hero
        gsap.from('.ritual-hero h1', {
            duration: 1.8,
            opacity: 0,
            y: 80,
            skewY: 8,
            stagger: 0.08,
            ease: 'expo.out'
        });

        // Animação dos passos
        gsap.from('.ritual-step', {
            scrollTrigger: {
            trigger: '.ritual-steps',
            start: 'top 70%'
            },
            opacity: 0,
            y: 60,
            duration: 1.2,
            stagger: 0.4,
            ease: 'circ.out'
        });

        // Animação da filosofia
        gsap.from('.philosophy-mask', {
            scrollTrigger: {
            trigger: '.brand-philosophy',
            start: 'top center'
            },
            scaleX: 0,
            transformOrigin: 'left center',
            duration: 2,
            ease: 'power4.inOut'
        });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="rituals-page" ref={sectionRef}>
        <div className="ritual-hero">
            <div className="ritual-hero__overlay" />
            <h1 className="text-stroke">
            <span>Alchemy of</span>
            <span>Modern Craft</span>
            </h1>
        </div>

        <div className="ritual-steps">
            {rituals.map((ritual, index) => (
            <article key={index} className="ritual-step">
                <div className="step-header">
                <span className="step-number">{ritual.step}</span>
                <h2 className="step-title">{ritual.title}</h2>
                </div>
                <p className="step-text">{ritual.text}</p>
            </article>
            ))}
        </div>

        <div className="brand-philosophy">
            <div className="philosophy-mask" />
            <div className="philosophy-content">
            <h3>Ars Longa, Vita Brevis</h3>
            <p>
                Na Ecléx, transcendemos o conceito de moda efêmera. Cada coleção é um 
                manifesto de <em>permanência evolutiva</em>, onde o artesanato ancestral 
                dialoga com a precisão algorítmica. Nossos rituais de criação são 
                <em>meditações em movimento</em>, eternizando o efêmero em formas 
                que carregam o DNA do futuro.
            </p>
            </div>
        </div>

        <div className="ritual-cta">
            <button 
            className="ceremonial-btn"
            onClick={(e) => initiateTransition(() => window.history.back(), e)}
            >
            <span>Return to Origin</span>
            <div className="btn-ornament" />
            </button>
        </div>
        </section>
    );
}