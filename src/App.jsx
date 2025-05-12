import React, { useState, useRef, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { RiHeartFill } from "@remixicon/react";
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

// Import components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ScrollDown from './components/ScrollDown';
import Content from './components/Content';
import Intro from './components/Intro';

// Import pages
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

const App = () => {
  let [showContent, setShowContent] = React.useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const scrollRef = useRef(null);
  const dropdownRef = useRef(null);
  const location = useLocation();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (showContent && scrollRef.current) {
      // Destroy existing scroll instance if it exists
      if (scrollRef.current.scroll && typeof scrollRef.current.scroll.destroy === 'function') {
        scrollRef.current.scroll.destroy();
      }

      const scroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        multiplier: 1,
        class: 'is-revealed',
        lerp: 0.05,
        smartphone: {
          smooth: true,
          multiplier: 1
        },
        tablet: {
          smooth: true,
          multiplier: 1
        },
        scrollFromAnywhere: false,
        reloadOnContextChange: true,
        getDirection: true,
        getSpeed: true,
        scrollbarContainer: false,
        scrollbarClass: 'scrollbar',
        scrollingClass: 'is-scrolling',
        initPosition: { x: 0, y: 0 }
      });

      // Store the scroll instance
      scrollRef.current.scroll = scroll;

      // Update scroll on content change
      scroll.on('load', () => {
        scroll.update();
      });

      return () => {
        if (scroll && typeof scroll.destroy === 'function') {
          scroll.destroy();
        }
      };
    }
  }, [showContent, location.pathname]);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          const svg = document.querySelector(".svg");
          if (svg) {
            svg.remove();
          }
          setShowContent(true);
          this.kill();
        }
      },
    });
  });

  useGSAP(() => {
    if (!showContent) return;

    const main = document.querySelector(".landing .main");
    if (!main) return;

    const handleMouseMove = (e) => {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;

      gsap.to(".main .text", {
        x: `${xMove * 0.4}%`,
        transformOrigin: "center center",
        ease: "power2.out",
        duration: 0.5
      });

      gsap.to(".main .sky", {
        x: xMove,
        transformOrigin: "center center",
        ease: "power2.out",
        scale: 1.1,
        duration: 0.5
      });

      gsap.to(".main .bg", {
        x: xMove * 1.7,
        transformOrigin: "center center",
        ease: "power2.out",
        scale: 1.1,
        duration: 0.5
      });
    };

    main.addEventListener("mousemove", handleMouseMove);

    return () => {
      main.removeEventListener("mousemove", handleMouseMove);
    };
  }, [showContent]);

  useGSAP(() => {
    if (!showContent) return;
    
    // Wait for elements to be in the DOM
    const elements = {
      main: document.querySelector(".main"),
      sky: document.querySelector(".sky"),
      bg: document.querySelector(".bg"),
      character: document.querySelector(".character"),
      text: document.querySelector(".text")
    };

    // Only proceed if all elements exist
    if (!Object.values(elements).every(el => el)) return;

    // Reset initial state
    gsap.set(elements.main, {
      scale: 1.7,
      rotate: -10,
    });
    gsap.set(elements.sky, {
      scale: 1.5,
      rotate: -20,
    });
    gsap.set(elements.bg, {
      scale: 1.8,
      rotate: -3,
    });
    gsap.set(elements.character, {
      scale: 2.5,
      rotate: -20,
      x: "-50%",
      y: "0%"
    });
    gsap.set(elements.text, {
      scale: 1.4,
      rotate: -10,
      x: "-50%",
      y: "0%"
    });

    // Create the animation
    gsap.to(elements.main, {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-1",
      ease: "Expo.easeInOut",
    });
    gsap.to(elements.sky, {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(elements.bg, {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    // Character animation
    gsap.to(elements.character, {
      scale: 1.2,
      rotate: 0,
      x: "-50%",
      y: "0%",
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    // Text animation
    gsap.to(elements.text, {
      scale: 1,
      rotate: 0,
      x: "-50%",
      y: "0%",
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });
    
  }, [showContent]);

  return (
    <>
      <Intro showContent={showContent} setShowContent={setShowContent} />
      {showContent && (
        <div 
          ref={scrollRef} 
          data-scroll-container 
          className="main w-full overflow-x-hidden min-h-screen"
          style={{ height: 'auto' }}
        >
          <Navbar />
          <div className="relative">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      )}
    </>
  );
};

export default App;