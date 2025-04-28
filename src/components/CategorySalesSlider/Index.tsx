import { useEffect, useState } from 'react';
import CategorySalesBanner from '../CategorySale/Index';
import {CategorySalesProps  } from '@/types';



interface SliderProps {
  slides: CategorySalesProps[];
  autoSlideInterval?: number;
}

const CategorySalesSlider = ({
  slides,
  autoSlideInterval = 5000
}: SliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const timer = setInterval(goToNext, autoSlideInterval);
    return () => clearInterval(timer);
  }, [currentSlide]);

  return (
    <div className="relative h-[600px] w-full overflow-hidden">
      {/* Slides Container */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <CategorySalesBanner {...slide} />
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-[#00FF66]' : 'bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/30 p-3 text-black transition-all hover:bg-white/50"
      >
        ←
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/30 p-3 text-black transition-all hover:bg-white/50"
      >
        →
      </button>
    </div>
  );
};

export default CategorySalesSlider;