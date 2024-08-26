import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="name-container">
        <h1 className="home-firstname">Tomislav</h1>
        <h1 className="home-lastname">Lovrenčić</h1>
        <div className="description-container">
          <p className="home-description">
            <span className="highlight">Software Developer</span> with a strong foundation in <span className="highlight">Java</span>, <span className="highlight">Golang</span>, <span className="highlight">JavaScript</span>, and <span className="highlight">React</span>. My expertise lies in designing and implementing scalable microservices, optimizing system architectures, and enhancing software performance. I have a proven track record of identifying and resolving critical system issues, and I’m always eager to go the extra mile.
          </p>
          <div className="button-container">
            <a href="#!" className="custom-button">Download CV</a>
            <a href="#!" className="custom-button">GitHub</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
