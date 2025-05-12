import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useLocation } from 'react-router-dom';

const PageTransition = ({ children }) => {
  const pageRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial state
      gsap.set(pageRef.current, {
        opacity: 0,
        y: 20
      });

      // Animate in
      gsap.to(pageRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power3.out',
        clearProps: 'all' // Clear transforms after animation
      });
    }, pageRef);

    return () => ctx.revert();
  }, [location.pathname]);

  return (
    <div ref={pageRef} className="min-h-screen w-full overflow-x-hidden">
      {children}
    </div>
  );
};

export default PageTransition;