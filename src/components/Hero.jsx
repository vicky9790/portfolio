import profileImg from '../assets/vignesh.JPEG';
import resumePdf from '../assets/Vignesh_mernstack.pdf';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <span className="hero-badge reveal">Building the Future of Web</span>
          <h1 className="hero-title reveal" style={{ animationDelay: '0.2s' }}>
            Vignesh P
          </h1>
          <p className="hero-subtitle reveal" style={{ animationDelay: '0.4s' }}>
            Fullstack Architect • Crafting Modern Digital Experiences
          </p>
          <div className="hero-actions reveal" style={{ animationDelay: '0.6s' }}>
            <a href="#projects" className="btn btn-primary">Discover My Work</a>
            <a href={resumePdf} className="btn btn-secondary" download="Vignesh_MERN_Stack_Resume.pdf">Download Resume</a>
            <a href="#contact" className="btn btn-secondary">Let's Connect</a>
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
