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

        <div className="certs-grid">
          {certs.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-card cert-card"
            >
              <div className="cert-header">
                <span className="cert-icon"><FiAward /></span>
                <span className="cert-date">{cert.date}</span>
              </div>
              <h3 className="cert-title">{cert.title}</h3>
              <h4 className="cert-issuer">{cert.issuer}</h4>
              <p className="cert-desc">{cert.desc}</p>
              
              <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm cert-btn">
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
