"use client";
import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { useLang } from "@/lib/LangContext";

export default function Reservation() {
  const { t } = useLang();
  const r = t.reservation;
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      await fetch("https://terrassaaskaneli.ge/_website/reser-process.php", {
        method: "POST",
        body: data,
        mode: "no-cors",
      });
    } catch {}
    setLoading(false);
    setSent(true);
    form.reset();
  }

  return (
    <section
      id="reservation"
      className="relative py-28 overflow-hidden"
      style={{
        backgroundImage: "url(https://terrassaaskaneli.ge/_website/img/bg_22.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-[#0d0d0d]/80" />

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-[#ae805c] text-xs tracking-[0.3em] uppercase mb-3">
            {r.subtitle}
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-[#dfd3c3] mb-6">
            {r.title}
          </h2>
          <div className="divider mx-auto" />
        </div>

        {sent ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass text-center py-12 px-8"
          >
            <div className="text-4xl mb-4">✓</div>
            <p className="text-[#dfd3c3]/80 text-lg">{r.success}</p>
            <button
              className="mt-6 text-[#ae805c] text-sm tracking-widest uppercase"
              onClick={() => setSent(false)}
            >
              ←
            </button>
          </motion.div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-3"
          >
            <input name="name2" placeholder={r.fields.name} required className="form-input" />
            <input name="email2" type="email" placeholder={r.fields.email} className="form-input" />
            <input name="phone" placeholder={r.fields.phone} required className="form-input" />
            <input name="personnum" placeholder={r.fields.persons} className="form-input" />
            <input name="date" type="date" placeholder={r.fields.date} className="form-input" />
            <input name="time" type="time" placeholder={r.fields.time} className="form-input" />
            <textarea
              name="comment2"
              placeholder={r.fields.comment}
              rows={3}
              className="form-input md:col-span-2 resize-none"
            />

            <div className="md:col-span-2 text-center mt-2">
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-12 py-3.5 bg-[#ae805c] text-black font-medium tracking-widest
                           text-sm uppercase hover:bg-[#c49878] transition-colors
                           duration-200 disabled:opacity-50"
              >
                {loading ? "..." : r.submit}
              </motion.button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
