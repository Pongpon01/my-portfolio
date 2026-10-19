// components/Navbar.tsx
"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const navLinks = [
  { name: "About", href: "#about", id: "about" },
  { name: "Skills", href: "#skills", id: "skills" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "Videos", href: "#videos", id: "videos" },
  { name: "Experience", href: "#experience", id: "experience" },
];

export default function Navbar() {
  const [active, setActive] = useState("about");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = navLinks.map((l) => document.getElementById(l.id));
      const scrollPosition = window.scrollY + 240;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec && sec.offsetTop <= scrollPosition) {
          setActive(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-[#040711]/85 border-b border-white/[0.07] py-3.5 shadow-lg shadow-black/20"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-14 flex items-center justify-between">
        <a href="#about" className="text-xl font-extrabold tracking-tight text-white">
          Sasomport<span className="text-blue-500">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-1.5 p-1.5 rounded-full bg-white/[0.03] border border-white/[0.07] backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = active === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setActive(link.id)}
                className={`relative px-4 py-1.5 text-xs sm:text-sm font-medium rounded-full transition-colors ${
                  isActive ? "text-white" : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavPill"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    className="absolute inset-0 rounded-full bg-blue-600/25 border border-blue-500/40 -z-10"
                  />
                )}
                {link.name}
              </a>
            );
          })}
        </nav>

        <a
          href="#contact"
          className="text-xs font-semibold uppercase tracking-wider px-4 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white transition shadow-md shadow-blue-600/20"
        >
          Contact Me
        </a>
      </div>
    </header>
  );
}