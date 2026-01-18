
import React from 'react';

const images = [
  '/assets/ss1.png',
  '/assets/ss2.png',
  '/assets/ss3.png',
  '/assets/ss4.png',
  '/assets/ss5.png',
  '/assets/ss6.png',
  '/assets/ss7.png',
  '/assets/ss8.png',
  '/assets/ss9.png',
  '/assets/ss10.png',
  '/assets/ss11.png',
  '/assets/ss12.png',
  '/assets/ss13.png',
  '/assets/ss14.png',
  '/assets/ss15.png',
  '/assets/ss16.png',
];

// Component to render the list of images, to avoid duplicating the map logic
const MarqueeContent: React.FC = () => (
    <>
        {images.map((src, index) => (
            <div key={`marquee-item-${index}`} className="flex-shrink-0 w-80 h-80 rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300 mx-4">
                <img src={src} alt={`Zerone event image ${index + 1}`} className="w-full h-full object-cover" loading="lazy" />
            </div>
        ))}
    </>
);

interface ImageGalleryProps {
  isDarkMode: boolean;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ isDarkMode }) => {
  const fadeColor = isDarkMode ? 'from-black' : 'from-white';

  return (
    <div className="py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end mb-8">
            <h2 className="text-3xl font-bold tracking-tighter inline-block pb-2 border-b-2">
                Zerone at a Glance
            </h2>
        </div>
      </div>
      <div className="relative marquee-container flex items-center">
        {/* Left fade */}
        <div className={`absolute top-0 left-0 h-full w-24 bg-gradient-to-r ${fadeColor} to-transparent z-10 pointer-events-none transition-colors duration-700`}></div>
        
        <div className="flex">
            {/* The first set of images for the animation */}
            <div className="flex-shrink-0 flex items-center animate-marquee">
                <MarqueeContent />
            </div>
            {/* The second, duplicated set of images to create a seamless loop */}
            <div className="flex-shrink-0 flex items-center animate-marquee" aria-hidden="true">
                <MarqueeContent />
            </div>
        </div>
        
        {/* Right fade */}
        <div className={`absolute top-0 right-0 h-full w-24 bg-gradient-to-l ${fadeColor} to-transparent z-10 pointer-events-none transition-colors duration-700`}></div>
      </div>
    </div>
  );
};

export default ImageGallery;
