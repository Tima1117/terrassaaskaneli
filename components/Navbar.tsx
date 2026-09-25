"use client";
import { useState, useEffect } from "react";
import { useLang } from "@/lib/LangContext";
import { Lang } from "@/lib/i18n";

const LANGS: { code: Lang; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "ru", label: "RU" },
  { code: "ge", label: "GE" },
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-dark shadow-lg shadow-black/40" : "bg-transparent"
      }`}
      style={{ paddingTop: "env(safe-area-inset-top)" }}
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

        {/* Lang switcher + mobile burger */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-0.5">
            {LANGS.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                style={{ touchAction: "manipulation" }}
                className={`text-xs px-3 py-2.5 min-w-[40px] min-h-[40px] transition-all duration-200 ${
                  lang === l.code
                    ? "text-[#ae805c] bg-[#ae805c]/10 border border-[#ae805c]/40"
                    : "text-[#dfd3c3]/50 hover:text-[#dfd3c3]"
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
            <span className={`block w-6 h-0.5 bg-[#dfd3c3]/80 transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-[#dfd3c3]/80 transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-[#dfd3c3]/80 transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu — CSS transition only, no Framer Motion */}
      <nav
        className="lg:hidden glass-dark border-t border-[#ae805c]/10 overflow-hidden transition-all duration-300"
        style={{ maxHeight: menuOpen ? "400px" : "0px", opacity: menuOpen ? 1 : 0 }}
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
      </nav>
    </header>
  );
}
