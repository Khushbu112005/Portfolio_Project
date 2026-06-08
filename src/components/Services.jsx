import React from 'react';
import { Layers, Database, Sparkles, CheckCircle2, MessageSquare } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'Full-Stack Web Applications',
      description: 'End-to-end custom web applications built using React/Next.js and Node.js/Express. Secure user login (JWT/NextAuth), database integration (MongoDB/SQL), and interactive administrative dashboards.',
      icon: Layers,
      color: 'var(--color-primary)',
      badge: 'Most Popular'
    },
    {
      title: 'Pixel-Perfect Frontend Development',
      description: 'Translating UI/UX mockups (Figma, Adobe XD) into high-fidelity, responsive, and cross-browser compatible websites. Built with clean CSS variables, hover micro-interactions, and animations.',
      icon: Sparkles,
      color: 'var(--color-accent)',
      badge: 'Fast Delivery'
    },
    {
      title: 'Backend, APIs & Cloud Systems',
      description: 'Robust RESTful API design, database schemas, and backend scripting using Node.js, Express, or FastAPI. Cloud configuration with Firebase, serverless functions, and secure database storage.',
      icon: Database,
      color: 'var(--color-secondary)',
      badge: 'Secure'
    }
  ];

  const highlights = [
    'Pixel-perfect responsiveness for mobile, tablet, and desktop',
    'Optimized database queries and API caching for speed',
    'Version control via Git and collaborative team workflows',
    'Security focused (JWT, Bcrypt hashing, role authorization)',
    'Clean, commented, and easily-maintainable codebase'
  ];

  const scrollToContact = (e) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="services" className="section services-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Freelance Services</h2>
          <p className="section-subtitle">
            Providing production-ready engineering solutions designed to fit your unique project specifications.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid-3 services-grid">
          {services.map((svc, idx) => {
            const Icon = svc.icon;
            return (
              <div key={idx} className="service-card glass-card">
                <div className="service-icon-box" style={{ color: svc.color, backgroundColor: `${svc.color}15` }}>
                  <Icon size={24} />
                </div>
                <span className="service-badge badge badge-primary">{svc.badge}</span>
                <h3 className="service-title">{svc.title}</h3>
                <p className="service-desc">{svc.description}</p>
              </div>
            );
          })}
        </div>

        {/* Value Proposition Row */}
        <div className="services-highlights glass-card">
          <div className="grid-2 highlights-grid">
            <div className="highlights-content">
              <h3 className="highlights-title">Why work with me?</h3>
              <p className="highlights-desc">
                I combine my rigorous computer engineering training with hands-on internship experience. I don't just build sites that look good; I write secure, optimized, and developer-friendly code that scales.
              </p>
              <ul className="highlights-list">
                {highlights.map((item, idx) => (
                  <li key={idx} className="highlight-item">
                    <CheckCircle2 size={16} className="highlight-icon" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="highlights-cta">
              <div className="cta-box">
                <MessageSquare className="cta-icon text-accent-glow" size={32} />
                <h3>Have a project in mind?</h3>
                <p>Let's map out your design, flow, and development timelines. Free consulting call!</p>
                <a href="#contact" onClick={scrollToContact} className="btn btn-accent">
                  Let's Talk Business
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
