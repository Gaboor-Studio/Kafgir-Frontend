import React from "react";
import classes from "./Recipe.module.css";
import Card from "./Card.js";
import RecipeCard from "./RecipeCard";
import ghorme from "..//..//..//assets/ghorme.jpg";
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
      <div className={classes.RecipeCard}><RecipeCard ingredients="گوشت لوبیا فلان" />
      </div>
    </div>
  );
};

export default recipe;
