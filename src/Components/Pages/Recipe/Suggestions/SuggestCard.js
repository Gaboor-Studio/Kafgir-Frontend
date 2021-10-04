import React from "react";
import { Link } from "react-router-dom";
import classes from "./SuggestCard.module.css";
import Hardness from "..//..//..//UI/Hardness/Hardness";
import Rating from "..//..//..//UI/Rating/Rating";
import Time from "..//..//..//UI/Time/Time";
const SuggestCard = (props) => {
  return (
    <div className={classes.card}>
      <img className={classes.image} src={props.image} alt="image" />
      <div className={classes.name}>{props.name}</div>
      <div className={classes.details}>
        <div className={classes.hardness}>
          <Hardness hardness={props.hardness} />
        </div>
        <div className={classes.rate}>
          <Rating rate={props.rate} />
        </div>
        <div className={classes.time}>
          <Time time={props.time} />
        </div>
      </div>
    </div>
  );
};
export default SuggestCard;
