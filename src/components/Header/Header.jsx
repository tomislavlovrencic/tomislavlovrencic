import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header-navbar">
      <nav className="nav-links">
          <a href="#about">HOME</a>
          <a href="#experience">EXPERIENCE</a>
          <a href="#projects">PROJECTS</a>
          <a href="#contact">CONTACTS</a>
        </nav>
    </header>
  );
}

export default Header;
