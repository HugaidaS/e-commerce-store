import React, { useContext } from "react";
import "./cart-icon.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../contexts/cartContext";

const CardIcon = () => {
  const { setIsOpened } = useContext(CartContext);

  return (
    <div
      className="cart-icon-container"
      onClick={() => setIsOpened((prev) => !prev)}
    >
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">10</span>
    </div>
  );
};

export default CardIcon;
