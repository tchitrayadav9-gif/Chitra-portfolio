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
              <h4 className="timeline-subtitle">
                <FiCpu /> NxtWave
              </h4>
              
              <ul className="timeline-list">
                {points.map((pt, idx) => (
                  <li key={idx} className="timeline-list-item">
                    <FiCheckCircle />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
 
              <div className="skills-acquired">
                <span className="skills-acquired-label">
                  Core Competencies:
                </span>
                <div className="skills-acquired-tags">
                  {["AI Agents", "Prompt Engineering", "AI Workflows", "Tool Integration", "Automation Basics"].map((tag, i) => (
                    <span key={i} className="competency-tag">{tag}</span>
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
