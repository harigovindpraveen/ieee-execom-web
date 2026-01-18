
import React, { useEffect, useRef } from 'react';
import Countdown from './Countdown';

const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current?.play().catch(error => console.error("Video play failed:", error));
        } else {
          videoRef.current?.pause();
        }
      },
      {
        threshold: 0.5, // Start playing when 50% of the video is visible
      }
    );

    const currentVideo = videoRef.current;
    if (currentVideo) {
      observer.observe(currentVideo);
    }

    return () => {
      if (currentVideo) {
        observer.unobserve(currentVideo);
      }
    };
  }, []);

  return (
    <div className="pt-48 md:pt-40 bg-white text-black">
      <Countdown />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-20">
        {/* Left side: Video Reel */}
        <div className="flex flex-col items-center gap-4 flex-shrink-0">
          <div className="w-[270px] h-[480px] bg-gray-900 rounded-2xl overflow-hidden shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-300 ease-in-out">
            <video 
              ref={videoRef}
              src="/assets/video.mp4" 
              className="w-full h-full object-cover"
              loop
              muted
              playsInline // Essential for autoplay on mobile browsers
              aria-label="Highlight reel of zerone 6.0"
            />
          </div>
          <p className="text-sm text-gray-600 font-semibold tracking-wider">zerone 6.0 - Highlights</p>
        </div>

        {/* Right side: About Section */}
        <div className="md:w-1/2 max-w-lg text-center md:text-left transition-transform duration-300 ease-in-out hover:scale-105">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">About Zerone</h2>
          <p className="text-base md:text-lg leading-relaxed text-gray-700">
            Designed as the ultimate ice-breaker, ZERONE is a single/multi day-long, multi-round competitive festival
            aimed at identifying diverse talents among the new batch. The event is structured as team-based
            championships where groups accumulated points across distinct rounds.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
