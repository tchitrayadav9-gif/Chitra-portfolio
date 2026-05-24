import { motion } from 'framer-motion';
import { FiBookOpen, FiUsers, FiSliders, FiTrendingUp } from 'react-icons/fi';

const mindsets = [
  {
    icon: <FiTrendingUp />,
    title: "Quick Learner",
    description: "Rapidly absorb new tech stacks, tools, and methodologies to build efficient software systems."
  },
  {
    icon: <FiUsers />,
    title: "Team Collaboration",
    description: "Work effectively in cross-functional squads, communicating clearly and supporting peers."
  },
  {
    icon: <FiSliders />,
    title: "Adaptability",
    description: "Thrive in fast-paced environments and embrace changes in project scope, requirements, or tech."
  },
  {
    icon: <FiBookOpen />,
    title: "Continuous Learning",
    description: "Constantly expanding coding knowledge in full-stack development and AI applications."
  }
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Get to know me</span>
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="about-grid">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="about-story"
          >
            <h3 className="about-story-title">My Tech Journey & Objective</h3>
            <p className="about-story-para">
              I am Thalapula Chitra, pursuing my B.Tech in Computer Science Engineering at Aurora University (2025–2029). My fascination with technology began with a drive to understand how complex software applications are designed, built, and optimized.
            </p>
            <p className="about-story-para">
              My goal is to secure a software engineering internship where I can apply my web development and prompt engineering skills to real-world products. I am highly motivated by problem-solving and enjoy translating conceptual logic into functional web code.
            </p>
            <p className="about-story-para">
              Currently, I am diving deep into frontend architectures, relational database management systems, and automated workflows using AI agent integrations. I bring a strong growth mindset and structural discipline to every codebase I write.
            </p>
          </motion.div>

          <div className="about-mindset-grid">
            {mindsets.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-card mindset-card"
              >
                <div className="mindset-icon">{item.icon}</div>
                <h4 className="mindset-title">{item.title}</h4>
                <p className="mindset-desc">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
