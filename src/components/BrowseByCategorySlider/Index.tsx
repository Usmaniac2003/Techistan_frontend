"use client";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { useRef, useState, useEffect } from "react";

export default function BrowseByCategory({ categories }) {
    const router=useRouter();
    const scrollContainer = useRef(null);
  const scrollStep = 200;
  const [showArrows, setShowArrows] = useState(false);

  const checkScroll = () => {
    if (scrollContainer.current) {
      const { scrollWidth, clientWidth } = scrollContainer.current;
      setShowArrows(scrollWidth > clientWidth);
    }
  };
const RedirectToProductsByCategoty=(url)=>{
    const encodedQuery = encodeURIComponent(url);
    router.push(`/productsByCategory?category=${encodedQuery}`);
}

  useEffect(() => {
    
    checkScroll();
    const container = scrollContainer.current;
    container?.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);
    return () => {
      window.removeEventListener("resize", checkScroll);
      container?.removeEventListener("scroll", checkScroll);
    };
  }, [categories]);

  const scrollLeft = () => {
    scrollContainer.current?.scrollBy({
      left: -scrollStep,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollContainer.current?.scrollBy({ left: scrollStep, behavior: "smooth" });
  };

  return (
    <div className="relative py-8">
      {/* Scroll container */}
      <div
        ref={scrollContainer}
        className="flex gap-8 overflow-x-auto overflow-y-hidden px-4 pb-6 scrollbar-none"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {categories.map((category, index) => (
          <div 
            key={index}
            className="group flex flex-col border-1 border-gray-300 items-center justify-center gap-3 flex-shrink-0 snap-start w-32 h-32 min-w-[8rem] min-h-[8rem] p-2 hover:bg-[#DD4444] transition-all duration-300 cursor-pointer bg-white rounded-lg"
            onClick={()=>{RedirectToProductsByCategoty(category.title)}}
>
            <div className="w-16 h-16 flex items-center justify-center group-hover:bg-[#DD4444]/20 transition-colors">
              <category.icon className="w-8 h-8 text-gray-700 group-hover:text-white transition-colors" />
            </div>
            <span className="text-xs font-medium text-center text-gray-700 group-hover:text-white line-clamp-2 px-1 transition-colors">
              {category.title}
            </span>
          </div>
        ))}
      </div>

      {showArrows && (
        <div className="absolute top--2 right-4 hidden md:flex gap-2 z-10">
          <button
            onClick={scrollLeft}
            aria-label="Scroll left"
            className="h-10 w-10 bg-white rounded-full shadow-lg hover:bg-gray-100 flex items-center justify-center"
          >
            <ChevronLeftIcon className="w-5 h-5 text-gray-700" />
          </button>

          <button
            onClick={scrollRight}
            aria-label="Scroll right"
            className="h-10 w-10 bg-white rounded-full shadow-lg hover:bg-gray-100 flex items-center justify-center"
          >
            <ChevronRightIcon className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      )}
    </div>
  );
}