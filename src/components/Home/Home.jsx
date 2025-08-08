import React, { useEffect, useRef, useState } from 'react';
import './Home.css';
import cvTompa from '../../assets/documents/Tomislav_Lovrencic_CV.pdf';

function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const textRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  useEffect(() => {
    if (!isLoaded) return;

    const elements = [
      { ref: textRef, delay: 0 },
      { ref: buttonsRef, delay: 0.8 }
    ];

    elements.forEach(({ ref, delay }) => {
      setTimeout(() => {
        if (ref.current) {
          ref.current.classList.add('animate-in');
        }
      }, delay * 1000);
    });
  }, [isLoaded]);

  return (
    <div className="home-container">
      {/* Main Content */}
      <div className="home-content left-layout">
        <div className="content-wrapper left-align">
          <div className="main-text" ref={textRef}>
            <h1 className="hero-text left-hero">
              <span className="text-line">SOFTWARE ENGINEER.</span>
              <span className="text-line">PASSIONATE ABOUT</span>
              <span className="text-line">BUILDING, LEARNING,</span>
              <span className="text-line">AND EXPLORING CODE.</span>
            </h1>
          </div>

          <div className="action-section left-action" ref={buttonsRef}>
            <div className="button-group left-buttons">
              <a href={cvTompa} download className="premium-button primary">
                <span className="button-text">Download CV</span>
                <div className="button-underline"></div>
              </a>
              <a href="https://github.com/TomislavLovrencic" className="premium-button secondary" target="_blank" rel="noopener noreferrer">
                <span className="button-text">GitHub</span>
                <div className="button-underline"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
