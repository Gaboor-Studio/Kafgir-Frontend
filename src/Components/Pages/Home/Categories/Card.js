import React from "react";
import classes from "./Card.module.css";
const Card = (props) => {
  return (
    <div className={classes.card}>
      <img className={classes.imagee} src={props.details.image} alt="category" />
      <div className={classes.naman}>
        {props.details.name}
      </div>
    </div>
  );
};
export default Card;
