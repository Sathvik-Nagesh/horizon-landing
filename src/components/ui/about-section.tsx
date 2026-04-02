"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 99.9, label: "Uptime", suffix: "%" },
  { value: 50, label: "Avg Response", suffix: "ms" },
  { value: 10, label: "Million Users", suffix: "M+" },
  { value: 1000, label: "Possibilities", suffix: "∞" },
];

const StatCard = ({ stat, index }: { stat: typeof stats[0], index: number }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const valueRef = useRef({ val: 0 });

  useEffect(() => {
    ScrollTrigger.create({
      trigger: `.stat-${index}`,
      start: "top 85%",
      onEnter: () => {
        gsap.to(valueRef.current, {
          val: stat.value,
          duration: 2,
          ease: "power2.out",
          onUpdate: () => setDisplayValue(valueRef.current.val)
        });
      },
      once: true
    });
  }, [index, stat.value]);

  return (
    <div key={stat.label} className={`about__stat stat-${index}`}>
      <span className="about__stat-value">
        {stat.label === "Possibilities" ? "∞" : 
         stat.value % 1 === 0 ? Math.floor(displayValue) : displayValue.toFixed(1)}
        {stat.label !== "Possibilities" && stat.suffix}
      </span>
      <span className="about__stat-label">{stat.label}</span>
    </div>
  );
};

export const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".about__label", {
        scrollTrigger: { trigger: ".about__label", start: "top 85%" },
        y: 30, opacity: 0, duration: 0.8, ease: "power3.out",
      });

      gsap.from(".about__heading", {
        scrollTrigger: { trigger: ".about__heading", start: "top 85%" },
        y: 60, opacity: 0, duration: 1, delay: 0.15, ease: "power3.out",
      });

      gsap.from(".about__body", {
        scrollTrigger: { trigger: ".about__body", start: "top 85%" },
        y: 40, opacity: 0, duration: 1, delay: 0.3, ease: "power3.out",
      });

      gsap.from(".about__divider-line", {
        scrollTrigger: { trigger: ".about__divider-line", start: "top 90%" },
        scaleX: 0,
        duration: 1.5,
        ease: "power3.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="about">
      <div className="about__container">
        <div className="about__top">
          <p className="about__label">ABOUT</p>
          <h2 className="about__heading">
            We don&apos;t just build products.
            <br />
            <span className="text-gradient">We architect futures.</span>
          </h2>
          <p className="about__body">
            Born from the convergence of art and engineering, Horizon is a
            collective of designers, developers, and dreamers who believe
            technology should feel magical. We push pixels past perfection and
            code beyond convention — because the next breakthrough is never
            found inside the comfort zone.
          </p>
        </div>

        <div className="about__divider">
          <div className="about__divider-line" />
        </div>

        <div className="about__stats">
          {stats.map((s, i) => (
            <StatCard key={s.label} stat={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
