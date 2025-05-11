import React, { useState, useRef, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
    if (showContent) {
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
        }
      });

      return () => {
        scroll.destroy();
      };
    }
  }, [showContent]);

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
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  });

  useGSAP(() => {
    const main = document.querySelector(".landing .main");

    const handleMouseMove = (e) => {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;

      gsap.to(".main .text", {
        x: `${xMove * 0.4}%`,
        transformOrigin: "center center",
        ease: "power2.out",
        duration: 0.5
      });

      gsap.to(".main .sky", {
        x: `${xMove * 0.2}%`,  // Add percentage and proper multiplier
        transformOrigin: "center center",
        ease: "power2.out",
        duration: 0.5
      });

      gsap.to(".main .bg", {
        x: `${xMove * 0.3}%`,  // Add percentage and proper multiplier
        transformOrigin: "center center",
        ease: "power2.out",
        duration: 0.5
      });
    };

    main?.addEventListener("mousemove", handleMouseMove);

    return () => {
      main?.removeEventListener("mousemove", handleMouseMove);
    };
  }, [showContent]);

  useGSAP(() => {
    if (!showContent) return;
    
    // Reset initial state
    gsap.set(".main", {
      scale: 1.4,
      rotate: -10,
    });
    gsap.set(".sky", {
      scale: 1.5,
      rotate: -20,
    });
    gsap.set(".bg", {
      scale: 1.3,
      rotate: -20,
    });
    gsap.set(".character", {
      y: 200,
      opacity: 0,
      scale: 0.8,
      x: "-50%",
      bottom: 0
    });
    gsap.set(".text h1", {
      y: 50,
      opacity: 0,
      rotate: -10
    });

    // Create the animation
    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 1.5,
      ease: "Expo.easeInOut",
      delay: 0.1
    });
    gsap.to(".sky", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".bg", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    // Character animation
    gsap.to(".character", {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 1.5,
      delay: 0.5,
      ease: "power2.out"
    });

    // Text animation with stagger
    gsap.to(".text h1", {
      y: 0,
      opacity: 1,
      rotate: -10,
      duration: 1,
      stagger: 0.2,
      delay: 0.3,
      ease: "power2.out"
    });
    
  }, [showContent]);

  return (
    <Router>
      <Intro showContent={showContent} setShowContent={setShowContent} />
      {showContent && (
        <div ref={scrollRef} data-scroll-container className="main w-full">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      )}
    </Router>
  );
};

export default App;