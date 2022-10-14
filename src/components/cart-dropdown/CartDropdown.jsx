import "./cart-dropdown.scss";

import React, { useContext } from "react";
import Button from "../button/Button";
import { CartContext } from "../../contexts/cartContext";
import CartItem from "../cart-tem/CartItem";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem cartItem={item} key={item.id} />
        ))}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
