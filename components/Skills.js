'use client';
import { useEffect, useRef } from 'react';

const skillGroups = [
  {
    title: '🌐 Frontend',
    skills: [
      { name: 'React / Next.js', pct: 85 },
      { name: 'JavaScript / TypeScript', pct: 82 },
      { name: 'HTML5 / CSS3', pct: 90 },
      { name: 'React Native', pct: 72 },
      { name: 'Redux / React Query', pct: 70 },
    ],
  },
  {
    title: '⚙️ Backend & Mobile',
    skills: [
      { name: 'Java / Java EE', pct: 88 },
      { name: 'Android Development', pct: 80 },
      { name: 'Node.js', pct: 74 },
      { name: 'PHP', pct: 68 },
      { name: 'Python', pct: 65 },
    ],
  },
  {
    title: '🗄️ Database & Cloud',
    skills: [
      { name: 'Firebase', pct: 82 },
      { name: 'MySQL / Oracle', pct: 78 },
      { name: 'MongoDB', pct: 70 },
      { name: 'Google Cloud', pct: 60 },
      { name: 'SQLite', pct: 72 },
    ],
  },
  {
    title: '🎨 Design & Tools',
    skills: [
      { name: 'Figma / Adobe XD', pct: 76 },
      { name: 'Docker', pct: 60 },
      { name: 'Adobe Photoshop', pct: 65 },
      { name: 'Canva', pct: 80 },
      { name: 'Git / GitHub', pct: 85 },
    ],
  },
];

const techLogos = [
  { icon: '⚛️', label: 'React' },
  { icon: '▲', label: 'Next.js' },
  { icon: '☕', label: 'Java' },
  { icon: '🔥', label: 'Firebase' },
  { icon: '🟦', label: 'TypeScript' },
  { icon: '🤖', label: 'Android' },
  { icon: '🟢', label: 'Node.js' },
  { icon: '🐬', label: 'MySQL' },
  { icon: '🍃', label: 'MongoDB' },
  { icon: '🐳', label: 'Docker' },
  { icon: '🐘', label: 'PHP' },
  { icon: '🐍', label: 'Python' },
  { icon: '🎨', label: 'Figma' },
  { icon: '⚡', label: 'Redux' },
  { icon: '☁️', label: 'GCloud' },
  { icon: '📊', label: 'Oracle' },
];

export default function Skills() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const revealObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );

    const skillObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.style.width = e.target.dataset.width + '%';
            skillObs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    const reveals = sectionRef.current?.querySelectorAll('.reveal');
    reveals?.forEach((el) => revealObs.observe(el));
    const fills = sectionRef.current?.querySelectorAll('.skill-fill');
    fills?.forEach((el) => skillObs.observe(el));

    return () => { revealObs.disconnect(); skillObs.disconnect(); };
  }, []);

  return (
    <section id="skills" className="skills" ref={sectionRef}>
      <div className="container">
        <div className="reveal">
          <div className="section-label">Expertise</div>
          <h2 className="section-title">
            Skills &amp; <span>Technologies</span>
          </h2>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group, gi) => (
            <div
              key={group.title}
              className="skill-category reveal"
              style={{ transitionDelay: `${gi * 0.1}s` }}
            >
              <h3>{group.title}</h3>
              <div className="skill-list">
                {group.skills.map((skill) => (
                  <div className="skill-item" key={skill.name}>
                    <div className="skill-meta">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-pct">{skill.pct}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-fill"
                        data-width={skill.pct}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="tech-logos reveal" style={{ transitionDelay: '0.3s' }}>
          {techLogos.map((t) => (
            <div className="tech-logo-item" key={t.label}>
              <span className="icon">{t.icon}</span>
              <div className="label">{t.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
