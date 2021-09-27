import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import classes from "./Recipe.module.css";
import Card from "./Card.js";
import RecipeCard from "./RecipeCard";
import RecipeSteps from "./RecipeSteps";
import ghorme from "..//..//..//assets/ghorme.jpg";
import profpic from "..//..//..//assets/ali.jpg";
import commentlogo from "..//..//..//assets/comment.svg";
import CommentCard from "./Comment/CommentCard";
import WriteComment from "./Comment/WriteComment";
import axios from "axios";

const comment = {
  profilename: "علی انصاری",
  profilepic: profpic,
  rate: 3.5,
  comment:
    "این غذا عالی بود و بالاتر از انتظارات من طعمش به وقوع پیوست مرسی از سایت کفگیر که الان اسمش عوض شده! این غذا عالی بود و بالاتر از انتظارات من طعمش به وقوع پیوست مرسی از سایت کفگیر که الان اسمش عوض شده!",
  date: new Date().toLocaleDateString("fa-IR"),
};
const Recipe = (props) => {
  const [Data, setData] = useState({
    title: "",
    rating: 0,
    coocking_time: 0,
    level: 0,
    ingredients: [],
    recipe: [],
  });
  let { slug } = useParams();
  useEffect(() => {
    const url = "http://84.241.22.193:8000/api/member/food/" + String({ slug });
    function axiosTest() {
      axios.get(url).then((response) => setData(response.data));
    }
    axiosTest();
    console.log(Data);
  },[]);
  return (
    <div className={classes.Recipe}>
      <div className={classes.card}>
        <Card
          image={ghorme}
          name={Data.title}
          rate={Data.rating}
          hardness={Data.level}
          time={Data.coocking_time}
        />
      </div>

      <div className={classes.RecipeCard}>
        <RecipeCard ingredients={Data.ingredients} />
      </div>

      <div className={classes.RecipeSteps}>
        <RecipeSteps recipe={Data.recipe} />
      </div>

      <div className={classes.writecomment}>
        <WriteComment comment={comment} />
      </div>
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

export default Recipe;
