import React from 'react';
import './Projects.css';
import restaurantImg from '../assets/Vicky\'s Restuarant.png';
import shopEaseImg from '../assets/ShopEase.png';
import attendanceImg from '../assets/SmartAttendance.png';
import goalGeneratorImg from '../assets/AI-Goal-Generator.png';
import omVilasImg from '../assets/OmVilasCondiments.png';


const projectsData = [
  {
    title: "Om Vilas Condiments",
    description: "Production-grade e-commerce platform for a premium condiments business. Features include glassmorphic UI, secure MERN authentication, manual UPI payment integration with pre-filled details, and a dynamic admin dashboard for order tracking and inventory management.",
    tags: ["React", "Node.js", "MongoDB", "Express", "JWT"],
    link: "https://omvilas-condiments.vercel.app/",
    image: omVilasImg
  },
  {
    title: "Vicky's Restaurant",
    description: "Full-stack food ordering platform with secure authentication, cart management, and real-time order tracking.",
    tags: ["React", "Node.js", "Express", "MySQL"],
    link: "https://vicky-restaurant.onrender.com/",
    image: restaurantImg
  },
  {
    title: "ShopEase",
    description: "E-commerce store with product filtering, search, and a responsive shopping interface.",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://vicky9790.github.io/shopEase/",
    image: shopEaseImg
  },
  {
    title: "Smart Attendance System",
    description: "Web-based management system for academic institutions using secure CRUD operations and JWT authentication.",
    tags: ["Node.js", "Express", "MongoDB", "JWT"],
    link: "https://github.com/vicky9790/smart_attendance",
    image: attendanceImg
  },
  {
    title: "AI Goal Generator",
    description: "Generative AI tool for creating personalized journal goals and tracking progress with smart insights.",
    tags: ["Python", "AI", "React", "Node.js"],
    link: "https://github.com/vicky9790/AI-Journal-Goal-Generator",
    image: goalGeneratorImg
  }

];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="section-header reveal">
        <h2 className="section-title">Selected Works</h2>
        <div className="section-divider"></div>
      </div>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card reveal" style={{ animationDelay: `${index * 0.2}s` }}>
            <div className="project-image-container">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-overlay">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  View Project
                </a>
              </div>
            </div>
            <div className="project-info">
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="project-tag">{tag}</span>
                ))}
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
