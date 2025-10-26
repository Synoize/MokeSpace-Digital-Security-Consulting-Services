import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // 1. Add scroll event listener
  useEffect(() => {
    // Show button when page is scrolled down
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    // Clean up the listener
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // 2. Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // This provides the smooth scrolling animation
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-8 right-8 z-50 p-3 rounded-full bg-orange-500 text-white shadow-lg
        hover:bg-orange-600 hover:scale-110
        transition-all duration-300 ease-in-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}
      `}
      aria-label="Scroll to top"
      // Disable the button if it's not visible
      disabled={!isVisible} 
    >
      <ArrowUp className="h-6 w-6" />
    </button>
  );
};

export default BackToTopButton;