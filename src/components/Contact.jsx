import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Phone } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setStatus('Thanks! I will get back to you soon.');
  }

  return (
    <section className="relative py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(700px_200px_at_50%_0,rgba(168,85,247,0.18),transparent)]" />
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold">Let’s build something great</h2>
          <p className="text-white/70 mt-2">Tell me about your idea, timeline, and budget. I usually respond within a day.</p>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl border border-white/10 bg-white/5 p-6 grid gap-4"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-white/70">Name</label>
              <input
                type="text"
                required
                className="mt-1 w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-white/20"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-sm text-white/70">Email</label>
              <input
                type="email"
                required
                className="mt-1 w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-white/20"
                placeholder="you@example.com"
              />
            </div>
          </div>
          <div>
            <label className="text-sm text-white/70">Message</label>
            <textarea
              rows="5"
              required
              className="mt-1 w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-white/20"
              placeholder="Tell me about your project..."
            />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white text-black font-medium hover:shadow-lg transition-shadow"
            >
              <Send className="h-4 w-4" /> Send Message
            </button>
            <div className="flex items-center gap-4 text-white/70">
              <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 hover:text-white">
                <Mail className="h-4 w-4" /> hello@example.com
              </a>
              <a href="tel:+1234567890" className="inline-flex items-center gap-2 hover:text-white">
                <Phone className="h-4 w-4" /> +1 234 567 890
              </a>
            </div>
          </div>

          {status && (
            <p className="text-emerald-300/90 text-sm pt-2">{status}</p>
          )}
        </motion.form>

        <footer className="pt-10 text-center text-white/50 text-xs">
          © {new Date().getFullYear()} Mobile Developer Portfolio — Crafted with care.
        </footer>
      </div>
    </section>
  );
}
