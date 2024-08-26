import React from 'react';
import './AboutMe.css';
import tompaImage from '../../assets/images/tompa-small.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGit, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const AboutMe = () => {
    return (
        <div className="about-me-container">
            <h2 className="section-title">Personal Details</h2>
            <section className="personal-and-photo">
                <section className="personal-details">
                    <ul className="details-list">
                        <li><strong>Age:</strong> 25</li>
                        <li><strong>Location:</strong> Zagreb, Croatia</li>
                        <li><strong>Email:</strong> tomislav.lovrencic1999@gmail.com</li>
                    </ul>
                    <div className="social-links">
                        <FontAwesomeIcon icon={faGit} className="social-icon" />
                        <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
                    </div>
                </section>
                <img src={tompaImage} alt="Tomislav Lovrenčić" className="profile-photo" />
            </section>
            <h2 className="section-title">About Me</h2>
            <section className="about-life">
                <p className="about-text">
                    I’m Tomislav Lovrenčić, a Software Developer with a passion for technology and innovation. I’ve been coding since I was a teenager, starting with simple HTML websites and moving on to complex backend systems. I love learning new languages and frameworks, always looking for the next challenge.
                </p>
                <p className="about-text">
                    Outside of programming, I’m an avid sports enthusiast. I enjoy playing basketball, running, and hiking. These activities keep me balanced and provide a fresh perspective when tackling difficult coding problems.
                </p>
                <p className="about-text">
                    I’m also a foodie at heart, experimenting with new recipes in the kitchen or exploring local restaurants. On weekends, you’ll often find me reading a good book or working on side projects that spark my curiosity.
                </p>
            </section>
        </div>
    );
};

export default AboutMe;
