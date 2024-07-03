import React, { useState } from 'react';
import './Navbar.css';  

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">Eclipse</div>
      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <span className={`bar ${isOpen ? 'rotate' : ''}`}></span>
        <span className={`bar ${isOpen ? 'fade' : ''}`}></span>
        <span className={`bar ${isOpen ? 'rotate' : ''}`}></span>
      </div>
    </nav>
  );
};

export default Navbar;