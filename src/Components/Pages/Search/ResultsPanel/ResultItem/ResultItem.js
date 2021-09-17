import React from "react";

import Button from '../../../../UI/Button/Button'
import FoodPic from "../../../../UI/FoodCard/FoodPic";
import Hardness from '../../../../UI/Hardness/Hardness'
import Rating from '../../../../UI/Rating/Rating'
import Time from '../../../../UI/Time/Time'

import classes from "./ResultItem.module.css";

const ResultItem = (props) => {
  return (
    <li className={classes.ResultItem}>
      <div className={classes.ResultItemPic}>
        <FoodPic picture={props.item.picture} />
      </div>
      <div className={classes.ResultItemTitle}>
          <h3>{props.item.name}</h3>
          <Button>دستور</Button>
      </div>
      <div className={classes.ResultItemDetail}>
        <Hardness hardness={props.item.hardness} />
        <Rating rate={props.item.rate} />
        <Time time={props.item.time} />
      </div>
    </li>
  );
};

export default ResultItem;
