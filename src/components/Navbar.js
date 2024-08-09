// src/components/Navbar.js
import React from 'react';
import './Navbar.css'; // We'll add some styling later

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>Fast Food Order</h1>
      </div>
      <div className="navbar-links">
        <a href="#menu">Menu</a>
        <a href="#order">Order</a>
      </div>
    </nav>
  );
};

export default Navbar;
