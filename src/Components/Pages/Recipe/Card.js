import React from "react"
import classes from "./Card.module.css";
import Rating from '..//..//UI//Rating/Rating.js'
import Hardness from '..//..//UI/Hardness/Hardness.js'
const Card = (props) => {
  return (
    <div class={classes.image}>
      <img className={classes.ima} src={props.image} alt={props.name} />
      <div className={classes.text}>
        {props.name}
        <p>
          <div className={classes.left}>{props.time}</div>
          <div className={classes.right}><Hardness hardness={props.hardness}/></div>
          <div><Rating rate={props.rate} /></div>
        </p>
      </div>
    </div>
  );
};

export default Card;
