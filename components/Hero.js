'use client';

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="hero" className="hero">
      <div className="glow-blob glow-1" />
      <div className="glow-blob glow-2" />

      <div className="hero-grid">
        {/* Left — Text */}
        <div className="hero-content">
          <div className="hero-badge">
            🚀 Available for Opportunities
          </div>

          <h1 className="hero-title">
            <span className="line1">I'm Oshadha</span>
            <span className="line2">Preveen</span>
            <span className="line3">Softwera Engeneer</span>
          </h1>

          <p className="hero-desc">
            Web &amp; Mobile App Developer from Sri Lanka 🇱🇰 — crafting meaningful digital
            experiences with clean code, creative UI, and a passion for learning every day.
          </p>

          <div className="hero-btns">
            <a
              href="#projects"
              className="btn-primary"
              onClick={(e) => { e.preventDefault(); scrollTo('projects'); }}
            >
              View Projects <span>→</span>
            </a>
            <a
              href="#contact"
              className="btn-outline"
              onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Right — Video */}
        <div className="hero-visual">
          <span className="float-tag">React &amp; Next.js</span>
          <span className="float-tag">Java · Android</span>
          <span className="float-tag">Firebase &amp; Cloud</span>

          <div className="hero-video-wrap">
            <video
              className="hero-video"
              autoPlay
              muted
              loop
              playsInline
              src="/hero-video.mp4"
            />
            <div className="video-overlay" />
            <div className="video-badge">
              🌱 Growing &amp; Building Every Day
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
