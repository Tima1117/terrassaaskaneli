"use client";
import { motion } from "framer-motion";
import { useLang } from "@/lib/LangContext";

function useScrollFade() {
  return {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" } as const,
    transition: { duration: 0.7 },
  };
}

export default function About() {
  const { t } = useLang();
  const fade = useScrollFade();

  return (
    <section id="about" className="py-16 md:py-28 px-4 md:px-6 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Text */}
        <div>
          <motion.div {...fade}>
            <p className="text-copper text-xs tracking-[0.3em] uppercase mb-4">
              {t.about.subtitle}
            </p>
            <h2 className="text-4xl md:text-5xl font-light text-beige mb-6">
              {t.about.title}
            </h2>
            <div className="divider mb-8" />
          </motion.div>

          <motion.p
            {...fade}
            transition={{ ...fade.transition, delay: 0.15 }}
            className="text-beige/70 leading-relaxed mb-5 text-lg"
          >
            {t.about.text1}
          </motion.p>
          <motion.p
            {...fade}
            transition={{ ...fade.transition, delay: 0.25 }}
            className="text-beige/70 leading-relaxed mb-8 text-lg"
          >
            {t.about.text2}
          </motion.p>

          <motion.a
            {...fade}
            transition={{ ...fade.transition, delay: 0.35 }}
            href="https://go.avantmenu.com/DAAE80NKKDTWJMFW"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            className="inline-block px-8 py-3 bg-copper text-dark font-medium
                       tracking-widest text-sm uppercase hover:bg-copper-light
                       transition-colors duration-200"
          >
            {t.about.menuBtn}
          </motion.a>
        </div>

        {/* Image */}
        <motion.div
          {...fade}
          transition={{ ...fade.transition, delay: 0.2 }}
          className="relative overflow-hidden rounded-none"
        >
          <div className="aspect-[4/5] overflow-hidden">
            <motion.img
              src="https://terrassaaskaneli.ge/files/gallery/hall%20%281%29.jpg"
              alt="Terrassa Askaneli interior"
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.6 }}
            />
          </div>
          {/* Decorative frame */}
          <div className="absolute -bottom-4 -right-4 w-full h-full border border-copper/20 -z-10" />
          {/* Year badge */}
          <div className="absolute top-6 left-6 glass px-4 py-2">
            <span className="text-copper text-xs tracking-widest">EST. 2016</span>
          </div>
        </motion.div>
      </div>

      {/* Stats row */}
      <motion.div
        {...fade}
        transition={{ ...fade.transition, delay: 0.4 }}
        className="grid grid-cols-3 gap-px mt-20 border border-copper/10"
      >
        {[
          { num: "2016", label: t.about.subtitle.split(" ")[0] },
          { num: "4.3★", label: "Google" },
          { num: "21:00", label: "Live Music" },
        ].map((s, i) => (
          <div key={i} className="glass p-8 text-center">
            <div className="text-3xl font-light text-copper mb-2">{s.num}</div>
            <div className="text-beige/50 text-xs tracking-widest uppercase">{s.label}</div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
