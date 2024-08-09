// src/components/Cart.js
import React from 'react';
import './Cart.css';

const Cart = ({ order, updateQuantity, removeItem }) => {
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
                <div className="cart-item-controls">
                  <button onClick={() => updateQuantity(item.id, -1)} disabled={item.quantity === 1}>
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)}>
                    +
                  </button>
                </div>
                <span>{item.price.toFixed(2)} kr each</span>
                <span>{(item.price * item.quantity).toFixed(2)} kr</span>
                <button className="remove-item" onClick={() => removeItem(item.id)}>
                  Remove
                </button>
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
