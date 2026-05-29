import React from 'react';
import { ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';
import './Projects.css';
import restaurantImg from '../assets/Vicky\'s Restuarant.png';
import shopEaseImg from '../assets/ShopEase.png';
import attendanceImg from '../assets/SmartAttendance.png';
import goalGeneratorImg from '../assets/AI-Goal-Generator.png';
import omVilasImg from '../assets/OmVilasCondiments.png';

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

const projectsData = [
  {
    title: "Om Vilas Condiments",
    tech: ["React", "Node.js", "MongoDB", "Express", "JWT"],
    problemSolved: "Reconciling manual payments and managing orders offline is slow and error-prone for premium condiments brands.",
    features: [
      "Secure MERN authentication & admin tracking panel.",
      "Manual UPI payment gateway with pre-filled details.",
      "Vibrant glassmorphic product ordering catalog."
    ],
    liveLink: "https://omvilas-condiments.vercel.app/",
    githubLink: "https://github.com/vicky9790",
    image: omVilasImg
  },
  {
    title: "Vicky's Restaurant",
    tech: ["React", "Node.js", "Express", "MySQL"],
    problemSolved: "Local diners lack real-time digital menus and order status updates, decreasing engagement and kitchen efficiency.",
    features: [
      "Dynamic interactive menu with instant search & cart.",
      "Real-time food order tracking & processing dashboard.",
      "Relational schema for customer bookings & menu updates."
    ],
    liveLink: "https://vicky-restaurant.onrender.com/",
    githubLink: "https://github.com/vicky9790",
    image: restaurantImg
  },
  {
    title: "ShopEase",
    tech: ["HTML5", "CSS3", "JavaScript"],
    problemSolved: "Heavy framework-based storefronts cause slow load times on low-bandwidth networks for standard shopping catalogs.",
    features: [
      "Zero-dependency vanilla JavaScript performance architecture.",
      "High-speed client-side filtering and real-time search.",
      "Fully responsive styling matching premium e-commerce feels."
    ],
    liveLink: "https://vicky9790.github.io/shopEase/",
    githubLink: "https://github.com/vicky9790/shopEase",
    image: shopEaseImg
  },
  {
    title: "Smart Attendance System",
    tech: ["Node.js", "Express", "MongoDB", "JWT"],
    problemSolved: "Manual classroom attendance roll-calls waste valuable academic instruction time and permit student proxy submissions.",
    features: [
      "Secured session authentication for staff and administrators.",
      "Clean RESTful APIs for course addition and student registrations.",
      "Optimized query designs for high-speed record generation."
    ],
    liveLink: "https://github.com/vicky9790/smart_attendance",
    githubLink: "https://github.com/vicky9790/smart_attendance",
    image: attendanceImg
  },
  {
    title: "AI Goal Generator",
    tech: ["Python", "Gemini API", "React", "Node.js"],
    problemSolved: "Users struggle to break down abstract life ambitions into concrete, daily actionable milestones.",
    features: [
      "Generates customized periodic goals using Large Language Models.",
      "Interactive timeline UI mapping progressive goal achievements.",
      "Automated prompt-driven personal journaling & insights dashboard."
    ],
    liveLink: "https://github.com/vicky9790/AI-Journal-Goal-Generator",
    githubLink: "https://github.com/vicky9790/AI-Journal-Goal-Generator",
    image: goalGeneratorImg
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="section-header reveal">
        <h2 className="section-title">Selected Works</h2>
        <p className="section-subtitle">Real-world applications solving specific user friction points.</p>
        <div className="section-divider"></div>
      </div>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card glass-panel reveal" style={{ animationDelay: `${index * 0.15}s` }}>
            
            <div className="project-image-container">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="image-overlay-glow"></div>
            </div>

            <div className="project-info">
              
              {/* Tech Badges */}
              <div className="project-tags">
                {project.tech.map((t, i) => (
                  <span key={i} className="project-tag">{t}</span>
                ))}
              </div>

              <h3 className="project-title">{project.title}</h3>

              {/* Problem Statement Card */}
              <div className="problem-statement-card">
                <span className="problem-label">PROBLEM SOLVED</span>
                <p className="problem-text">{project.problemSolved}</p>
              </div>

              {/* Bulleted Features */}
              <div className="features-list-box">
                <span className="features-label">KEY FEATURES</span>
                <ul className="project-features-list">
                  {project.features.map((feat, i) => (
                    <li key={i}>
                      <CheckCircle2 size={14} className="bullet-check-icon" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTAs */}
              <div className="project-card-actions">
                <a 
                  href={project.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-card-primary"
                >
                  <ExternalLink size={16} />
                  <span>Live Demo</span>
                </a>
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-card-secondary"
                >
                  <Github size={16} />
                  <span>Source Code</span>
                </a>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
