import React, { useState } from 'react';
import PageTransition from '../components/PageTransition';
import Footer from '../components/Footer';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { id: 1, src: './gallery1.png', title: 'Los Santos' },
    { id: 2, src: './gallery.png', title: 'Beach' },
    { id: 3, src: './gallery3.png', title: 'Liberty City' },
    { id: 4, src: './gallery2.png', title: 'Swiming Pool' },
    { id: 5, src: './gallery5.jpg', title: 'Cruise Ship' },
    { id: 6, src: './gallery4.jpg', title: 'Action' },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-black text-white">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-8">Gallery</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-lg cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <div className="aspect-w-16 aspect-h-9 bg-black/40">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-xl font-bold font-[Helvetica_Now_Display]">{image.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full h-auto rounded-lg"
            />
            <button
              className="absolute top-4 right-4 text-white text-2xl hover:text-yellow-500 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <h3 className="text-2xl font-bold mt-4 text-center font-[Helvetica_Now_Display]">{selectedImage.title}</h3>
          </div>
        </div>
      )}
    </PageTransition>
  );
};

export default Gallery; 