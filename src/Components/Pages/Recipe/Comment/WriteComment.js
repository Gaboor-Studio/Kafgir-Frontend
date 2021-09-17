import React, { useState } from "react";
import classes from "./WriteComment.module.css";
import Rating from "..//..//..//UI//Rating//Rating";
import minus from "..//..//..//..//assets//planner-remove.png";
import plus from "..//..//..//..//assets//planner-add.png";
const WriteComment = (props) => {
  const [rate, setRate] = useState(0);

  return (
    <div className={classes.my}>
      <img
        className={classes.profpic}
        src={props.comment.profilepic}
        alt="profpic"
      />
      <h1 className={classes.profname}>{props.comment.profilename}</h1>
      <br />
      <div className={classes.rate}>
        <img
          src={minus}
          className={classes.btn}
          onClick={() => setRate(rate - 0.5)}
        />
        <Rating rate={rate} size={window.innerWidth<=480 ?"20":"30"} />

        <img
          src={plus}
          className={classes.btn}
          onClick={() => setRate(rate + 0.5)}
        />
      </div>
      <textarea className={classes.textarea} maxLength="200" />
    </div>
  );
};
export default WriteComment;
