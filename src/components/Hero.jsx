import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial state
      gsap.set(".text h1", {
        opacity: 0,
        y: 50,
        rotate: -10
      });
      gsap.set(".character", {
        opacity: 0,
        y: 100,
        scale: 0.8
      });
      gsap.set(".sky", {
        scale: 1.2,
        opacity: 0
      });
      gsap.set(".bg", {
        scale: 1.2,
        opacity: 0
      });

      // Create the animation sequence
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
          duration: 1.5
        }
      });

      tl.to(".sky", {
        scale: 1,
        opacity: 1,
        duration: 2
      })
      .to(".bg", {
        scale: 1,
        opacity: 1,
        duration: 2
      }, "-=1.5")
      .to(".text h1", {
        opacity: 1,
        y: 0,
        rotate: -10,
        duration: 1,
        stagger: 0.2
      }, "-=1")
      .to(".character", {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.5
      }, "-=0.5");

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef} className="main relative overflow-hidden w-full h-screen">
      <img 
        src="./sky.png" 
        alt="sky" 
        className="sky scale-[1.1] w-full absolute h-full object-cover" 
      />
      <img 
        className="bg scale-[1.1] w-full absolute h-full object-cover" 
        src="./bg.png" 
        alt="bg" 
      />
      <div className='text absolute top-20 left-1/2 -translate-x-1/2 flex flex-col rotate-[-10deg] scale-[1.4] px-4 text-white items-center'>
        <h1 className='text-7xl md:text-7xl lg:text-9xl -ml-40'>grand</h1>
        <h1 className='text-7xl md:text-7xl lg:text-9xl ml-20'>theft</h1>
        <h1 className='text-7xl md:text-7xl lg:text-9xl -ml-40'>auto</h1>
      </div>
      <img 
        className="character absolute bottom-0 left-1/2 -translate-x-1/2 h-[60vh] md:h-[80vh] w-auto object-contain items-center" 
        src="./woman.png" 
        alt="woman" 
      />
    </div>
  );
};

export default Hero; 