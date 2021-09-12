import React from "react";
import classes from "./Recipe.module.css";
import Card from "./Card.js";
import RecipeCard from "./RecipeCard";
import RecipeSteps from "./RecipeSteps";
import ghorme from "..//..//..//assets/ghorme.jpg";
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
    </div>
  );
};

export default recipe;
