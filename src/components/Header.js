import React from 'react';
import './Header.css';
import './About.js';
const Header = () => {
  return (
    <header className="header">
      <h1>My Portfolio</h1>
      <nav>
        <ul>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#about">About Me</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

