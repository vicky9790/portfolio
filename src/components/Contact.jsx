import React, { useState } from 'react';
import './Contact.css';

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
        <p className="section-subtitle">Interested in collaborating? Drop me a message or find me on social media.</p>
        <div className="section-divider"></div>
      </div>
      <div className="contact-container">
        <form 
          onSubmit={handleSubmit}
          className="contact-form glass-panel reveal" 
          style={{ animationDelay: '0.2s' }}
        >
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" placeholder="John Doe" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" placeholder="john@example.com" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" placeholder="Tell me about your project..." required></textarea>
          </div>
          <button type="submit" disabled={loading} className="btn btn-primary w-full">
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        {/* Toast Notification */}
        <div className={`toast-notification ${status ? 'show' : ''} ${status === 'SUCCESS' ? 'success' : 'error'}`}>
          {status === 'SUCCESS' 
            ? 'Message sent successfully! I will get back to you soon. ✨' 
            : status === 'ERROR' 
              ? 'Something went wrong. Please try again.' 
              : status}
        </div>

        <div className="contact-info reveal" style={{ animationDelay: '0.4s' }}>
          <div className="info-item">
            <h4 className="info-label">Email</h4>
            <a href="mailto:vigneshp140605@gmail.com" className="info-link">vigneshp140605@gmail.com</a>
          </div>
          <div className="info-item">
            <h4 className="info-label">LinkedIn</h4>
            <a href="https://www.linkedin.com/in/vignesh-p-35501034b/" target="_blank" rel="noreferrer" className="info-link">vignesh-p-35501034b</a>
          </div>
          <div className="info-item">
            <h4 className="info-label">GitHub</h4>
            <a href="https://github.com/vicky9790" target="_blank" rel="noreferrer" className="info-link">vicky9790</a>
          </div>
        </div>
      </div>

      <footer className="footer">
        <p className="footer-text">&copy; {new Date().getFullYear()} Vignesh P. All rights reserved.</p>
        <div className="footer-links">
          <a href="#hero">Home</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
