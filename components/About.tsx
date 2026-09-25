"use client";
import { motion } from "framer-motion";
import NextImage from "next/image";
import { useLang } from "@/lib/LangContext";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0 } as const,
  transition: { duration: 0.65, delay },
});

export default function About() {
  const { t } = useLang();

  return (
    <section id="about" className="py-16 md:py-24 px-4 md:px-6 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Text */}
        <div>
          <motion.p {...fade(0)} className="text-[#ae805c] text-xs tracking-[0.3em] uppercase mb-4">
            {t.about.subtitle}
          </motion.p>
          <motion.h2 {...fade(0.1)} className="text-3xl md:text-5xl font-light text-[#dfd3c3] mb-5">
            {t.about.title}
          </motion.h2>
          <motion.div {...fade(0.15)} className="divider mb-8" />
          <motion.p {...fade(0.2)} className="text-[#dfd3c3]/70 leading-relaxed mb-5 text-base md:text-lg">
            {t.about.text1}
          </motion.p>
          <motion.p {...fade(0.25)} className="text-[#dfd3c3]/70 leading-relaxed mb-8 text-base md:text-lg">
            {t.about.text2}
          </motion.p>
          <motion.a
            {...fade(0.3)}
            href="https://go.avantmenu.com/DAAE80NKKDTWJMFW"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-[#ae805c] text-black font-medium
                       tracking-widest text-sm uppercase hover:bg-[#c49878]
                       transition-colors duration-200"
          >
            {t.about.menuBtn}
          </motion.a>
        </div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="aspect-[4/5] overflow-hidden relative">
            <NextImage
              src="https://terrassaaskaneli.ge/files/gallery/hall%20%281%29.jpg"
              alt="Terrassa Askaneli interior"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              quality={75}
            />
          </div>
          <div className="absolute top-5 left-5 glass px-4 py-2">
            <span className="text-[#ae805c] text-xs tracking-widest">EST. 2016</span>
          </div>
        </motion.div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-px mt-14 border border-[#ae805c]/10">
        {[
          { num: "2016", label: "Founded" },
          { num: "4.3★", label: "Google" },
          { num: "21:00", label: "Live Music" },
        ].map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass p-6 md:p-8 text-center"
          >
            <div className="text-2xl md:text-3xl font-light text-[#ae805c] mb-2">{s.num}</div>
            <div className="text-[#dfd3c3]/50 text-xs tracking-widest uppercase">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
