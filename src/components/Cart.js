// src/components/Cart.js
import React from 'react';
import './Cart.css';

const Cart = ({ order }) => {
  const calculateTotal = () => {
    return order.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {order.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {order.map((item) => (
              <li key={item.id}>
                <span>{item.name}</span>
                <span>{item.quantity} x {item.price.toFixed(2)} kr</span>
                <span>{(item.price * item.quantity).toFixed(2)} kr</span>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <h3>Total: {calculateTotal()} kr</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
