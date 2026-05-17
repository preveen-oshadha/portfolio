'use client';
import { useEffect, useRef, useState } from 'react';

export default function Contact() {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    const mailtoLink = `mailto:preveenoshadha@gmail.com?subject=${encodeURIComponent(subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`From: ${name}\nEmail: ${email}\n\n${message}`)}`;
    window.location.href = mailtoLink;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  const contactLinks = [
    {
      icon: '📞',
      title: 'Phone / WhatsApp',
      val: '+94 77 027 1399',
      href: 'tel:+94770271399',
    },
    {
      icon: '✉️',
      title: 'Email',
      val: 'preveenoshadha@gmail.com',
      href: 'mailto:preveenoshadha@gmail.com',
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      val: 'oshadha-preveen-06707b3a6',
      href: 'https://www.linkedin.com/in/oshadha-preveen-06707b3a6/',
    },
    {
      icon: '🐙',
      title: 'GitHub',
      val: 'github.com/preveen-oshadha',
      href: 'https://github.com/preveen-oshadha',
    },
    {
      icon: '📸',
      title: 'Instagram',
      val: '@preveen_bhagya',
      href: 'https://www.instagram.com/preveen_bhagya/',
    },
    {
      icon: '👤',
      title: 'Facebook',
      val: 'oshada.preveen',
      href: 'https://web.facebook.com/oshada.preveen',
    },
  ];

  return (
    <section id="contact" className="contact" ref={sectionRef}>
      <div className="container">
        <div className="contact-wrap">
          <div className="contact-info reveal">
            <div className="section-label">Get In Touch</div>
            <h2 className="section-title">
              Let&apos;s <span>Connect</span>
            </h2>
            <p>
              Whether you have a project idea, an internship opportunity, or just want to say hello
              — I&apos;m always open to a conversation. Let&apos;s build something great together!
            </p>

            <div className="contact-links">
              {contactLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  className="contact-link-item"
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  <div className="contact-link-icon">{link.icon}</div>
                  <div className="contact-link-info">
                    <div className="title">{link.title}</div>
                    <div className="val">{link.val}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <form
            className="contact-form reveal"
            style={{ transitionDelay: '0.15s' }}
            onSubmit={handleSubmit}
          >
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Name</label>
                <input
                  className="form-input"
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input
                  className="form-input"
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Subject</label>
              <input
                className="form-input"
                type="text"
                name="subject"
                placeholder="Project Inquiry / Internship"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea
                className="form-textarea"
                name="message"
                placeholder="Tell me about your project or opportunity..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="submit-btn">
              {sent ? '✓ Opening Mail App' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
