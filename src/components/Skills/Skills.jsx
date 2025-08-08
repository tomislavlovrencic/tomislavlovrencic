import React from 'react';
import './Skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faJava, 
  faReact, 
  faPython, 
  faDocker,
  faGit,
  faGolang,
  faAws,
} from '@fortawesome/free-brands-svg-icons';

import { faDatabase, faCircleNodes, faCloudBolt, faTimeline, faCode, faChartBar } from '@fortawesome/free-solid-svg-icons';


function Skills() {
  const skills = [
    {
      category: 'Programming Languages',
      items: [
        { name: 'Java', level: 95, icon: faJava },
        { name: 'Golang', level: 85, icon: faGolang }, 
        { name: 'React', level: 60, icon: faReact },
        { name: 'Python', level: 80, icon: faPython },
        { name: 'SQL', level: 90, icon: faDatabase }, 
      ],
    },
    {
      category: 'Industry Software Skills',
      items: [
        { name: 'Kafka', level: 90, icon: faDatabase },
        { name: 'AWS', level: 80, icon: faAws },
        { name: 'Version Control (Git)', level: 95, icon: faGit },
        { name: 'Docker', level: 85, icon: faDocker },
        { name: 'Kubernetes', level: 80, icon: faCircleNodes },
        { name: 'Prometheus', level: 85, icon: faCloudBolt },
        { name: 'CI/CD', level: 90, icon: faTimeline },  
        { name: 'Terraform', level: 70, icon: faCode }, 
        { name: 'Grafana', level: 95, icon: faChartBar },   
      ],
    }
    
  ];

  const levelToLabel = (p) => (p >= 90 ? 'Expert' : p >= 75 ? 'Advanced' : p >= 60 ? 'Proficient' : 'Intermediate');

  return (
    <section className="skills-modern">
      {skills.map((group, gi) => (
        <div className="skill-group-card" key={gi}>
          <h4 className="skills-category-title">{group.category}</h4>
          <div className="skills-grid">
            {group.items.map((s, si) => (
              <div className="skill-card" key={si}>
                <div className="ring" style={{"--percent": `${s.level}%`}}>
                  <span className="ring-center">
                    <FontAwesomeIcon icon={s.icon} className="ring-icon" />
                  </span>
                </div>
                <div className="skill-meta">
                  <div className="skill-title-row">
                    <span className="skill-name">{s.name}</span>
                    <span className="skill-badge">{levelToLabel(s.level)}</span>
                  </div>
                  <div className="dots" aria-label={`Proficiency ${s.level}%`}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className={`dot ${s.level >= (i+1)*20 ? 'filled' : ''}`} />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Skills;
