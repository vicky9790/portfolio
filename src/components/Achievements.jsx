import React from 'react';
import { Award, Code2, Rocket, HeartHandshake, ShieldCheck } from 'lucide-react';
import './Achievements.css';

const achievementsData = [
  {
    icon: <Code2 size={28} />,
    stat: "75+",
    label: "LeetCode Problems",
    description: "Actively solving algorithmic and logical challenges in Java and JavaScript to optimize problem-solving speed."
  },
  {
    icon: <Rocket size={28} />,
    stat: "5+",
    label: "Full Stack Projects",
    description: "Designed, engineered, and deployed complete end-to-end MERN (and MySQL) web applications."
  },
  {
    icon: <Award size={28} />,
    stat: "Honors",
    label: "Capstone Appreciation",
    description: "Smart Village 1.1 capstone received outstanding recognition from academic examiners and industry reviewers."
  },
  {
    icon: <ShieldCheck size={28} />,
    stat: "2x",
    label: "Industry Internships",
    description: "Practical developer roles at Novi Tech and Besant Technologies, working on real products and database schemas."
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="achievements-section">
      <div className="section-header reveal">
        <h2 className="section-title">Key Differentiators</h2>
        <p className="section-subtitle">Credibility metrics and academic milestones that reflect my coding dedication.</p>
        <div className="section-divider"></div>
      </div>

      <div className="achievements-grid">
        {achievementsData.map((item, index) => (
          <div 
            key={index} 
            className="achievement-card glass-panel reveal"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className="achievement-icon-box">
              {item.icon}
            </div>
            
            <div className="achievement-content">
              <span className="achievement-stat">{item.stat}</span>
              <h3 className="achievement-label">{item.label}</h3>
              <p className="achievement-desc">{item.description}</p>
            </div>
            
            <div className="achievement-glow"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
