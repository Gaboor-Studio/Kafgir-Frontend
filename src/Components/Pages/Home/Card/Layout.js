import React from "react";
import { Link } from "react-router-dom";
import classes from "./Layout.module.css";
import Hardness from "..//..//..//UI/Hardness/Hardness";
import Rating from "..//..//..//UI/Rating/Rating";
import Time from "..//..//..//UI/Time/Time";
const Layout = (props) => {
  return (
    <div className={classes.card}>
      <img className={classes.image} src={props.image} alt="image" />
      <br />
      <div className={classes.name}>{props.name}</div>
      <br />
      <button className={classes.recipebtn}>دستور</button>
      <br />
      <div className={classes.hardness}>
        <Hardness hardness={props.hardness} />
      </div>
      <br />
      <div className={classes.rate}>
        <Rating rate={props.rate} />
      </div>
      <br />
      <div className={classes.time}>
        <Time time={props.time} />
      </div>
      <br />
    </div>
  );
};
export default Layout;
