import React from 'react';
import PageTransition from '../components/PageTransition';
import Footer from '../components/Footer';

const About = () => {
  return (
    <PageTransition>
      <div className="min-h-screen overflow-visible bg-black text-white flex flex-col">
        <div className="container mx-auto px-4 py-16 flex-grow">
          <h1 className="text-4xl font-bold mb-8">About GTA</h1>
          <div className="prose prose-invert max-w-none">
            <div className="space-y-8">
              <div className="bg-black/40 backdrop-blur-md p-6 rounded-lg border border-white/10">
                <h2 className="text-2xl font-bold mb-4">The Legacy</h2>
                <p className="text-lg font-[Helvetica_Now_Display] leading-relaxed">
                  Grand Theft Auto (GTA) is one of the most influential and successful video game franchises in history. 
                  Since its inception in 1997, the series has redefined open-world gaming, pushing the boundaries of 
                  storytelling, gameplay, and technical innovation.
                </p>
              </div>

              <div className="bg-black/40 backdrop-blur-md p-6 rounded-lg border border-white/10">
                <h2 className="text-2xl font-bold mb-4">The World</h2>
                <p className="text-lg font-[Helvetica_Now_Display] leading-relaxed">
                  From the neon-lit streets of Vice City to the sprawling metropolis of Los Santos, each GTA game 
                  presents a meticulously crafted world filled with endless possibilities. These living, breathing 
                  cities serve as playgrounds for players to explore, interact with, and shape their own stories.
                </p>
              </div>

              <div className="bg-black/40 backdrop-blur-md p-6 rounded-lg border border-white/10">
                <h2 className="text-2xl font-bold mb-4">Innovation & Impact</h2>
                <p className="text-lg font-[Helvetica_Now_Display] leading-relaxed">
                  GTA has consistently pushed the boundaries of what's possible in gaming. From revolutionary 
                  open-world design to groundbreaking storytelling and social commentary, the series has 
                  influenced countless other games and helped shape the industry as we know it today.
                </p>
              </div>

              <div className="bg-black/40 backdrop-blur-md p-6 rounded-lg border border-white/10">
                <h2 className="text-2xl font-bold mb-4">The Future</h2>
                <p className="text-lg font-[Helvetica_Now_Display] leading-relaxed">
                  With each new installment, Rockstar Games continues to raise the bar for interactive 
                  entertainment. The upcoming GTA VI promises to deliver an even more immersive and 
                  groundbreaking experience, building upon the rich legacy of the series while 
                  introducing new innovations and possibilities.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </PageTransition>
  );
};

export default About; 