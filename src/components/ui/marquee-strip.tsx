"use client";

import React from "react";

const items = [
  "IMMERSIVE DESIGN",
  "3D EXPERIENCES",
  "QUANTUM SPEED",
  "COSMIC SCALE",
  "NEURAL AI",
  "INFINITE CANVAS",
  "STELLAR UX",
  "BEYOND LIMITS",
];

export const MarqueeStrip = () => {
  const doubled = [...items, ...items];

  return (
    <div className="marquee-wrapper">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="marquee-item">
            {item}
            <span className="marquee-dot">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};
