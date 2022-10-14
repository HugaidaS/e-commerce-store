import React, { useContext } from "react";
import ProductCard from "../../components/product-card/ProductCard";
import { ProductsContext } from "../../contexts/productsContext";
import "./shop.scss";

const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
};

export default Shop;
