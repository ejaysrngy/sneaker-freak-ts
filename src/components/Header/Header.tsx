import React from "react";
import "./Header.styles.css";
import useHeaderAnimation from "./hooks/useHeaderAnimation";

import LinkButtons from "./Components/LinkButtons/LinkButtons";

const links = [
  {
    text: "Home",
    linkTo: "/",
  },
  {
    text: "Shop",
    linkTo: "/shop",
  },
];

const Header = () => {
  const pagePosition = useHeaderAnimation();

  const pastHeroBanner = pagePosition > 550;

  return (
    <nav id={pastHeroBanner ? "header-wo-bg" : "header-with-bg"}>
      <span style={{ color: "white" }}> test </span>
      <LinkButtons links={links} noBg={pastHeroBanner}/>
      <span style={{ color: "white" }}> test </span>
    </nav>
  );
};

export default Header;
