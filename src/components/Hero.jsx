import React from 'react';
import { ArrowRight, Download, Mail } from 'lucide-react';
import profileImg from '../assets/vignesh.JPEG';
import resumePdf from '../assets/Vignesh_mernstack.pdf';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <span className="hero-badge reveal">Open to Opportunities</span>
          <h1 className="hero-title reveal" style={{ animationDelay: '0.2s' }}>
            Vignesh P
          </h1>
          <h2 className="hero-roles reveal" style={{ animationDelay: '0.3s' }}>
            Full Stack Developer <span className="divider">|</span> MERN Developer <span className="divider">|</span> Problem Solver
          </h2>
          <p className="hero-subtitle reveal" style={{ animationDelay: '0.4s' }}>
            Building scalable, high-performance web applications using React, Node.js, and modern backend systems.
          </p>
          <div className="hero-actions reveal" style={{ animationDelay: '0.6s' }}>
            <a href={resumePdf} className="btn btn-primary" download="Vignesh_MERN_Stack_Resume.pdf">
              <Download size={18} />
              <span>Download Resume</span>
            </a>
            <a href="#contact" className="btn btn-secondary">
              <Mail size={18} />
              <span>Hire Me</span>
            </a>
            <a href="#projects" className="btn btn-tertiary">
              <span>View Projects</span>
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
        <div className="hero-visual reveal" style={{ animationDelay: '0.8s' }}>
          <div className="profile-container">
            <div className="profile-border"></div>
            <img src={profileImg} alt="Vignesh P" className="profile-img" />
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
