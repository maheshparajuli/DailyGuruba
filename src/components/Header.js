// Header.js
import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <header className="header">
      <nav className="header-nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/projects" className="nav-link">Projects</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/contact" className="nav-link">Contacts</Link>
      </nav>
    </header>
  );
}

export default Header;
