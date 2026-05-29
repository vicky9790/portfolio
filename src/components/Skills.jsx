import React from 'react';
import { 
  Atom, 
  Code, 
  Palette, 
  FileJson, 
  Server, 
  Cpu, 
  Network, 
  Globe, 
  Database, 
  HardDrive, 
  GitBranch, 
  Coffee, 
  Binary, 
  Brain,
  Wind,
  Terminal,
  Layout
} from 'lucide-react';
import './Skills.css';

// Dynamic icon mapping to render components by string name
const iconMap = {
  Atom: <Atom size={18} />,
  Code: <Code size={18} />,
  Palette: <Palette size={18} />,
  FileJson: <FileJson size={18} />,
  Server: <Server size={24} />,
  Cpu: <Cpu size={18} />,
  Network: <Network size={18} />,
  Globe: <Globe size={18} />,
  Database: <Database size={18} />,
  HardDrive: <HardDrive size={18} />,
  GitBranch: <GitBranch size={18} />,
  Coffee: <Coffee size={18} />,
  Binary: <Binary size={18} />,
  Brain: <Brain size={18} />,
  Wind: <Wind size={18} />,
  Terminal: <Terminal size={18} />,
  Layout: <Layout size={24} />
};

const skillsCategories = [
  {
    title: 'Frontend Development',
    categoryIcon: 'Layout',
    skills: [
      { name: 'React.js', iconName: 'Atom' },
      { name: 'JavaScript (ES6+)', iconName: 'FileJson' },
      { name: 'HTML5', iconName: 'Code' },
      { name: 'CSS3', iconName: 'Palette' },
      { name: 'TailwindCSS', iconName: 'Wind' }
    ]
  },
  {
    title: 'Backend Engineering',
    categoryIcon: 'Server',
    skills: [
      { name: 'Node.js', iconName: 'Cpu' },
      { name: 'Express.js', iconName: 'Network' },
      { name: 'RESTful APIs', iconName: 'Globe' },
      { name: 'Python', iconName: 'Terminal' }
    ]
  },
  {
    title: 'Database & Cloud',
    categoryIcon: 'Database',
    skills: [
      { name: 'MongoDB', iconName: 'Database' },
      { name: 'MySQL', iconName: 'HardDrive' },
      { name: 'Git & GitHub', iconName: 'GitBranch' }
    ]
  },
  {
    title: 'Programming & Logic',
    categoryIcon: 'Layout', // Will use fallback or custom
    customIcon: <Binary size={24} />,
    skills: [
      { name: 'Java', iconName: 'Coffee' },
      { name: 'Data Structures (DSA)', iconName: 'Binary' },
      { name: 'Machine Learning', iconName: 'Brain' }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="section-header reveal">
        <h2 className="section-title">Core Expertise</h2>
        <p className="section-subtitle">A split of technologies and tools I use to build complete products.</p>
        <div className="section-divider"></div>
      </div>
      <div className="skills-categories-grid">
        {skillsCategories.map((category, index) => (
          <div 
            key={index} 
            className="skills-category-card glass-panel reveal" 
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className="category-header">
              <div className="category-icon-box">
                {category.customIcon || iconMap[category.categoryIcon]}
              </div>
              <h3 className="category-title">{category.title}</h3>
            </div>
            <div className="category-skills-list">
              {category.skills.map((skill, sIndex) => (
                <div key={sIndex} className="skill-item-badge">
                  <span className="skill-item-icon">
                    {iconMap[skill.iconName]}
                  </span>
                  <span className="skill-item-name">{skill.name}</span>
                </div>
              ))}
            </div>
            <div className="card-shine-effect"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
