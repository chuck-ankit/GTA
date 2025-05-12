import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PageTransition from '../components/PageTransition';
import Footer from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    sectionsRef.current.forEach((section, index) => {
      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
          start: "top center+=100",
          toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: index * 0.2,
        ease: "power3.out"
      });
    });
  }, []);

  return (
    <PageTransition>
      <div className="min-h-screen overflow-visible bg-black text-white flex flex-col">
        <div className="container mx-auto px-4 py-16 flex-grow">
          <h1 className="text-5xl font-bold mb-12 text-center">About GTA</h1>
          <div className="prose prose-invert max-w-none">
            <div className="space-y-12">
              <div 
                ref={el => sectionsRef.current[0] = el}
                className="bg-black/40 backdrop-blur-md p-8 rounded-lg border border-white/10 hover:border-white/30 transition-all duration-300"
              >
                <h2 className="text-3xl font-bold mb-6">The Legacy</h2>
                <p className="text-lg font-[Helvetica_Now_Display] leading-relaxed">
                  Grand Theft Auto (GTA) has revolutionized the gaming industry since 1997. From its humble beginnings 
                  as a top-down action game to becoming one of the most successful entertainment properties of all time, 
                  GTA has consistently pushed boundaries and set new standards for open-world gaming.
                </p>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-black/20 p-4 rounded">
                    <h4 className="text-xl mb-2">Innovation</h4>
                    <p className="font-[Helvetica_Now_Display]">Pioneering open-world gameplay mechanics and storytelling</p>
                  </div>
                  <div className="bg-black/20 p-4 rounded">
                    <h4 className="text-xl mb-2">Impact</h4>
                    <p className="font-[Helvetica_Now_Display]">Influencing countless games and shaping modern gaming</p>
                  </div>
                </div>
              </div>

              <div 
                ref={el => sectionsRef.current[1] = el}
                className="bg-black/40 backdrop-blur-md p-8 rounded-lg border border-white/10 hover:border-white/30 transition-all duration-300"
              >
                <h2 className="text-3xl font-bold mb-6">The World</h2>
                <p className="text-lg font-[Helvetica_Now_Display] leading-relaxed">
                  Each GTA title presents a meticulously crafted world that serves as more than just a backdrop. 
                  These environments are characters in their own right, filled with hidden details, dynamic events, 
                  and countless opportunities for emergent gameplay.
                </p>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4">
                    <h4 className="text-xl mb-2">Liberty City</h4>
                    <p className="font-[Helvetica_Now_Display]">The iconic East Coast metropolis</p>
                  </div>
                  <div className="text-center p-4">
                    <h4 className="text-xl mb-2">Vice City</h4>
                    <p className="font-[Helvetica_Now_Display]">Sun-soaked paradise of the 80s</p>
                  </div>
                  <div className="text-center p-4">
                    <h4 className="text-xl mb-2">Los Santos</h4>
                    <p className="font-[Helvetica_Now_Display]">The sprawling West Coast wonderland</p>
                  </div>
                </div>
              </div>

              <div 
                ref={el => sectionsRef.current[2] = el}
                className="bg-black/40 backdrop-blur-md p-8 rounded-lg border border-white/10 hover:border-white/30 transition-all duration-300"
              >
                <h2 className="text-3xl font-bold mb-6">Innovation & Impact</h2>
                <p className="text-lg font-[Helvetica_Now_Display] leading-relaxed">
                  GTA's influence extends beyond gaming, impacting popular culture and entertainment as a whole. 
                  The series has redefined storytelling in games, tackling complex themes while maintaining its 
                  signature blend of satire and commentary on modern society.
                </p>
                <div className="mt-6 space-y-4">
                  <div className="bg-black/20 p-4 rounded">
                    <h4 className="text-xl mb-2">Technical Achievement</h4>
                    <p className="font-[Helvetica_Now_Display]">Setting new standards for graphics, animation, and AI</p>
                  </div>
                  <div className="bg-black/20 p-4 rounded">
                    <h4 className="text-xl mb-2">Cultural Impact</h4>
                    <p className="font-[Helvetica_Now_Display]">Influencing music, fashion, and popular culture</p>
                  </div>
                </div>
              </div>

              <div 
                ref={el => sectionsRef.current[3] = el}
                className="bg-black/40 backdrop-blur-md p-8 rounded-lg border border-white/10 hover:border-white/30 transition-all duration-300"
              >
                <h2 className="text-3xl font-bold mb-6">The Future</h2>
                <p className="text-lg font-[Helvetica_Now_Display] leading-relaxed">
                  As we look ahead, GTA continues to evolve and innovate. The upcoming GTA VI promises to deliver 
                  an unprecedented level of detail and interactivity, leveraging next-generation technology to 
                  create the most immersive and dynamic open world yet.
                </p>
                <div className="mt-6 bg-black/20 p-6 rounded">
                  <h4 className="text-xl mb-2">What's Next</h4>
                  <ul className="list-disc list-inside space-y-2 font-[Helvetica_Now_Display]">
                    <li>Advanced AI and NPC behavior</li>
                    <li>Revolutionary graphics and physics</li>
                    <li>Enhanced online multiplayer experience</li>
                    <li>Deeper character customization</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default About;