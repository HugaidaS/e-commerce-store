import "./product-card.scss";

import React, { useContext } from "react";
import Button from "../button/Button";
import { CartContext } from "../../contexts/cartContext";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCard = () => addItemToCart(product);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={addProductToCard}>
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
