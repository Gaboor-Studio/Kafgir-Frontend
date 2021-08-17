import React from "react";
import classes from "./Recipe.module.css";
import Card from "./Card.js";
import ghorme from "..//..//..//assets/ghorme.jpg";
const recipe = (props) => {
  return (
    <div className={classes.card}>
      <Card image={ghorme} name="قرمه سبزی" rate = {3.5} hardness= {3} time={60}    />
    </div>
  );
};

export default recipe;
