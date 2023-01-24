import React from "react";
import "./HeroBanner.styles.css";

import { BannerImage } from "../../assets/images";

const HeroBanner = () => {
  return (
    <div
      id="hero-banner-container"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${BannerImage})`,
      }}
    />
  );
};

export default HeroBanner;
