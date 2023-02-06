import React from "react";
import "./Header.styles.css";
import useHeaderAnimation from "./hooks/useHeaderAnimation";

import { Link } from "react-router-dom";

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
      <div id="header_links">
        {links.map((item, index) => {
          return (
            <Link to={item.linkTo} key={index} className="link-items">
              <span style={{ color: pastHeroBanner ? "black" : "white" }}>
                {" "}
                {item.text}{" "}
              </span>
            </Link>
          );
        })}
      </div>
      <span style={{ color: "white" }}> test </span>
    </nav>
  );
};

export default Header;
