import React from 'react';
import './Home.css';
import tompaImage from '../../assets/images/pozadina-test2.png';
import cvTompa from '../../assets/documents/Tomislav_Lovrencic_CV.pdf';

function Home() {
  return (
    <div className="home-container">
      <div className="name-container">
        <h1 className="home-firstname">Tomislav</h1>
        <h1 className="home-lastname">Lovrenčić</h1>
        <div className="description-container">
          <p className="home-description">
            <span className="highlight">Software Developer</span> with a strong foundation in <span className="highlight">Java</span> and <span className="highlight">Golang</span>, and a growing expertise in <span className="highlight">JavaScript</span> and <span className="highlight">React</span>. Through dedicated self-learning and hands-on experience, I've developed this webpage as a side project to deepen my skills in React. My strengths lie in designing and implementing scalable microservices, optimizing system architectures, and enhancing software performance. I’m committed to continuous learning and always eager to take on new challenges.
          </p>
          <div className="button-container">
          <a href={cvTompa} download className="custom-button">Download CV</a>
          <a href="https://github.com/TomislavLovrencic" className="custom-button">GitHub</a>
          </div>
        </div>
      </div>
      <img src={tompaImage} alt="Tomislav Lovrenčić" className="home-profile-photo" />
    </div>
  );
}

export default Home;
