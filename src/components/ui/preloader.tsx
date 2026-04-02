"use client";

import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";

export const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const loaderRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Lock scroll
    document.body.style.overflow = "hidden";

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = "auto";
        if (loaderRef.current) {
          loaderRef.current.style.display = "none";
        }
      }
    });

    // Fake loading counter
    const counterObj = { value: 0 };
    tl.to(counterObj, {
      value: 100,
      duration: 2.5,
      ease: "power2.inOut",
      onUpdate: () => setProgress(Math.floor(counterObj.value)),
    });

    // Dramatic split / exit out
    tl.to(textRef.current, {
      scale: 1.1,
      opacity: 0,
      duration: 0.8,
      ease: "power3.inOut"
    }, "+=0.2");

    tl.to(bgRef.current, {
      yPercent: -100,
      duration: 1.2,
      ease: "power4.inOut"
    }, "-=0.4");

    return () => {
      document.body.style.overflow = "auto";
      tl.kill();
    };
  }, []);

  return (
    <div 
      ref={loaderRef} 
      className="fixed inset-0 z-[999999] flex flex-col items-center justify-center font-syne select-none"
    >
      {/* Background that will slide up */}
      <div ref={bgRef} className="absolute inset-0 bg-black" />
      
      {/* Text and Counter */}
      <div ref={textRef} className="relative z-10 flex flex-col items-center gap-6">
        <div className="flex items-center gap-4 text-white">
          <span className="text-3xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">◈</span>
          <span className="text-4xl tracking-[0.3em] font-medium text-white/90">HORIZON</span>
        </div>
        
        <div className="flex items-end gap-2 text-white/60">
          <div className="text-8xl tabular-nums tracking-tighter mix-blend-difference font-bold text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.8)" }}>
            {String(progress).padStart(3, "0")}
          </div>
          <span className="text-2xl mb-2">%</span>
        </div>
        
        <div className="h-[1px] w-48 bg-white/10 relative overflow-hidden mt-4">
          <div 
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <div className="text-[10px] tracking-[0.4em] text-white/40 uppercase mt-2 blink-fast">
          Initializing Spatial Vectors
        </div>
      </div>

      <style jsx>{`
        .blink-fast {
          animation: blink 1s linear infinite;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </div>
  );
};
