"use client";
import { motion } from "framer-motion";
import NextImage from "next/image";
import { useLang } from "@/lib/LangContext";

export default function Chef() {
  const { t } = useLang();

  return (
    <section className="relative py-24 md:py-36 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <NextImage
          src="https://terrassaaskaneli.ge/files/paralax/parallex.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          quality={60}
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-black/75 -z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-[3/4] max-w-xs mx-auto lg:mx-0 overflow-hidden relative">
              <NextImage
                src="https://terrassaaskaneli.ge/files/chef-1.jpg"
                alt={t.chef.name}
                fill
                sizes="(max-width: 1024px) 280px, 320px"
                className="object-cover object-top"
                quality={75}
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 w-28 h-28 border-l-2 border-b-2 border-[#ae805c]/40" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="text-[#ae805c] text-xs tracking-[0.3em] uppercase mb-4">
              {t.chef.subtitle}
            </p>
            <h2 className="text-3xl md:text-5xl font-light text-[#dfd3c3] mb-4">
              {t.chef.title}
            </h2>
            <div className="divider mb-8" />
            <h3 className="text-lg md:text-xl text-[#ae805c] font-light mb-6 italic">
              {t.chef.name}
            </h3>
            <p className="text-[#dfd3c3]/70 leading-relaxed text-base md:text-lg">
              {t.chef.text}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
