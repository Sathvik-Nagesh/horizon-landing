"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote:
      "Horizon transformed the way we think about digital experiences. The Three.js implementation is unlike anything we've ever seen.",
    name: "Aria Chen",
    title: "Creative Director, Nebula Studio",
    avatar: "AC",
    gradient: "linear-gradient(135deg, #667eea, #764ba2)",
  },
  {
    quote:
      "The scroll-driven animations created a product that genuinely wows every stakeholder in the room. A true competitive advantage.",
    name: "Marcus Webb",
    title: "VP Product, Stellar Dynamics",
    avatar: "MW",
    gradient: "linear-gradient(135deg, #f093fb, #f5576c)",
  },
  {
    quote:
      "We shipped in half the time with twice the polish. Horizon's design system is the gold standard for modern web.",
    name: "Zara Patel",
    title: "Lead Engineer, Cosmos Labs",
    avatar: "ZP",
    gradient: "linear-gradient(135deg, #4facfe, #00f2fe)",
  },
];

export const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".testimonials__heading", {
        scrollTrigger: {
          trigger: ".testimonials__heading",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });

      gsap.from(".testimonial-card", {
        scrollTrigger: {
          trigger: ".testimonials__grid",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.18,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="testimonials">
      <div className="testimonials__container">
        <p className="features__label">TESTIMONIALS</p>
        <h2 className="testimonials__heading features__heading">
          Trusted by{" "}
          <span className="text-gradient">visionaries</span>
        </h2>

        <div className="testimonials__grid">
          {testimonials.map((t) => (
            <div key={t.name} className="testimonial-card">
              <div className="testimonial-card__quote">
                <span className="testimonial-card__mark">&ldquo;</span>
                {t.quote}
              </div>
              <div className="testimonial-card__author">
                <div
                  className="testimonial-card__avatar"
                  style={{ background: t.gradient }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="testimonial-card__name">{t.name}</div>
                  <div className="testimonial-card__title">{t.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
