import React, { useState } from 'react';
import { Mail, Phone, Send, CheckCircle } from 'lucide-react';
import './Contact.css';

const Github = ({ size = 20, className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = ({ size = 20, className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Contact = () => {
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const showToast = (message) => {
    setStatus(message);
    setTimeout(() => {
      setStatus('');
    }, 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const data = new FormData(form);
    
    try {
      const response = await fetch('https://formspree.io/f/xqegnroy', {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        showToast('SUCCESS');
        form.reset();
      } else {
        const errorData = await response.json();
        if (errorData.errors) {
          showToast(errorData.errors.map(err => err.message).join(", "));
        } else {
          showToast('ERROR');
        }
      }
    } catch (error) {
      showToast('ERROR');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-header reveal">
        <h2 className="section-title">Let's Connect</h2>
        <p className="section-subtitle">Interested in hiring or collaborating? Send a message directly or connect via social channels.</p>
        <div className="section-divider"></div>
      </div>
      
      <div className="contact-container">
        
        {/* Contact info channels (Left Side) */}
        <div className="contact-info-panel reveal" style={{ animationDelay: '0.2s' }}>
          
          <a href="mailto:vigneshp140605@gmail.com" className="contact-card glass-panel">
            <div className="contact-card-icon"><Mail size={22} /></div>
            <div className="contact-card-details">
              <span className="contact-card-label">Email</span>
              <span className="contact-card-value">vigneshp140605@gmail.com</span>
            </div>
          </a>

          <a href="https://www.linkedin.com/in/vignesh-p-35501034b/" target="_blank" rel="noreferrer" className="contact-card glass-panel">
            <div className="contact-card-icon"><Linkedin size={22} /></div>
            <div className="contact-card-details">
              <span className="contact-card-label">LinkedIn</span>
              <span className="contact-card-value">vignesh-p-35501034b</span>
            </div>
          </a>

          <a href="https://github.com/vicky9790" target="_blank" rel="noreferrer" className="contact-card glass-panel">
            <div className="contact-card-icon"><Github size={22} /></div>
            <div className="contact-card-details">
              <span className="contact-card-label">GitHub</span>
              <span className="contact-card-value">vicky9790</span>
            </div>
          </a>

        </div>

        {/* Contact Form (Right Side) */}
        <form 
          onSubmit={handleSubmit}
          className="contact-form glass-panel reveal" 
          style={{ animationDelay: '0.4s' }}
        >
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" placeholder="Tell me about your project or opportunity..." required></textarea>
          </div>
          <button type="submit" disabled={loading} className="btn btn-primary w-full">
            {loading ? 'Sending...' : 'Send Message'}
            <Send size={16} />
          </button>
        </form>

        {/* Toast Notification */}
        <div className={`toast-notification ${status ? 'show' : ''} ${status === 'SUCCESS' ? 'success' : 'error'}`}>
          {status === 'SUCCESS' 
            ? 'Message sent successfully! Vignesh will get back to you soon. ✨' 
            : status === 'ERROR' 
              ? 'Something went wrong. Please try again.' 
              : status}
        </div>

      </div>

      <footer className="footer">
        <p className="footer-text">&copy; {new Date().getFullYear()} Vignesh P. All rights reserved.</p>
        <div className="footer-links">
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
