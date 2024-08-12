import React from 'react';
import './Skills.css';
import { LinearProgress, Box, Typography } from '@mui/material';
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

import { faDatabase, faCircleNodes, faCloudBolt } from '@fortawesome/free-solid-svg-icons';


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
      ],
    },
  ];

  return (
    <section className="skills-container">
      {skills.map((skillGroup, index) => (
        <div className="skills-group" key={index}>
          <Typography variant="h5" className="skills-category-title">
            {skillGroup.category}
          </Typography>
          {skillGroup.items.map((skill, idx) => (
            <Box key={idx} className="skill-item">
              <Box className="skill-info">
                <Box className="skill-name-icon">
                  <FontAwesomeIcon icon={skill.icon} className="skill-icon" />
                  <Typography variant="body1" className="skill-name">
                    {skill.name}
                  </Typography>
                </Box>
                <Typography variant="body1" className="skill-level">
                  {skill.level}%
                </Typography>
              </Box>
              <LinearProgress
                variant="determinate"
                value={skill.level}
                className="skill-bar"
              />
            </Box>
          ))}
        </div>
      ))}
    </section>
  );
}

export default Skills;
