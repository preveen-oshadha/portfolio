'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible');
        });
      },
      { threshold: 0.15 }
    );
    const reveals = sectionRef.current?.querySelectorAll('.reveal');
    reveals?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="glow-blob glow-3" style={{ position: 'absolute' }} />
      <div className="container">
        <div className="about-grid">
          {/* Image */}
          <div className="about-img-wrap reveal">
            <div className="about-avatar">
              <Image
                src="/about-photo.jpeg"
                alt="Oshadha Preveen — Graduation"
                fill
                style={{ objectFit: 'cover', objectPosition: 'top center' }}
                priority
              />
            </div>
            <div className="about-img-deco" />
            <div className="experience-badge">
              <div className="num">14+</div>
              <div className="lbl">Repositories</div>
            </div>
          </div>

          {/* Text */}
          <div className="about-text reveal" style={{ transitionDelay: '0.15s' }}>
            <div className="section-label">About Me</div>
            <h2 className="section-title">
              Crafting Code with <span>Purpose</span>
            </h2>
            <p>
              Hi, I&apos;m <strong style={{ color: 'var(--cyan)' }}>Oshadha Preveen</strong> — a passionate
              Full Stack Web &amp; Mobile App Developer from Sri Lanka. I love turning complex
              ideas into elegant, functional digital experiences that make a real difference.
            </p>
            <p>
              I specialize in building modern web applications with <strong style={{ color: 'var(--text)' }}>React</strong>,{' '}
              <strong style={{ color: 'var(--text)' }}>Next.js</strong>, and{' '}
              <strong style={{ color: 'var(--text)' }}>Node.js</strong>, as well as native Android
              apps with Java. Currently deepening my knowledge in{' '}
              <strong style={{ color: 'var(--violet)' }}>Golang</strong> and competitive programming.
            </p>
            <p>
              I&apos;m a self-learner, always exploring new technologies and looking to collaborate
              on impactful projects. Open to internships and exciting opportunities 🚀
            </p>

            <div className="about-tags">
              {[
                'React', 'Next.js', 'Java', 'Android', 'Firebase',
                'TypeScript', 'Node.js', 'MongoDB', 'MySQL', 'Docker',
                'Figma', 'PHP', 'Python', 'Golang', 'Redux',
              ].map((tag) => (
                <span className="tag" key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
