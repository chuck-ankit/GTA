import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from './Footer';

gsap.registerPlugin(ScrollTrigger);

const Content = () => {
  const contentRef = useRef(null);
  const statsRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate content sections
      gsap.from('.content-section', {
        scrollTrigger: {
          trigger: '.content-section',
          start: 'top center+=100',
          end: 'bottom center',
          toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
      });

      // Animate stats
      const stats = statsRef.current.children;
      gsap.from(stats, {
        scrollTrigger: {
          trigger: statsRef.current,
          start: 'top center+=100',
          toggleActions: 'play none none reverse'
        },
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
      });

    }, contentRef);

    return () => ctx.revert();
  }, [location.pathname]);

  return (
    <div ref={contentRef} className="w-full min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="content-section grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">Experience the Next Generation of Gaming</h2>
            <p className="text-lg font-[Helvetica_Now_Display] leading-relaxed text-gray-300">
              Step into a world where boundaries are pushed and possibilities are endless. 
              Our latest technology brings virtual worlds to life with unprecedented detail and immersion.
            </p>
            <button className="px-8 py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors">
              Learn More
            </button>
          </div>
          <div className="relative h-[400px] md:h-[500px]">
            <img 
              src="./ps5.png" 
              alt="Next Gen Gaming" 
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
          <div className="bg-black/40 backdrop-blur-md p-6 rounded-lg border border-white/10 text-center">
            <h3 className="text-4xl font-bold mb-2">100M+</h3>
            <p className="font-[Helvetica_Now_Display] text-gray-300">Players Worldwide</p>
          </div>
          <div className="bg-black/40 backdrop-blur-md p-6 rounded-lg border border-white/10 text-center">
            <h3 className="text-4xl font-bold mb-2">95%</h3>
            <p className="font-[Helvetica_Now_Display] text-gray-300">Positive Reviews</p>
          </div>
          <div className="bg-black/40 backdrop-blur-md p-6 rounded-lg border border-white/10 text-center">
            <h3 className="text-4xl font-bold mb-2">500+</h3>
            <p className="font-[Helvetica_Now_Display] text-gray-300">Awards Won</p>
          </div>
          <div className="bg-black/40 backdrop-blur-md p-6 rounded-lg border border-white/10 text-center">
            <h3 className="text-4xl font-bold mb-2">24/7</h3>
            <p className="font-[Helvetica_Now_Display] text-gray-300">Support Available</p>
          </div>
        </div>

        <div className="content-section grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-black/40 backdrop-blur-md p-8 rounded-lg border border-white/10 transform hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4">Latest Updates</h3>
            <p className="font-[Helvetica_Now_Display] text-gray-300">
              Stay informed about the newest features, expansions, and improvements coming to your favorite games.
            </p>
          </div>
          <div className="bg-black/40 backdrop-blur-md p-8 rounded-lg border border-white/10 transform hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4">Community</h3>
            <p className="font-[Helvetica_Now_Display] text-gray-300">
              Join millions of players worldwide and share your experiences in our vibrant gaming community.
            </p>
          </div>
          <div className="bg-black/40 backdrop-blur-md p-8 rounded-lg border border-white/10 transform hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4">Support</h3>
            <p className="font-[Helvetica_Now_Display] text-gray-300">
              Get help when you need it with our dedicated support team and comprehensive knowledge base.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Content;