import React from "react";
import "./Body.styles.css";
import useGetProductDetails from "hooks/useGeProductDetails";

import { Catchphrase, FeaturedProducts, HeroBanner } from "./Components";

const Body = () => {
  
  const item = useGetProductDetails(1)

  console.log(item)

  return (
    <main id="main-section">
      {/* break off this section to a component
            pass in children in along with HeroBanner
        */}
      <HeroBanner />
      <Catchphrase />
      <FeaturedProducts />
    </main>
  );
};

export default Body;
