import React from 'react';
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
          <p className="about-text">
            I am a <strong>results-driven Full Stack Developer</strong> with a passion for building 
            scalable, high-performance web applications. Currently pursuing my <strong>B.E. in Computer Science</strong> 
            at Arjun College of Technology, I have maintained a strong academic record (CGPA: 8.1) while 
            honing my technical expertise through real-world projects and internships.
          </p>
          <p className="about-text">
            My core strength lies in the <strong>MERN stack</strong>, where I've delivered end-to-end 
            applications featuring secure authentication, RESTful API integration, and responsive 
            user interfaces. I am deeply committed to writing clean, well-documented code and 
            following professional SDLC practices.
          </p>
          <p className="about-text">
            With internships at <strong>Besant Technologies</strong> and <strong>Novi Tech</strong>, 
            I've gained hands-on experience in both frontend and backend development, ranging from 
            React component architecture to optimized MySQL database design.
          </p>
          <div className="about-details-grid">
            <div className="detail-item">
              <span className="detail-label">Location</span>
              <span className="detail-value">Coimbatore, Tamil Nadu</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Education</span>
              <span className="detail-value">B.E. Computer Science</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Experience</span>
              <span className="detail-value">MERN Stack Intern</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Available for</span>
              <span className="detail-value">Full-time / Internship</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
