import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="name-container">
        <h1 className="home-firstname">Tomislav</h1>
        <h1 className="home-lastname">Lovrenčić</h1>
      </div>
      <div className="description-container">
        <p className="home-description">
          I'm a <span className="highlight">Software Engineer</span> experienced in <span className="highlight">Java</span>, <span className="highlight">Golang</span>, <span className="highlight">JavaScript</span>, <span className="highlight">React</span>, and much more. I love going the extra mile and have a passion for creating modern and efficient web applications. I enjoy turning complex problems into simple, beautiful, and intuitive designs.
        </p>
        <div className="button-container">
          <a href="#!" className="custom-button">Download CV</a>
          <a href="#!" className="custom-button">GitHub</a>
        </div>
      </div>
    </div>
  );
}

export default Home;
