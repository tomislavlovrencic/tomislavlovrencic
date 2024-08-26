import React from 'react';
import './AboutMe.css';
import tompaImage from '../../assets/images/tompa-small.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Skills from '../Skills/Skills';

const AboutMe = () => {
    return (
        <div className="about-me-main-container">
            <div className="about-me-container">
                <h2 className="section-title">Personal Details & Skills</h2>
                <section className="personal-and-photo">
                    <section className="personal-details">
                        <ul className="details-list">
                            <li><strong>Age:</strong> 25</li>
                            <li><strong>Location:</strong> Zagreb, Croatia</li>
                            <li><strong>Email:</strong> tomislav.lovrencic1999@gmail.com</li>
                        </ul>
                        <div className="social-links">
                            <FontAwesomeIcon icon={faGithub} className="social-icon" />
                            <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
                        </div>
                    </section>
                    <img src={tompaImage} alt="Tomislav Lovrenčić" className="profile-photo" />
                </section>
                <Skills />
            </div>
            <div className="about-me-container">
                <h2 className="section-title">About Me</h2>
                <section className="about-life">
                    <p className="about-text">
                        I’m Tomislav Lovrenčić, a <span className="highlight">software developer</span> with a passion for technology, innovation, and a constant drive to push my limits. My coding journey began in my teenage years with simple HTML websites, eventually evolving into complex backend systems.
                    </p>
                    <p className="about-text">
                        I'm <b>always</b> on the hunt for new languages, frameworks, and random projects to master, seeking the next big challenge.
                    </p>

                    <p className="about-text">
                        Outside the digital realm, I’m a fitness enthusiast who's been dedicated to the gym for over <b>5 years</b>. My athletic roots run deep, having trained in football for <b>12 years</b>. I even took on the <span className="highlight">Šilo-Crikvenica swimming marathon</span> – didn’t make it all the way, but I’m gearing up for another shot.
                    </p>

                    <p className="about-text">
                        Over the past few years, I’ve picked up tennis and padel to keep my cardio fun and engaging. But that’s just the start – I’ve also fallen in love with surfing. And when winter hits, you’ll find me on the slopes, skiing my way through the season. I guess you could say I’m equally obsessed with summer waves and winter snow.
                    </p>

                    <p className="about-text">
                        When I’m not breaking a sweat, you might find me indulging in some <span className="highlight">guilty pleasures</span>. I’m a die-hard fan of Netflix, with <em>The Office</em> and <em>Seinfeld</em> being my go-to shows for a good laugh. I’ve got a soft spot for <span className="highlight">coffee and sweets</span> – everything in moderation, of course (well, most of the time).
                    </p>
                    <p className="about-text">
                        I’m also a festival junkie, with a love for 2000s pop anthems from artists like <em>Katy Perry</em>, <em>Lady Gaga</em>, and <em>Rihanna</em>, that defined the era. On the electronic side, I vibe to the beats of global icons like <em>Martin Garrix</em>, <em>Armin van Buuren</em>, and <em>Tiësto</em>.
                    </p>

                    <p className="about-text">
                        Fun fact: I tried to get into Berghain – didn’t make it, but hey, Elon Musk didn’t either, so I guess that puts us in the same league, right?
                    </p>

                    <p className="about-text">
                        There’s a lot more to explore, but I’ll save some stories for another time. Life is a balance of passions, from coding to staying active, and I’m always looking forward to the next adventure, wherever it may lead.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default AboutMe;
