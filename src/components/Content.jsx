import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import Footer from './Footer';

const Content = () => {
  const contentRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reset initial state
      gsap.set(contentRef.current, {
        opacity: 0,
        y: 50
      });

      // Create the animation
      gsap.to(contentRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.5
      });
    }, contentRef);

    return () => ctx.revert();
  }, [location.pathname]); // Re-run animation when route changes

  return (
    <div ref={contentRef} className="w-full min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Welcome to Rockstar Games</h2>
            <p className="text-lg font-[Helvetica_Now_Display] leading-relaxed">
              Experience the next level of gaming with our latest releases. 
              Immerse yourself in stunning worlds and unforgettable stories.
            </p>
          </div>
          <div className="relative w-full h-[400px] md:h-[500px]">
            <img 
              src="./imag.png" 
              alt="Game Preview" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-black/40 backdrop-blur-md p-6 rounded-lg border border-white/10">
            <h3 className="text-xl font-bold mb-4">Latest Releases</h3>
            <p className="font-[Helvetica_Now_Display]">
              Discover our newest games and expansions, featuring cutting-edge graphics and immersive gameplay.
            </p>
          </div>
          <div className="bg-black/40 backdrop-blur-md p-6 rounded-lg border border-white/10">
            <h3 className="text-xl font-bold mb-4">Community</h3>
            <p className="font-[Helvetica_Now_Display]">
              Join our vibrant community of players and share your experiences with fellow gamers.
            </p>
          </div>
          <div className="bg-black/40 backdrop-blur-md p-6 rounded-lg border border-white/10">
            <h3 className="text-xl font-bold mb-4">Support</h3>
            <p className="font-[Helvetica_Now_Display]">
              Get help with your games and stay updated with the latest news and updates.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Content; 