import React from 'react';
import { MapPin, GraduationCap, Briefcase, Zap } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="section-header reveal">
        <h2 className="section-title">About Me</h2>
        <div className="section-divider"></div>
      </div>
      <div className="about-content">
        <div className="about-text-container glass-panel reveal">
          <p className="about-text highlight">
            I am a <strong>Full Stack Developer</strong> passionate about building real-world applications using React, Node.js, and databases. I enjoy solving problems, learning backend systems, and building scalable products.
          </p>
          <p className="about-text">
            Completed B.E. in Computer Science at Arjun College of Technology (CGPA: 8.1), with a strong focus on full-stack development and scalable application design. I have developed impactful projects including <strong>Smart Village 1.1</strong>, restaurant ordering platforms, and complete e-commerce systems.
          </p>
          <p className="about-text">
            Through practical internship experience, I've honed my capacity to write clean, modular code, design robust database architectures, and deliver highly responsive digital solutions.
          </p>
          
          <div className="about-details-grid">
            <div className="detail-item">
              <div className="detail-icon"><MapPin size={20} /></div>
              <div>
                <span className="detail-label">Location</span>
                <span className="detail-value">Coimbatore, Tamil Nadu</span>
              </div>
            </div>
            <div className="detail-item">
              <div className="detail-icon"><GraduationCap size={20} /></div>
              <div>
                <span className="detail-label">Education</span>
                <span className="detail-value">B.E. Computer Science (CGPA: 8.1)</span>
              </div>
            </div>
            <div className="detail-item">
              <div className="detail-icon"><Briefcase size={20} /></div>
              <div>
                <span className="detail-label">Experience</span>
                <span className="detail-value">MERN Stack Intern</span>
              </div>
            </div>
            <div className="detail-item">
              <div className="detail-icon"><Zap size={20} /></div>
              <div>
                <span className="detail-label">Available for</span>
                <span className="detail-value">Full-Time SWE Roles</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
