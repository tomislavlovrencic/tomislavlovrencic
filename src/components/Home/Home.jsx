import React, { useEffect, useRef, useState } from 'react';
import './Home.css';
import cvTompa from '../../assets/documents/Tomislav_Lovrencic_CV-page.pdf';

function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const textRef = useRef(null);
  const buttonsRef = useRef(null);
  const fxLayerRef = useRef(null);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 80);
  }, []);

  useEffect(() => {
    if (!isLoaded) return;

    const elements = [
      { ref: textRef, delay: 0 },
      { ref: buttonsRef, delay: 0.25 },
    ];

    elements.forEach(({ ref, delay }) => {
      setTimeout(() => {
        if (ref.current) {
          ref.current.classList.add('animate-in');
        }
      }, delay * 1000);
    });
  }, [isLoaded]);

  const spawnConfetti = () => {
    const layer = fxLayerRef.current;
    if (!layer) return;

    const pieces = 140;
    for (let i = 0; i < pieces; i += 1) {
      const el = document.createElement('span');
      el.className = 'confetti';

      const leftVw = Math.random() * 100;
      const size = 6 + Math.random() * 8;
      const height = size * (1.6 + Math.random() * 0.8);
      const duration = 3.0 + Math.random() * 1.2; // 3.0s - 4.2s slower
      const delay = Math.random() * 0.35;
      const drift = (Math.random() - 0.5) * 120; // mild horizontal drift
      const shades = ['#000', '#111', '#1a1a1a', '#222', '#333', '#444'];
      const color = shades[Math.floor(Math.random() * shades.length)];
      const rot = 540 + Math.floor(Math.random() * 720); // 540-1260deg

      el.style.left = `${leftVw}vw`;
      el.style.width = `${size}px`;
      el.style.height = `${height}px`;
      el.style.background = color;
      el.style.setProperty('--dur', `${duration}s`);
      el.style.setProperty('--delay', `${delay}s`);
      el.style.setProperty('--xStart', `${(Math.random() - 0.5) * 40}px`);
      el.style.setProperty('--x', `${drift}px`);
      el.style.setProperty('--fall-rot', `${rot}deg`);

      layer.appendChild(el);
      window.setTimeout(() => {
        el.remove();
      }, (duration + delay) * 1000 + 200);
    }
  };

  return (
    <div className="home-container">
      <div className="fx-layer" ref={fxLayerRef} />
      {/* Main Content */}
      <div className="home-content left-layout">
        <div className="content-wrapper left-align">
          <div className="main-text" ref={textRef}>
            <h1 className="hero-text left-hero">
              <span className="text-line line-fall l1">SOFTWARE ENGINEER.</span>
              <span className="text-line line-fall l2">PASSIONATE ABOUT</span>
              <span className="text-line line-words">
                <span className="skyword s1">BUILDING,</span>
                <span className="skyword s2"> LEARNING,</span>
              </span>
              <span className="text-line line-fall l4">
                <span className="and-text">AND</span>
                <span className="word"> EXPLORING</span>
                <span className="word"> CODE.</span>
              </span>
            </h1>
          </div>

          <div className="action-section left-action" ref={buttonsRef}>
            <div className="button-group left-buttons">
              <a
                href={cvTompa}
                download
                className="premium-button primary"
                onClick={spawnConfetti}
              >
                <span className="button-text">Download CV</span>
                <div className="button-underline" />
              </a>
              <a
                href="https://github.com/TomislavLovrencic"
                className="premium-button secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="button-text">GitHub</span>
                <div className="button-underline" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
