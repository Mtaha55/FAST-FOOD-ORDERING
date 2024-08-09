// src/components/Navbar.js
import React from 'react';
import './Navbar.css'; // Make sure this file exists

const Navbar = ({ currentSection, onSectionChange }) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>Fast Food Order</h1>
      </div>
      <div className="navbar-links">
        <button
          className={currentSection === 'menu' ? 'active' : ''}
          onClick={() => onSectionChange('menu')}
        >
          Menu
        </button>
        <button
          className={currentSection === 'order' ? 'active' : ''}
          onClick={() => onSectionChange('order')}
        >
          Order
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
