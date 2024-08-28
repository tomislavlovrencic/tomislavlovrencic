import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

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
    <header className="header-navbar">
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>
      <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
        <a href="#experience" onClick={(e) => handleScroll(e, 'experience')}>EXPERIENCE</a>
        <a href="#about" onClick={(e) => handleScroll(e, 'about')}>ABOUT ME</a>
        <a href="#contact" onClick={(e) => handleScroll(e, 'contact')}>CONTACT</a>
      </nav>
    </header>
  );
}

export default Header;
