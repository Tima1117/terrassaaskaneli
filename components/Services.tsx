"use client";
import { motion } from "framer-motion";
import { useLang } from "@/lib/LangContext";

const ICONS = ["🧸", "🍷", "👨‍🍳", "🌸"];
const IMAGES = [
  "https://terrassaaskaneli.ge/files/services/kids%20%282%29.jpg",
  "https://terrassaaskaneli.ge/files/bg_23.jpg",
  "https://terrassaaskaneli.ge/files/services/masterclass%20%282%29.jpg",
  "https://terrassaaskaneli.ge/files/visit-us.jpg",
];

export default function Services() {
  const { t } = useLang();

  return (
    <section id="services" className="py-28 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-copper text-xs tracking-[0.3em] uppercase mb-3">
          {t.services.subtitle}
        </p>
        <h2 className="text-4xl md:text-5xl font-light text-beige mb-6">
          {t.services.title}
        </h2>
        <div className="divider mx-auto" />
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0.5">
        {t.services.items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group relative overflow-hidden"
          >
            {/* Background image */}
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={IMAGES[i]}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-transparent" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="text-3xl mb-3">{ICONS[i]}</div>
              <h3 className="text-beige text-lg font-light mb-2 tracking-wide">
                {item.title}
              </h3>
              <div className="overflow-hidden">
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  whileInView={{ height: "auto", opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
                >
                  <p className="text-beige/60 text-sm leading-relaxed mb-2">
                    {item.text}
                  </p>
                  {item.schedule && (
                    <p className="text-copper text-xs tracking-wide">
                      {item.schedule}
                    </p>
                  )}
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
