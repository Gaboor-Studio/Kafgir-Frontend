import React from "react";
import { Link } from "react-router-dom";
import classes from "./Layout.module.css";
const Layout = (props) => {
  return (
    <div className={classes.card}>
      <img className={classes.image} src={props.image} alt="image" />
      <br />
      <h className={classes.name}>{props.name}</h>
    </div>
  );
};
export default Layout;
