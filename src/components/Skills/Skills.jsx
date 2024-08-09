import React from 'react';
import './Skills.css';
import { LinearProgress, Box, Typography } from '@mui/material';

function Skills() {
  const skills = [
    {
      category: 'Programming Languages',
      items: [
        { name: 'Java', level: 95 },
        { name: 'Golang', level: 85 },
        { name: 'React', level: 60 },
        { name: 'Python', level: 80 },
        { name: 'SQL', level: 90 },
        { name: 'C++', level: 84 },
      ],
    },
    {
      category: 'Industry Software Skills',
      items: [
        { name: 'Kafka', level: 90 },
        { name: 'AWS', level: 80 },
        { name: 'Version Control (Git)', level: 95 },
        { name: 'Docker', level: 85 },
        { name: 'Mongo', level: 90 },
        { name: 'K8 (Kubernetes)', level: 80 },
        { name: 'Version Control (Git)', level: 95 },
        { name: 'Prometheus', level: 85 },
      ],
    },
    {
        category: 'Speaking Languages',
        items: [
          { name: 'Croatian', level: 100 },
          { name: 'English', level: 95 },
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
                <Typography variant="body1" className="skill-name">
                  {skill.name}
                </Typography>
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
