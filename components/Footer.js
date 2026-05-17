export default function Footer() {
  const socials = [
    { label: 'GH', href: 'https://github.com/preveen-oshadha', title: 'GitHub' },
    { label: 'in', href: 'https://www.linkedin.com/in/oshadha-preveen-06707b3a6/', title: 'LinkedIn' },
    { label: 'IG', href: 'https://www.instagram.com/preveen_bhagya/', title: 'Instagram' },
    { label: 'FB', href: 'https://web.facebook.com/oshada.preveen', title: 'Facebook' },
    { label: 'TT', href: 'https://www.tiktok.com/@preveenbhagya', title: 'TikTok' },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <a href="#hero" className="footer-logo">
            oshadha<span>.</span>
          </a>
          <p className="footer-copy">
            © 2026 Oshadha Preveen. Built with <span>♥</span> and meaningful code.
          </p>
          <div className="social-links">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="social-link"
                title={s.title}
                target="_blank"
                rel="noopener noreferrer"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
