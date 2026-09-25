"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/lib/LangContext";

const SLIDES = [
  "https://terrassaaskaneli.ge/files/slider/slider-1.jpg",
  "https://terrassaaskaneli.ge/files/slider/slider-4.jpg",
  "https://terrassaaskaneli.ge/files/slider/slider-6.jpg",
  "https://terrassaaskaneli.ge/files/slider/slider-1%20%282%29.jpg",
  "https://terrassaaskaneli.ge/files/slider/slider-1%20%285%29.jpg",
];

export default function Hero() {
  const { t } = useLang();
  const [current, setCurrent] = useState(0);
  const [textIdx, setTextIdx] = useState(0);

  useEffect(() => {
    const imgTimer = setInterval(() => {
      setCurrent((c) => (c + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(imgTimer);
  }, []);

  useEffect(() => {
    const txtTimer = setInterval(() => {
      setTextIdx((i) => (i + 1) % t.hero.slides.length);
    }, 4000);
    return () => clearInterval(txtTimer);
  }, [t.hero.slides.length]);

  const slide = t.hero.slides[textIdx];

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background slides */}
      {SLIDES.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1500 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={src}
            alt=""
            className="w-full h-full object-cover"
            style={{
              animation: i === current ? "kenBurns 8s ease-in-out infinite alternate" : "none",
            }}
          />
        </div>
      ))}

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-dark/30 to-dark/80" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        {/* Logo / eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-8"
        >
          <img
            src="https://terrassaaskaneli.ge/new.logo.png"
            alt="Askaneli Terrassa"
            className="h-24 mx-auto object-contain drop-shadow-2xl"
          />
        </motion.div>

        {/* Rotating headline */}
        <AnimatePresence mode="wait">
          <motion.div
            key={textIdx}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-beige tracking-wide leading-tight">
              {slide.line1}
            </h1>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-gradient mt-1">
              {slide.line2}
            </h2>
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.a
          href="#reservation"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="mt-10 inline-block px-10 py-3.5 border border-copper text-copper
                     hover:bg-copper hover:text-dark transition-all duration-300
                     tracking-widest text-sm uppercase glass"
        >
          {t.hero.cta}
        </motion.a>

        {/* Slide indicators */}
        <div className="absolute bottom-8 flex gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-0.5 transition-all duration-500 ${
                i === current ? "w-8 bg-copper" : "w-3 bg-beige/30"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 right-8 flex flex-col items-center gap-2"
      >
        <span className="text-beige/40 text-xs tracking-widest rotate-90 origin-center mb-4">SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-copper to-transparent"
        />
      </motion.div>
    </section>
  );
}
