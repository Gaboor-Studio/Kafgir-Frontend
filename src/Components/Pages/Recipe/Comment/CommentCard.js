import React from "react";
import classes from "./CommentCard.module.css";
import Rating from "..//..//..//UI//Rating/Rating.js";
import profile from ".//..//..//..//..//assets/empty_profile.svg"
const CommentCard = (props) => {
  let time =Date.parse(props.comment.date_time);
  let options = { year: 'numeric', month: 'long', day: 'numeric',hour: 'numeric',minute: 'numeric' };
  time = new Date(time).toLocaleDateString('fa-IR',options,{timeZone:"Asia/Tehran"});
  return (
    <div className={classes.comment}>
      <div className={classes.commentdetail}>
        <img
          className={classes.profpic}
          src={props.comment.user_pic !="no-image"?props.comment.user_pic:profile}
          alt="profpic"
        />
        <h1 className={classes.profname}>{props.comment.username}</h1>
        <div className={classes.deta}>
          <Rating rate={props.comment.rating} />
          <h1 className={classes.date}>{time}</h1>
        </div>
      </div>
      <div className={classes.commentbox}>
        <p>{props.comment.text}</p>
      </div>
    </div>
  );
};

export default CommentCard;
