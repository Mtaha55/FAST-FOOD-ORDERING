// src/components/Menu.js
import React from 'react';

const Menu = ({ items, addToOrder }) => {
  return (
    <div className="menu">
      <h2>Menu</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.price.toFixed(2)} kr</p>
            <button onClick={() => addToOrder(item)}>Add to Order</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
