import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import './Experience.css';

const experienceData = [
  {
    role: "Associate Developer",
    company: "ZoflowX — Zoho Partner",
    location: "India",
    duration: "Jun 2026 - Present",
    type: "Full-time",
    summary: "Building AI-powered full-stack solutions and Zoho integrations, delivering intelligent automation and scalable web applications for diverse business clients.",
    bullets: [
      "Developing AI-driven features and intelligent automation workflows, leveraging LLMs and generative AI APIs to enhance business applications.",
      "Building and maintaining full-stack web applications using modern frameworks, ensuring end-to-end delivery from UI to backend services.",
      "Integrating Zoho ecosystem products (CRM, Creator, Catalyst) with custom solutions, streamlining client operations through API-driven architectures.",
      "Collaborating with cross-functional teams to architect scalable, production-grade systems that solve real-world business challenges."
    ]
  },
  {
    role: "MERN Stack Development Intern",
    company: "Besant Technologies",
    location: "Coimbatore, TN",
    duration: "Jun 2025 - May 2026",
    type: "Internship",
    summary: "Developed full-stack MERN applications, gaining hands-on experience building scalable web products from frontend to backend.",
    bullets: [
      "Built dynamic and reusable React.js components with state management using hooks, delivering responsive UIs across device formats.",
      "Designed and implemented RESTful APIs using Node.js and Express.js, handling authentication, routing, and CRUD operations.",
      "Worked with MongoDB to design flexible data schemas, write aggregation queries, and manage collections for real-world application features.",
      "Integrated frontend and backend systems end-to-end, debugging API responses and ensuring smooth data flow across the full MERN stack."
    ]
  },
  {
    role: "Web Developer Intern",
    company: "Novi Tech",
    location: "Coimbatore, TN",
    duration: "Dec 2024 - Feb 2025",
    type: "Internship",
    summary: "Contributed as a MERN developer building high-fidelity components and backend integrations.",
    bullets: [
      "Developed 15+ highly responsive interface components in React.js, optimizing responsiveness across mobile/tablet formats.",
      "Engineered secure and optimized RESTful APIs with Node.js and Express.js, connecting relational database structures.",
      "Improved database query performance through indexing, schema optimizations, and query profiling across MySQL and MongoDB."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="section-header reveal">
        <h2 className="section-title">Work Experience</h2>
        <p className="section-subtitle">Practical industry exposure that shaped my software engineering principles.</p>
        <div className="section-divider"></div>
      </div>

      <div className="timeline-container">
        <div className="timeline-line"></div>
        
        {experienceData.map((exp, index) => (
          <div 
            key={index} 
            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'} reveal`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            {/* Timeline Node Icon */}
            <div className="timeline-node-icon">
              <Briefcase size={18} />
            </div>

            {/* Content Card */}
            <div className="timeline-content glass-panel">
              <div className="timeline-header-box">
                <div>
                  <span className="experience-badge">{exp.type}</span>
                  <h3 className="experience-role">{exp.role}</h3>
                  <h4 className="experience-company">{exp.company}</h4>
                </div>
                <div className="experience-meta">
                  <div className="meta-row">
                    <Calendar size={14} />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="meta-row">
                    <MapPin size={14} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <p className="experience-summary">{exp.summary}</p>
              
              <ul className="experience-bullets">
                {exp.bullets.map((bullet, bIdx) => (
                  <li key={bIdx}>
                    <CheckCircle2 size={14} className="timeline-check-icon" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
