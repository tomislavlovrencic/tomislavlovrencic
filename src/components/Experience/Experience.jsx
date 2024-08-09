import React from 'react';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent } from '@mui/lab';
import { Typography, Paper } from '@mui/material';
import './Experience.css';

function Experience() {
  return (
    <section className="experience-container">
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="body2" color="textSecondary">
              July 2022 – Present
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot className="timeline-dot" />
            <TimelineConnector className="timeline-connector" />
          </TimelineSeparator>
          <TimelineContent className="timeline-content">
            <Typography variant="h6" component="h1" className="timeline-title">
              Superbet
            </Typography>
            <Typography variant="body2" className="timeline-subtitle">
              Software Development Engineer
            </Typography>
            <ul>
              <li>Currently designing and implementing microservices across various domains as a backend developer at Superbet.</li>
              <li>Participated in the design and implementation of a new betting architecture, incorporating generic SDK plugins for efficient parallel bet handling, simplifying service integration.</li>
              <li>Directly identified and resolved two critical exploits in our core systems, thus saving the company significant financial resources.</li>
              <li>Managed the deployment of 20+ services for Superbet’s international expansion, adapting databases, message queues, and system architectures to meet diverse regional requirements.</li>
            </ul>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="body2" color="textSecondary">
              July 2020 – July 2022
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot className="timeline-dot" />
            <TimelineConnector className="timeline-connector" />
          </TimelineSeparator>
          <TimelineContent className="timeline-content">
            <Typography variant="h6" component="h1" className="timeline-title">
              Autodesk
            </Typography>
            <Typography variant="body2" className="timeline-subtitle">
              Software Development Engineer
            </Typography>
            <ul>
              <li>Contributed to the development of the world’s leading PLM software, enhancing its scalability and distribution capabilities.</li>
              <li>Implemented an efficient caching layer using Redis, significantly enhancing the PLM software’s performance. This strategic addition reduced data retrieval times by 40%.</li>
              <li>Achieved a 75% reduction in the loading time of the Autodesk home page by implementing parallel processing and optimizing tree node algorithms.</li>
            </ul>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="body2" color="textSecondary">
              September 2021 – July 2023
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot className="timeline-dot" />
            <TimelineConnector className="timeline-connector" />
          </TimelineSeparator>
          <TimelineContent className="timeline-content">
            <Typography variant="h6" component="h1" className="timeline-title">
              Faculty of Electrical Engineering and Computing
            </Typography>
            <Typography variant="body2" className="timeline-subtitle">
              Master’s Degree in Computer Science
            </Typography>
            <ul>
              <li>Developed and implemented a face recognition algorithm based on Adam Geitgey's approach. Achieved 100% recognition accuracy in controlled environments, demonstrating robustness against variations in light, contrast, and face poses.</li>
            </ul>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="body2" color="textSecondary">
              September 2018 – July 2021
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot className="timeline-dot" />
            <TimelineConnector className="timeline-connector" />
          </TimelineSeparator>
          <TimelineContent className="timeline-content">
            <Typography variant="h6" component="h1" className="timeline-title">
              Faculty of Electrical Engineering and Computing
            </Typography>
            <Typography variant="body2" className="timeline-subtitle">
              Bachelor’s Degree in Computer Science
            </Typography>
            <ul>
              <li>Explored the use of Generative Adversarial Networks (GANs) for colorizing black and white images. Analyzed the complex architecture of GANs and conducted iterative experimentation with various loss functions and optimization techniques to refine the model.</li>
            </ul>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="body2" color="textSecondary">
              July 2018 – December 2018
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot className="timeline-dot" />
            <TimelineConnector className="timeline-connector" />
          </TimelineSeparator>
          <TimelineContent className="timeline-content">
            <Typography variant="h6" component="h1" className="timeline-title">
              Infinum Academy
            </Typography>
            <Typography variant="body2" className="timeline-subtitle">
              Android Developer
            </Typography>
            <ul>
              <li>Completed a comprehensive program in Android development, focusing on Kotlin and Java, and acquired hands-on experience in mobile application development.</li>
            </ul>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </section>
  );
}

export default Experience;
