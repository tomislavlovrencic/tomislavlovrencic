import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-hello">Hello :)</h1>
        <h2 className="home-signature">My name is Tomislav Lovrenčić</h2>
        <p className="home-description">
          I am a Full Stack Engineer with a passion for creating modern and efficient web applications.
        </p>
      </div>
    </div>
  );
}

export default Home;
