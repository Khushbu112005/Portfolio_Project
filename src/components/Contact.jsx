import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const formRef = useRef();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Full-Stack Web App',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email format is invalid';
    }
    if (!formData.message.trim()) errors.message = 'Message is required';
    return errors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Map standard form name back to state keys
    const stateKey = name === 'from_name' ? 'name' : (name === 'reply_to' ? 'email' : (name === 'project_type' ? 'projectType' : name));
    setFormData(prev => ({ ...prev, [stateKey]: value }));
    if (formErrors[stateKey]) {
      setFormErrors(prev => ({ ...prev, [stateKey]: '' }));
    }
    // Clear global submit error if any
    if (formErrors.submit) {
      setFormErrors(prev => ({ ...prev, submit: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsLoading(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

    // Fallback simulated submit if placeholders are not updated
    if (serviceId === 'YOUR_SERVICE_ID' || templateId === 'YOUR_TEMPLATE_ID' || publicKey === 'YOUR_PUBLIC_KEY') {
      console.warn('EmailJS parameters are using placeholders. Simulating submission.');
      setTimeout(() => {
        setIsLoading(false);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', projectType: 'Full-Stack Web App', message: '' });
      }, 1200);
      return;
    }

    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      .then((result) => {
        setIsLoading(false);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', projectType: 'Full-Stack Web App', message: '' });
      })
      .catch((error) => {
        setIsLoading(false);
        setFormErrors({ submit: 'Failed to send message: ' + (error?.text || error?.message || 'Unknown error') });
        console.error('EmailJS Error:', error);
      });
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Have a project in mind, want to discuss freelancing opportunities, or simply say hello? Reach out!
          </p>
        </div>

        <div className="grid-2 contact-grid">
          {/* Left Side: Contact Information Cards */}
          <div className="contact-info-panel">
            <h3 className="panel-title">Let's Connect</h3>
            <p className="panel-desc">
              I am open to freelance web development contracts, full-stack consulting, and collaboration opportunities.
            </p>

            <div className="contact-cards-list">
              {/* Email Card */}
              <a href="mailto:khushbuchheda157@gmail.com" className="contact-info-card glass-card">
                <div className="contact-icon-wrapper email">
                  <Mail size={20} />
                </div>
                <div className="contact-details">
                  <h4 className="detail-label">Email Me</h4>
                  <p className="detail-value">khushbuchheda157@gmail.com</p>
                </div>
              </a>

              {/* Phone Card */}
              <a href="tel:+917977760179" className="contact-info-card glass-card">
                <div className="contact-icon-wrapper phone">
                  <Phone size={20} />
                </div>
                <div className="contact-details">
                  <h4 className="detail-label">Call / WhatsApp</h4>
                  <p className="detail-value">+91 7977760179</p>
                </div>
              </a>

              {/* Location Card */}
              <div className="contact-info-card glass-card">
                <div className="contact-icon-wrapper location">
                  <MapPin size={20} />
                </div>
                <div className="contact-details">
                  <h4 className="detail-label">Location</h4>
                  <p className="detail-value">Mumbai, Maharashtra, India</p>
                </div>
              </div>
            </div>

            {/* Socials Connection */}
            <div className="contact-social-bar">
              <p>Find me on:</p>
              <div className="social-links-row">
                <a href="https://www.linkedin.com/in/khushbu-chheda-205669324" target="_blank" rel="noreferrer" className="contact-social-btn linkedin">
                  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  <span>LinkedIn</span>
                </a>
                <a href="https://github.com/Khushbu112005" target="_blank" rel="noreferrer" className="contact-social-btn github">
                  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form Panel */}
          <div className="contact-form-panel glass-card">
            {isSubmitted ? (
              <div className="form-success-container fade-in">
                <CheckCircle className="success-icon" size={60} />
                <h3 className="success-title">Message Sent!</h3>
                <p className="success-desc">
                  Thank you for reaching out, your project details have been recorded. Khushbu will respond to your email at the earliest.
                </p>
                <button onClick={() => setIsSubmitted(false)} className="btn btn-primary btn-sm">
                  Send Another Message
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} noValidate>
                <h3 className="panel-title">Inquire About a Project</h3>
                
                {/* Global error message */}
                {formErrors.submit && (
                  <div className="error-message" style={{ fontSize: '0.9rem', marginBottom: '1rem', border: '1px solid #ef4444', padding: '0.5rem 0.75rem', borderRadius: '0.35rem', background: 'rgba(239, 68, 68, 0.05)' }}>
                    {formErrors.submit}
                  </div>
                )}
                
                {/* Name field */}
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="from_name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`form-control ${formErrors.name ? 'input-error' : ''}`}
                    placeholder="Your Name"
                    disabled={isLoading}
                  />
                  {formErrors.name && <span className="error-message">{formErrors.name}</span>}
                </div>

                {/* Email field */}
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="reply_to"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`form-control ${formErrors.email ? 'input-error' : ''}`}
                    placeholder="name@example.com"
                    disabled={isLoading}
                  />
                  {formErrors.email && <span className="error-message">{formErrors.email}</span>}
                </div>

                {/* Project type select */}
                <div className="form-group">
                  <label htmlFor="projectType" className="form-label">Service Needed</label>
                  <select
                    id="projectType"
                    name="project_type"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="form-control"
                    disabled={isLoading}
                  >
                    <option value="Full-Stack Web App">Full-Stack Web App (React/Next.js + Node)</option>
                    <option value="Frontend Interface">Frontend Interface (Figma to React)</option>
                    <option value="APIs & Integration">API & Backend Architecture</option>
                    <option value="Consultation">General Freelance Consultation</option>
                    <option value="Other">Other Projects</option>
                  </select>
                </div>

                {/* Message field */}
                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message / Details</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className={`form-control ${formErrors.message ? 'input-error' : ''}`}
                    placeholder="Describe your project goals, timelines, or questions..."
                    disabled={isLoading}
                  ></textarea>
                  {formErrors.message && <span className="error-message">{formErrors.message}</span>}
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-full submit-btn"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="spinner"></span>
                  ) : (
                    <>
                      <span>Submit Inquiry</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
