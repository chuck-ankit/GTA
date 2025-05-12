import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import PageTransition from '../components/PageTransition';
import Footer from '../components/Footer';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const galleryRef = useRef(null);

  const images = [
    { id: 1, src: './gallery1.png', title: 'Los Santos', description: 'The sprawling metropolis of Los Santos under a golden sunset' },
    { id: 2, src: './gallery.png', title: 'Beach', description: 'Vespucci Beach alive with activity and vibrant culture' },
    { id: 3, src: './gallery3.png', title: 'Liberty City', description: 'The iconic skyline of Liberty City at night' },
    { id: 4, src: './gallery2.png', title: 'Swimming Pool', description: 'Luxury and relaxation at its finest' },
    { id: 5, src: './gallery5.jpg', title: 'Cruise Ship', description: 'Adventure awaits on the high seas' },
    { id: 6, src: './gallery4.jpg', title: 'Action', description: 'High-octane action and intense moments' },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.gallery-item', {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
      });
    }, galleryRef);

    return () => ctx.revert();
  }, []);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    gsap.to('.lightbox', {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      ease: 'power3.out'
    });
  };

  const handleCloseLightbox = () => {
    gsap.to('.lightbox', {
      opacity: 0,
      scale: 0.95,
      duration: 0.3,
      ease: 'power3.in',
      onComplete: () => setSelectedImage(null)
    });
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-black text-white">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-5xl font-bold mb-12 text-center">Gallery</h1>
          <div ref={galleryRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((image) => (
              <div
                key={image.id}
                className="gallery-item group relative overflow-hidden rounded-lg cursor-pointer transform hover:scale-105 transition-transform duration-300"
                onClick={() => handleImageClick(image)}
              >
                <div className="aspect-w-16 aspect-h-9 bg-black/40">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-2xl font-bold mb-2 font-[Helvetica_Now_Display]">{image.title}</h3>
                    <p className="text-sm text-gray-300 font-[Helvetica_Now_Display]">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>

      {selectedImage && (
        <div
          className="lightbox fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 opacity-0 scale-95"
          onClick={handleCloseLightbox}
        >
          <div className="relative max-w-5xl w-full">
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            <button
              className="absolute top-4 right-4 text-white text-4xl hover:text-yellow-500 transition-colors"
              onClick={handleCloseLightbox}
            >
              ×
            </button>
            <div className="mt-6 text-center">
              <h3 className="text-3xl font-bold mb-2 font-[Helvetica_Now_Display]">{selectedImage.title}</h3>
              <p className="text-gray-300 font-[Helvetica_Now_Display]">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </PageTransition>
  );
};

export default Gallery;