"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NextImage from "next/image";
import { useLang } from "@/lib/LangContext";

const GALLERY_DATA = [
  {
    images: [
      "https://terrassaaskaneli.ge/files/gallery/floor-1%20%281%29.jpg",
      "https://terrassaaskaneli.ge/files/gallery/floor-1%20%282%29.jpg",
      "https://terrassaaskaneli.ge/files/gallery/floor-1%20%283%29.jpg",
      "https://terrassaaskaneli.ge/files/gallery/floor-1%20%284%29.jpg",
      "https://terrassaaskaneli.ge/files/gallery/floor-1%20%285%29.jpg",
      "https://terrassaaskaneli.ge/files/gallery/floor-1%20%286%29.jpg",
    ],
  },
  {
    images: [
      "https://terrassaaskaneli.ge/files/gallery/floor-2%20%281%29.jpg",
      "https://terrassaaskaneli.ge/files/gallery/floor-2%20%282%29.jpg",
      "https://terrassaaskaneli.ge/files/gallery/floor-2%20%283%29.jpg",
    ],
  },
  {
    images: [
      "https://terrassaaskaneli.ge/files/gallery/hall%20%281%29.jpg",
      "https://terrassaaskaneli.ge/files/gallery/hall%20%282%29.jpg",
      "https://terrassaaskaneli.ge/files/gallery/hall%20%283%29.jpg",
      "https://terrassaaskaneli.ge/files/gallery/hall%20%284%29.jpg",
      "https://terrassaaskaneli.ge/files/gallery/hall%20%285%29.jpg",
      "https://terrassaaskaneli.ge/files/gallery/hall%20%286%29.jpg",
    ],
  },
  {
    images: [
      "https://terrassaaskaneli.ge/files/gallery/terrace%20%281%29.jpg",
      "https://terrassaaskaneli.ge/files/gallery/terrace%20%282%29.jpg",
      "https://terrassaaskaneli.ge/files/gallery/terrace%20%283%29.jpg",
      "https://terrassaaskaneli.ge/files/gallery/terrace%20%284%29.jpg",
      "https://terrassaaskaneli.ge/files/gallery/terrace%20%285%29.jpg",
      "https://terrassaaskaneli.ge/files/gallery/terrace%20%286%29.jpg",
    ],
  },
];

export default function Atmosphere() {
  const { t } = useLang();
  const [activeTab, setActiveTab] = useState(0);
  const [lightbox, setLightbox] = useState<string | null>(null);

  const images = GALLERY_DATA[activeTab].images;

  return (
    <section id="atmosphere" className="py-16 md:py-28 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-12"
        >
          <p className="text-[#ae805c] text-xs tracking-[0.3em] uppercase mb-3">
            {t.atmosphere.subtitle}
          </p>
          <h2 className="text-3xl md:text-5xl font-light text-[#dfd3c3] mb-6">
            {t.atmosphere.title}
          </h2>
          <div className="divider mx-auto" />
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {t.atmosphere.tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`px-5 py-2 text-xs md:text-sm tracking-widest uppercase transition-all duration-200 ${
                activeTab === i
                  ? "bg-[#ae805c] text-black"
                  : "border border-[#ae805c]/30 text-[#dfd3c3]/60 hover:border-[#ae805c] hover:text-[#ae805c]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Gallery */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-2"
          >
            {images.map((src, i) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className="aspect-[4/3] overflow-hidden cursor-pointer group relative bg-[#111]"
                onClick={() => setLightbox(src)}
              >
                <NextImage
                  src={src}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  quality={65}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-300" />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <div className="relative max-w-5xl max-h-[90vh] w-full h-full">
              <NextImage
                src={lightbox}
                alt=""
                fill
                className="object-contain"
                quality={85}
                onClick={(e) => e.stopPropagation()}
              />
            </div>
            <button
              className="absolute top-5 right-7 text-white/60 hover:text-white text-4xl leading-none"
              onClick={() => setLightbox(null)}
            >
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
