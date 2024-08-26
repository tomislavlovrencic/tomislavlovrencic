import React from 'react';
import { Timeline, TimelineItem, TimelineOppositeContent, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent } from '@mui/lab';
import { Typography } from '@mui/material';
import "./Experience.css"
import experienceData from './Data';

const Experience = () => {
  return (
    <section className="experience-container">
      <Timeline position="alternate-reverse">
        {experienceData.map((item, index) => (
          <TimelineItem key={index} className="timeline-item">
            <TimelineOppositeContent>
              <Typography variant="body2" color="textSecondary">
                {item.date}
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot className="timeline-dot" />
              <TimelineConnector className="timeline-connector" />
            </TimelineSeparator>
            <TimelineContent className="timeline-content">
              <Typography variant="h6" component="h1" className="timeline-title">
                {item.title}
              </Typography>
              <Typography variant="body2" className="timeline-subtitle">
                {item.subtitle}
              </Typography>
              <ul>
                {item.responsibilities.map((responsibility, idx) => (
                  <li key={idx}>{responsibility}</li>
                ))}
              </ul>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </section>
  );
}

export default Experience;
