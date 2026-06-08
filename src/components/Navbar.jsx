import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Briefcase, User, Mail, Sparkles, Phone } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home', icon: Sparkles },
    { label: 'About', href: '#about', id: 'about', icon: User },
    { label: 'Services', href: '#services', id: 'services', icon: Briefcase },
    { label: 'Projects', href: '#projects', id: 'projects', icon: Code },
    { label: 'Contact', href: '#contact', id: 'contact', icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Background change on scroll
      setIsScrolled(window.scrollY > 20);

      // Section tracker for active styling
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 100; // Offset for accuracy

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offset = 80; // height of fixed navbar
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed-navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="logo-area">
          <span className="logo-bracket">&lt;</span>
          <span className="logo-text">Khushbu</span>
          <span className="logo-accent">.</span>
          <span className="logo-bracket">/&gt;</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
              >
                <Icon size={16} />
                <span>{link.label}</span>
              </a>
            );
          })}
          <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')} className="btn btn-secondary btn-sm nav-cta">
            Hire Me
          </a>
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="mobile-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${isMobileMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`mobile-nav-link ${activeSection === link.id ? 'active' : ''}`}
              >
                <Icon size={20} />
                <span>{link.label}</span>
              </a>
            );
          })}
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="btn btn-primary mobile-cta"
          >
            Hire Me
          </a>
        </nav>
      </div>
    </header>
  );
}
