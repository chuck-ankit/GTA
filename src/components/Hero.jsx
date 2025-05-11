import React from 'react';

const Hero = () => {
  return (
    <div className="main relative overflow-hidden w-full h-screen">
      <img src="./sky.png" alt="sky" className="sky scale-[1.1] w-full absolute h-full object-cover" />
      <img className="bg scale-[1.1] w-full absolute h-full object-cover" src="./bg.png" alt="bg" />
      <div className='text absolute top-30 md:top-50 lg:top-80 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col rotate-[-10deg] scale-[1.4] w-full px-4 md:px-0 text-white items-center'>
        <h1 className='text-5xl md:text-7xl lg:text-9xl -ml-10 md:-ml-40'>grand</h1>
        <h1 className='text-5xl md:text-7xl lg:text-9xl ml-0 md:ml-20'>theft</h1>
        <h1 className='text-5xl md:text-7xl lg:text-9xl -ml-10 md:-ml-60'>auto</h1>
      </div>
      <img 
        className="character absolute bottom-0 left-1/2 -translate-x-1/2 md:left-1/2 md:translate-x-[-50%] h-[60vh] md:h-[80vh] w-auto object-contain" 
        src="./woman.png" 
        alt="woman" 
      />
    </div>
  );
};

export default Hero; 