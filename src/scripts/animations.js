import { gsap } from "gsap";
import { CustomEase } from "gsap/all";

// Registre o plugin
gsap.registerPlugin(CustomEase);
CustomEase.create("hop", "0.9, 0, 0.1, 1");

export function initAnimations() {
  const tl = gsap.timeline({
    delay: 0.3,
    defaults: {
      ease: "hop",
    },
  });

  const counts = document.querySelectorAll(".count");

  gsap.set(counts, { opacity: 0 });
  gsap.set(counts[0], { opacity: 1 });

  
  const allDigits = document.querySelectorAll(".digit h1");
  gsap.set(allDigits, { top: "100%" });

  // Animação dos números
  counts.forEach((count, index) => {
    const digits = count.querySelectorAll(".digit h1");

    if (index > 0) {
      tl.to(counts[index-1], { opacity: 0, duration: 0.5 }, index);
      tl.to(count, { opacity: 1, duration: 0.5 }, index);
    }
    
  
    tl.to(digits, {
      top: "0%",
      duration: 1,
      stagger: 0.075
    }, index);


    if (index < counts.length - 1) {
      tl.to(digits, {
        top: "-100%",
        duration: 1,
        stagger: 0.075
      }, index + 0.8);
    }

  });

  // Fade out do spinner
  tl.to(".spinner", {
    opacity: 0,
    duration: 0.3,
  });

  // Correção: usar #word-1 em vez de .word1
  tl.to(
    "#word-1 h1",
    {
      y: "0%",
      duration: 1,
    },
    "<"
  );

  tl.to(
    "#word-2 h1",
    {
      y: "0%",
      duration: 1,
    },
    "<"
  );

  // Animação do divisor
  tl.to(".divider", {
    scaleY: "100%",
    duration: 1,
    onComplete: () => gsap.to(".divider", {opacity: 0, duration: 0.4, delay: 0.3}),
  });

  // Saída dos textos do logotipo introdutório
  tl.to("#word-1 h1", {
    y: "120%", // Ajustado para garantir saída completa
    duration: 1,
    delay: 0.3,
  });

  tl.to(
    "#word-2 h1",
    {
      y: "-120%", // Ajustado para garantir saída completa
      duration: 1,
      delay: 0.3,
    }, 
    "<"
  );

  // Animação dos blocos (overlay)
  tl.to(".block", {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)", // Isso esconde os blocos na parte superior
    duration: 1,
    stagger: 0.1,
    delay: 0.75,
    onStart: () => gsap.to(".hero-img", {scale: 1, duration: 2, ease: "hop"}),
  });

  tl.to(
    ".header .line h1", 
    {
      y: "0%",
      duration: 1.5,
      stagger: 0.2,
    }, 
    "<+0.3" // Inicia um pouco depois da navegação
  );

  tl.to(
    ".header .line p", 
    {
      y: "0%",
      duration: 1.5,
    }, 
    "<+0.2" // Segue após os títulos
  );

  
  // Animação dos elementos do header e navegação
  tl.to(
    ".nav", 
    {
      y: "0%",
      duration: 1.5,
    }, 
    "<"
  );


  // Animação do CTA
  tl.to(
    ".cta", 
    {
      scale: 1,
      duration: 1.5,
      delay: 0.75,
    }, 
    "<"
  );

  // Separando esta animação para melhor controle
  tl.to(
    ".cta-icon", 
    {
      scale: 1,
      duration: 1.5,
      delay: 0.2,
    }, 
    "<"
  );

  tl.to(
    ".cta-label p", 
    {
      y: "0%",
      duration: 1.5,
      delay: 0.5,
    },
    "<"
  );
}