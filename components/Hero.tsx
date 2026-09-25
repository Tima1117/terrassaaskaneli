"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/lib/LangContext";

// Only 3 slides — reduces initial load
const SLIDES = [
  "https://terrassaaskaneli.ge/files/slider/slider-1.jpg",
  "https://terrassaaskaneli.ge/files/slider/slider-4.jpg",
  "https://terrassaaskaneli.ge/files/slider/slider-6.jpg",
];

export default function Hero() {
  const { t } = useLang();
  const [current, setCurrent] = useState(0);
  const [textIdx, setTextIdx] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const imgTimer = setInterval(() => setCurrent((c) => (c + 1) % SLIDES.length), 6000);
    return () => clearInterval(imgTimer);
  }, []);

  useEffect(() => {
    const txtTimer = setInterval(
      () => setTextIdx((i) => (i + 1) % t.hero.slides.length),
      5000
    );
    return () => clearInterval(txtTimer);
  }, [t.hero.slides.length]);

  const slide = t.hero.slides[textIdx];

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden"
      style={{ height: "100svh", minHeight: "600px" }}
    >
      {/* Background slides */}
      {SLIDES.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-[1500ms]"
          style={{ opacity: mounted && i === current ? 1 : i === 0 && !mounted ? 1 : 0 }}
        >
          <img
            src={src}
            alt=""
            fetchPriority={i === 0 ? "high" : "low"}
            loading={i === 0 ? "eager" : "lazy"}
            decoding={i === 0 ? "sync" : "async"}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black/75" />

      {/* Content — always on top */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mb-6 md:mb-10"
        >
          <img
            src="https://terrassaaskaneli.ge/new.logo.png"
            alt="Askaneli Terrassa"
            fetchPriority="high"
            className="h-16 md:h-24 mx-auto object-contain drop-shadow-2xl"
          />
        </motion.div>

        {/* Rotating headline */}
        <AnimatePresence mode="wait">
          <motion.div
            key={textIdx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.5 }}
            className="text-center px-2"
          >
            <h1 className="text-2xl sm:text-4xl md:text-6xl font-light text-white tracking-wide leading-tight drop-shadow-lg">
              {slide.line1}
            </h1>
            <h2 className="text-2xl sm:text-4xl md:text-6xl font-light text-gradient mt-1 drop-shadow-lg">
              {slide.line2}
            </h2>
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.a
          href="#reservation"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          whileTap={{ scale: 0.96 }}
          className="mt-8 md:mt-10 inline-block px-8 md:px-10 py-3.5
                     border border-[#ae805c] text-[#ae805c] bg-black/30
                     hover:bg-[#ae805c] hover:text-black
                     transition-all duration-300 tracking-widest text-sm uppercase backdrop-blur-sm"
        >
          {t.hero.cta}
        </motion.a>

        {/* Slide dots */}
        <div className="absolute bottom-6 flex gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-0.5 transition-all duration-500 ${
                i === current ? "w-8 bg-[#ae805c]" : "w-3 bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
