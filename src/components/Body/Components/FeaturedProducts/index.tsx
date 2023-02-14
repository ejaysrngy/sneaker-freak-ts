import React from "react";

import { shoesDB } from "utils/enums";

import { ProductCard } from "components/Products";

const FeaturedProducts = () => {
    return (
        <div> 
            {shoesDB.map((product, index) => {
                return (
                    <ProductCard product={product} />
                )
            })}
        </div>
    )
};

export default FeaturedProducts;
