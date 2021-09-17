import React from "react";
import classes from "./Recipe.module.css";
import Card from "./Card.js";
import RecipeCard from "./RecipeCard";
import RecipeSteps from "./RecipeSteps";
import ghorme from "..//..//..//assets/ghorme.jpg";
import profpic from "..//..//..//assets/ali.jpg";
import commentlogo from "..//..//..//assets/comment.svg";
import CommentCard from "./Comment/CommentCard";
import WriteComment from "./Comment/WriteComment";
import HoverRating from "./Comment/WriteComment";
let tuple = [
  ["گوشت خورشتی", "۳۰۰ گرم"],
  ["گوشت خورشتی", "۳۰۰ گرم"],
  ["گوشت خورشتی", "۳۰۰ گرم"],
  ["گوشت خورشتی", "۳۰۰ گرم"],
  ["گوشت خورشتی", "۳۰۰ گرم"],
  ["گوشت خورشتی", "۳۰۰ گرم"],
  ["گوشت خورشتی", "۳۰۰ گرم"],
  ["گوشت خورشتی", "۳۰۰ گرم"],
  ["گوشت خورشتی", "۳۰۰ گرم"],
  ["گوشت خورشتی", "۳۰۰ گرم"],
  ["گوشت خورشتی", "۳۰۰ گرم"],
  ["گوشت خورشتی", "۳۰۰ گرم"],
];

let tuple2 = [
  ["لوبیا را خیس کنید و آبپز کنید و هرگهی میخواین بخورین بخورین بعدش"],
  [
    "گوشت رو پاک کنین و تمیز کنین و اینم بذارین بپزه و پیاز بزنین بو گه گوسفند نده!",
  ],
  [
    "سبزی قرمه رو که از قبل گشادین خریدین یا هم گشاد نبودین خودتون درست کردین رو سرخ کنین یا اگر کردین نکنین بریزین توش",
  ],
  ["همه رو باهم قاطی کنین بریزین توش"],
  ["بعدم برنج درست کنین اینو عمه منم بلده بریزین تو خندق بلا"],
];

const comment = {
  profilename: "علی انصاری",
  profilepic: profpic,
  rate: 3.5,
  comment:
    "این غذا عالی بود و بالاتر از انتظارات من طعمش به وقوع پیوست مرسی از سایت کفگیر که الان اسمش عوض شده! این غذا عالی بود و بالاتر از انتظارات من طعمش به وقوع پیوست مرسی از سایت کفگیر که الان اسمش عوض شده!",
  date: new Date().toLocaleDateString("fa-IR"),
};
const recipe = (props) => {
  return (
    <div className={classes.Recipe}>
      <div className={classes.card}>
        <Card
          image={ghorme}
          name="قرمه سبزی"
          rate={4.5}
          hardness={2}
          time="۱ ساعت و ۲۰ دقیقه"
        />
      </div>

      <div className={classes.RecipeCard}>
        <RecipeCard ingredients={tuple} />
      </div>

      <div className={classes.RecipeSteps}>
        <RecipeSteps recipe={tuple2} />
      </div>

      <div className={classes.writecomment}>
        <WriteComment comment={comment}/>
      </div>


      <div className={classes.mycomment}>
        <h1 className={classes.titlemy}>نظر من</h1>
        <br />
        <div className={classes.line} />
        <br />
        <div className={classes.mycom}>
          <CommentCard comment={comment} />
        </div>
      </div>

      <br />

      <div className={classes.comment}>
        <img className={classes.logo} src={commentlogo} alt="comment" />
        <p className={classes.title}>نظرات</p>
        <div className={classes.scroll}>
          <CommentCard comment={comment} />
          <CommentCard comment={comment} />
          <CommentCard comment={comment} />
          <CommentCard comment={comment} />
          <CommentCard comment={comment} />
        </div>
      </div>
    </div>
  );
};

export default recipe;
