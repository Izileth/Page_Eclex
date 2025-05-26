import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import usePageTransition from '../scripts/usePageTransition';

gsap.registerPlugin(ScrollTrigger);

export function OurRoots() {
    const sectionRef = useRef();
    const { initiateTransition } = usePageTransition();
    
    const milestones = [
        { year: '1987', title: 'Genesis in Fire', text: 'Nasce nossa primeira forja artesanal nas montanhas do Tirol' },
        { year: '1999', title: 'Alchemy Discovered', text: 'Desenvolvimento da liga metálica exclusiva ECX-1' },
        { year: '2012', title: 'Digital Renaissance', text: 'Fusão entre tradição milenar e inteligência artificial' },
        { year: '2023', title: 'Quantum Leap', text: 'Patenteamento do processo de tecelagem molecular' }
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
        // Animação de entrada orgânica
        gsap.from('.roots-hero__overlay', {
            scaleY: 0,
            transformOrigin: 'bottom',
            duration: 2,
            ease: 'expo.out'
        });

        // Animação do texto raiz
        gsap.from('.roots-text path', {
            drawSVG: '0%',
            duration: 3,
            stagger: 0.2,
            ease: 'power4.out'
        });

        // Linha do tempo interativa
        gsap.from('.milestone', {
            scrollTrigger: {
            trigger: '.milestone',
            start: 'top 90%'
            },
            opacity: 0,
            x: -100,
            duration: 1.2,
            stagger: 0.3,
            ease: 'circ.out'
        });

        // Efeito de fluxo molecular
        ScrollTrigger.create({
            trigger: '.molecular-process',
            start: 'top center',
            onEnter: () => animateMolecularFlow(),
            onLeaveBack: () => resetMolecularFlow()
        });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const animateMolecularFlow = () => {
        gsap.to('.molecule-path', {
        strokeDashoffset: 0,
        duration: 4,
        ease: 'power2.inOut'
        });
    };

    const resetMolecularFlow = () => {
        gsap.set('.molecule-path', { strokeDashoffset: 1000 });
    };

    return (
        <section className="roots-page" ref={sectionRef}>
        <div className="roots-hero">
            <div className="roots-hero__overlay" />
            <svg className="roots-text" viewBox="0 0 800 300">
            <path 
                d="M50,150 Q100,50 150,150 T250,150 T350,150 T450,150 T550,150 T650,150"
                fill="none"
                stroke="#C5A47E"
                strokeWidth="2"
            />
            <text textAnchor="middle">
                <textPath href="#text-path" startOffset="50%">
                <tspan>Roots</tspan>
                <tspan dy="50">of Innovation</tspan>
                </textPath>
            </text>
            </svg>
        </div>

        <div className="timeline">
            {milestones.map((milestone, index) => (
            <article key={index} className="milestone">
                <div className="milestone-year">{milestone.year}</div>
                <h3 className="milestone-title">{milestone.title}</h3>
                <p className="milestone-text">{milestone.text}</p>
                <div className="timeline-connector" />
            </article>
            ))}
        </div>

        <div className="molecular-process">
            <svg viewBox="0 0 500 200">
            <path 
                className="molecule-path"
                d="M10,100 C150,50 350,150 490,100"
                stroke="#C5A47E"
                strokeWidth="1"
                fill="none"
                strokeDasharray="10 10"
                strokeDashoffset="1000"
            />
            </svg>
            <div className="process-text">
            <h3>Molecular Weaving</h3>
            <p>Tecnologia ancestral reinventada através de algoritmos quânticos</p>
            </div>
        </div>

        <div className="roots-cta">
            <button 
            className="forge-btn"
            onClick={(e) => initiateTransition(() => window.history.back(), e)}
            >
            <span>Return to Core</span>
            <div className="forge-spark" />
            </button>
        </div>
        </section>
    );
}