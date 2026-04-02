"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Globe,
  Sparkles,
  Zap,
  BarChart3,
  Shield,
  Layers,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    Icon: Globe,
    title: "Immersive Experiences",
    description:
      "Crafting digital worlds that captivate the senses and push the boundaries of what's possible on the web.",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    glow: "rgba(102,126,234,0.15)",
  },
  {
    Icon: Sparkles,
    title: "Intelligent Design",
    description:
      "Every pixel serves a purpose. Our AI-driven design system adapts and evolves with your audience.",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    glow: "rgba(240,147,251,0.15)",
  },
  {
    Icon: Layers,
    title: "Infinite Scale",
    description:
      "Architecture built for the cosmos. From startups to galaxies, our platform grows without limits.",
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    glow: "rgba(79,172,254,0.15)",
  },
  {
    Icon: Zap,
    title: "Quantum Speed",
    description:
      "Sub-millisecond rendering. Our edge-first infrastructure delivers experiences faster than light.",
    gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    glow: "rgba(67,233,123,0.15)",
  },
  {
    Icon: BarChart3,
    title: "Neural Analytics",
    description:
      "Deep insights powered by machine learning. Understand every interaction at a molecular level.",
    gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    glow: "rgba(250,112,154,0.15)",
  },
  {
    Icon: Shield,
    title: "Stellar Security",
    description:
      "Enterprise-grade encryption and zero-trust architecture safeguard your digital universe.",
    gradient: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
    glow: "rgba(161,140,209,0.15)",
  },
];

export const FeaturesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".features__label", {
        scrollTrigger: {
          trigger: ".features__label",
          start: "top 88%",
          toggleActions: "play none none reverse",
        },
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".features__heading", {
        scrollTrigger: {
          trigger: ".features__heading",
          start: "top 88%",
          toggleActions: "play none none reverse",
        },
        y: 60,
        opacity: 0,
        duration: 1.1,
        delay: 0.1,
        ease: "power3.out",
      });

      gsap.from(".features__subheading", {
        scrollTrigger: {
          trigger: ".features__subheading",
          start: "top 88%",
          toggleActions: "play none none reverse",
        },
        y: 30,
        opacity: 0,
        duration: 0.9,
        delay: 0.2,
        ease: "power3.out",
      });

      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 92%",
            toggleActions: "play none none reverse",
          },
          y: 50,
          opacity: 0,
          duration: 0.7,
          delay: (i % 3) * 0.12,
          ease: "power3.out",
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="features" ref={sectionRef} className="features">
      <div className="features__container">
        <p className="features__label">CAPABILITIES</p>
        <h2 className="features__heading">
          Built for the <span className="text-gradient">next frontier</span>
        </h2>
        <p className="features__subheading">
          Every tool you need to design, launch, and scale — unified in one
          platform that feels like the future.
        </p>

        <div className="features__grid">
          {features.map((f, i) => (
            <div
              key={f.title}
              ref={(el) => {
                cardsRef.current[i] = el;
              }}
              className="feature-card"
              style={{ "--card-glow": f.glow } as React.CSSProperties}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = ((y - centerY) / centerY) * -8;
                const rotateY = ((x - centerX) / centerX) * 8;
                
                gsap.to(e.currentTarget, {
                  rotateX,
                  rotateY,
                  transformPerspective: 1000,
                  ease: "power2.out",
                  duration: 0.4
                });
              }}
              onMouseLeave={(e) => {
                gsap.to(e.currentTarget, {
                  rotateX: 0,
                  rotateY: 0,
                  ease: "power3.out",
                  duration: 0.6
                });
              }}
            >
              <div
                className="feature-card__icon-wrap"
                style={{ background: f.gradient }}
              >
                <f.Icon size={22} strokeWidth={1.5} color="#fff" />
              </div>
              <h3 className="feature-card__title">{f.title}</h3>
              <p className="feature-card__desc">{f.description}</p>
              
              {/* Rotating beam border mask */}
              <div className="feature-card__border" />

              <div
                className="feature-card__glow"
                style={{ background: f.glow }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
