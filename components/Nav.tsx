"use client";

import { useState } from "react";

const LINKS = [
  { label: "Summary", href: "#summary" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="wrap nav__inner">
        <a href="#top" className="nav__brand">
          A Sai Bharath
          <span className="nav__brandtag">ai-backend</span>
        </a>

        <nav className="nav__links" aria-label="Sections">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="nav__link">
              {l.label}
            </a>
          ))}
          <a href="/resume" className="nav__resume">
            Résumé ↗
          </a>
        </nav>

        <button
          className="nav__burger"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "close" : "menu"}
        </button>
      </div>

      {open && (
        <div className="nav__mobile">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="nav__mlink"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a href="/resume" className="nav__mlink nav__mlink--accent">
            Résumé ↗
          </a>
        </div>
      )}
    </header>
  );
}
