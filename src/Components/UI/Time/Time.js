import React from "react";
import classes from "./Time.module.css";
import clock from "..//..//..//assets/clock.svg";

const Time = (props) => {
  return (
    <div className={classes.divv}>
      <img className={classes.clock} src={clock} alt="clock" />
      <div dir="rtl" className={classes.tot}>
        {String(props.time) + "دقیقه"}
      </div>
    </div>
  );
};

export default Time;
