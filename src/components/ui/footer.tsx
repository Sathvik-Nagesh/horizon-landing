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
            <div className="footer__socials" style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
              <a href="https://instagram.com/sathvik_nagesh" target="_blank" rel="noreferrer" className="footer__social text-white/50 hover:text-white transition-colors" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="https://github.com/sathvik-nagesh" target="_blank" rel="noreferrer" className="footer__social text-white/50 hover:text-white transition-colors" aria-label="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.15-.38 6.5-1.4 6.5-7.17A5.06 5.06 0 0 0 19 4.5 5.06 5.06 0 0 0 19 2s-1.4-.4-4 1.4a13.4 13.4 0 0 0-7 0C5.4 2 4 2 4 2s0 2.5.5 4.5A5.06 5.06 0 0 0 2 11.83c0 5.77 3.35 6.79 6.5 7.17A4.8 4.8 0 0 0 7.5 22v-4"/><path d="M9 18c-4.5 1.5-5-2.5-7-3"/></svg>
              </a>
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
