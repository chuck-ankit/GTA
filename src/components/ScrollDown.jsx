import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { gsap } from 'gsap';

const ScrollDown = () => {
  const scrollRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reset initial state
      gsap.set(scrollRef.current, {
        y: -20,
        opacity: 0
      });

      // Create the animation
      gsap.to(scrollRef.current, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        delay: 0.5
      });

      // Create the continuous bounce animation
      gsap.to(scrollRef.current, {
        y: 10,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: 1.5
      });
    }, scrollRef);

    return () => ctx.revert();
  }, [location.pathname]); // Re-run animation when route changes

  return (
    <div 
      ref={scrollRef}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center"
    >
      <div className="flex flex-col items-center gap-2">
        <span className="text-sm font-[Helvetica_Now_Display]">Scroll Down</span>
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </div>
  );
};

export default ScrollDown; 