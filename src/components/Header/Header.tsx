import React from "react";
import "./Header.styles.css";

import LinkButtons from "./Components/LinkButtons/LinkButtons";

const links = [
  {
    text: "Home",
    linkTo: "/"
  },
  {
    text: "Shop",
    linkTo: "/shop"
  }
]

const Header = () => {
  return (
    <nav id="header">
      <span style={{color: "white"}}> test </span>
      <LinkButtons links={links}/>
      <span style={{color: "white"}}> test </span>
    </nav>
  );
};

export default Header;
