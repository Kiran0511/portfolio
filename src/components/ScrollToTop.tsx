
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { gsap } from 'gsap';


const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const buttonRef = useRef(null);
  const arrowRef = useRef(null);
  const trailRef = useRef(null);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    if (!arrowRef.current) return;
    // Rocket launch animation
    const tl = gsap.timeline({
      onComplete: () => {
        // Reset arrow and trail after animation
        gsap.set(arrowRef.current, { y: 0, scale: 1, rotate: 0 });
        gsap.set(trailRef.current, { opacity: 0, y: 0, scaleY: 1 });
      }
    });
    tl.to(arrowRef.current, {
      y: -60,
      scale: 1.3,
      rotate: -20,
      duration: 0.35,
      ease: 'power2.out',
      onStart: () => {
        gsap.set(trailRef.current, { opacity: 1 });
        gsap.to(trailRef.current, {
          opacity: 0.7,
          scaleY: 1.5,
          y: 30,
          duration: 0.25,
          ease: 'power1.out',
        });
      }
    })
    .to(arrowRef.current, {
      y: -120,
      scale: 0.7,
      opacity: 0,
      duration: 0.25,
      ease: 'power1.in',
      onComplete: () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
    // Fade out trail
    tl.to(trailRef.current, {
      opacity: 0,
      scaleY: 0.5,
      duration: 0.3,
      ease: 'power1.in',
    }, '-=0.2');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          ref={buttonRef}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-[#58A6FF] text-white rounded-full shadow-lg hover:bg-[#1F6FEB] transition-colors duration-300 z-50 flex items-center justify-center"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          style={{ overflow: 'visible' }}
        >
          {/* Rocket trail */}
          <span
            ref={trailRef}
            style={{
              position: 'absolute',
              bottom: 6,
              left: '50%',
              width: 6,
              height: 28,
              background: 'linear-gradient(180deg, #fff 0%, #58A6FF 80%, transparent 100%)',
              borderRadius: 8,
              opacity: 0,
              transform: 'translateX(-50%)',
              zIndex: 0,
              pointerEvents: 'none',
            }}
          />
          {/* Arrow rocket */}
          <span ref={arrowRef} style={{ display: 'inline-block', zIndex: 1 }}>
            <ArrowUp size={24} />
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
