import React from "react";
import {Link } from "react-router-dom";
import classes from "./Card.module.css";
const Card = (props) => {
  return (
    <div className={classes.card}>
      <Link to="/">
        <img
          className={classes.imagee}
          src={props.details.image}
          alt="category"
        />
        <div className={classes.naman}>{props.details.name}</div>
      </Link>
    </div>
  );
};
export default Card;
