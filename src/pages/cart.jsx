import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import usePageTransition from '../scripts/usePageTransition';

export function Cart() {
    const sectionRef = useRef();
    const { initiateTransition } = usePageTransition();
    const cartItems = [
        { id: 1, name: 'Quantum Blazer', price: 1580, material: 'Nano-Silk' },
        { id: 2, name: 'Neon Tapestry', price: 920, material: 'Liquid Metal' },
        { id: 3, name: 'Hologram Cloak', price: 2340, material: 'Photon Mesh' }
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
        // Animação de entrada fluida
        gsap.from('.cart-scroll', {
            clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
            duration: 2,
            ease: 'sine.inOut'
        });

        // Sistema de partículas de preço
        gsap.from('.price-particle', {
            duration: 1.5,
            opacity: 0,
            y: (i) => i % 2 ? 50 : -50,
            x: () => gsap.utils.random(-50, 50),
            stagger: 0.2,
            ease: 'elastic.out(1, 0.3)'
        });

        // Interação de material
        document.querySelectorAll('.material-tag').forEach(tag => {
            tag.addEventListener('mousemove', () => {
            gsap.to(tag, {
                motionPath: {
                path: 'M0,0 Q50,50 0,100',
                autoRotate: true
                },
                duration: 2,
                ease: 'power2.out'
            });
            });
        });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const animateFabricFlow = (id) => {
        gsap.to(`#fabric-${id} path`, {
        morphSVG: 'M0,50 Q25,0 50,50 Q75,100 100,50',
        duration: 1.5,
        repeat: 1,
        yoyo: true,
        ease: 'power2.inOut'
        });
    };

    return (
        <section className="art-cart" ref={sectionRef}>
        <div className="cart-scroll">
            <div className="fluid-header">
            <svg className="fabric-flow" viewBox="0 0 100 20">
                <path d="M0,10 C20,0 80,20 100,10" fill="none" stroke="#C5A47E" />
            </svg>
            <h1>Digital Atelier</h1>
            </div>

            {cartItems.map((item) => (
            <article 
                key={item.id}
                className="art-item"
                onMouseEnter={() => animateFabricFlow(item.id)}
            >
                <div className="item-visual">
                <svg id={`fabric-${item.id}`} className="material-wave" viewBox="0 0 100 100">
                    <path d="M0,50 Q25,100 50,50 Q75,0 100,50" fill="rgba(197,164,126,0.1)" />
                </svg>
                <h2>{item.name}</h2>
                </div>
                
                <div className="item-meta">
                <span className="price-particle">${item.price}</span>
                <div className="material-tag">{item.material}</div>
                <div className="quantity-interface">
                    <button className="minus">−</button>
                    <span className="count">1</span>
                    <button className="plus">+</button>
                </div>
                </div>
            </article>
            ))}

            <div className="quantum-total">
            <svg className="total-wave" viewBox="0 0 200 50">
                <path 
                d="M0,25 C50,0 150,50 200,25" 
                fill="none" 
                stroke="#fff" 
                strokeDasharray="5 2" 
                />
            </svg>
            <div className="total-meta">
                <span>Total</span>
                <h3>$4,840</h3>
            </div>
            </div>

            <button 
            className="neo-checkout"
            onClick={(e) => initiateTransition(() => {}, e)}
            >
            <span>Initiate Alchemy</span>
            <div className="energy-core" />
            </button>
        </div>
        </section>
    );
}