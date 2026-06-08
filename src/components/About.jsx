import React, { useState } from 'react';
import { Award, Code2, GraduationCap, ChevronRight, Star } from 'lucide-react';

export default function About() {
  const [activeTab, setActiveTab] = useState('skills');

  const skillsData = [
    {
      category: 'Languages',
      skills: ['JavaScript (ES6+)', 'Python', 'Java', 'SQL', 'C', 'HTML5/CSS3']
    },
    {
      category: 'Frontend Frameworks',
      skills: ['React.js', 'Next.js', 'Redux Toolkit', 'Bootstrap']
    },
    {
      category: 'Backend & APIs',
      skills: ['Node.js', 'Express.js', 'FastAPI', 'Django', 'Flask']
    },
    {
      category: 'Databases & Cache',
      skills: ['MongoDB', 'MySQL', 'Firestore', 'Redis']
    },
    {
      category: 'DevOps & Cloud',
      skills: ['Firebase', 'AWS Basics', 'Docker', 'Vercel', 'GitHub Actions']
    },
    {
      category: 'AI / ML & Analysis',
      skills: ['Machine Learning', 'Scikit-learn', 'Power BI']
    }
  ];

  const certifications = [
    { name: 'Machine Learning with Python', issuer: 'YHILLS' },
    { name: 'Networking Basics', issuer: 'Cisco Networking Academy' },
    { name: 'Python, Java & C Training', issuer: 'Spoken Tutorial IIT Bombay' },
    { name: 'Data Science with Power BI', issuer: 'SAKEC SDP' }
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            A developer who bridges the gap between client requirements and high-performance, polished web code.
          </p>
        </div>

        <div className="grid-2 about-grid">
          {/* Left Bio Card */}
          <div className="about-bio glass-card">
            <h3 className="bio-title">Hello, I'm Khushbu</h3>
            <p className="bio-text">
              I am currently pursuing my B.Tech in Computer Engineering at SAKEC (Shah & Anchor Kutchhi Engineering College) with a current CGPA of 8.86/10. My passion lies in software development, particularly the MERN stack and Next.js, building clean codebases and interactive user interfaces.
            </p>
            <p className="bio-text">
              Having worked as a Web Developer Intern at two separate firms, I have built interfaces, integrated REST APIs, and managed agile workflows. This gives me a distinct advantage when freelancing, ensuring that my delivery is structured, secure, and ready for production.
            </p>

            <div className="education-box">
              <div className="edu-header">
                <GraduationCap className="edu-icon" size={24} />
                <div>
                  <h4 className="edu-title">B.Tech in Computer Engineering</h4>
                  <p className="edu-school">Shah & Anchor Kutchhi Engineering College</p>
                </div>
              </div>
              <div className="edu-meta">
                <span className="badge badge-primary">2023 - 2027</span>
                <span className="badge badge-accent">CGPA: 8.86/10</span>
              </div>
            </div>
          </div>

          {/* Right Tabs Section */}
          <div className="about-details">
            <div className="tab-buttons">
              <button
                className={`tab-btn ${activeTab === 'skills' ? 'active' : ''}`}
                onClick={() => setActiveTab('skills')}
              >
                <Code2 size={16} />
                <span>Technical Skills</span>
              </button>
              <button
                className={`tab-btn ${activeTab === 'certs' ? 'active' : ''}`}
                onClick={() => setActiveTab('certs')}
              >
                <Award size={16} />
                <span>Certifications</span>
              </button>
            </div>

            {/* Tab content: Skills */}
            {activeTab === 'skills' && (
              <div className="tab-pane active-pane fade-in">
                <div className="skills-grid">
                  {skillsData.map((group, idx) => (
                    <div key={idx} className="skill-category-card glass-card">
                      <h4 className="skill-category-title">{group.category}</h4>
                      <div className="skill-tags">
                        {group.skills.map((skill, sIdx) => (
                          <span key={sIdx} className="skill-tag">
                            <Star size={10} className="tag-star" />
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab content: Certifications */}
            {activeTab === 'certs' && (
              <div className="tab-pane active-pane fade-in">
                <div className="certs-list">
                  {certifications.map((cert, idx) => (
                    <div key={idx} className="cert-item glass-card">
                      <div className="cert-info">
                        <Award className="cert-icon" size={20} />
                        <div>
                          <h4 className="cert-name">{cert.name}</h4>
                          <p className="cert-issuer">{cert.issuer}</p>
                        </div>
                      </div>
                      <ChevronRight size={18} className="cert-arrow" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
