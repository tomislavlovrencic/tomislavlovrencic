import React, { useEffect, useRef } from 'react';
import './AboutMe.css';
import tompaImage from '../../assets/images/tompa-small.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Skills from '../Skills/Skills';

const AboutMe = () => {
  const observeRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.classList.toggle('in-view', e.isIntersecting)),
      { threshold: 0.2 }
    );
    observeRefs.current.filter(Boolean).forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-section-light">
      <div className="about-header observe" ref={(el) => (observeRefs.current[0] = el)}>
        <h2 className="about-eyebrow">ABOUT</h2>
        <h3 className="about-headline"><span>WHO</span> <span>I</span> <span>AM.</span></h3>
      </div>

      <div className="about-hero observe" ref={(el) => (observeRefs.current[1] = el)}>
        <div className="portrait-arch">
          <img src={tompaImage} alt="Tomislav Lovrenčić" />
        </div>
        <div className="intro-copy">
          <h1 className="intro-title">I'm Tomislav.</h1>
          <p className="intro-sub">Software Development Engineer based in Zagreb, working remotely.</p>
          <p className="intro-lede">
            I design and build robust backend systems and platforms. Outside of code, I'm into fitness, surf, and snow.
          </p>
          <div className="contact-pills">
            <a href="mailto:tomislav.lovrencic1999@gmail.com" className="pill">Email</a>
            <a href="tel:+385912456688" className="pill">Phone</a>
            <a href="#" className="pill icon" aria-label="GitHub"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="#" className="pill icon" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedin} /></a>
          </div>
        </div>
      </div>

      <div className="about-stats observe" ref={(el) => (observeRefs.current[2] = el)}>
        <div className="stat-card"><span className="label">AGE</span><span className="value">26</span></div>
        <div className="stat-card"><span className="label">LOCATION</span><span className="value">Zagreb, Croatia</span></div>
        <div className="stat-card"><span className="label">LANGUAGES</span><span className="value">Croatian, English</span></div>
      </div>

      <div className="about-bio-card observe" ref={(el) => (observeRefs.current[3] = el)}>
        <p>
          I’m Tomislav Lovrenčić, a software developer with a passion for technology, innovation, and a constant drive to push my limits. My coding journey began in my teenage years with simple HTML websites, eventually evolving into complex backend systems.
        </p>
        <p>
          I'm always on the hunt for new languages, frameworks, and projects to master, seeking the next big challenge.
        </p>
        <p>
          Outside the digital realm, I’ve trained in football for 12 years and I’m dedicated to the gym. I took on the Šilo-Crikvenica swimming marathon – didn’t make it all the way, but I’m gearing up for another shot. These days I balance tennis, padel, surfing, and skiing.
        </p>
        <p>
          When I’m not breaking a sweat, you’ll catch me with coffee, Netflix, and the occasional sweet; I’m also a festival junkie for 2000s pop and EDM.
        </p>
      </div>

      <div className="about-skills-card observe" ref={(el) => (observeRefs.current[4] = el)}>
        <Skills />
      </div>
    </section>
  );
};

export default AboutMe;
