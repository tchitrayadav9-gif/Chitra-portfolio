import React from 'react';
import { motion } from 'framer-motion';
import { FiTrendingUp, FiActivity, FiCpu } from 'react-icons/fi';

const achievements = [
  {
    title: "100+ DSA Coding Problems",
    metric: "Algorithm Practice",
    desc: "Solved 100+ algorithmic and data structure problems on platforms like LeetCode and HackerRank, focusing on arrays, strings, and search algorithms.",
    icon: <FiTrendingUp />
  },
  {
    title: "Hackathon Idea Pitch",
    metric: "AI Integration",
    desc: "Presented an innovative crop-selection AI model assistant concept in a college-level developer hackathon, receiving positive reviews from panel judges.",
    icon: <FiCpu />
  },
  {
    title: "Top Performer in CS Labs",
    metric: "Academic Excellence",
    desc: "Ranked in the top tier of students in the early introductory programming and web technologies laboratory labs for code quality and execution speed.",
    icon: <FiActivity />
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Milestones</span>
          <h2 className="section-title">Key Achievements</h2>
        </div>

        <div className="achievements-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-card achievement-card"
              style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}
            >
              <div className="achievement-icon" style={{
                fontSize: '1.5rem',
                color: '#ffffff',
                backgroundColor: 'var(--color-purple)',
                padding: '12px',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {item.icon}
              </div>
              <div>
                <span className="achievement-metric" style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-navy)', fontWeight: '600', display: 'block', marginBottom: '4px' }}>
                  {item.metric}
                </span>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
