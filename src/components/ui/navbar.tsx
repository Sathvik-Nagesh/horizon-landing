"use client";

import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/#features" },
  { label: "About", href: "/#about" },
  { label: "Roadmap", href: "/#roadmap" },
];

const MagneticElement = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = el.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);

      gsap.to(el, {
        x: x * 0.35,
        y: y * 0.35,
        duration: 0.6,
        ease: "power2.out"
      });
    };

    const onMouseLeave = () => {
      gsap.to(el, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: "elastic.out(1.1, 0.4)"
      });
    };

    el.addEventListener("mousemove", onMouseMove);
    el.addEventListener("mouseleave", onMouseLeave);
    return () => {
      el.removeEventListener("mousemove", onMouseMove);
      el.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return <div ref={ref} style={{ display: "inline-block" }}>{children}</div>;
};

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner">
        <MagneticElement>
          <a href="/" className="navbar__logo">
            <span className="navbar__logo-icon">◈</span>{" "}
            <span className="navbar__logo-text">HORIZON</span>
          </a>
        </MagneticElement>

        <ul className="navbar__links">
          {navLinks.map((l) => (
            <li key={l.label}>
              <MagneticElement>
                <a href={l.href} className="navbar__link">
                  {l.label}
                </a>
              </MagneticElement>
            </li>
          ))}
        </ul>

        <MagneticElement>
          <a href="/get-started" className="navbar__cta">
            Get Started
          </a>
        </MagneticElement>

        {/* mobile toggle */}
        <button
          className={`navbar__burger ${mobileOpen ? "open" : ""}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* mobile drawer */}
      <div className={`navbar__mobile-drawer ${mobileOpen ? "open" : ""}`}>
        {navLinks.map((l) => (
          <a
            key={l.label}
            href={l.href}
            className="navbar__mobile-link"
            onClick={() => setMobileOpen(false)}
          >
            {l.label}
          </a>
        ))}
        <a
          href="/get-started"
          className="navbar__cta navbar__cta--mobile"
          onClick={() => setMobileOpen(false)}
        >
          Get Started
        </a>
      </div>
    </nav>
  );
};
