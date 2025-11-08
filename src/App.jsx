import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B0B0F] text-white font-inter overflow-x-hidden">
      <Navbar />
      <main>
        <section id="home" className="relative">
          <Hero />
        </section>
        <section id="projects" className="relative">
          <Projects />
        </section>
        <section id="contact" className="relative">
          <Contact />
        </section>
      </main>
    </div>
  );
}
