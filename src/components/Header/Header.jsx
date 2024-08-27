import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header-navbar">
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>
      <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
        <a href="#about">HOME</a>
        <a href="#experience">EXPERIENCE</a>
        <a href="#projects">ABOUT ME</a>
        <a href="#contact">CONTACT</a>
      </nav>
    </header>
  );
}

export default Header;
