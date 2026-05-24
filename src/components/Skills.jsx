import { useState } from 'react';
import { motion } from 'framer-motion';
import { DiJavascript1, DiPython, DiMysql, DiCss3 } from 'react-icons/di';
import { SiSqlite, SiBootstrap, SiGit, SiGithub, SiReact, SiHtml5 } from 'react-icons/si';
import { FiCode, FiDatabase, FiSettings, FiGrid, FiCpu, FiTerminal } from 'react-icons/fi';

const skillCategories = [
  { id: 'all', label: 'All Skills' },
  { id: 'languages', label: 'Languages' },
  { id: 'frameworks-db', label: 'Frameworks & Databases' },
  { id: 'tools-domains', label: 'Tools & Domains' }
];

const skillsData = [
  // Languages
  { name: "JavaScript", category: "languages", icon: <DiJavascript1 />, level: 85 },
  { name: "Python", category: "languages", icon: <DiPython />, level: 80 },
  { name: "SQL", category: "languages", icon: <FiDatabase />, level: 75 },
  { name: "HTML5", category: "languages", icon: <SiHtml5 />, level: 90 },
  { name: "CSS3", category: "languages", icon: <DiCss3 />, level: 85 },
  // Frameworks & DB
  { name: "React.js", category: "frameworks-db", icon: <SiReact />, level: 80 },
  { name: "Bootstrap", category: "frameworks-db", icon: <SiBootstrap />, level: 85 },
  { name: "MySQL", category: "frameworks-db", icon: <DiMysql />, level: 75 },
  { name: "SQLite", category: "frameworks-db", icon: <SiSqlite />, level: 70 },
  // Tools & Domains
  { name: "Git", category: "tools-domains", icon: <SiGit />, level: 80 },
  { name: "GitHub", category: "tools-domains", icon: <SiGithub />, level: 85 },
  { name: "VS Code", category: "tools-domains", icon: <FiTerminal />, level: 90 },
  { name: "Frontend Dev", category: "tools-domains", icon: <FiCode />, level: 85 },
  { name: "UI/UX", category: "tools-domains", icon: <FiGrid />, level: 75 },
  { name: "REST APIs", category: "tools-domains", icon: <FiSettings />, level: 70 },
  { name: "AI & Prompt Eng", category: "tools-domains", icon: <FiCpu />, level: 80 }
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = activeCategory === 'all'
    ? skillsData
    : skillsData.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">What I bring to the table</span>
          <h2 className="section-title">Technical Skills</h2>
        </div>

        {/* Skill Filter Buttons */}
        <div className="skills-filter-container">
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`skills-filter-btn ${activeCategory === category.id ? 'active' : ''}`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div 
          layout
          className="skills-grid"
        >
          {filteredSkills.map((skill) => (
            <motion.div
              layout
              key={skill.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -3 }}
              className="glass-card skill-card"
            >
              <div className="skill-header">
                <span className="skill-icon">{skill.icon}</span>
                <span className="skill-name">{skill.name}</span>
                <span className="skill-level-percentage">{skill.level}%</span>
              </div>
              <div className="skill-progress-bg">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="skill-progress-bar"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
