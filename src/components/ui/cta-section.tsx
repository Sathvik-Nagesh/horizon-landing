"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const CtaSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".cta__heading", {
        scrollTrigger: { trigger: ".cta__heading", start: "top 85%" },
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });

      gsap.from(".cta__sub", {
        scrollTrigger: { trigger: ".cta__sub", start: "top 85%" },
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
      });

      gsap.from(".cta__buttons", {
        scrollTrigger: { trigger: ".cta__buttons", start: "top 90%" },
        y: 40,
        opacity: 0,
        duration: 0.9,
        delay: 0.35,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="cta">
      <div className="cta__glow cta__glow--1" />
      <div className="cta__glow cta__glow--2" />

      {/* Floating 3D-like elements */}
      <div className="floating-shape shape-icosahedron">◈</div>
      <div className="floating-shape shape-orb"></div>
      <div className="floating-shape shape-prism">▲</div>

      <div className="cta__container">
        <h2 className="cta__heading">
          Ready to cross the <span className="text-gradient">horizon</span>?
        </h2>
        <p className="cta__sub">
          Join thousands of visionaries who are already shaping the future.
          <br />
          Your journey starts with a single step.
        </p>

        <div className="cta__buttons">
          <a href="/get-started" className="cta__btn cta__btn--primary">
            Launch Now
            <span className="cta__btn-arrow">→</span>
          </a>
          <a href="#demo" className="cta__btn cta__btn--secondary">
            Watch Demo
          </a>
        </div>
      </div>
    </section>
  );
};
