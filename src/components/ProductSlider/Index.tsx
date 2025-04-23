"use client";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useRef, useState, useEffect } from "react";
import Product from "../Product/Index";

export default function ProductList({ products }) {
  const scrollContainer = useRef(null);
  const scrollStep = 304;
  const [showArrows, setShowArrows] = useState(true);

  const checkScroll = () => {
    if (scrollContainer.current) {
      const { scrollWidth, clientWidth } = scrollContainer.current;
      setShowArrows(scrollWidth > clientWidth);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scrollLeft = () => {
    scrollContainer.current?.scrollBy({ left: -scrollStep, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollContainer.current?.scrollBy({ left: scrollStep, behavior: "smooth" });
  };

  return (
    <div className="relative">
      {showArrows && (
        <div className="absolute hidden md:flex justify-between w-full top-1/2 -translate-y-1/2 z-10">
          <button
            onClick={scrollLeft}
            aria-label="Scroll left"
            className="h-12 w-12 bg-white rounded-full shadow-lg hover:bg-gray-100 ml-4"
          >
            <ChevronLeftIcon className="w-6 h-6 mx-auto" />
          </button>
          
          <button
            onClick={scrollRight}
            aria-label="Scroll right"
            className="h-12 w-12 bg-white rounded-full shadow-lg hover:bg-gray-100 mr-4"
          >
            <ChevronRightIcon className="w-6 h-6 mx-auto" />
          </button>
        </div>
      )}

      {/* Scroll container with hidden scrollbar */}
      <div
        ref={scrollContainer}
        className="flex gap-4 overflow-x-auto overflow-y-hidden px-4 pb-6 snap-x snap-mandatory scrollbar-none"
        style={{
          scrollbarWidth: 'none', // Firefox
          msOverflowStyle: 'none', // IE/Edge
        }}
      >
        {products.map((product, index) => (
          <div 
            key={index} 
            className="flex-shrink-0 w-72 group snap-start"
          >
            <Product
              ProductImage={product.ProductImage}
              Title={product.Title}
              Discount={product.Discount}
              Price={product.Price}
              colors={product.colors}
            />
          </div>
        ))}
      </div>
    </div>
  );
}