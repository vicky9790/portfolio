import React from 'react';
import './Skills.css';

const skillsData = [
  { name: 'React.js', category: 'Frontend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Express.js', category: 'Backend' },
  { name: 'MongoDB', category: 'Database' },
  { name: 'MySQL', category: 'Database' },
  { name: 'Python', category: 'Backend' },
  { name: 'Java', category: 'Backend' },
  { name: 'Machine Learning', category: 'Data' },
  { name: 'DSA', category: 'Tech' },
  { name: 'TailwindCSS', category: 'Frontend' },
  { name: 'HTML', category: 'Frontend' },
  { name: 'CSS', category: 'Frontend' }
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="section-header reveal">
        <h2 className="section-title">Core Expertise</h2>
        <div className="section-divider"></div>
      </div>
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-card reveal" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="skill-content">
              <span className="skill-category">{skill.category}</span>
              <h3 className="skill-name">{skill.name}</h3>
            </div>
            <div className="skill-border"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
