import React from "react";
import "./Body.styles.css";

import { Catchphrase, HeroBanner } from "./Components";

const Body = () => {
  return (
    <main id="main-section">
      {/* break off this section to a component
            pass in children in along with HeroBanner
        */}
      <HeroBanner />
      <Catchphrase />
    </main>
  );
};

export default Body;
