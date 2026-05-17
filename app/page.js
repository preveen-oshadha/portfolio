'use client';

import Cursor from '../components/Cursor';
import ParticleCanvas from '../components/ParticleCanvas';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      {/* Fixed Elements */}
      <Cursor />
      <ParticleCanvas />

      {/* Page Structure */}
      <Header />

      <main>
        <Hero />
        <Marquee />
        <div className="section-divider" />
        <About />
        <div className="section-divider" />
        <Projects />
        <div className="section-divider" />
        <Skills />
        <div className="section-divider" />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
