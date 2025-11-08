import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="relative min-h-[100svh] grid place-items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-[#0B0B0F]/30 to-[#0B0B0F]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-28 pb-16 grid md:grid-cols-2 items-center gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for freelance iOS & Android projects
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Crafting delightful mobile apps with modern tech
          </h1>
          <p className="text-white/70 max-w-xl">
            I’m a mobile developer focused on building fast, accessible, and engaging experiences
            using Flutter, React Native, and native stacks. I love animations and polished details.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a href="#projects" className="px-5 py-3 rounded-lg bg-white text-black font-medium shadow hover:shadow-lg transition-shadow">
              View Projects
            </a>
            <a href="#contact" className="px-5 py-3 rounded-lg border border-white/20 text-white/90 hover:bg-white/10 transition-colors">
              Get in Touch
            </a>
          </div>
          <div className="flex items-center gap-4 pt-2 text-white/70 text-sm">
            <span>Tech:</span>
            <span className="px-2 py-1 rounded bg-white/5 border border-white/10">Flutter</span>
            <span className="px-2 py-1 rounded bg-white/5 border border-white/10">React Native</span>
            <span className="px-2 py-1 rounded bg-white/5 border border-white/10">Swift/Kotlin</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="relative h-[380px] md:h-[520px] rounded-2xl overflow-hidden border border-white/10 bg-white/5"
        >
          <div className="absolute inset-0 bg-[radial-gradient(1200px_300px_at_50%_-20%,rgba(59,130,246,0.25),transparent)]" />
          <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
            <div>
              <p className="text-sm text-white/70">Recent work</p>
              <p className="text-lg font-semibold">Fintrack — Personal Finance</p>
            </div>
            <a href="#projects" className="text-sm text-white/80 underline-offset-4 hover:underline">Explore</a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
