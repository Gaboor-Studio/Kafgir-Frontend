import React from "react";
import classes from "./Planner.module.css";
import breakfast from "..//..//..//..//assets/Home/Home Planner/breakfast.svg";
import launch from "..//..//..//..//assets/Home/Home Planner/launch.svg";
import dinner from "..//..//..//..//assets/Home/Home Planner/dinner.svg";
import adder from "..//..//..//..//assets/planner-add.png";
import Meal from "./Meal.js";
import { useState } from "react";

const Planner = (props) => {
  const [daysArray, setdaysArray] = useState([
    {
      day: "یکشنبه - ۷ شهریور",
      meal: [
        {
          name: "سوسیس تخم مرغ",
          rate: 3.5,
          hardness: 1,
          time: "۱۵ دقیقه",
        },
        {
          name: "",
          rate: 0,
          hardness: 0,
          time: "",
        },
        {
          name: "",
          rate: 0,
          hardness: 0,
          time: "",
        },
      ],
    },
    {
      day: "دوشنبه - ۸ شهریور",
      meal: [
        {
          breakfast: {
            name: "سوسیس تخم مرغ",
            rate: 3.5,
            hardness: 1,
            time: "۱۵ دقیقه",
          },
          launch: {
            name: "",
            rate: 0,
            hardness: 0,
            time: "",
          },

          dinner: {
            name: "",
            rate: 0,
            hardness: 0,
            time: "",
          },
        },
      ],
    },
    {
      day: "سه شنبه - ۹ شهریور",
      meal: [
        {
          breakfast: {
            name: "سوسیس تخم مرغ",
            rate: 3.5,
            hardness: 1,
            time: "۱۵ دقیقه",
          },
          launch: {
            name: "",
            rate: 0,
            hardness: 0,
            time: "",
          },

          dinner: {
            name: "",
            rate: 0,
            hardness: 0,
            time: "",
          },
        },
      ],
    },
  ]);
  let day = 0;
  let today = daysArray[day];
  return (
    <div>
      <div className={classes.header}>
        <p>{today.day}</p>
      </div>
      <div className={classes.main}>
        <div className={classes.meal}>
          <img className={classes.foodico} src={breakfast} alt="breakfast" />
          {today.meal[0].name === "" ? (
            <img src={adder} className={classes.adder} alt="adder" />
          ) : (
            <Meal today={today.meal[0]} />
          )}
        </div>
        <div className={classes.meal}>
          <img className={classes.foodico} src={launch} alt="launch" />
          {today.meal[1].name === "" ? (
            <img src={adder} className={classes.adder} alt="adder" />
          ) : (
            <Meal today={today.meal[1]} />
          )}
        </div>
        <div className={classes.meal}>
          <img className={classes.foodico} src={dinner} alt="dinner" />
          {today.meal[2].name === "" ? (
            <img src={adder} className={classes.adder} alt="adder" />
          ) : (
            <Meal today={today.meal[2]} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Planner;
