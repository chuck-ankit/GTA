import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from '../components/Hero';
import Content from '../components/Content';
import ScrollDown from '../components/ScrollDown';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const homeRef = useRef(null);
  const location = useLocation();
  const featuresRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial fade in
      gsap.set(homeRef.current, {
        opacity: 0
      });

      gsap.to(homeRef.current, {
        opacity: 1,
        duration: 0.5,
        ease: "power2.out"
      });

      // Animate features section
      const features = featuresRef.current.children;
      gsap.from(features, {
        scrollTrigger: {
          trigger: featuresRef.current,
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none reverse"
        },
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      });
    }, homeRef);

    return () => ctx.revert();
  }, [location.pathname]);

  return (
    <div ref={homeRef} className="relative min-h-screen">
      <Hero />
      <ScrollDown />
      <Content />
      <section className="bg-black/80 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl text-white text-center mb-12">Featured Content</h2>
          <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black/40 backdrop-blur-md p-8 rounded-lg border border-white/10 transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl text-white mb-4">Next-Gen Graphics</h3>
              <p className="text-gray-300 font-[Helvetica_Now_Display]">
                Experience stunning visuals powered by the latest technology, bringing virtual worlds to life like never before.
              </p>
            </div>
            <div className="bg-black/40 backdrop-blur-md p-8 rounded-lg border border-white/10 transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl text-white mb-4">Immersive Story</h3>
              <p className="text-gray-300 font-[Helvetica_Now_Display]">
                Dive into a rich narrative with complex characters and compelling storylines that keep you engaged.
              </p>
            </div>
            <div className="bg-black/40 backdrop-blur-md p-8 rounded-lg border border-white/10 transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl text-white mb-4">Dynamic World</h3>
              <p className="text-gray-300 font-[Helvetica_Now_Display]">
                Explore a living, breathing city that reacts to your choices and evolves with your actions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;