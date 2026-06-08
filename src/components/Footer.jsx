import React from 'react';
import { Mail, Phone, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    const targetElement = document.getElementById(id);
    if (targetElement) {
      const offset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="footer-panel">
      <div className="container footer-container">
        {/* Upper footer */}
        <div className="footer-upper">
          <div className="footer-logo">
            <span className="logo-bracket">&lt;</span>
            <span className="logo-text">Khushbu</span>
            <span className="logo-accent">.</span>
            <span className="logo-bracket">/&gt;</span>
          </div>

          <nav className="footer-nav">
            <a href="#home" onClick={(e) => handleLinkClick(e, 'home')}>Home</a>
            <a href="#about" onClick={(e) => handleLinkClick(e, 'about')}>About</a>
            <a href="#services" onClick={(e) => handleLinkClick(e, 'services')}>Services</a>
            <a href="#projects" onClick={(e) => handleLinkClick(e, 'projects')}>Projects</a>
            <a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')}>Contact</a>
          </nav>

          <div className="footer-socials">
            <a href="https://github.com/Khushbu112005" target="_blank" rel="noreferrer" aria-label="GitHub">
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
            <a href="https://www.linkedin.com/in/khushbu-chheda-205669324" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="mailto:khushbuchheda157@gmail.com" aria-label="Email">
              <Mail size={18} />
            </a>
            <a href="tel:+917977760179" aria-label="Phone">
              <Phone size={18} />
            </a>
          </div>
        </div>

        {/* Lower footer */}
        <div className="footer-lower">
          <p className="copyright-text">
            &copy; {currentYear} Khushbu Chheda. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
