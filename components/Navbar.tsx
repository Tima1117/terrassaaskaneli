"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/lib/LangContext";
import { Lang } from "@/lib/i18n";
import Image from "next/image";

const LANGS: { code: Lang; label: string; flag: string }[] = [
  { code: "en", label: "EN", flag: "🇬🇧" },
  { code: "ru", label: "RU", flag: "🇷🇺" },
  { code: "ge", label: "GE", flag: "🇬🇪" },
];

export default function Navbar() {
  const { t, lang, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems: Array<{ key: string; href: string; external?: boolean }> = [
    { key: "about", href: "#about" },
    { key: "atmosphere", href: "#atmosphere" },
    { key: "menu", href: "https://go.avantmenu.com/DAAE80NKKDTWJMFW", external: true },
    { key: "services", href: "#services" },
    { key: "wineShop", href: "#wine-shop" },
    { key: "reservation", href: "#reservation" },
    { key: "contact", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-dark shadow-lg shadow-black/40" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <img
            src="https://terrassaaskaneli.ge/new.logo.png"
            alt="Askaneli Terrassa"
            className="h-10 object-contain"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="nav-link"
            >
              {t.nav[item.key as keyof typeof t.nav]}
            </a>
          ))}
        </nav>

        {/* Lang switcher + mobile toggle */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            {LANGS.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={`text-xs px-2 py-1 rounded transition-all duration-200 ${
                  lang === l.code
                    ? "text-copper bg-copper/10 border border-copper/40"
                    : "text-beige/50 hover:text-beige"
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* Mobile burger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="menu"
          >
            <span className={`block w-6 h-0.5 bg-beige/80 transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-beige/80 transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-beige/80 transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden glass-dark border-t border-copper/10"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="nav-link py-1"
                  onClick={() => setMenuOpen(false)}
                >
                  {t.nav[item.key as keyof typeof t.nav]}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
