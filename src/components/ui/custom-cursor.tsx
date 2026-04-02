"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    document.body.style.cursor = "none";

    const moveCursor = (e: MouseEvent) => {
      if (dotRef.current) {
        gsap.to(dotRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0,
        });
      }
      
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
      
      const isText = target.closest("h1, h2, h3, p, span.text-gradient");
      const isLink = target.closest("a, button, .feature-card");
      const cursorData = target.closest("[data-cursor]")?.getAttribute("data-cursor");

      if (cursorData === "drag") {
        gsap.to(cursorRef.current, {
          scale: 2,
          opacity: 1,
          duration: 0.3,
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(4px)",
          border: "1px solid rgba(255, 255, 255, 0.5)",
          filter: "none",
          mixBlendMode: "normal",
        });
        if (textRef.current) textRef.current.innerText = "DRAG";
        gsap.to(textRef.current, { opacity: 1, scale: 0.5, duration: 0.3 });
        gsap.to(dotRef.current, { scale: 0, duration: 0.2 });
      } 
      else if (isLink) {
        gsap.to(cursorRef.current, {
          scale: 2.5,
          opacity: 0.15,
          duration: 0.3,
          background: "linear-gradient(135deg, #a78bfa, #f093fb)",
          border: "none",
          filter: "blur(4px)",
          mixBlendMode: "screen",
        });
        if (textRef.current) {
          textRef.current.innerText = "";
          gsap.to(textRef.current, { opacity: 0, duration: 0.2 });
        }
        gsap.to(dotRef.current, { scale: 0, duration: 0.2 });
      } 
      else if (isText) {
        gsap.to(cursorRef.current, {
          scale: 3,
          opacity: 1,
          duration: 0.3,
          background: "#fff",
          border: "none",
          filter: "none",
          mixBlendMode: "difference",
        });
        if (textRef.current) {
          textRef.current.innerText = "";
          gsap.to(textRef.current, { opacity: 0, duration: 0.2 });
        }
        gsap.to(dotRef.current, { scale: 0, duration: 0.2 });
      } 
      else {
        gsap.to(cursorRef.current, {
          scale: 1,
          opacity: 0.4,
          duration: 0.3,
          background: "linear-gradient(135deg, #667eea, #764ba2)",
          border: "none",
          filter: "blur(4px)",
          mixBlendMode: "screen",
        });
        if (textRef.current) {
          textRef.current.innerText = "";
          gsap.to(textRef.current, { opacity: 0, duration: 0.2 });
        }
        gsap.to(dotRef.current, { scale: 1, duration: 0.2 });
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
        className="custom-cursor-glow flex items-center justify-center font-syne font-bold tracking-widest text-white"
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
          transition: "border 0.3s ease",
        }}
      >
        <span ref={textRef} style={{ opacity: 0 }} />
      </div>
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
