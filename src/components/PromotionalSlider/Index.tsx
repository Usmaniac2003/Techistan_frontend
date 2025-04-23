"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';

const PromotionalSlider = ({ ImageList }: { ImageList: string[] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-rotate slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % ImageList.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [ImageList.length]);

  return (
    <div className="relative h-96 w-full overflow-hidden rounded-xl shadow-lg">
      {/* Slides Container */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {ImageList.map((imgSrc, index) => (
          <div 
            key={index}
            className="relative h-96 w-full flex-shrink-0"
          >
            <Image
              src={imgSrc}
              alt={`Promotion ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 75vw"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-2">
        {ImageList.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default PromotionalSlider;