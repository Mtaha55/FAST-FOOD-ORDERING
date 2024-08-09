// src/components/BottomNav.js
import React from 'react';
import './BottomNav.css';

const BottomNav = ({ currentSection, onSectionChange }) => {
  return (
    <div className="bottom-nav">
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
  );
};

export default BottomNav;
