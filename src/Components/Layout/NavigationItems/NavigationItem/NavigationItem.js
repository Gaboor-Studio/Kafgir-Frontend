import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./NavigationItem.module.css";

const navigationItem = (props) => {
  return (
      <div className={classes.NavigationItem}>
        <NavLink
          to={props.route}
          style={{ display: "flex", flexDirection: "row" }}
        >
          <img
            className={classes.NavItemImage}
            src={props.imageUrl}
            alt={props.imageTitle}
          />
          <p>{props.name}</p>
        </NavLink>
      </div>
  );
};

export default navigationItem;
