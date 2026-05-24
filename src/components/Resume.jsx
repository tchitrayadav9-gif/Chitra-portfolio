import { motion } from 'framer-motion';
import { FiDownload, FiPrinter, FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub } from 'react-icons/fi';

const Resume = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="resume" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Curriculum Vitae</span>
          <h2 className="section-title">Resume</h2>
        </div>

        <div className="resume-buttons">
          <a href="#" className="btn btn-primary" onClick={(e) => { e.preventDefault(); alert("Resume PDF downloaded (simulation)."); }}>
            <FiDownload /> Download PDF
          </a>
          <button className="btn btn-secondary" onClick={handlePrint}>
            <FiPrinter /> Print / Save as PDF
          </button>
        </div>

        {/* ATS Resume Interactive Preview */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="resume-preview-card"
        >
          {/* Printable ATS Resume */}
          <div className="ats-resume" id="printable-resume">
            {/* Header */}
            <div className="resume-header">
              <h1 className="resume-h1">Thalapula Chitra</h1>
              <p className="resume-subtitle">B.Tech Computer Science Engineering Student</p>
              
              <div className="resume-contact-info">
                <span><FiMail /> tchitrayadav9@gmail.com</span>
                <span><FiPhone /> +91 91007 79916</span>
                <span><FiMapPin /> Hyderabad, India</span>
              </div>
              <div className="resume-socials-info">
                <span><FiLinkedin /> linkedin.com/in/thalapula-chitra</span>
                <span><FiGithub /> github.com/thalapula-chitra</span>
              </div>
            </div>

            {/* Objective */}
            <div className="resume-section">
              <h2 className="resume-section-title">Career Objective</h2>
              <p className="resume-section-p">
                Passionate and driven first-year Computer Science Engineering student with solid foundations in frontend web technologies, database design, and prompt engineering workflows. Eager to secure a software development or AI-focused internship to build scalable user interfaces, collaborate with engineering teams, and solve critical business challenges.
              </p>
            </div>

            {/* Education */}
            <div className="resume-section">
              <h2 className="resume-section-title">Education</h2>
              <div className="resume-item">
                <div className="resume-item-header">
                  <h3 className="resume-h3">B.Tech – Computer Science Engineering</h3>
                  <span className="resume-item-date">2025 – 2029 (Expected)</span>
                </div>
                <p className="resume-institution">Aurora University, Hyderabad</p>
                <p className="resume-item-details">
                  <strong>Relevant Coursework:</strong> Data Structures, Relational Databases (DBMS), Object-Oriented Programming (OOP), HTML5/CSS3, Modern JavaScript, Introduction to AI.
                </p>
              </div>
            </div>

            {/* Experience / Workshop */}
            <div className="resume-section">
              <h2 className="resume-section-title">Training & Internships</h2>
              <div className="resume-item">
                <div className="resume-item-header">
                  <h3 className="resume-h3">AI Agents 201: Hands-On Workshop</h3>
                  <span className="resume-item-date">2026</span>
                </div>
                <p className="resume-institution">NxtWave (Training Workshop)</p>
                <ul className="resume-bullets">
                  <li>Orchestrated custom AI Agents using advanced Prompt Engineering strategies to handle automated task routing.</li>
                  <li>Configured tools and system integrations using basic workflow frameworks to optimize developer pipelines.</li>
                  <li>Designed multi-agent collaboration structures to address automated diagnostic and recommendation issues.</li>
                </ul>
              </div>
            </div>

            {/* Projects */}
            <div className="resume-section">
              <h2 className="resume-section-title">Academic Projects</h2>
              <div className="resume-item">
                <div className="resume-item-header">
                  <h3 className="resume-h3">EventHive – Full-Stack Event Manager</h3>
                  <span className="resume-item-date">React.js, JavaScript, MySQL, Bootstrap</span>
                </div>
                <ul className="resume-bullets">
                  <li>Designed and built a responsive event planning interface enabling users to create and browse listings.</li>
                  <li>Implemented real-time event booking and seat counts tracking using back-end relational SQL structures.</li>
                  <li>Connected user inputs with clean validation checks to ensure reliable submission states.</li>
                </ul>
              </div>

              <div className="resume-item">
                <div className="resume-item-header">
                  <h3 className="resume-h3">Farmer Assistant – AI Chat Companion</h3>
                  <span className="resume-item-date">Python, React.js, SQLite, AI Integrations</span>
                </div>
                <ul className="resume-bullets">
                  <li>Built an interactive farmer guidance application providing localized crop and weather recommendations.</li>
                  <li>Engineered precise LLM prompt templates to output structured guidelines from variable input inputs.</li>
                  <li>Created a lightweight local SQLite database to store user queries and system response histories.</li>
                </ul>
              </div>
            </div>

            {/* Technical Skills */}
            <div className="resume-section">
              <h2 className="resume-section-title">Technical Skills</h2>
              <table className="resume-skills-table">
                <tbody>
                  <tr>
                    <td className="skills-table-label"><strong>Languages:</strong></td>
                    <td>JavaScript, Python, SQL, HTML5, CSS3</td>
                  </tr>
                  <tr>
                    <td className="skills-table-label"><strong>Frameworks:</strong></td>
                    <td>React.js, Bootstrap</td>
                  </tr>
                  <tr>
                    <td className="skills-table-label"><strong>Databases:</strong></td>
                    <td>MySQL, SQLite</td>
                  </tr>
                  <tr>
                    <td className="skills-table-label"><strong>Tools & Tech:</strong></td>
                    <td>Git, GitHub, VS Code, REST APIs, AI & Prompt Engineering</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
