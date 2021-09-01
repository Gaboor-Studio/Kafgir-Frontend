import React from "react";
import classes from "./Card.module.css";
import Rating from "..//..//UI//Rating/Rating.js";
import Hardness from "..//..//UI/Hardness/Hardness.js";
import Time from "..//..//UI/Time/Time.js";
const Card = (props) => {
  return (
    <div className={classes.image}>
      <img className={classes.ima} src={props.image} alt={props.name} />
      <div className={classes.text}>
        <p>{props.name}</p>
        <div className={classes.left}>
          <Time time={props.time} />
        </div>
        <div className={classes.right}>
          <Hardness hardness={props.hardness} />
        </div>
        <div className={classes.middle}>
          <Rating rate={props.rate} />
        </div>
      </div>
    </div>
  );
};

export default Card;
