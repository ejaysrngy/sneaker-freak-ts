import React from "react";

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
    <div>
      {shoe_name}
      {color}
      <span>
        <img src={image_url} alt={shoe_name} />
      </span>
    </div>
  );
};

export default ProductCard;
