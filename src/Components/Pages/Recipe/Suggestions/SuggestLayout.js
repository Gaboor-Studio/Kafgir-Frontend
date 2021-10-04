import React from "react";
import classes from "./SuggestLayout.module.css";
import SuggestCard from "./SuggestCard";
const SuggestLayout = (props) => {
  return (
    <div className={classes.card}>
      <h className={classes.title}>غذاهای پیشنهادی</h>
      <div className={classes.scroll}>
        {props.details.map((detail, index) => (
          <SuggestCard image={detail.image} name={detail.name} hardness={detail.hardness} time={detail.time} rate={detail.rate} />
        ))}
      </div>
    </div>
  );
};
export default SuggestLayout;
