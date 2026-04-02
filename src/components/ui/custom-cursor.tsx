"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hide default cursor globally on non-touch devices
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    document.body.style.cursor = "none";

    const moveCursor = (e: MouseEvent) => {
      // Small dot follows instantly
      if (dotRef.current) {
        gsap.to(dotRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0,
        });
      }
      
      // Large glow follows with a slight delayed spring effect
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.8,
          ease: "power3.out",
        });
      }
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // If hovering over a link or button, expand the cursor
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest(".feature-card") ||
        target.closest(".menu-icon")
      ) {
        gsap.to(cursorRef.current, {
          scale: 2.5,
          opacity: 0.15,
          duration: 0.3,
          background: "linear-gradient(135deg, #a78bfa, #f093fb)",
        });
        gsap.to(dotRef.current, {
          scale: 0,
          duration: 0.2,
        });
      } else {
        gsap.to(cursorRef.current, {
          scale: 1,
          opacity: 0.4,
          duration: 0.3,
          background: "linear-gradient(135deg, #667eea, #764ba2)",
        });
        gsap.to(dotRef.current, {
          scale: 1,
          duration: 0.2,
        });
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleHover);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleHover);
      document.body.style.cursor = "auto";
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="custom-cursor-glow"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          pointerEvents: "none",
          transform: "translate(-50%, -50%)",
          zIndex: 9999,
          background: "linear-gradient(135deg, #667eea, #764ba2)",
          opacity: 0.4,
          filter: "blur(4px)",
          mixBlendMode: "screen",
        }}
      />
      <div
        ref={dotRef}
        className="custom-cursor-dot"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "6px",
          height: "6px",
          backgroundColor: "#fff",
          borderRadius: "50%",
          pointerEvents: "none",
          transform: "translate(-50%, -50%)",
          zIndex: 10000,
        }}
      />
    </>
  );
};
