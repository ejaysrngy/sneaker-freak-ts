import React from "react";
import "./LinkButtons.styles.css";

import { Link } from "react-router-dom";

type LinkButtonObjectTypes = {
  text: string;
  linkTo: string;
};

type LinkButtonProps = {
  links: LinkButtonObjectTypes[];
};

const LinkButtons = (props: LinkButtonProps) => {
  const { links } = props;
  return (
    <div id="header_links">
      {links.map((item, index) => {
        return (
          <Link to={item.linkTo} key={index} className="link-items">
            <span> {item.text} </span>
          </Link>
        );
      })}
    </div>
  );
};

export default LinkButtons;
