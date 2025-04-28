"use client";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useRef, useState, useEffect } from "react";
import Product from "../Product/Index";
import Button from "../Button/Index";
import { useRouter } from "next/navigation";

export default function ProductGridSlider({ products }) {
  const scrollContainer = useRef(null);
  const [showArrows, setShowArrows] = useState(false);
  
const router = useRouter();
  const ViewAllProducts = () => {
    router.push("/products");
  };
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
    scrollContainer.current?.scrollBy({ 
      left: -scrollContainer.current.offsetWidth, 
      behavior: "smooth" 
    });
  };

  const scrollRight = () => {
    scrollContainer.current?.scrollBy({ 
      left: scrollContainer.current.offsetWidth, 
      behavior: "smooth" 
    });
  };

  return (
    <div className="relative px-4 md:px-6">
      {/* Header */}
     
      {/* Slider Container */}
      <div className="">
        {/* Arrow Controls - Top Right */}
        {showArrows && (
          <div className="flex justify-end my-4 gap-2 md:right-4">
            <button
              onClick={scrollLeft}
              aria-label="Scroll left"
              className="h-10 w-10 rounded-full bg-white p-2 shadow-lg hover:bg-gray-100"
            >
              <ChevronLeftIcon className="h-6 w-6" />
            </button>
            <button
              onClick={scrollRight}
              aria-label="Scroll right"
              className="h-10 w-10 rounded-full bg-white p-2 shadow-lg hover:bg-gray-100"
            >
              <ChevronRightIcon className="h-6 w-6" />
            </button>
          </div>
        )}

        {/* Grid Scroll Container */}
        <div
          ref={scrollContainer}
          className="grid grid-rows-2 grid-flow-col gap-4 overflow-x-auto overflow-y-hidden pb-6 scrollbar-none"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {products.map((product, index) => (
            <div 
              key={index} 
              className="relative w-72 flex-shrink-0 snap-start group"
            >
              <Product
                {...product}
                badge={index === 3 ? "New" : null}
              />
            </div>
          ))}
        </div>
      </div>

      {/* View All Button */}
      <div className="mt-12 text-center">
        <Button title="View All Products" onClick={ViewAllProducts}></Button>
      </div>
    </div>
  );
}