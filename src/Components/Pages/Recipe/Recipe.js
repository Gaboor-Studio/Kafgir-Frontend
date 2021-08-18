import React from "react";
import classes from "./Recipe.module.css";
import Card from "./Card.js";
import ghorme from "..//..//..//assets/ghorme.jpg";
const recipe = (props) => {
  return (
    <div className={classes.card}>
      <Card image={ghorme} name="قرمه سبزی" rate = {4.5} hardness= {2} time="۱ ساعت و ۲۰ دقیقه" />
    </div>
  );
};

export default recipe;
