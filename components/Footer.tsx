"use client";
import { useLang } from "@/lib/LangContext";

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="py-8 border-t border-copper/10 text-center">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <img
          src="https://terrassaaskaneli.ge/new.logo.png"
          alt="Askaneli Terrassa"
          className="h-10 object-contain opacity-60"
        />
        <p className="text-beige/30 text-xs tracking-widest">
          © {new Date().getFullYear()} Askaneli Terrassa. {t.footer.rights}.
        </p>
        <a
          href="#home"
          className="text-copper/50 hover:text-copper text-xs tracking-widest uppercase transition-colors"
        >
          ↑ TOP
        </a>
      </div>
    </footer>
  );
}
