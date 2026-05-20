import React from 'react';
import { motion } from 'framer-motion';
import { FiCpu, FiCheckCircle } from 'react-icons/fi';

const Experience = () => {
  const points = [
    "Developed custom AI Agents and learned prompt engineering configurations.",
    "Designed and executed automation workflows utilizing API tool integration.",
    "Gained practical insights into AI agent-based system design and flow orchestration."
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Training & Experience</span>
          <h2 className="section-title">Experience</h2>
        </div>

        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="timeline-content"
            >
              <span className="timeline-date">Professional Training</span>
              <h3 className="timeline-title">AI Agents 201: Hands-On Workshop</h3>
              <h4 className="timeline-subtitle" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <FiCpu style={{ color: 'var(--color-purple)' }} /> NxtWave
              </h4>
              
              <ul style={{ listStyle: 'none', padding: 0, margin: '20px 0' }}>
                {points.map((pt, idx) => (
                  <li key={idx} style={{ 
                    display: 'flex', 
                    alignItems: 'flex-start', 
                    gap: '10px', 
                    marginBottom: '10px',
                    color: 'var(--text-secondary)'
                  }}>
                    <FiCheckCircle style={{ color: 'var(--color-purple)', marginTop: '4px', flexShrink: 0 }} />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>

              <div className="skills-acquired" style={{ marginTop: '20px' }}>
                <span style={{ fontWeight: '600', fontSize: '0.9rem', display: 'block', marginBottom: '8px' }}>
                  Core Competencies:
                </span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {["AI Agents", "Prompt Engineering", "AI Workflows", "Tool Integration", "Automation Basics"].map((tag, i) => (
                    <span key={i} className="tech-tag" style={{
                      padding: '4px 10px',
                      borderRadius: '4px',
                      backgroundColor: 'var(--bg-primary)',
                      border: '1px solid var(--border-color)',
                      fontSize: '0.8rem',
                      fontWeight: '500',
                      color: 'var(--color-purple)'
                    }}>{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
