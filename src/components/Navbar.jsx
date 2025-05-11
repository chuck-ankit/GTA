import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const dropdownRef = useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = (path) => {
    setIsDropdownOpen(false);
    navigate(path);
  };

  return (
    <div className="navbar flex absolute top-0 left-0 z-10 w-full py-6 md:py-10 px-4 md:px-10">
      <div className='logo flex gap-4 md:gap-7 items-center'>
        <div 
          ref={dropdownRef}
          className='lines flex flex-col gap-1 md:gap-2 cursor-pointer relative'
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <div className='line w-6 md:w-10 h-0.5 md:h-1 bg-white'></div>
          <div className='line w-5 md:w-8 h-0.5 md:h-1 bg-white'></div>
          <div className='line w-3 md:w-5 h-0.5 md:h-1 bg-white'></div>
          
          {/* Dropdown Menu */}
          <div 
            className={`absolute top-full left-0 mt-4 w-48 bg-black/40 backdrop-blur-md rounded-lg shadow-lg transition-all duration-300 transform origin-top ${
              isDropdownOpen ? 'scale-100 opacity-100 pointer-events-auto' : 'scale-95 opacity-0 pointer-events-none'
            }`}
          >
            <div className="py-2">
              <button 
                onClick={() => handleClick('/')}
                className="w-full text-left px-4 py-2 text-white hover:bg-white/20 transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => handleClick('/about')}
                className="w-full text-left px-4 py-2 text-white hover:bg-white/20 transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => handleClick('/gallery')}
                className="w-full text-left px-4 py-2 text-white hover:bg-white/20 transition-colors"
              >
                Gallery
              </button>
              <button 
                onClick={() => handleClick('/contact')}
                className="w-full text-left px-4 py-2 text-white hover:bg-white/20 transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
        <button 
          onClick={() => handleClick('/')}
          className='logo -mt-[6px] leading-none text-xl md:text-3xl text-white font-bold'
        >
          Rockstar
        </button>
      </div>
    </div>
  );
};

export default Navbar; 