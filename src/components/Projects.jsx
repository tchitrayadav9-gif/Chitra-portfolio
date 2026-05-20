import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCalendar, FiUser, FiCpu } from 'react-icons/fi';

const projects = [
  {
    id: 1,
    title: "EventHive",
    description: "A full-stack event management platform enabling users to create, browse, and register for events with real-time seat availability.",
    tech: ["React.js", "JavaScript", "MySQL", "Bootstrap"],
    features: ["Dynamic event listings", "Seat tracking", "Responsive UI", "Database integration"],
    github: "https://github.com",
    demo: "https://example.com",
    icon: <FiCalendar />,
    mockup: (
      <svg className="project-mockup-svg" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="240" rx="12" fill="var(--bg-tertiary)" />
        {/* Nav Bar Mockup */}
        <rect x="20" y="15" width="360" height="25" rx="6" fill="var(--bg-secondary)" stroke="var(--border-color)" />
        <circle cx="35" cy="27.5" r="4" fill="#ef4444" />
        <circle cx="47" cy="27.5" r="4" fill="#fbbf24" />
        <circle cx="59" cy="27.5" r="4" fill="#10b981" />
        <rect x="80" y="22" width="60" height="10" rx="3" fill="var(--text-muted)" opacity="0.3" />
        <rect x="310" y="20" width="50" height="14" rx="4" fill="var(--color-purple)" />
        {/* Main Interface */}
        <rect x="20" y="55" width="110" height="160" rx="8" fill="var(--bg-secondary)" stroke="var(--border-color)" />
        <rect x="145" y="55" width="235" height="75" rx="8" fill="var(--bg-secondary)" stroke="var(--border-color)" />
        <rect x="145" y="140" width="235" height="75" rx="8" fill="var(--bg-secondary)" stroke="var(--border-color)" />
        {/* Calendar details inside mockup */}
        <circle cx="45" cy="85" r="15" fill="var(--bg-primary)" />
        <rect x="70" y="78" width="50" height="6" rx="2" fill="var(--text-primary)" />
        <rect x="70" y="90" width="40" height="5" rx="2" fill="var(--text-muted)" opacity="0.6" />
        {/* Seat tags */}
        <rect x="160" y="70" width="100" height="10" rx="3" fill="var(--color-navy)" opacity="0.1" />
        <rect x="160" y="72" width="60" height="6" rx="2" fill="var(--color-navy)" />
        <rect x="300" y="68" width="65" height="16" rx="8" fill="rgba(16,185,129,0.15)" />
        <text x="310" y="79" fill="#10b981" fontSize="8" fontWeight="bold" fontFamily="sans-serif">Seats: 12 left</text>
      </svg>
    )
  },
  {
    id: 2,
    title: "Personal Portfolio Website",
    description: "A premium, responsive portfolio website showcasing engineering projects, academic credentials, and interactive skill dashboards.",
    tech: ["HTML5", "CSS3", "JavaScript", "Flexbox", "Grid"],
    features: ["Smooth animations", "Dark & Light modes", "Responsive grid layout", "Scroll reveals"],
    github: "https://github.com",
    demo: "https://example.com",
    icon: <FiUser />,
    mockup: (
      <svg className="project-mockup-svg" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="240" rx="12" fill="var(--bg-tertiary)" />
        {/* Browser Mockup */}
        <rect x="15" y="15" width="370" height="210" rx="8" fill="var(--bg-secondary)" stroke="var(--border-color)" />
        <line x1="15" y1="40" x2="385" y2="40" stroke="var(--border-color)" />
        <circle cx="30" cy="27" r="4" fill="var(--color-purple)" />
        <rect x="45" y="24" width="80" height="7" rx="3" fill="var(--text-muted)" opacity="0.4" />
        {/* Portfolio Layout */}
        <rect x="30" y="60" width="150" height="80" rx="6" fill="var(--bg-primary)" stroke="var(--border-color)" />
        <rect x="195" y="60" width="175" height="20" rx="4" fill="var(--bg-primary)" stroke="var(--border-color)" />
        <rect x="195" y="90" width="175" height="50" rx="4" fill="var(--bg-primary)" stroke="var(--border-color)" />
        {/* Code representation on card */}
        <rect x="40" y="75" width="80" height="8" rx="2" fill="var(--color-purple)" opacity="0.3" />
        <rect x="40" y="90" width="110" height="6" rx="2" fill="var(--text-muted)" opacity="0.5" />
        <rect x="40" y="102" width="60" height="6" rx="2" fill="var(--text-muted)" opacity="0.5" />
        {/* Bottom footer bar */}
        <rect x="30" y="165" width="340" height="40" rx="6" fill="var(--bg-primary)" stroke="var(--border-color)" />
      </svg>
    )
  },
  {
    id: 3,
    title: "Farmer Assistant Project",
    description: "An AI-powered agricultural helper providing farmers with smart guidelines, crop recommendations, and automated soil diagnostics via prompt engineering.",
    tech: ["Python", "React.js", "SQLite", "AI & Prompt Engineering"],
    features: ["Natural language assistant", "Smart crop advice", "Weather-guided prompts", "Interactive diagnosis dashboard"],
    github: "https://github.com",
    demo: "https://example.com",
    icon: <FiCpu />,
    mockup: (
      <svg className="project-mockup-svg" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="240" rx="12" fill="var(--bg-tertiary)" />
        {/* Mobile Mockup */}
        <rect x="110" y="15" width="180" height="210" rx="16" fill="var(--bg-secondary)" stroke="var(--border-color)" strokeWidth="2" />
        {/* Speaker and Camera */}
        <rect x="175" y="22" width="50" height="5" rx="2.5" fill="var(--border-color)" />
        <circle cx="235" cy="24.5" r="2.5" fill="var(--border-color)" />
        {/* Chat Bubbles */}
        <rect x="125" y="45" width="110" height="35" rx="12" fill="var(--bg-primary)" stroke="var(--border-color)" />
        <rect x="135" y="55" width="90" height="5" rx="2" fill="var(--text-secondary)" />
        <rect x="135" y="65" width="60" height="5" rx="2" fill="var(--text-muted)" opacity="0.6" />
        
        <rect x="165" y="90" width="110" height="35" rx="12" fill="var(--color-purple)" opacity="0.1" />
        <rect x="175" y="100" width="90" height="5" rx="2" fill="var(--color-purple)" />
        <rect x="175" y="110" width="50" height="5" rx="2" fill="var(--color-purple)" opacity="0.7" />

        <rect x="125" y="135" width="110" height="40" rx="12" fill="var(--bg-primary)" stroke="var(--border-color)" />
        <rect x="135" y="145" width="90" height="5" rx="2" fill="var(--text-secondary)" />
        <rect x="135" y="155" width="80" height="5" rx="2" fill="var(--text-muted)" opacity="0.6" />
        
        {/* Input Bar */}
        <rect x="125" y="185" width="150" height="24" rx="12" fill="var(--bg-primary)" stroke="var(--border-color)" />
        <circle cx="262" cy="197" r="6" fill="var(--color-purple)" />
      </svg>
    )
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">My Works</span>
          <h2 className="section-title">Featured Projects</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glass-card project-card"
            >
              <div className="project-mockup">
                {project.mockup}
              </div>

              <div className="project-info">
                <div className="project-title-area">
                  <span className="project-title-icon">{project.icon}</span>
                  <h3 className="project-card-title">{project.title}</h3>
                </div>
                <p className="project-card-desc">{project.description}</p>

                <div className="project-features-list">
                  <span className="features-label">Key Features:</span>
                  <ul className="project-features-ul">
                    {project.features.map((feature, fIdx) => (
                      <li key={fIdx}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-tech-tags">
                  {project.tech.map((tag, tIdx) => (
                    <span key={tIdx} className="tech-tag">{tag}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm">
                    <FiGithub /> GitHub
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                    <FiExternalLink /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
