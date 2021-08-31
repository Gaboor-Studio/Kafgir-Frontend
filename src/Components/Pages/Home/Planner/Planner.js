import React from "react";
import classes from "./Planner.module.css";
import breakfast from "..//..//..//..//assets/Home/Home Planner/breakfast.svg";
import launch from "..//..//..//..//assets/Home/Home Planner/launch.svg";
import dinner from "..//..//..//..//assets/Home/Home Planner/dinner.svg";
import adder from "..//..//..//..//assets/planner-add.png";
import leftarrow from "..//..//..//..//assets/left-arrow.png";
import rightarrow from "..//..//..//..//assets/right-arrow.png";
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
          name: "تخم مرغ",
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
      day: "سه شنبه - ۹ شهریور",
      meal: [
        {
          name: "سوسیس",
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
  ]);
  const [displayingDay, setDisplayingDay] = useState(0);
  const rightArrowHandler = () => {
    if (displayingDay > 0) {
      setDisplayingDay(displayingDay - 1);
    }
  };

  const leftArrowHandler = () => {
    if (displayingDay < daysArray.length-1) {
      setDisplayingDay(displayingDay + 1);
    }
  };

  return (
    <div>
      <div className={classes.header}>
        <p>{daysArray[displayingDay].day}</p>
      </div>
      <img
        className={classes.leftarrow}
        src={leftarrow}
        alt="leftarrow"
        onClick={leftArrowHandler}
      />
      <img
        className={classes.rightarrow}
        src={rightarrow}
        alt="rightarrow"
        onClick={rightArrowHandler}
      />
      <div className={classes.main}>
        <div className={classes.meal}>
          <img className={classes.foodico} src={breakfast} alt="breakfast" />
          {daysArray[displayingDay].meal[0].name === "" ? (
            <img src={adder} className={classes.adder} alt="adder" />
          ) : (
            <Meal today={daysArray[displayingDay].meal[0]} />
          )}
        </div>
        <div className={classes.meal}>
          <img className={classes.foodico} src={launch} alt="launch" />
          {daysArray[displayingDay].meal[1].name === "" ? (
            <img src={adder} className={classes.adder} alt="adder" />
          ) : (
            <Meal today={daysArray[displayingDay].meal[1]} />
          )}
        </div>
        <div className={classes.meal}>
          <img className={classes.foodico} src={dinner} alt="dinner" />
          {daysArray[displayingDay].meal[2].name === "" ? (
            <img src={adder} className={classes.adder} alt="adder" />
          ) : (
            <Meal today={daysArray[displayingDay].meal[2]} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Planner;
