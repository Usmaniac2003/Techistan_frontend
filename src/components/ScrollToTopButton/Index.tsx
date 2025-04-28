"use client";
import { ArrowUpIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`
          ${isVisible ? 'opacity-100' : 'opacity-0'}
          inline-flex items-center justify-center
          p-3 rounded-full shadow-lg
          bg-white dark:bg-gray-800
          border border-gray-200 dark:border-gray-700
          hover:bg-gray-50 dark:hover:bg-gray-700
          transition-all duration-300
          
        `}
        tabIndex={isVisible ? 0 : -1}
      >
        <ArrowUpIcon className="w-6 h-6 text-gray-700 dark:text-gray-200" />
      </button>
    </div>
  );
};

export default ScrollToTop;