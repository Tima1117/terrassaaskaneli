"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NextImage from "next/image";
import { useLang } from "@/lib/LangContext";

const SLIDES = [
  "https://terrassaaskaneli.ge/files/slider/slider-1.jpg",
  "https://terrassaaskaneli.ge/files/slider/slider-4.jpg",
  "https://terrassaaskaneli.ge/files/slider/slider-6.jpg",
];

export default function Hero() {
  const { t } = useLang();
  const [current, setCurrent] = useState(0);
  const [textIdx, setTextIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % SLIDES.length), 6000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(
      () => setTextIdx((i) => (i + 1) % t.hero.slides.length),
      5000
    );
    return () => clearInterval(timer);
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
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <NextImage
            src={src}
            alt=""
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover"
            quality={75}
          />
        </div>
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-black/85" />

      {/* Content — always visible, no initial opacity:0 */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">

        {/* Logo — always shown */}
        <div className="mb-6 md:mb-10">
          <NextImage
            src="https://terrassaaskaneli.ge/new.logo.png"
            alt="Askaneli Terrassa"
            width={280}
            height={120}
            priority
            className="h-16 md:h-24 w-auto mx-auto object-contain drop-shadow-2xl"
          />
        </div>

        {/* Rotating headline */}
        <AnimatePresence mode="wait">
          <motion.div
            key={textIdx}
            initial={{ y: 12 }}
            animate={{ y: 0 }}
            exit={{ y: -8 }}
            transition={{ duration: 0.35 }}
            className="px-2"
          >
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-light text-white tracking-wide leading-tight drop-shadow-lg">
              {slide.line1}
            </h1>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-light text-gradient mt-1 drop-shadow-lg">
              {slide.line2}
            </h2>
          </motion.div>
        </AnimatePresence>

        {/* CTA — always shown */}
        <a
          href="#reservation"
          className="mt-8 md:mt-10 inline-block px-8 py-3.5
                     border border-[#ae805c] text-[#ae805c] bg-black/30
                     hover:bg-[#ae805c] hover:text-black
                     transition-all duration-300 tracking-widest text-sm uppercase backdrop-blur-sm"
        >
          {t.hero.cta}
        </a>

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
