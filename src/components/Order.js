// src/components/Order.js
import React from 'react';

const Order = ({ order }) => {
  const calculateTotal = () => {
    return order.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="order">
      <h2>Order</h2>
      <ul>
        {order.map((item) => (
          <li key={item.id}>
            <h3>{item.name}</h3>
            <p>Price: {item.price.toFixed(2)} kr</p>
            <p>Quantity: {item.quantity}</p>
            <p>Subtotal: {(item.price * item.quantity).toFixed(2)} kr</p>
          </li>
        ))}
      </ul>
      <h3>Total: {calculateTotal()} kr</h3>
    </div>
  );
};

export default Order;
