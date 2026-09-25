"use client";
import { motion } from "framer-motion";
import { useLang } from "@/lib/LangContext";

const SHOP_IMAGES = [
  "https://terrassaaskaneli.ge/files/wine-shop/shop%20%282%29.jpg",
  "https://terrassaaskaneli.ge/files/wine-shop/shop%20%283%29.jpg",
  "https://terrassaaskaneli.ge/files/wine-shop/shop%20%287%29.jpg",
  "https://terrassaaskaneli.ge/files/wine-shop/shop%20%289%29.jpg",
];

export default function WineShop() {
  const { t } = useLang();
  const ws = t.wineShop;

  return (
    <section id="wine-shop" className="py-28 bg-dark-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Photos mosaic */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-2"
          >
            {SHOP_IMAGES.map((src, i) => (
              <div
                key={i}
                className={`overflow-hidden ${i === 0 ? "col-span-2 aspect-[16/7]" : "aspect-square"}`}
              >
                <motion.img
                  src={src}
                  alt=""
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            ))}
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-copper text-xs tracking-[0.3em] uppercase mb-4">
              {ws.subtitle}
            </p>
            <h2 className="text-4xl md:text-5xl font-light text-beige mb-4">
              {ws.title}
            </h2>
            <div className="divider mb-8" />

            <p className="text-beige/70 leading-relaxed mb-5 text-lg">
              {ws.text1}
            </p>
            <p className="text-beige/70 leading-relaxed mb-8 text-lg">
              {ws.text2}
            </p>

            {/* Hours */}
            <div className="glass border border-copper/15 p-5 inline-flex flex-col gap-1">
              <span className="text-copper text-xs tracking-widest uppercase mb-1">
                {ws.hours.split("|")[0].trim()}
              </span>
              <span className="text-beige/60 text-sm">
                {ws.hours.split("|").slice(1).join("|").trim()}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
