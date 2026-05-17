"use client";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ["hero", "about", "projects", "skills", "contact"];
      const sy = window.scrollY + 200;
      for (const id of sections) {
        const sec = document.getElementById(id);
        if (
          sec &&
          sy >= sec.offsetTop &&
          sy < sec.offsetTop + sec.offsetHeight
        ) {
          setActiveSection(id);
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  const links = ["about", "projects", "skills", "contact"];

  return (
    <header className={`header${scrolled ? " scrolled" : ""}`} id="header">
      <a
        href="#hero"
        className="logo"
        onClick={(e) => {
          e.preventDefault();
          scrollTo("hero");
        }}
      >
        oshadha preveen<span>.</span>
      </a>

      <nav className={`nav${menuOpen ? " open" : ""}`}>
        {links.map((link) => (
          <a
            key={link}
            href={`#${link}`}
            className={`nav-link${activeSection === link ? " active" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              scrollTo(link);
            }}
          >
            {link}
          </a>
        ))}
        <a
  href="Oshadha_Preveen_Professional_CV.pdf"
  className="nav-link nav-cta"
  target="_blank"
  rel="noopener noreferrer"
>
  My CV
</a>
      </nav>

      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  );
}
