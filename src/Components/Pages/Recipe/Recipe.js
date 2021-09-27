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

const Recipe = (props) => {
  const [Data, setData] = useState({
    title: "",
    rating: 0,
    coocking_time: 0,
    level: 0,
    ingredients: [],
    recipe: [],
    comments: [],
    my_comment: null,
  });
  let slug = useParams();
  useEffect(() => {
    const url = "http://84.241.22.193:8000/api/member/food/" + String(slug.id);
    function axiosTest() {
      axios.get(url).then((response) => setData(response.data));
    }
    axiosTest();
  }, []);
  return (
    <div className={classes.Recipe}>
      <div className={classes.card}>
        <Card
          image={ghorme}
          name={Data.title}
          rate={Data.rating}
          hardness={Data.level}
          time={Data.cooking_time}
        />
      </div>

      <div className={classes.RecipeCard}>
        <RecipeCard ingredients={Data.ingredients} />
      </div>

      <div className={classes.RecipeSteps}>
        <RecipeSteps recipe={Data.recipe} />
      </div>

      <div className={classes.writecomment} id="myHeader">
        {Data.my_comment === null ? (
          <p>برای نظر دادن وارد شوید</p>
        ) : (
          <WriteComment comment={Data.my_comment} />
        )}
      </div>
      <div className={classes.comment}>
        <img className={classes.logo} src={commentlogo} alt="comment" />
        <p className={classes.title}>نظرات</p>

        <div className={classes.scroll}>
          {Data.comments.length === 0 ? (
            <p>نظری ثبت نشده است</p>
          ) : (
            Data.comments.map((comment, index) => (
              <CommentCard comment={comment} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Recipe;
