"use client";

import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { gsap } from "gsap";

export const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const maxScroll = documentHeight - windowHeight;
      const currentProgress = Math.min((scrollY / maxScroll) * 100, 100);
      
      setProgress(currentProgress);
      setShowScrollTop(scrollY > windowHeight / 2);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Top Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-[9999] pointer-events-none">
        <div 
          className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-100 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Floating Scroll Up Button */}
      <div 
        className={`fixed bottom-8 right-8 z-[9999] transition-all duration-500 rounded-full border border-white/10 overflow-hidden ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
      >
        <button
          onClick={scrollToTop}
          className="flex items-center justify-center w-12 h-12 bg-white/5 hover:bg-white/10 backdrop-blur-md text-white transition-colors"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      </div>
    </>
  );
};
