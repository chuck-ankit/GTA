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

      // Create the animation timeline
      const tl = gsap.timeline({
        defaults: { ease: "power2.out" }
      });

      tl.to(scrollRef.current, {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.5
      })
      .to(scrollRef.current, {
        y: 10,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      }, ">");

    }, scrollRef);

    return () => ctx.revert();
  }, [location.pathname]);

  return (
    <div 
      ref={scrollRef}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center z-10"
    >
      <div className="flex flex-col items-center gap-3">
        <span className="text-sm uppercase tracking-wider font-[Helvetica_Now_Display] opacity-80">
          Scroll Down
        </span>
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center hover:border-white transition-colors duration-300">
          <div className="w-1.5 h-2 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </div>
  );
};

export default ScrollDown;