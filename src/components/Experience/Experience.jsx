import React from 'react';
import { Timeline, TimelineItem, TimelineOppositeContent, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent } from '@mui/lab';
import { Typography } from '@mui/material';
import "./Experience.css"

const experienceData = [
  {
    date: 'July 2022 – Present',
    title: 'Superbet',
    subtitle: 'Software Development Engineer',
    responsibilities: [
      'Currently designing and implementing microservices across various domains as a backend developer at Superbet.',
      'Participated in the design and implementation of a new betting architecture, incorporating generic SDK plugins for efficient parallel bet handling, simplifying service integration.',
      'Directly identified and resolved two critical exploits in our core systems, thus saving the company significant financial resources.',
      'Managed the deployment of 20+ services for Superbet’s international expansion, adapting databases, message queues, and system architectures to meet diverse regional requirements.',
    ],
  },
  {
    date: 'July 2020 – July 2022',
    title: 'Autodesk',
    subtitle: 'Software Development Engineer',
    responsibilities: [
      'Contributed to the development of the world’s leading PLM software, enhancing its scalability and distribution capabilities.',
      'Implemented an efficient caching layer using Redis, significantly enhancing the PLM software’s performance. This strategic addition reduced data retrieval times by 40%.',
      'Achieved a 75% reduction in the loading time of the Autodesk home page by implementing parallel processing and optimizing tree node algorithms.',
    ],
  },
  {
    date: 'September 2021 – July 2023',
    title: 'Faculty of Electrical Engineering and Computing',
    subtitle: 'Master’s Degree in Computer Science',
    responsibilities: [
      'Developed and implemented a face recognition algorithm based on Adam Geitgey\'s approach. Achieved 100% recognition accuracy in controlled environments, demonstrating robustness against variations in light, contrast, and face poses.',
    ],
  },
  {
    date: 'September 2018 – July 2021',
    title: 'Faculty of Electrical Engineering and Computing',
    subtitle: 'Bachelor’s Degree in Computer Science',
    responsibilities: [
      'Explored the use of Generative Adversarial Networks (GANs) for colorizing black and white images. Analyzed the complex architecture of GANs and conducted iterative experimentation with various loss functions and optimization techniques to refine the model.',
    ],
  },
  {
    date: 'July 2018 – December 2018',
    title: 'Infinum Academy',
    subtitle: 'Android Developer',
    responsibilities: [
      'Completed a comprehensive program in Android development, focusing on Kotlin and Java, and acquired hands-on experience in mobile application development.',
    ],
  },
];

const Experience = () => {
  return (
    <section className="experience-container">
      <Timeline position="alternate">
        {experienceData.map((item, index) => (
          <TimelineItem key={index}>
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
