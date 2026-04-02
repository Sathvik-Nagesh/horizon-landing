"use client";

import React from "react";

type FooterCol = { heading: string; links: string[]; hrefs?: string[] };

const footerLinks = [
  {
    heading: "Product",
    links: ["Features", "Pricing", "Integrations", "Changelog"],
  },
  {
    heading: "Company",
    links: ["About", "Careers", "Blog", "Press"],
  },
  {
    heading: "Resources",
    links: ["Documentation", "Community", "Support", "Status"],
  },
  {
    heading: "Legal",
    links: ["Privacy", "Terms", "Security", "Cookies"],
    hrefs: ["/privacy", "/terms", "/security", "/cookies"],
  },
];

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__brand">
            <span className="footer__logo">
              <span className="footer__logo-icon">◈</span> HORIZON
            </span>
            <p className="footer__tagline">
              Where vision meets reality, we shape the future of tomorrow.
            </p>
            <div className="footer__socials">
              {["𝕏", "◉", "▶", "◆"].map((icon, i) => (
                <a key={i} href="#" className="footer__social" aria-label="Social">
                  {icon}
                </a>
              ))}
            </div>
          </div>

          <div className="footer__links-grid">
            {(footerLinks as FooterCol[]).map((col) => (
              <div key={col.heading} className="footer__link-col">
                <h4 className="footer__link-heading">{col.heading}</h4>
                {col.links.map((link, li) => (
                  <a
                    key={link}
                    href={col.hrefs?.[li] ?? "#"}
                    className="footer__link"
                  >
                    {link}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="footer__divider" />

        <div className="footer__bottom">
          <p className="footer__copy">
            &copy; {new Date().getFullYear()} Sathvik. All rights reserved.
          </p>
          <p className="footer__built">
            Crafted with ✦ by Sathvik Nagesh
          </p>
        </div>
      </div>
    </footer>
  );
};
