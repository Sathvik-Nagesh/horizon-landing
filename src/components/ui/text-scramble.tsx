"use client";

import React, { useEffect, useRef, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*+<>_";

interface TextScrambleProps {
  text: string;
  className?: string;
  triggerOnScroll?: boolean;
}

export const TextScramble: React.FC<TextScrambleProps> = ({ 
  text, 
  className = "", 
  triggerOnScroll = true 
}) => {
  const [displayText, setDisplayText] = useState("");
  const elementRef = useRef<HTMLSpanElement>(null);
  const isScrambling = useRef(false);

  useEffect(() => {
    let frameId: number;
    let iteration = 0;
    const maxIterations = 20;

    const scramble = () => {
      if (iteration >= maxIterations) {
        setDisplayText(text);
        isScrambling.current = false;
        return;
      }

      const scrambled = text
        .split("")
        .map((char, index) => {
          // Keep spaces as spaces
          if (char === " ") return " ";
          
          // Gradually reveal the correct characters
          if (index < (iteration / maxIterations) * text.length) {
            return text[index];
          }

          // Randomize remaining
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
        .join("");

      setDisplayText(scrambled);
      iteration += 1;
      
      // Speed control
      setTimeout(() => {
        frameId = requestAnimationFrame(scramble);
      }, 40);
    };

    const startScramble = () => {
      if (isScrambling.current) return;
      isScrambling.current = true;
      iteration = 0;
      scramble();
    };

    if (triggerOnScroll) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            startScramble();
            observer.disconnect();
          }
        },
        { threshold: 0.5 }
      );

      if (elementRef.current) {
        observer.observe(elementRef.current);
      }
      
      return () => {
        observer.disconnect();
        cancelAnimationFrame(frameId);
      };
    } else {
      startScramble();
      return () => cancelAnimationFrame(frameId);
    }
  }, [text, triggerOnScroll]);

  return (
    <span ref={elementRef} className={className}>
      {displayText || text.replace(/./g, "\u00A0")}
    </span>
  );
};
