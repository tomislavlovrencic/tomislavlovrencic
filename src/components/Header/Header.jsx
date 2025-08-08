import React, { useState, useEffect } from 'react';
import './Header.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <header className={`header-navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo-section">
          <div className="logo">
            <div className="logo-lines">
              <div className="line line-1"></div>
              <div className="line line-2"></div>
              <div className="line line-3"></div>
            </div>
          </div>
          <div className="brand-name">
            <span className="name">TOMISLAV LOVRENČIĆ</span>
          </div>
        </div>

        <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
          <a href="#experience" onClick={(e) => handleScroll(e, 'experience')}>
            <span className="nav-text">EXPERIENCE</span>
            <div className="nav-line"></div>
          </a>
          <a href="#about" onClick={(e) => handleScroll(e, 'about')}>
            <span className="nav-text">ABOUT</span>
            <div className="nav-line"></div>
          </a>
          <a href="#contact" onClick={(e) => handleScroll(e, 'contact')}>
            <span className="nav-text">CONTACT</span>
            <div className="nav-line"></div>
          </a>
        </nav>

        <button className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
        </button>
      </div>
    </header>
  );
}

export default Header;
