"use client";
import NextImage from "next/image";
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
    <section id="wine-shop" className="py-16 md:py-28 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Mosaic */}
          <div className="grid grid-cols-2 gap-1 md:gap-2">
            <div className="col-span-2 aspect-[16/7] overflow-hidden relative bg-[#111]">
              <NextImage
                src={SHOP_IMAGES[0]}
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                quality={70}
                loading="lazy"
              />
            </div>
            {SHOP_IMAGES.slice(1).map((src, i) => (
              <div key={i} className="aspect-square overflow-hidden relative bg-[#111]">
                <NextImage
                  src={src}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                  quality={65}
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Text */}
          <div>
            <p className="text-[#ae805c] text-xs tracking-[0.3em] uppercase mb-4">
              {ws.subtitle}
            </p>
            <h2 className="text-3xl md:text-5xl font-light text-[#dfd3c3] mb-4">
              {ws.title}
            </h2>
            <div className="divider mb-8" />
            <p className="text-[#dfd3c3]/70 leading-relaxed mb-5 text-base md:text-lg">{ws.text1}</p>
            <p className="text-[#dfd3c3]/70 leading-relaxed mb-8 text-base md:text-lg">{ws.text2}</p>

            <div className="glass border border-[#ae805c]/15 p-5 inline-block">
              <p className="text-[#ae805c] text-xs tracking-widest uppercase mb-1.5">Hours</p>
              <p className="text-[#dfd3c3]/60 text-sm">{ws.hours}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
