import React from "react";
import classes from "./Recipe.module.css";
import Card from "./Card.js";
import RecipeCard from "./RecipeCard";
import ghorme from "..//..//..//assets/ghorme.jpg";

let tuple = [
  ["گوشت خورشتی", "۳۰۰ گرم"],
  ["گوشت خورشتی", "۳۰۰ گرم"],
  ["گوشت خورشتی", "۳۰۰ گرم"],
  ["گوشت خورشتی", "۳۰۰ گرم"],
  ["گوشت خورشتی", "۳۰۰ گرم"],
]
const recipe = (props) => {
  return (
    <div>
      <div className={classes.card}>
        <Card
          image={ghorme}
          name="قرمه سبزی"
          rate={4.5}
          hardness={2}
          time="۱ ساعت و ۲۰ دقیقه"
        />
      </div>
      <div className={classes.RecipeCard}><RecipeCard ingredients={tuple}/>
      </div>
    </div>
  );
};

export default recipe;
