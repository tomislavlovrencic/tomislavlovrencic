import React, { useEffect, useRef, useState } from 'react';
import "./Experience.css"
import experienceData from './Data';

const Experience = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const itemRefs = useRef([]);
  const [scrollDir, setScrollDir] = useState('down');

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrollDir(y > lastY ? 'down' : 'up');
      lastY = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;
          if (entry.isIntersecting) el.classList.add('in-view');
          else el.classList.remove('in-view');
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -10% 0px' }
    );

    const toObserve = [];
    if (headerRef.current) toObserve.push(headerRef.current);
    itemRefs.current.forEach((el) => el && toObserve.push(el));
    toObserve.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={`experience-container scrolling-${scrollDir}`}>
      <div ref={headerRef} className="experience-header">
        <div className="header-line"></div>
        <h2 className="experience-title">ALWAYS</h2>
        <h3 className="experience-main-text headline">
          <span className="headline-word word-1">WRITTING</span>
          <span className="headline-gap" />
          <span className="headline-word word-2">BETTER</span>
          <span className="headline-gap" />
          <span className="headline-word word-3">CODE.</span>
        </h3>
        <div className="header-line"></div>
      </div>
      
      <div className="experience-showcase">
        {experienceData.map((item, index) => (
          <div key={index}>
            <div ref={(el) => (itemRefs.current[index] = el)} className={`experience-item ${index % 2 === 0 ? 'left-aligned' : 'right-aligned'}`}>
              <div className="company-watermark">
                <span className="watermark-text">{(item.trademark || item.title).toUpperCase()}</span>
              </div>
              
              <div className={`experience-card`}>
                <div className="card-background">
                  <div className="diagonal-light"></div>
                  <div className="subtle-pattern"></div>
                  <div className="geometric-shapes">
                    <div className="shape shape-1"></div>
                    <div className="shape shape-2"></div>
                    <div className="shape shape-3"></div>
                  </div>
                </div>
                
                <div className="card-content">
                  <div className="main-content">
                    <div className="role-info">
                      <span className="date">{item.date.toUpperCase()}</span>
                      <h3 className="role-title">{item.title}</h3>
                      <p className="role-subtitle">{item.subtitle}</p>
                    </div>
                    
                    <div className="role-details">
                      <ul className="achievements-list">
                        {item.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="achievement-item">
                            {responsibility}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {index < experienceData.length - 1 && (
              <div className="card-separator">
                <div className="separator-line"></div>
                <div className="separator-dot"></div>
                <div className="separator-line"></div>
                <div className="floating-elements">
                  <div className="floating-element element-1"></div>
                  <div className="floating-element element-2"></div>
                  <div className="floating-element element-3"></div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
