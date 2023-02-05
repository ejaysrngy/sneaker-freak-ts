import React from "react";
import "./LinkButtons.styles.css";

import { Link } from "react-router-dom";

type LinkButtonObjectTypes = {
  text: string;
  linkTo: string;
};

type LinkButtonProps = {
  links: LinkButtonObjectTypes[];
  noBg?: boolean
};

const LinkButtons = (props: LinkButtonProps) => {
  const { links, noBg } = props;
  return (
    <div id="header_links">
      {links.map((item, index) => {
        return (
          <Link to={item.linkTo} key={index} className="link-items">
            <span style={{color: noBg ? "black" : "white"}}> {item.text} </span>
          </Link>
        );
      })}
    </div>
  );
};

export default LinkButtons;
