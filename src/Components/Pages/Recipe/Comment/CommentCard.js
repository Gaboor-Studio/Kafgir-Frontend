import React from "react";
import classes from "./CommentCard.module.css";
import Rating from "..//..//..//UI//Rating/Rating.js";

const CommentCard = (props) => {
  return (
    <div className={classes.comment}>
      <div className={classes.commentdetail}>
        <img
          className={classes.profpic}
          src={props.comment.user_pic}
          alt="profpic"
        />
        <h1 className={classes.profname}>{props.comment.username}</h1>
        <div className={classes.deta}>
          <Rating rate={props.comment.rating} />
          <h1 className={classes.date}>{props.comment.date_time}</h1>
        </div>
      </div>
      <div className={classes.commentbox}>
        <p>{props.comment.text}</p>
      </div>
    </div>
  );
};

export default CommentCard;
