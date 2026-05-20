import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <h3 className="footer-brand-title">Thalapula Chitra</h3>
          <p className="footer-brand-desc">Aspiring Software Developer seeking web development & AI internships.</p>
        </div>

        <div className="footer-links">
          <h4 className="footer-section-title">Quick Links</h4>
          <ul className="footer-links-list">
            <li><a href="#home" onClick={(e) => handleLinkClick(e, 'home')}>Home</a></li>
            <li><a href="#about" onClick={(e) => handleLinkClick(e, 'about')}>About</a></li>
            <li><a href="#projects" onClick={(e) => handleLinkClick(e, 'projects')}>Projects</a></li>
            <li><a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')}>Contact</a></li>
          </ul>
        </div>

        <div className="footer-socials">
          <h4 className="footer-section-title">Connect</h4>
          <div className="social-icons">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-icon-link">
              <FiGithub />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon-link">
              <FiLinkedin />
            </a>
            <a href="mailto:tchitrayadav9@gmail.com" aria-label="Email" className="social-icon-link">
              <FiMail />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {currentYear} Thalapula Chitra. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
