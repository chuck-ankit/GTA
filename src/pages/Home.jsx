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
      // Initial state
      gsap.set(".hero-section", {
        opacity: 0,
        y: 50
      });
      gsap.set(".content-section", {
        opacity: 0,
        y: 100
      });
      gsap.set(".scroll-down", {
        opacity: 0,
        y: 20
      });

      // Create the animation sequence
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
          duration: 1
        }
      });

      tl.to(".hero-section", {
        opacity: 1,
        y: 0,
        duration: 1.5
      })
      .to(".scroll-down", {
        opacity: 1,
        y: 0,
        duration: 0.8
      }, "-=0.5")
      .to(".content-section", {
        opacity: 1,
        y: 0,
        duration: 1.2
      }, "-=0.3");

      // Parallax effect on scroll
      window.addEventListener("scroll", () => {
        const scrolled = window.pageYOffset;
        gsap.to(".hero-section .sky", {
          y: scrolled * 0.5,
          ease: "none"
        });
        gsap.to(".hero-section .bg", {
          y: scrolled * 0.3,
          ease: "none"
        });
        gsap.to(".hero-section .character", {
          y: scrolled * 0.2,
          ease: "none"
        });
      });

      // Mouse move parallax
      const handleMouseMove = (e) => {
        const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
        const yMove = (e.clientY / window.innerHeight - 0.5) * 40;

        gsap.to(".hero-section .text", {
          x: `${xMove * 0.4}%`,
          y: `${yMove * 0.2}%`,
          rotate: xMove * 0.1,
          duration: 0.5,
          ease: "power2.out"
        });

        gsap.to(".hero-section .sky", {
          x: `${xMove * 0.2}%`,
          y: `${yMove * 0.1}%`,
          duration: 0.5,
          ease: "power2.out"
        });

        gsap.to(".hero-section .bg", {
          x: `${xMove * 0.3}%`,
          y: `${yMove * 0.15}%`,
          duration: 0.5,
          ease: "power2.out"
        });

        gsap.to(".hero-section .character", {
          x: `${xMove * 0.1}%`,
          y: `${yMove * 0.05}%`,
          duration: 0.5,
          ease: "power2.out"
        });
      };

      window.addEventListener("mousemove", handleMouseMove);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("scroll", () => {});
      };
    }, homeRef);

    return () => ctx.revert();
  }, [location.pathname]);

  return (
    <div ref={homeRef} className="relative min-h-screen">
      <div className="hero-section">
        <Hero />
      </div>
      <div className="scroll-down">
        <ScrollDown />
      </div>
      <div className="content-section">
        <Content />
      </div>
    </div>
  );
};

export default Home; 