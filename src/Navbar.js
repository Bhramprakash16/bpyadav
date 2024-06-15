import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-header">
        <button className="navbar-toggle" onClick={toggleMenu}>
          <span className="toggle-icon"></span>
          <span className="toggle-icon"></span>
          <span className="toggle-icon"></span>
        </button>
        <a href="https://www.example.com" className="navbar-title mobile-only">My Website</a>
      </div>
      <ul className={`navbar-menu ${isOpen ? 'open' : ''}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#work">Work</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
