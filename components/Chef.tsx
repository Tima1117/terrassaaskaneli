"use client";
import { motion } from "framer-motion";
import { useLang } from "@/lib/LangContext";

export default function Chef() {
  const { t } = useLang();

  return (
    <section
      className="relative py-36 overflow-hidden"
      style={{
        backgroundImage: "url(https://terrassaaskaneli.ge/files/paralax/parallex.jpg)",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-dark/75" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-[3/4] max-w-sm mx-auto overflow-hidden">
              <img
                src="https://terrassaaskaneli.ge/files/chef-1.jpg"
                alt={t.chef.name}
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* Copper border accent */}
            <div className="absolute -bottom-4 -left-4 w-32 h-32 border-l-2 border-b-2 border-copper/40" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-copper text-xs tracking-[0.3em] uppercase mb-4">
              {t.chef.subtitle}
            </p>
            <h2 className="text-4xl md:text-5xl font-light text-beige mb-4">
              {t.chef.title}
            </h2>
            <div className="divider mb-8" />
            <h3 className="text-xl text-copper font-light mb-6 italic">
              {t.chef.name}
            </h3>
            <p className="text-beige/70 leading-relaxed text-lg">
              {t.chef.text}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
