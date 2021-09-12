import React from "react";
import classes from "./Card.module.css";
import Rating from "..//..//UI//Rating/Rating.js";
import Hardness from "..//..//UI/Hardness/Hardness.js";
import Time from "..//..//UI/Time/Time.js";
import add_favourite from "../../../assets/add_favourie.svg";
import add_planner from "../../../assets/add_planner.svg";

const Card = (props) => {
  return (
    <div className={classes.image}>
      <img className={classes.ima} src={props.image} alt={props.name} />
      <div className={classes.text}>
        <img className={classes.addpln} src={add_planner} alt="pln" />
        <img className={classes.addfav} src={add_favourite} alt="fav" />
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
