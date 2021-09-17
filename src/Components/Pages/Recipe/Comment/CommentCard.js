import React from "react";
import classes from "./CommentCard.module.css";
import Rating from "..//..//..//UI//Rating/Rating.js";

const CommentCard = (props) => {
  return (
    <div className={classes.comment}>
      <div className={classes.commentdetail}>
        <img
          className={classes.profpic}
          src={props.comment.profilepic}
          alt="profpic"
        />
        <h1 className={classes.profname}>{props.comment.profilename}</h1>
        <h1 className={classes.date}>{props.comment.date}</h1>
        <div className={classes.rate}>
        <Rating rate={props.comment.rate} />
        </div>
      </div>
      <div className={classes.commentbox}>
        <p>{props.comment.comment}</p>
      </div>
    </div>
  );
};

export default CommentCard;
