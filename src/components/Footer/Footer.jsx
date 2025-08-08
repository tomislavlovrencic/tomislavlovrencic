import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-noise" aria-hidden="true" />

      <div className="split-title">
        <h2 className="title-main">Get in touch</h2>
        <h2 className="title-reflection" aria-hidden>
          Get in touch
        </h2>
      </div>

      <p className="footer-subtitle">
        I’d love to hear from you. Questions, collaborations, or just a hello — drop a line.
      </p>

      <div className="cta-row">
        <a className="cta-primary" href="mailto:tomislav.lovrencic1999@gmail.com">Let’s talk</a>
      </div>

      <div className="social-icons">
        <a href="mailto:tomislav.lovrencic1999@gmail.com" className="social-icon" aria-label="Email"><FontAwesomeIcon icon={faEnvelope} /></a>
        <a href="https://linkedin.com/in/tomislav-lovrencic" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedin} /></a>
        <a href="https://github.com/TomislavLovrencic" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub"><FontAwesomeIcon icon={faGithub} /></a>
        <a href="https://instagram.com/tomislavlovrencic" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} /></a>
        <a href="https://twitter.com/tomislavlovrencic" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Twitter"><FontAwesomeIcon icon={faTwitter} /></a>
      </div>

      <div className="footer-extra">
        <p className="footer-handcrafted">© {new Date().getFullYear()} Tomislav Lovrenčić • Handcrafted with <span className="heart-emoji">❤️</span></p>
      </div>
    </footer>
  );
};

export default Footer;
