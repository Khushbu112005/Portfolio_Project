import React, { useState } from 'react';
import { ExternalLink, FolderGit2 } from 'lucide-react';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      title: 'Taché',
      subtitle: 'Full Stack E-Commerce Art Platform',
      date: 'April 2026',
      tag: 'nextjs',
      description: 'A scalable and digital art marketplace allowing users to browse, buy, and list digital art masterpieces.',
      details: [
        'Built a scalable digital art marketplace using Next.js App Router with server-side rendering.',
        'Implemented secure role-based authentication using NextAuth and JWT.',
        'Integrated MongoDB to store user details, artwork data, and orders efficiently in a flexible NoSQL database.'
      ],
      technologies: ['Next.js', 'React.js', 'MongoDB', 'NextAuth', 'JWT', 'Tailwind CSS'],
      github: 'https://github.com/Khushbu112005',
      demo: 'https://tache-art.vercel.app/'
    },
    {
      title: 'InstaVibe',
      subtitle: 'Social Media Web App',
      date: 'Sept 2025',
      tag: 'mern',
      description: 'A full-featured social media platform supporting media shares, user interaction, and instant messaging.',
      details: [
        'Developed a full-stack social media platform supporting posts, comments, likes, and messaging.',
        'Implemented JWT authentication and Bcrypt hashing for secure user authentication.',
        'Integrated Cloudinary for optimized image upload and media delivery.'
      ],
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Cloudinary', 'REST APIs'],
      github: 'https://github.com/Khushbu112005',
      demo: 'https://instavibe-khushbu.web.app/'
    },
    {
      title: 'Gas Agency Management System',
      subtitle: 'Real-Time Gas Booking & Delivery Tracker',
      date: 'July 2025',
      tag: 'firebase',
      description: 'A dual-dashboard system for gas booking, booking reviews, delivery logs, and notification flows.',
      details: [
        'Built a real-time gas booking and delivery tracking platform with separate admin and customer dashboards.',
        'Implemented Firebase Authentication and Firestore real-time listeners.',
        'Automated delivery status notifications using Firebase Cloud Functions.'
      ],
      technologies: ['React.js', 'Firebase', 'Firestore', 'Cloud Functions', 'CSS Grid'],
      github: 'https://github.com/Khushbu112005',
      demo: 'https://gasflow-os.web.app/'
    }
  ];

  const filters = [
    { label: 'All Projects', id: 'all' },
    { label: 'Next.js / SSR', id: 'nextjs' },
    { label: 'MERN Stack', id: 'mern' },
    { label: 'Firebase / Realtime', id: 'firebase' }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.tag === activeFilter);

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A selection of recent applications demonstrating web engineering capabilities, security, and performance.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="project-filters">
          {filters.map(f => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`filter-btn ${activeFilter === f.id ? 'active' : ''}`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid grid-3">
          {filteredProjects.map((proj, idx) => (
            <div key={idx} className="project-card glass-card fade-in">
              <div className="project-card-header">
                <div className="project-icon-wrapper">
                  <FolderGit2 className="project-folder-icon" size={24} />
                </div>
                <div className="project-links">
                  <a href={proj.github} target="_blank" rel="noreferrer" title="View Code" className="project-link-btn">
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  </a>
                  <a href={proj.demo} target="_blank" rel="noreferrer" title="Live Demo" className="project-link-btn">
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>

              <div className="project-card-body">
                <span className="project-date">{proj.date}</span>
                <h3 className="project-card-title">{proj.title}</h3>
                <h4 className="project-card-subtitle">{proj.subtitle}</h4>
                <p className="project-desc">{proj.description}</p>
                
                <ul className="project-bullets-list">
                  {proj.details.map((detail, dIdx) => (
                    <li key={dIdx}>{detail}</li>
                  ))}
                </ul>
              </div>

              <div className="project-card-footer">
                <div className="project-tech-tags">
                  {proj.technologies.map((tech, tIdx) => (
                    <span key={tIdx} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
