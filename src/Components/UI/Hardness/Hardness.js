import React from "react";
import classes from "./Hardness.module.css";
import hardness from "..//..//..//assets/hardness.svg";
import fillhardness from "..//..//..//assets/fillhardness.svg";

const Rating = (props) => {
  const rate = props.hardness;
  let stars = [hardness, hardness, hardness];
  let i = 1;
  while (rate >= i) {
    stars[i - 1] = fillhardness;
    i++;
  }
  return (
    <div>
      <img className={classes.hardness} src={stars[0]} alt="chefhat" />
      <img className={classes.hardness} src={stars[1]} alt="chefhat" />
      <img className={classes.hardness} src={stars[2]} alt="chefhat" />
    </div>
  );
};

export default Rating;
