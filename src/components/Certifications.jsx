import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiExternalLink } from 'react-icons/fi';

const certs = [
  {
    title: "AI Agents 201 Workshop",
    issuer: "NxtWave",
    date: "2026",
    credentialUrl: "https://example.com",
    desc: "Hands-on building and orchestration of automated AI Agents workflows and system integrations."
  },
  {
    title: "Web Development Fundamentals",
    issuer: "NxtWave",
    date: "2025",
    credentialUrl: "https://example.com",
    desc: "Comprehensive foundations in HTML5, CSS3, ES6 JavaScript, layouts (Flexbox/Grid), and database basics."
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Credentials</span>
          <h2 className="section-title">Certifications</h2>
        </div>

        <div className="certs-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {certs.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-card cert-card"
              style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
            >
              <div className="cert-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '15px' }}>
                <span className="cert-icon" style={{ fontSize: '2rem', color: 'var(--color-purple)' }}><FiAward /></span>
                <span className="cert-date" style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: '500' }}>{cert.date}</span>
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>{cert.title}</h3>
              <h4 style={{ fontSize: '0.95rem', color: 'var(--color-navy)', fontWeight: '600', marginBottom: '12px' }}>{cert.issuer}</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', flexGrow: 1, marginBottom: '20px' }}>{cert.desc}</p>
              
              <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm" style={{ alignSelf: 'flex-start' }}>
                <FiExternalLink /> Verify Credential
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
