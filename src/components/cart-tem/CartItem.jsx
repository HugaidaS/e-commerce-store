import React from "react";
import "./cart-item.scss";

const CartItem = ({ cartItem }) => {
  const { name, quantity } = cartItem;
  return (
    <div className="cart-item-container">
      <img alt="product" src={cartItem.imageUrl} />
      <div className="item-details">
        <h2>{name}</h2>
        <span>{quantity}</span>
      </div>
    </div>
  );
};

export default CartItem;
