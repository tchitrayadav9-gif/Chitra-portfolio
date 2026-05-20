import React from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen } from 'react-icons/fi';

const Education = () => {
  const courses = ["Data Structures", "DBMS", "OOP", "Web Technologies", "Introduction to AI"];

  return (
    <section id="education" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Academic Path</span>
          <h2 className="section-title">Education</h2>
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
              <span className="timeline-date">2025 – 2029</span>
              <h3 className="timeline-title">B.Tech – Computer Science Engineering</h3>
              <h4 className="timeline-subtitle">Aurora University</h4>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>
                Developing a comprehensive foundation in algorithms, systems design, object-oriented concepts, and AI development frameworks. Aiming to align academic learning with real-world industry requirements.
              </p>
              
              <div className="coursework-section">
                <span className="coursework-label" style={{ fontWeight: '600', fontSize: '0.9rem', display: 'block', marginBottom: '10px' }}>
                  Relevant Coursework:
                </span>
                <div className="coursework-badges" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {courses.map((course, idx) => (
                    <span key={idx} className="course-badge" style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '6px 12px',
                      borderRadius: '20px',
                      backgroundColor: 'var(--bg-primary)',
                      border: '1px solid var(--border-color)',
                      fontSize: '0.85rem',
                      fontWeight: '500',
                      color: 'var(--text-secondary)'
                    }}>
                      <FiBookOpen style={{ color: 'var(--color-purple)', fontSize: '0.85rem' }} /> {course}
                    </span>
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

export default Education;
