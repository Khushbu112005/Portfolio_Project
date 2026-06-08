import React, { useState, useEffect } from 'react';
import { Mail, ArrowRight, Terminal, Award, Briefcase } from 'lucide-react';

export default function Hero() {
  const roles = [
    'Full Stack Developer',
    'Computer Engineering Student',
    'Freelance Web Architect',
    'MERN Stack Enthusiast'
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let timer;
    const currentRole = roles[roleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        setTypingSpeed(100);

        if (displayText === currentRole) {
          // Pause at complete word
          timer = setTimeout(() => setIsDeleting(true), 1500);
          return;
        }
      } else {
        // Deleting
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        setTypingSpeed(50);

        if (displayText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    };

    timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, typingSpeed]);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
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
    <section id="home" className="section hero-section">
      <div className="glow-background" style={{ top: '10%', left: '15%' }}></div>
      <div className="glow-background" style={{ bottom: '20%', right: '10%', background: 'rgba(59, 130, 246, 0.15)' }}></div>

      <div className="container hero-container grid-2">
        {/* Hero Left Content */}
        <div className="hero-content">
          <div className="hero-badge badge badge-primary animate-float">
            <Terminal size={14} />
            <span>Welcome to my developer space</span>
          </div>

          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Khushbu Chheda</span>
          </h1>

          <div className="typing-container">
            <span className="role-text">{displayText}</span>
            <span className="cursor">|</span>
          </div>

          <p className="hero-desc">
            Computer Engineering Undergraduate and Results-driven Full Stack Developer. I build highly responsive frontend interfaces, optimized backend systems, and production-ready applications utilizing React.js, Next.js, Node.js, and databases. Let's transform your ideas into scalable web realities.
          </p>

          {/* Integrated Inline Stats Cards */}
          <div className="hero-stats-row">
            <div className="hero-stat-card glass-card">
              <Briefcase size={20} className="stat-icon-violet" />
              <div>
                <span className="stat-num">2+ Internships</span>
                <span className="stat-lbl">Patel Infotech & AI BI Street</span>
              </div>
            </div>
            <div className="hero-stat-card glass-card">
              <Award size={20} className="stat-icon-emerald" />
              <div>
                <span className="stat-num">8.86 CGPA</span>
                <span className="stat-lbl">SAKEC B.Tech Academic Score</span>
              </div>
            </div>
          </div>

          <div className="hero-actions">
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className="btn btn-primary"
            >
              <span>Hire For Freelance</span>
              <ArrowRight size={16} />
            </a>
            <a
              href="#projects"
              onClick={(e) => scrollToSection(e, 'projects')}
              className="btn btn-secondary"
            >
              <span>View Portfolio</span>
            </a>
          </div>

          {/* Social Icons */}
          <div className="hero-socials">
            <a href="https://github.com/Khushbu112005" target="_blank" rel="noreferrer" aria-label="GitHub" className="social-icon-btn">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
            <a href="https://www.linkedin.com/in/khushbu-chheda-205669324" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social-icon-btn">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="mailto:khushbuchheda157@gmail.com" aria-label="Email" className="social-icon-btn">
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Hero Right Content (Floating Developer Visual Card) */}
        <div className="hero-visual">
          <div className="editor-wrapper">
            <div className="glass-card coding-editor-card">
              <div className="editor-header">
                <span className="window-dot red"></span>
                <span className="window-dot yellow"></span>
                <span className="window-dot green"></span>
                <span className="editor-filename">KhushbuChheda.json</span>
              </div>
              <div className="editor-body">
                <pre>
                  <code>
{`{
  "name": "Khushbu Chheda",
  "education": {
    "college": "SAKEC (Mumbai)",
    "degree": "B.Tech in Computer Engineering",
    "cgpa": "8.86 / 10"
  },
  "current_focus": "Freelance Web Development",
  "technical_skills": {
    "frontend": ["React.js", "Next.js", "Redux"],
    "backend": ["Node.js", "Express.js", "FastAPI"],
    "databases": ["MongoDB", "MySQL", "Firestore"]
  },
  "availabile_for_freelance": true,
  "motto": "Build scalable, pixel-perfect products"
}`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
