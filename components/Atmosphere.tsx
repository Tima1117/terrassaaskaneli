"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
      "https://terrassaaskaneli.ge/files/gallery/hall%20%287%29.jpg",
    ],
  },
  {
    images: Array.from(
      { length: 12 },
      (_, i) =>
        `https://terrassaaskaneli.ge/files/gallery/terrace%20%28${i + 1}%29.jpg`
    ),
  },
];

export default function Atmosphere() {
  const { t } = useLang();
  const [activeTab, setActiveTab] = useState(0);
  const [lightbox, setLightbox] = useState<string | null>(null);

  const images = GALLERY_DATA[activeTab].images;

  return (
    <section id="atmosphere" className="py-16 md:py-28 bg-dark-card">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-copper text-xs tracking-[0.3em] uppercase mb-3">
            {t.atmosphere.subtitle}
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-beige mb-6">
            {t.atmosphere.title}
          </h2>
          <div className="divider mx-auto" />
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {t.atmosphere.tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`px-6 py-2 text-sm tracking-widest uppercase transition-all duration-200 ${
                activeTab === i
                  ? "bg-copper text-dark"
                  : "border border-copper/30 text-beige/60 hover:border-copper hover:text-copper"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Gallery grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-2"
          >
            {images.map((src, i) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className="aspect-[4/3] overflow-hidden cursor-pointer group relative"
                onClick={() => setLightbox(src)}
              >
                <img
                  src={src}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/30 transition-all duration-300 flex items-center justify-center">
                  <span className="text-beige/0 group-hover:text-beige/80 text-2xl transition-all duration-300">
                    ⊕
                  </span>
                </div>
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
            className="fixed inset-0 z-50 bg-dark/95 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.img
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              src={lightbox}
              alt=""
              className="max-w-5xl max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="absolute top-6 right-8 text-beige/60 hover:text-beige text-3xl"
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
