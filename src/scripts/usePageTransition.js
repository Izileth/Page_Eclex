import { useRef } from 'react';
import { gsap } from 'gsap';

export default function usePageTransition() {
    const overlayRef = useRef(document.createElement('div'));

    const initiateTransition = (navigationCallback, event) => {
        const clickX = event.clientX || window.innerWidth/2;
        const clickY = event.clientY || window.innerHeight/2;
        
        document.body.appendChild(overlayRef.current);
        overlayRef.current.className = 'page-transition-overlay';

        // Animação usando clip-path CSS normal
        gsap.fromTo(overlayRef.current,
        {
            clipPath: `circle(0% at ${clickX}px ${clickY}px)`,
            opacity: 0
        },
        {
            clipPath: `circle(200% at ${clickX}px ${clickY}px)`,
            opacity: 1,
            duration: 1.2,
            ease: 'power4.inOut',
            onComplete: () => {
            navigationCallback();
            gsap.to(overlayRef.current, {
                clipPath: `circle(0% at ${clickX}px ${clickY}px)`,
                opacity: 0,
                duration: 1.2,
                delay: 0.3,
                ease: 'power4.inOut',
                onComplete: () => {
                if (document.body.contains(overlayRef.current)) {
                    document.body.removeChild(overlayRef.current);
                }
                }
            });
            }
        }
        );
    };

    return { initiateTransition };
}