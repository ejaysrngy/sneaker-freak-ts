import React from "react";

import { shoesDB } from "utils/enums";

import { ProductCard } from "components/Products";

const FeaturedProducts = () => {
  return (
    <div style={{ display: "flex", gap: "1em 1.5em", flexWrap: "wrap", padding: "0 0.5em" }}>
      {shoesDB.map((product, index) => {
        return <ProductCard key={index} product={product} />;
      })}
    </div>
  );
};

export default FeaturedProducts;
