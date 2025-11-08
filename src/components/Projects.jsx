import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Sparkles, ShieldCheck } from 'lucide-react';

const projects = [
  {
    title: 'Fintrack',
    description: 'A personal finance manager with bank sync, budget planning, and delightful micro-interactions.',
    tags: ['Flutter', 'Riverpod', 'Firebase'],
    color: 'from-violet-500/30 to-cyan-400/20',
  },
  {
    title: 'FitPulse',
    description: 'Social fitness app with live challenges, BLE device sync, and offline-first architecture.',
    tags: ['React Native', 'Redux Toolkit', 'SQLite'],
    color: 'from-emerald-500/30 to-teal-400/20',
  },
  {
    title: 'ShopSwift',
    description: 'E-commerce starter with performant lists, gestures, and Lottie-driven animations.',
    tags: ['Kotlin', 'Jetpack Compose'],
    color: 'from-rose-500/30 to-orange-400/20',
  },
];

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group relative rounded-2xl border border-white/10 overflow-hidden bg-white/5"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${project.color}`} />
      <div className="relative p-6 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-white/80">
            <Smartphone className="h-5 w-5" />
            <span className="text-xs">Mobile App</span>
          </div>
          <div className="flex items-center gap-2 text-white/70">
            <ShieldCheck className="h-4 w-4" />
            <span className="text-xs">Production ready</span>
          </div>
        </div>
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <p className="text-white/75 text-sm leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tags.map((t) => (
            <span key={t} className="text-xs px-2 py-1 rounded bg-black/40 border border-white/10">
              {t}
            </span>
          ))}
        </div>
        <div className="pt-2">
          <a href="#contact" className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white">
            <Sparkles className="h-4 w-4" />
            Work like this for you
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 -z-0 pointer-events-none bg-[radial-gradient(600px_200px_at_50%_-40px,rgba(14,165,233,0.24),transparent)]" />
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Selected Projects</h2>
          <p className="text-white/70 mt-2">A few highlights showcasing performance, UX, and reliability.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
