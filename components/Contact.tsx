"use client";
import { motion } from "framer-motion";
import { useLang } from "@/lib/LangContext";

const IconPin = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const IconPhone = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 12 19.79 19.79 0 0 1 1 3.18 2 2 0 0 1 3 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const IconClock = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
);

const IconFacebook = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const IconInstagram = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const IconWhatsApp = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
  </svg>
);

const IconMapPin = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
  </svg>
);

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true } as const,
  transition: { duration: 0.6, delay },
});

export default function Contact() {
  const { t } = useLang();
  const c = t.contact;
  const h = c.hours;

  return (
    <section
      id="contact"
      className="relative"
      style={{
        backgroundImage: "url(https://terrassaaskaneli.ge/files/gallery/terrace%20%281%29.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center top",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-dark/88" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-28">
        {/* Header */}
        <motion.div {...fade()} className="mb-16">
          <p className="text-copper text-xs tracking-[0.3em] uppercase mb-3">Batumi, Georgia</p>
          <h2 className="text-4xl md:text-5xl font-light text-beige mb-5">{c.title}</h2>
          <div className="divider" />
        </motion.div>

        {/* Main grid: info left, map right */}
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Left: contact blocks */}
          <div className="flex flex-col gap-0.5">
            {/* Address block */}
            <motion.div {...fade(0.1)} className="glass p-7 flex gap-5 items-start">
              <div className="text-copper mt-0.5 shrink-0">
                <IconPin />
              </div>
              <div>
                <p className="text-copper text-xs tracking-[0.25em] uppercase mb-2">
                  {c.addressNote}
                </p>
                <p className="text-beige/85 leading-relaxed text-base">{c.address}</p>
                <a
                  href="https://maps.app.goo.gl/Y5a7ngUXVvBKz69c8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-3 text-copper/70 hover:text-copper text-xs tracking-widest uppercase transition-colors"
                >
                  <IconMapPin />
                  Google Maps →
                </a>
              </div>
            </motion.div>

            {/* Phone block */}
            <motion.div {...fade(0.15)} className="glass p-7 flex gap-5 items-start">
              <div className="text-copper mt-0.5 shrink-0">
                <IconPhone />
              </div>
              <div className="flex-1">
                <p className="text-copper text-xs tracking-[0.25em] uppercase mb-2">
                  Reservation & Info
                </p>
                <a
                  href={`tel:${c.phone}`}
                  className="block text-beige/85 text-xl font-light hover:text-copper transition-colors mb-2"
                >
                  {c.phone}
                </a>
                <a
                  href={`mailto:${c.email}`}
                  className="block text-beige/45 text-sm hover:text-copper/80 transition-colors mb-4"
                >
                  {c.email}
                </a>
                <a
                  href="https://wa.me/995557075555"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#25d366]/10 border border-[#25d366]/25
                             text-[#25d366]/80 hover:bg-[#25d366]/20 hover:text-[#25d366]
                             text-xs tracking-widest uppercase transition-all"
                >
                  <IconWhatsApp />
                  WhatsApp
                </a>
              </div>
            </motion.div>

            {/* Hours block */}
            <motion.div {...fade(0.2)} className="glass p-7 flex gap-5 items-start">
              <div className="text-copper mt-0.5 shrink-0">
                <IconClock />
              </div>
              <div className="flex-1">
                <p className="text-copper text-xs tracking-[0.25em] uppercase mb-4">{h.title}</p>
                <div className="space-y-2.5 text-sm">
                  <div className="flex justify-between gap-4">
                    <span className="text-beige/50">Restaurant</span>
                    <span className="text-beige/80">11:00 – 00:00</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-beige/50">Kitchen</span>
                    <span className="text-beige/80">11:00 – 23:00</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-beige/50">Live music</span>
                    <span className="text-copper/80">21:00 – 23:00</span>
                  </div>
                  <div className="border-t border-white/5 pt-2.5 flex justify-between gap-4">
                    <span className="text-beige/50">Wine shop</span>
                    <span className="text-beige/65 text-right leading-relaxed">
                      Mon–Fri 11:00–23:00<br />
                      Sat–Sun 12:00–22:00
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: map */}
          <motion.div
            {...fade(0.25)}
            className="overflow-hidden border border-copper/15 min-h-[420px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2976.8!2d41.62566444232918!3d41.64937522772158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406788f9c99b4de3%3A0x69e8e49ddb02c4c8!2sTerrassa%20Askaneli!5e0!3m2!1sen!2sge!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)", minHeight: "420px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Terrassa Askaneli"
            />
          </motion.div>
        </div>

        {/* Social row */}
        <motion.div
          {...fade(0.3)}
          className="flex items-center justify-center gap-1"
        >
          {[
            {
              href: "https://www.facebook.com/AskaneliTerrassa/",
              label: "Facebook",
              icon: <IconFacebook />,
            },
            {
              href: "https://www.instagram.com/AskaneliTerrassa/",
              label: "Instagram",
              icon: <IconInstagram />,
            },
            {
              href: "https://wa.me/995557075555",
              label: "WhatsApp",
              icon: <IconWhatsApp />,
            },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              title={s.label}
              className="glass w-12 h-12 flex items-center justify-center
                         text-beige/40 hover:text-copper hover:border-copper/40
                         border border-transparent transition-all duration-200"
            >
              {s.icon}
            </a>
          ))}

          <div className="w-px h-6 bg-copper/20 mx-4" />

          <a
            href="https://www.tripadvisor.com/Restaurant_Review-g297576-d10730462"
            target="_blank"
            rel="noopener noreferrer"
            className="glass px-5 h-12 flex items-center gap-2 text-beige/40
                       hover:text-copper border border-transparent hover:border-copper/40
                       text-xs tracking-widest uppercase transition-all"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm.02-13.95c-1.055 0-2.042.303-2.876.827L7 7.5l1.144-.006C7.408 8.14 7 9.018 7 10c0 2.21 1.79 4 4 4 .953 0 1.826-.335 2.505-.886l.636.886H15l-.636-.886C14.335 12.826 14.953 12 15 10c0-2.21-1.79-4-4-4-.024 0-.048.001-.072.002l.072-.002-.072 1.05zm0 1.05c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3z"/>
            </svg>
            TripAdvisor
          </a>
        </motion.div>
      </div>
    </section>
  );
}
