"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const roadmapSteps = [
  {
    phase: "Phase 1 - Q2 2026",
    title: "Quantum Rendering Engine",
    description: "Launch of our proprietary spatial rendering core, enabling 120fps volumetric environments on standard hardware.",
  },
  {
    phase: "Phase 2 - Q3 2026",
    title: "Neural Interaction SDK",
    description: "Opening our API endpoints to developers to integrate eye-tracking and gesture-based UI primitives into web apps.",
  },
  {
    phase: "Phase 3 - Q4 2026",
    title: "The Horizon Network",
    description: "Decentralized architecture connecting individual digital realms into a continuous, seamless metaverse canvas.",
  },
];

export const RoadmapSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Animate the line drawing down
      gsap.from(".roadmap__line-fill", {
        scrollTrigger: {
          trigger: ".roadmap",
          start: "top 50%",
          end: "bottom 80%",
          scrub: 1,
        },
        scaleY: 0,
        transformOrigin: "top center",
        ease: "none",
      });

      // Animate the nodes popping in and highlighting
      gsap.utils.toArray(".roadmap__item").forEach((item: any, i: number) => {
        gsap.fromTo(item.querySelector(".roadmap__node"), {
          borderColor: "rgba(255,255,255,0.1)",
          background: "#000",
          boxShadow: "0 0 0 rgba(102,126,234,0)",
        }, {
          scrollTrigger: {
            trigger: item,
            start: "top 60%",
            toggleActions: "play none none reverse"
          },
          borderColor: "#667eea",
          background: "#a78bfa",
          boxShadow: "0 0 20px rgba(102,126,234,0.6)",
          duration: 0.5,
        });

        // Content fade in
        gsap.from(item.querySelector(".roadmap__content"), {
          scrollTrigger: { trigger: item, start: "top 70%" },
          x: i % 2 === 0 ? 40 : -40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        });
      });

      gsap.from(".roadmap__heading", {
        scrollTrigger: { trigger: ".roadmap__heading", start: "top 85%" },
        y: 40, opacity: 0, duration: 1, ease: "power3.out",
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="roadmap bg-black relative z-20" id="roadmap">
      <div className="roadmap__container pt-32 pb-40 px-6 max-w-[1000px] mx-auto relative z-10">
        <div className="text-center mb-24">
          <p className="features__label">ROADMAP</p>
          <h2 className="features__heading roadmap__heading">
            The path to the <span className="text-gradient">future</span>.
          </h2>
        </div>

        <div className="roadmap__timeline relative">
          {/* Background Track */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2" />
          
          {/* Animated Fill Track */}
          <div className="roadmap__line-fill absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#667eea] to-[#f093fb] -translate-x-1/2" />

          {roadmapSteps.map((step, i) => (
            <div key={i} className={`roadmap__item flex items-center justify-between w-full mb-16 relative ${i % 2 === 0 ? "flex-row-reverse" : ""}`}>
              
              <div className="w-[45%]"></div>

              {/* The glowing dot */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 roadmap__node w-4 h-4 rounded-full border-2 border-white/10 bg-black z-10 transition-colors" />

              <div className={`w-[45%] roadmap__content p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md ${i % 2 === 0 ? "text-right" : "text-left"}`}>
                <p className="text-xs font-syne font-bold text-indigo-400 tracking-widest mb-2 uppercase">{step.phase}</p>
                <h3 className="text-xl font-syne font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-sm font-inter text-white/50 leading-relaxed">{step.description}</p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
