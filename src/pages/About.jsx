import React from 'react';
import PageTransition from '../components/PageTransition';
import Footer from '../components/Footer';

const About = () => {
  const gtaTimeline = [
    {
      year: '1997',
      title: 'Grand Theft Auto',
      description: 'The original game that started it all. A top-down action-adventure game set in three fictional cities.',
      image: './gta1.jpg',
      details: 'Developed by DMA Design (now Rockstar North), the original GTA introduced the controversial open-world gameplay that would become the series\' hallmark. Players could freely roam three cities: Liberty City, San Andreas, and Vice City, completing missions or causing chaos.'
    },
    {
      year: '1999',
      title: 'Grand Theft Auto 2',
      description: 'Expanded the open-world concept with improved graphics and gameplay mechanics.',
      image: './gta2.jpg',
      details: 'Set in a futuristic "Anywhere City," GTA 2 introduced gang reputation systems and more complex mission structures. The game featured improved graphics and AI, allowing for more dynamic interactions with the city\'s inhabitants.'
    },
    {
      year: '2001',
      title: 'Grand Theft Auto III',
      description: 'Revolutionary 3D open-world gameplay that changed gaming forever. Set in Liberty City.',
      image: './gta3.jpg',
      details: 'A groundbreaking leap to 3D graphics, GTA III revolutionized open-world gaming. The game introduced a fully 3D environment, voice acting, and a more immersive narrative. It became one of the most influential games of all time, setting new standards for open-world design.'
    },
    {
      year: '2002',
      title: 'Grand Theft Auto: Vice City',
      description: 'Set in the 1980s, featuring a vibrant Miami-inspired world and an iconic soundtrack.',
      image: './vicecity.jpg',
      details: 'Inspired by 1980s Miami, Vice City featured a vibrant color palette, period-appropriate vehicles, and an iconic soundtrack. The game introduced property ownership, more detailed character customization, and a stronger emphasis on storytelling.'
    },
    {
      year: '2004',
      title: 'Grand Theft Auto: San Andreas',
      description: 'Massive open world spanning three cities, featuring RPG elements and extensive customization.',
      image: 'https://cdn2.unrealengine.com/egs-grandtheftautothetrilogythedefinitiveedition-rockstargames-g1a-00-1920x1080-4d9d45f4377f.jpg?resize=1&w=1920&h=1080&quality=medium',
      details: 'The largest GTA game of its time, San Andreas featured three major cities, countryside, and desert areas. It introduced RPG elements like character stats, relationships, and extensive customization options. The game\'s scope and ambition set new standards for open-world games.'
    },
    {
      year: '2008',
      title: 'Grand Theft Auto IV',
      description: 'A more serious and realistic take on the series, with improved physics and storytelling.',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/12210/capsule_616x353.jpg?t=1721061564',
      details: 'A darker, more realistic take on the series, GTA IV featured improved physics, more realistic character animations, and a more serious narrative. The game introduced a new game engine (RAGE) and Euphoria physics, making the world feel more alive and responsive.'
    },
    {
      year: '2009',
      title: 'Grand Theft Auto: Episodes from Liberty City',
      description: 'Two major expansions that added new stories and gameplay features.',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/12220/header.jpg?t=1618853641',
      details: 'Comprising "The Lost and Damned" and "The Ballad of Gay Tony," these expansions added new protagonists, weapons, vehicles, and multiplayer modes. They expanded the Liberty City experience with fresh perspectives and gameplay mechanics.'
    },
    {
      year: '2013',
      title: 'Grand Theft Auto V',
      description: 'The most successful entertainment product ever, featuring three playable characters and a massive open world.',
      image: 'https://cdn1.epicgames.com/offer/b0cd075465c44f87be3b505ac04a2e46/EGS_GrandTheftAutoVEnhanced_RockstarNorth_S1_2560x1440-906d8ae76a91aafc60b1a54c23fab496',
      details: 'GTA V introduced three playable protagonists, a massive open world, and unprecedented attention to detail. The game\'s online component, GTA Online, became a phenomenon in its own right, continuously updated with new content and features.'
    },
    {
      year: '2025',
      title: 'Grand Theft Auto VI',
      description: 'The highly anticipated next installment, promising to push the boundaries of open-world gaming.',
      image: 'https://www.hollywoodreporter.com/wp-content/uploads/2025/05/Jason_and_Lucia_02_With_Logos_landscape.jpg?crop=0px%2C8px%2C3840px%2C2148px&resize=2000%2C1126',
      details: 'Set to feature the series\' first female protagonist and return to Vice City, GTA VI is expected to push the boundaries of open-world gaming with unprecedented detail, advanced AI, and revolutionary gameplay mechanics. The game is being developed using the latest RAGE engine technology.'
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-black text-white">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-8">About GTA</h1>
          <div className="prose prose-invert max-w-none">
            <div className="space-y-8">
              <div className="bg-black/40 backdrop-blur-md p-6 rounded-lg border border-white/10">
                <h2 className="text-2xl font-bold mb-4">The Legacy</h2>
                <p className="text-lg font-[Helvetica_Now_Display] leading-relaxed mb-4">
                  Grand Theft Auto (GTA) is one of the most influential and successful video game franchises in history. 
                  Since its inception in 1997, the series has redefined open-world gaming, pushing the boundaries of 
                  storytelling, gameplay, and technical innovation.
                </p>
                <p className="text-lg font-[Helvetica_Now_Display] leading-relaxed">
                  With over 400 million copies sold worldwide, the franchise has become a cultural phenomenon, 
                  influencing not just gaming but also popular culture, music, and entertainment. Each installment 
                  has pushed the boundaries of what's possible in interactive entertainment.
                </p>
              </div>

              <div className="bg-black/40 backdrop-blur-md p-6 rounded-lg border border-white/10">
                <h2 className="text-2xl font-bold mb-4">The World</h2>
                <p className="text-lg font-[Helvetica_Now_Display] leading-relaxed mb-4">
                  From the neon-lit streets of Vice City to the sprawling metropolis of Los Santos, each GTA game 
                  presents a meticulously crafted world filled with endless possibilities. These living, breathing 
                  cities serve as playgrounds for players to explore, interact with, and shape their own stories.
                </p>
                <p className="text-lg font-[Helvetica_Now_Display] leading-relaxed">
                  The attention to detail in these virtual worlds is staggering - from the changing weather systems 
                  and day-night cycles to the thousands of unique NPCs going about their daily lives. Each city 
                  feels alive and responsive, creating an immersive experience that few other games can match.
                </p>
              </div>

              <div className="bg-black/40 backdrop-blur-md p-6 rounded-lg border border-white/10">
                <h2 className="text-2xl font-bold mb-4">Innovation & Impact</h2>
                <p className="text-lg font-[Helvetica_Now_Display] leading-relaxed mb-4">
                  GTA has consistently pushed the boundaries of what's possible in gaming. From revolutionary 
                  open-world design to groundbreaking storytelling and social commentary, the series has 
                  influenced countless other games and helped shape the industry as we know it today.
                </p>
                <p className="text-lg font-[Helvetica_Now_Display] leading-relaxed">
                  The franchise has pioneered numerous gaming innovations, including advanced AI systems, 
                  dynamic mission structures, and seamless multiplayer integration. Its impact on game design 
                  and storytelling continues to influence developers worldwide, setting new standards for 
                  interactive entertainment.
                </p>
              </div>

              <div className="bg-black/40 backdrop-blur-md p-6 rounded-lg border border-white/10">
                <h2 className="text-2xl font-bold mb-4">The Timeline</h2>
                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-white/20"></div>
                  
                  {/* Timeline items */}
                  <div className="space-y-12">
                    {gtaTimeline.map((item, index) => (
                      <div key={index} className="relative pl-12">
                        {/* Timeline dot */}
                        <div className="absolute left-0 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                          <div className="w-4 h-4 rounded-full bg-white"></div>
                        </div>
                        
                        {/* Content */}
                        <div className="bg-black/40 backdrop-blur-md p-6 rounded-lg border border-white/10">
                          <div className="text-yellow-400 font-bold mb-2">{item.year}</div>
                          <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                            <div>
                              <p className="text-lg font-[Helvetica_Now_Display] leading-relaxed mb-4">
                                {item.description}
                              </p>
                              <p className="text-lg font-[Helvetica_Now_Display] leading-relaxed">
                                {item.details}
                              </p>
                            </div>
                            <div className="relative h-64 rounded-lg overflow-hidden">
                              <img 
                                src={item.image} 
                                alt={item.title}
                                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-black/40 backdrop-blur-md p-6 rounded-lg border border-white/10">
                <h2 className="text-2xl font-bold mb-4">The Future</h2>
                <p className="text-lg font-[Helvetica_Now_Display] leading-relaxed mb-4">
                  With each new installment, Rockstar Games continues to raise the bar for interactive 
                  entertainment. The upcoming GTA VI promises to deliver an even more immersive and 
                  groundbreaking experience, building upon the rich legacy of the series while 
                  introducing new innovations and possibilities.
                </p>
                <p className="text-lg font-[Helvetica_Now_Display] leading-relaxed">
                  As technology advances, so too does the potential for creating even more detailed and 
                  immersive worlds. The future of GTA promises to push the boundaries of what's possible 
                  in gaming, continuing the series' tradition of innovation and excellence in interactive 
                  entertainment.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default About; 