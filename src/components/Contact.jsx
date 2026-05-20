import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiAlertCircle } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address";
    }
    if (!formData.subject.trim()) tempErrors.subject = "Subject is required";
    if (!formData.message.trim()) tempErrors.message = "Message cannot be empty";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Get In Touch</span>
          <h2 className="section-title">Contact Me</h2>
        </div>

        <div className="contact-grid">
          {/* Info Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="contact-info-column"
          >
            <h3 className="contact-info-title">Let's collaborate!</h3>
            <p className="contact-info-para">
              I am open to discussions about software engineering internships, frontend projects, or AI integrations. Drop me a line, and I will get back to you as soon as possible.
            </p>

            <div className="contact-details-list">
              <div className="contact-detail-item">
                <span className="contact-detail-icon"><FiMail /></span>
                <div>
                  <h4 className="contact-detail-label">Email</h4>
                  <a href="mailto:tchitrayadav9@gmail.com" className="contact-detail-link">tchitrayadav9@gmail.com</a>
                </div>
              </div>

              <div className="contact-detail-item">
                <span className="contact-detail-icon"><FiPhone /></span>
                <div>
                  <h4 className="contact-detail-label">Phone</h4>
                  <a href="tel:+919100779916" className="contact-detail-link">+91 91007 79916</a>
                </div>
              </div>

              <div className="contact-detail-item">
                <span className="contact-detail-icon"><FiMapPin /></span>
                <div>
                  <h4 className="contact-detail-label">Location</h4>
                  <span className="contact-detail-text">Hyderabad, Telangana, India</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card contact-form-card"
          >
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="contact-success-msg"
              >
                <h3>Thank you!</h3>
                <p>Your message has been sent successfully. I will get back to you shortly.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`form-input ${errors.name ? 'form-input-error' : ''}`}
                    placeholder="Your Name"
                  />
                  {errors.name && <span className="form-error-msg"><FiAlertCircle /> {errors.name}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`form-input ${errors.email ? 'form-input-error' : ''}`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && <span className="form-error-msg"><FiAlertCircle /> {errors.email}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`form-input ${errors.subject ? 'form-input-error' : ''}`}
                    placeholder="Internship Inquiry"
                  />
                  {errors.subject && <span className="form-error-msg"><FiAlertCircle /> {errors.subject}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className={`form-input ${errors.message ? 'form-input-error' : ''}`}
                    placeholder="Tell me about the opportunity..."
                  />
                  {errors.message && <span className="form-error-msg"><FiAlertCircle /> {errors.message}</span>}
                </div>

                <button type="submit" className="btn btn-primary btn-submit" style={{ width: '100%' }}>
                  <FiSend /> Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
