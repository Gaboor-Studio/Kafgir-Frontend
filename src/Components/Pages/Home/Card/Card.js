import React from "react";
import classes from "./Card.module.css";
import background from "..//..//..//..//assets//Home/CardBackground.svg";
import Layout from "./Layout";
const Card = (props) => {
  return (
    <div className={classes.card}>
      <h className={classes.title}>{props.title}</h>
      <img src={background} className={classes.background} />
      <div className={classes.scroll}>
        {props.details.map((detail, index) => (
          <Layout image={detail.image} name={detail.name} hardness={detail.hardness} time={detail.time} rate={detail.rate} />
        ))}
        <div className={classes.all}>
          <p className={classes.allbtn}>مشاهده همه</p>
        </div>
      </div>
    </div>
  );
};
export default Card;
