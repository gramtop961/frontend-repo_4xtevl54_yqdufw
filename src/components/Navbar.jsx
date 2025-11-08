import React from 'react';
import { Menu, Smartphone, Github, Linkedin } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/20 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-gradient-to-br from-violet-500 to-cyan-400">
            <Smartphone className="h-5 w-5 text-white" />
          </div>
          <span className="font-semibold tracking-tight">Mobile Dev Portfolio</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-white/80 hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="h-6 w-px bg-white/10" />
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="text-white/80 hover:text-white"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="text-white/80 hover:text-white"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </nav>

        <button
          className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-white/10 text-white/80 hover:text-white"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle Menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/60">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm text-white/80 hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-4 pt-2">
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-white/80 hover:text-white">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="text-white/80 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
