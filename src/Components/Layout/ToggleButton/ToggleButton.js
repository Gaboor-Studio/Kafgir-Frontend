import React from "react";

import classes from "./ToggleButton.module.css";

const toggleButton = (props) => {
  return (
    <div className={classes.ToggleButton} onClick={props.onToggle}>
      <div className={classes.des}></div>
      <div className={classes.di}></div>
      <div className={classes.di}></div>
      <div className={classes.di}></div>
    </div>
  );
};

export default toggleButton;
