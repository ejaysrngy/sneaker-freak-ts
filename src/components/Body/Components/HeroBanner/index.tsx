import React from "react";
import "./HeroBanner.styles.css";

import { BannerImage } from "../../../../assets/images";

const HeroBanner = () => {
  return (
    <div
      id="hero-banner-container"
      style={{
        backgroundImage: `url(${BannerImage})`,
      }}
    >
      <div className="hero-banner-text">
        Get freaky with your sneaks
      </div>
    </div>
  );
};

export default HeroBanner;
