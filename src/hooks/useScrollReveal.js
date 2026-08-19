// src/hooks/useScrollReveal.js
import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    const revealElements = document.querySelectorAll(
      '.scroll-reveal, .scroll-reveal-stagger, .scroll-reveal-flip, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale'
    );
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = parseFloat(entry.target.style.transitionDelay) || 0;
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, delay * 1000);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    });
    
    revealElements.forEach((el) => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);
}