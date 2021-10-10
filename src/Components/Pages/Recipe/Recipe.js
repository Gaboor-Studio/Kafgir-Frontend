import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import classes from "./Recipe.module.css";
import Card from "./Card.js";
import { Link } from "react-router-dom";
import RecipeCard from "./RecipeCard";
import RecipeSteps from "./RecipeSteps";
import ghorme from "..//..//..//assets/ghorme.jpg";
import commentlogo from "..//..//..//assets/comment.svg";
import CommentCard from "./Comment/CommentCard";
import WriteComment from "./Comment/WriteComment";
import nocomment from "..//..//..//assets//No comment.svg"
import axios from "axios";
import SuggestLayout from "./Suggestions/SuggestLayout";
import {authenticationService} from ".//..//..//..//services//auth.service"
import {foodService} from "..//..//..//services//recipe.service"

const foods = [
  {
    name: "قیمه",
    image:
      "https://ghazapaz.com/wp-content/uploads/2020/10/%D8%AE%D9%88%D8%B1%D8%B4%D8%AA-%D9%82%DB%8C%D9%85%D9%87-%D8%A8%D8%A7-%D8%B3%D9%88%DB%8C%D8%A7.jpg",
    hardness: 2,
    time: "۶۰",
    rate: 4.2,
  },
  {
    name: "قیمه",
    image:
      "https://ghazapaz.com/wp-content/uploads/2020/10/%D8%AE%D9%88%D8%B1%D8%B4%D8%AA-%D9%82%DB%8C%D9%85%D9%87-%D8%A8%D8%A7-%D8%B3%D9%88%DB%8C%D8%A7.jpg",
    hardness: 2,
    time: "۶۰",
    rate: 4.2,
  },
  {
    name: "کباب",
    image:
      "https://iranwatching.com/images/content-image/2020/07/iranwatching-1388-1593886678-kabab.jpg",
    hardness: 2,
    time: "۶۰",
    rate: 4.2,
  },
  
  {
    name: "کباب",
    image:
      "https://iranwatching.com/images/content-image/2020/07/iranwatching-1388-1593886678-kabab.jpg",
    hardness: 2,
    time: "۶۰",
    rate: 4.2,
  },
  {
    name: "کباب",
    image:
      "https://iranwatching.com/images/content-image/2020/07/iranwatching-1388-1593886678-kabab.jpg",
    hardness: 2,
    time: "۶۰",
    rate: 4.2,
  }
];

const Recipe = (props) => {
  const [Data, setData] = useState({
    title: "",
    rating: 0,
    coocking_time: 0,
    level: 0,
    ingredients: [],
    recipe: [],
    comments: {
      data : [],
      total_pages : 0,
      current_page:0
    },
    my_comment: null,
  });
  let slug = useParams();
  useEffect(() => {
    foodService.getFood(slug.id).then((response) => setData(response.data));
  }, []);
  const currentuser = authenticationService.currentUser();
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
      <div className={classes.suggest}>
        <SuggestLayout details={foods}/>
      </div>
      <div className={classes.RecipeCard}>
        <RecipeCard ingredients={Data.ingredients} />
      </div>

      <div className={classes.RecipeSteps}>
        <RecipeSteps recipe={Data.recipe} />
      </div>

      <div className={classes.writecomment} id="myHeader">
        {currentuser === null ? (
          <div className={classes.writeoff}>
            برای نظر دادن وارد شوید
            <Link to="/auth/login">
              <p className={classes.texxt}>ورود</p>
            </Link>
          </div>
        ) : (
          <WriteComment comment={currentuser} food_id={slug.id} />
        )}
      </div>
      <div className={classes.comment}>
        <img className={classes.logo} src={commentlogo} alt="comment" />
        <p className={classes.title}>نظرات</p>

        <div className={classes.scroll}>
          {Data.comments.data.length === 0 ? (
            <div className={classes.nocomment}>
              <p>اولین نظر این غذا را ثبت کنید!</p>
              <img src={nocomment} alt="no comment"/>
            </div>
          ) : (
            Data.comments.data.map((comment, index) => (
              <CommentCard comment={comment} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Recipe;
