import React from "react";
import classes from "./Meal.module.css";
import Hardness from "..//..//..//UI/Hardness/Hardness";
import Rating from "..//..//..//UI/Rating/Rating";
import Time from "..//..//..//UI/Time/Time";

const Meal = (props) => {
  return (
    <div>
      <h className={classes.name}>{props.today.name}</h>
      <br />
      <button className={classes.recipebtn}>دستور</button>
      <span className={classes.foodetails}>
        <Hardness hardness={props.today.hardness} />
      </span>
      <br />
      <span className={classes.foodetails}>
        <Rating rate={props.today.rate} />
      </span>
      <br />
      <span className={classes.foodetails}>
        <Time time={props.today.time} />
      </span>
      <br />
    </div>
  );
};
export default Meal;
