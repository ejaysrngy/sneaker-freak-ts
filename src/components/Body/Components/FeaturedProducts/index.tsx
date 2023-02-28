import React from "react";
import "./FeaturedProducts.styles.css";
import "swiper/css";

import { shoesDB } from "utils/enums";
import { ProductCard } from "components/Products";
import { Swiper, SwiperSlide } from "swiper/react";

const FeaturedProducts = () => {
  return (
    <div id="featured-products-container">
      <div className="featured-products-title">
        <span>
          Featured Products
        </span>
      </div>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {shoesDB.map((product, index) => {
          return (
            <SwiperSlide>
              <ProductCard key={index} product={product} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default FeaturedProducts;
