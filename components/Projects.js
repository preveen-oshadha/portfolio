'use client';
import { useEffect, useRef, useState } from 'react';

const projects = [
  {
    name: 'Property Exchanger',
    desc: 'Feature-rich Android mobile app for buying, selling, and managing properties in Sri Lanka. Built with Java & Firebase with real-time listings, user authentication, and location-based search.',
    tech: ['Java', 'Android', 'Firebase', 'Google Maps API'],
    cats: [{ label: 'Mobile', cls: 'mobile' }, { label: 'Java', cls: 'java' }],
    icon: '🏡',
    bg: 'linear-gradient(135deg, rgba(255,45,120,0.15), rgba(157,78,221,0.15))',
    github: 'https://github.com/preveen-oshadha/property_exchanger',
    featured: true,
  },
  {
    name: 'Chaterbox',
    desc: 'Real-time chat application built with Java featuring multi-user rooms, private messaging, and live notifications.',
    tech: ['Java', 'Sockets', 'Multithreading'],
    cats: [{ label: 'Java', cls: 'java' }, { label: 'Fullstack', cls: 'fullstack' }],
    icon: '💬',
    bg: 'linear-gradient(135deg, rgba(255,214,10,0.12), rgba(255,45,120,0.1))',
    github: 'https://github.com/preveen-oshadha/Chaterbox',
    featured: false,
  },
  {
    name: 'Healthcare Management System',
    desc: 'Comprehensive hospital management system with patient records, appointment scheduling, and doctor management built with Java EE.',
    tech: ['Java', 'JavaEE', 'Oracle DB', 'JSP'],
    cats: [{ label: 'Web', cls: 'web' }, { label: 'Java', cls: 'java' }],
    icon: '🏥',
    bg: 'linear-gradient(135deg, rgba(0,245,255,0.12), rgba(157,78,221,0.1))',
    github: 'https://github.com/preveen-oshadha/Healthcare-Management-System',
    featured: false,
  },
  {
    name: 'E-Commerce JAVA EE',
    desc: 'Full-featured e-commerce platform with product listings, cart management, user authentication, and order processing using Java EE.',
    tech: ['Java EE', 'CSS', 'MySQL', 'Hibernate'],
    cats: [{ label: 'Web', cls: 'web' }, { label: 'Fullstack', cls: 'fullstack' }],
    icon: '🛒',
    bg: 'linear-gradient(135deg, rgba(157,78,221,0.15), rgba(0,245,255,0.1))',
    github: 'https://github.com/preveen-oshadha/Ecommerce-JAVA-EE',
    featured: false,
  },
];

export default function Projects() {
  const sectionRef = useRef(null);
  const [filter, setFilter] = useState('All');
  const filters = ['All', 'Web', 'Mobile', 'Java'];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    const reveals = sectionRef.current?.querySelectorAll('.reveal');
    reveals?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const filtered = projects.filter((p) => {
    if (filter === 'All') return true;
    return p.cats.some((c) => c.label.toLowerCase() === filter.toLowerCase());
  });

  return (
    <section id="projects" className="projects" ref={sectionRef}>
      <div className="container">
        <div className="projects-header">
          <div className="reveal">
            <div className="section-label">My Work</div>
            <h2 className="section-title">
              Featured <span>Projects</span>
            </h2>
          </div>
          <div className="filter-tabs reveal" style={{ transitionDelay: '0.1s' }}>
            {filters.map((f) => (
              <button
                key={f}
                className={`filter-btn${filter === f ? ' active' : ''}`}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-grid">
          {filtered.map((project, i) => (
            <div
              key={project.name}
              className={`project-card reveal${project.featured && filter === 'All' ? ' featured' : ''}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="project-img">
                <div
                  className="project-img-inner"
                  style={{ background: project.bg }}
                >
                  <span style={{ fontSize: project.featured ? '5rem' : '3.5rem' }}>
                    {project.icon}
                  </span>
                </div>
                <div className="project-overlay">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-btn"
                    title="View on GitHub"
                  >
                    ⌥
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-btn"
                    title="Open Repository"
                  >
                    ↗
                  </a>
                </div>
              </div>

              <div className="project-body">
                <div className="project-cats">
                  {project.cats.map((c) => (
                    <span key={c.label} className={`cat-pill ${c.cls}`}>{c.label}</span>
                  ))}
                </div>
                <div className="project-name">{project.name}</div>
                <p className="project-desc">{project.desc}</p>
                <div className="project-tech">
                  {project.tech.map((t) => (
                    <span key={t} className="tech-dot">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="view-all-wrap reveal">
          <a
            href="https://github.com/preveen-oshadha"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            style={{ display: 'inline-flex', marginTop: '1rem' }}
          >
            View All on GitHub ↗
          </a>
        </div>
      </div>
    </section>
  );
}
