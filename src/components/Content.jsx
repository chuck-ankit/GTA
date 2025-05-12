import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import Footer from './Footer';

const Content = () => {
  const contentRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial state
      gsap.set(".content-title", {
        opacity: 0,
        y: 50
      });
      gsap.set(".content-description", {
        opacity: 0,
        y: 30
      });
      gsap.set(".content-image", {
        opacity: 0,
        scale: 0.9
      });
      gsap.set(".content-card", {
        opacity: 0,
        y: 30
      });

      // Create the animation sequence
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
          duration: 1
        }
      });

      tl.to(".content-title", {
        opacity: 1,
        y: 0,
        duration: 1.2
      })
      .to(".content-description", {
        opacity: 1,
        y: 0,
        duration: 1
      }, "-=0.8")
      .to(".content-image", {
        opacity: 1,
        scale: 1,
        duration: 1.2
      }, "-=0.6")
      .to(".content-card", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2
      }, "-=0.4");

      // Scroll trigger animations
      gsap.utils.toArray(".content-card").forEach((card, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            toggleActions: "play none none reverse"
          },
          opacity: 0,
          y: 50,
          duration: 1,
          delay: i * 0.2
        });
      });

    }, contentRef);

    return () => ctx.revert();
  }, [location.pathname]);

  return (
    <div ref={contentRef} className="w-full min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h2 className="content-title text-3xl md:text-4xl font-bold">Welcome to Rockstar Games</h2>
            <p className="content-description text-lg font-[Helvetica_Now_Display] leading-relaxed">
              Experience the next level of gaming with our latest releases. 
              Immerse yourself in stunning worlds and unforgettable stories.
            </p>
          </div>
          <div className="relative w-full h-[400px] md:h-[500px]">
            <img 
              src="./imag.png" 
              alt="Game Preview" 
              className="content-image w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="content-card bg-black/40 backdrop-blur-md p-6 rounded-lg border border-white/10">
            <h3 className="text-xl font-bold mb-4">Latest Releases</h3>
            <p className="font-[Helvetica_Now_Display]">
              Discover our newest games and expansions, featuring cutting-edge graphics and immersive gameplay.
            </p>
          </div>
          <div className="content-card bg-black/40 backdrop-blur-md p-6 rounded-lg border border-white/10">
            <h3 className="text-xl font-bold mb-4">Community</h3>
            <p className="font-[Helvetica_Now_Display]">
              Join our vibrant community of players and share your experiences with fellow gamers.
            </p>
          </div>
          <div className="content-card bg-black/40 backdrop-blur-md p-6 rounded-lg border border-white/10">
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