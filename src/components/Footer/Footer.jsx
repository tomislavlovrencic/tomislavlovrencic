import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="footer-container">
            <h2 className="footer-title">Get In Touch</h2>
            <p className="footer-subtitle">I’d love to hear from you! Whether you have a question, want to collaborate, or just want to say hi, feel free to drop a message.</p>
            
            <div className="social-icons">
                <a href="mailto:tomislav@example.com" className="social-icon" aria-label="Email">
                    <FontAwesomeIcon icon={faEnvelope} />
                </a>
                <a href="tel:+123456789" className="social-icon" aria-label="Phone">
                    <FontAwesomeIcon icon={faPhoneAlt} />
                </a>
                <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Twitter">
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
