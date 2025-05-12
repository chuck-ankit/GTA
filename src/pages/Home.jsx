import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import Hero from '../components/Hero';
import Content from '../components/Content';
import ScrollDown from '../components/ScrollDown';

const Home = () => {
  const homeRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reset initial state
      gsap.set(homeRef.current, {
        opacity: 0
      });

      // Create the animation
      gsap.to(homeRef.current, {
        opacity: 1,
        duration: 0.5,
        ease: "power2.out"
      });
    }, homeRef);

    return () => ctx.revert();
  }, [location.pathname]);

  return (
    <div ref={homeRef} className="relative min-h-screen">
      <Hero />
      <ScrollDown />
      <Content />
    </div>
  );
};

export default Home; 