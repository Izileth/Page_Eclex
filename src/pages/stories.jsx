import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import usePageTransition from '../scripts/usePageTransition';
gsap.registerPlugin(ScrollTrigger);

export function Stories() {
    const sectionRef = useRef();
    const { initiateTransition } = usePageTransition();
    
    const stories = [
        { id: 1, type: 'video', title: 'Quantum Tailoring', duration: '02:45' },
        { id: 2, type: 'article', title: 'The Silk Algorithm', duration: '8 min' },
        { id: 3, type: 'interview', title: "Weaver's Dialogue", duration: '15:30' },
        { id: 4, type: 'documentary', title: 'Fabric of Time', duration: '22:17' }
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
        // Animação de entrada holográfica
        gsap.from('.stories-portal', {
            scale: 10,
            rotation: 360,
            opacity: 0,
            duration: 2,
            ease: 'expo.inOut'
        });

        // Sistema de grid dinâmico
        gsap.from('.story-card', {
            scrollTrigger: {
            trigger: '.stories-grid',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 100,
            duration: 1.5,
            stagger: {
            each: 0.2,
            from: 'random'
            },
            ease: 'elastic.out(1, 0.5)'
        });

        // Efeito de distorção temporal
        ScrollTrigger.create({
            trigger: '.timegate',
            start: 'top center',
            onEnter: () => animateTimeVortex(),
            onLeaveBack: () => resetTimeVortex()
        });

        // Nuvem de tags interativa
        document.querySelectorAll('.tag-particle').forEach(tag => {
            tag.addEventListener('mousemove', (e) => {
            gsap.to(tag, {
                x: (e.clientX - tag.offsetLeft - tag.offsetWidth/2) * 0.3,
                y: (e.clientY - tag.offsetTop - tag.offsetHeight/2) * 0.3,
                duration: 0.8,
                ease: 'power2.out'
            });
            });
        });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const animateTimeVortex = () => {
        gsap.to('.vortex-path', {
        motionPath: {
            path: 'M10,90 Q50,10 90,90 Q130,170 170,90',
            autoRotate: true
        },
        duration: 8,
        repeat: -1,
        ease: 'none'
        });
    };

    const resetTimeVortex = () => {
        gsap.killTweensOf('.vortex-path');
        gsap.set('.vortex-path', { x: 0, y: 0, rotation: 0 });
    };

    return (
        <section className="stories-page" ref={sectionRef}>
        <div className="stories-portal">
            <svg viewBox="0 0 100 100" className="portal-geometry">
            <path 
                d="M50,5 a45,45 0 0,1 0,90 a45,45 0 0,1 0,-90"
                fill="none"
                stroke="#fff"
                strokeWidth="0.5"
            />
            </svg>
        </div>

        <div className="stories-grid">
            {stories.map((story) => (
            <article 
                key={story.id}
                className={`story-card ${story.type}`}
                onClick={(e) => initiateTransition(() => {/* Navegação */}, e)}
            >
                <div className="card-hologram" />
                <h3 className="card-title">{story.title}</h3>
                <span className="card-duration">{story.duration}</span>
                <div className="card-signature">
                <svg className="thread-signature" viewBox="0 0 200 50">
                    <path 
                    d="M10,25 Q50,5 90,25 Q130,45 170,25"
                    fill="none"
                    stroke="#C5A47E"
                    strokeWidth="1"
                    />
                </svg>
                </div>
            </article>
            ))}
        </div>

        <div className="timegate">
            <div className="vortex-container">
            <div className="vortex-path" />
            <div className="tag-particle">1987</div>
            <div className="tag-particle">AI Fusion</div>
            <div className="tag-particle">Quantum</div>
            <div className="tag-particle">Ecléx Core</div>
            </div>
        </div>

        <div className="stories-cta">
            <button 
            className="temporal-btn"
            onClick={(e) => initiateTransition(() => window.history.back(), e)}
            >
            <span>Collapse Timeline</span>
            <div className="timewave" />
            </button>
        </div>
        </section>
    );
}