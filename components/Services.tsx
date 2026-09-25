"use client";
import NextImage from "next/image";
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
    <section id="services" className="py-16 md:py-28 px-4 md:px-6 max-w-7xl mx-auto">
      <div className="text-center mb-12 md:mb-16">
        <p className="text-[#ae805c] text-xs tracking-[0.3em] uppercase mb-3">
          {t.services.subtitle}
        </p>
        <h2 className="text-3xl md:text-5xl font-light text-[#dfd3c3] mb-6">
          {t.services.title}
        </h2>
        <div className="divider mx-auto" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1">
        {t.services.items.map((item, i) => (
          <div
            key={i}
            className="group relative overflow-hidden"
          >
            <div className="aspect-[3/4] overflow-hidden relative bg-[#111]">
              <NextImage
                src={IMAGES[i]}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                quality={65}
                loading="lazy"
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
              <div className="text-2xl mb-2">{ICONS[i]}</div>
              <h3 className="text-[#dfd3c3] text-base font-light mb-2 tracking-wide">
                {item.title}
              </h3>
              <p className="text-[#dfd3c3]/60 text-sm leading-relaxed mb-1">
                {item.text}
              </p>
              {item.schedule && (
                <p className="text-[#ae805c] text-xs tracking-wide mt-1">
                  {item.schedule}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
