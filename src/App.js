// src/App.js
import React, { useState } from 'react';
import burgerImg from './assets/burger.png';
import friesImg from './assets/fries.png';
import sodaImg from './assets/soda.png';
import Cart from './components/Cart';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import Order from './components/Order';
import ThemeToggle from './components/ThemeToggle';
import './styles.css';

const App = () => {
  const [order, setOrder] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentSection, setCurrentSection] = useState('menu');

  const items = [
    { id: 1, name: 'Burger', price: 59.99, image: burgerImg },
    { id: 2, name: 'Fries', price: 29.99, image: friesImg },
    { id: 3, name: 'Soda', price: 19.99, image: sodaImg },
  ];

  const addToOrder = (item) => {
    setOrder((prevOrder) => {
      const existingItem = prevOrder.find((orderItem) => orderItem.id === item.id);
      if (existingItem) {
        return prevOrder.map((orderItem) =>
          orderItem.id === item.id
            ? { ...orderItem, quantity: orderItem.quantity + 1 }
            : orderItem
        );
      } else {
        return [...prevOrder, { ...item, quantity: 1 }];
      }
    });
  };

  const updateQuantity = (id, change) => {
    setOrder((prevOrder) => {
      return prevOrder.map((orderItem) =>
        orderItem.id === id
          ? { ...orderItem, quantity: Math.max(orderItem.quantity + change, 1) }
          : orderItem
      );
    });
  };

  const removeItem = (id) => {
    setOrder((prevOrder) => prevOrder.filter((orderItem) => orderItem.id !== id));
  };

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const handleSectionChange = (section) => {
    setCurrentSection(section);
  };

  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <Navbar currentSection={currentSection} onSectionChange={handleSectionChange} />
      <ThemeToggle toggleTheme={toggleTheme} />
      <div className="content">
        {currentSection === 'menu' && (
          <div id="menu">
            <Menu items={items} addToOrder={addToOrder} />
          </div>
        )}
        {currentSection === 'order' && (
          <div id="order">
            <Order order={order} />
          </div>
        )}
        <Cart order={order} updateQuantity={updateQuantity} removeItem={removeItem} />
      </div>
    </div>
  );
};

export default App;
