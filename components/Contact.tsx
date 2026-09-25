"use client";
import { motion } from "framer-motion";
import { useLang } from "@/lib/LangContext";

export default function Contact() {
  const { t } = useLang();
  const c = t.contact;
  const h = c.hours;

  return (
    <section id="contact" className="py-28 bg-dark-card border-t border-copper/10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-beige mb-4">{c.title}</h2>
          <div className="divider mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-0.5 mb-12">
          {/* Address */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass p-8"
          >
            <div className="text-copper text-xs tracking-[0.25em] uppercase mb-4">📍</div>
            <p className="text-beige/80 leading-relaxed mb-1">{c.address}</p>
            <p className="text-beige/40 text-sm">{c.addressNote}</p>
          </motion.div>

          {/* Phone & email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass p-8"
          >
            <div className="text-copper text-xs tracking-[0.25em] uppercase mb-4">📞</div>
            <a
              href={`tel:${c.phone}`}
              className="block text-beige/80 text-lg mb-3 hover:text-copper transition-colors"
            >
              {c.phone}
            </a>
            <a
              href={`mailto:${c.email}`}
              className="block text-beige/50 text-sm hover:text-copper transition-colors"
            >
              {c.email}
            </a>
            {/* WhatsApp */}
            <a
              href="https://wa.me/995557075555"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-4 py-1.5 border border-green-600/40 text-green-500/70
                         hover:border-green-500 hover:text-green-400 text-xs tracking-widest transition-all"
            >
              WhatsApp
            </a>
          </motion.div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass p-8"
          >
            <div className="text-copper text-xs tracking-[0.25em] uppercase mb-4">🕐 {h.title}</div>
            <div className="space-y-2 text-sm text-beige/60">
              <p>{h.restaurant}</p>
              <p>{h.kitchen}</p>
              <p className="text-copper/70">{h.music}</p>
              <p className="pt-2 border-t border-dark-border">{h.shopWeekday}</p>
              <p>{h.shopWeekend}</p>
            </div>
          </motion.div>
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="overflow-hidden border border-copper/10"
          style={{ height: "340px" }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2976.8!2d41.62566444232918!3d41.64937522772158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406788f9c99b4de3%3A0x69e8e49ddb02c4c8!2sTerrassa%20Askaneli!5e0!3m2!1sen!2sge!4v1"
            width="100%"
            height="340"
            style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Terrassa Askaneli map"
          />
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center gap-8 mt-10"
        >
          {[
            { href: "https://www.facebook.com/AskaneliTerrassa/", label: "Facebook" },
            { href: "https://www.instagram.com/AskaneliTerrassa/", label: "Instagram" },
            { href: "https://maps.app.goo.gl/Y5a7ngUXVvBKz69c8", label: "Google Maps" },
            {
              href: "https://www.tripadvisor.com/Restaurant_Review-g297576-d10730462",
              label: "TripAdvisor",
            },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-beige/40 hover:text-copper text-xs tracking-widest uppercase transition-colors"
            >
              {s.label}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
