import React from 'react';
import { Calendar, Briefcase, ChevronRight } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: 'Web Developer Intern',
      company: 'Patel Infotech Services',
      period: 'Jan 2026 - Mar 2026',
      points: [
        'Engineered responsive and pixel-perfect frontend interfaces using React.js and JavaScript across multiple application modules.',
        'Integrated REST APIs with optimized request handling and caching strategies to improve frontend performance.',
        'Streamlined collaborative development workflows using Git branching and pull request management.'
      ],
      color: 'var(--color-primary)'
    },
    {
      role: 'Web Developer Intern',
      company: 'AI BI STREET Pvt. Ltd.',
      period: 'Jul 2025 - Dec 2025',
      points: [
        'Developed and enhanced responsive web application modules with performance optimization techniques.',
        'Diagnosed and resolved production-level frontend and backend bugs to improve system stability.',
        'Collaborated with engineering teams using Agile sprint workflows and Git version control.'
      ],
      color: 'var(--color-secondary)'
    }
  ];

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">
            Hands-on internship roles building real-world products and working in collaborative team structures.
          </p>
        </div>

        <div className="timeline">
          {experiences.map((exp, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-dot" style={{ backgroundColor: exp.color, boxShadow: `0 0 0 4px ${exp.color}33` }}></div>
              <div className="timeline-content">
                <div className="exp-header">
                  <div className="exp-title-area">
                    <h3 className="exp-role">{exp.role}</h3>
                    <h4 className="exp-company">{exp.company}</h4>
                  </div>
                  <div className="exp-date-badge">
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>
                </div>
                <ul className="exp-points-list">
                  {exp.points.map((pt, pIdx) => (
                    <li key={pIdx} className="exp-point">
                      <ChevronRight size={14} className="point-icon" style={{ color: exp.color }} />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
