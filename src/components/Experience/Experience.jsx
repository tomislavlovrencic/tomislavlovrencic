import React from 'react';
import './Experience.css';

function Experience() {
  return (
    <section className="experience-container">
      <div className="experience-content">
        {/* Column 1 Title */}
        <h2 className="column-title">Work Experience</h2>
        {/* Column 2 Title */}
        <h2 className="column-title">Education</h2>

        {/* Column 1 */}
        <div className="experience-column">
          <div className="experience-item">
            <h2>Superbet</h2>
            <h3>Zagreb, July 2022–Present</h3>
            <p><strong>Software Development Engineer</strong></p>
            <ul>
              <li>Currently designing and implementing microservices across various domains as a backend developer at Superbet.</li>
              <li>Participated in the design and implementation of a new betting architecture, incorporating generic SDK plugins for efficient parallel bet handling, simplifying service integration.</li>
              <li>Directly identified and resolved two critical exploits in our core systems, thus saving the company significant financial resources.</li>
              <li>Managed the deployment of 20+ services for Superbet’s international expansion, adapting databases, message queues, and system architectures to meet diverse regional requirements.</li>
            </ul>
          </div>
          <div className="experience-item">
            <h2>Autodesk</h2>
            <h3>Zagreb, July 2020–July 2022</h3>
            <p><strong>Software Development Engineer</strong></p>
            <ul>
              <li>Contributed to the development of the world’s leading PLM software, enhancing its scalability and distribution capabilities.</li>
              <li>Implemented an efficient caching layer using Redis, significantly enhancing the PLM software’s performance. This strategic addition reduced data retrieval times by 40%.</li>
              <li>Achieved a 75% reduction in the loading time of the Autodesk home page by implementing parallel processing and optimizing tree node algorithms.</li>
            </ul>
          </div>
        </div>
        {/* Column 2 */}
        <div className="experience-column">
          <div className="experience-item">
            <h2>Infinum Academy</h2>
            <h3>Zagreb, July 2018–December 2018</h3>
            <p><strong>Android Developer</strong></p>
            <ul>
              <li>Completed a comprehensive program in Android development, focusing on Kotlin and Java, and acquired hands-on experience in mobile application development.</li>
            </ul>
          </div>
          <div className="experience-item">
            <h2>Faculty of Electrical Engineering and Computing</h2>
            <h3>Zagreb, September 2021–July 2023</h3>
            <p><strong>Master’s Degree in Computer Science</strong></p>
            <ul>
              <li>Developed and implemented a face recognition algorithm based on Adam Geitgey's approach. Achieved 100% recognition accuracy in controlled environments, demonstrating robustness against variations in light, contrast, and face poses.</li>
            </ul>
          </div>
          <div className="experience-item">
            <h2>Faculty of Electrical Engineering and Computing</h2>
            <h3>Zagreb, September 2018–July 2021</h3>
            <p><strong>Bachelor’s Degree in Computer Science</strong></p>
            <ul>
              <li>Explored the use of Generative Adversarial Networks (GANs) for colorizing black and white images. Analyzed the complex architecture of GANs and conducted iterative experimentation with various loss functions and optimization techniques to refine the model.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
