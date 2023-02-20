import React from "react";
import "./ProductCard.styles.css";

type ProductTypes = {
  shoe_name: string;
  color: string;
  image_url: string;
};

type ProductCardPropTypes = {
  product: ProductTypes;
};

const ProductCard = ({ product }: ProductCardPropTypes) => {
  const { shoe_name, color, image_url } = product;

  return (
    <div className="featured-product-container">
      <div className="img-container">
        <img src={image_url} alt={shoe_name} />
      </div>
      <div className="product-name-container">
        <span>{shoe_name}</span>
      </div>
      <div className="product-details-container">{color}</div>
    </div>
  );
};

export default ProductCard;
