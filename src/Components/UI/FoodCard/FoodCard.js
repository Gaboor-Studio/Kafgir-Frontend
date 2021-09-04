import React from "react"
import FoodPic from "./FoodPic"
import classes from "./FoodCard.module.css"
import Hardness from "../Hardness/Hardness"
import Rating from "../Rating/Rating"
import Time from "../Time/Time"

const FoodCard = (props) => {

    return (
        <div dir="rtl" className={classes.cardContainer}>
            <FoodPic picture={props.food.picture} className={classes.picture}></FoodPic>
            <p className={classes.foodName}>{props.food.name}</p>
            <div className={classes.instruction}><p>دستور</p></div>
            <div className={classes.difficulty}><Hardness hardness={2}></Hardness></div>
            <div className={classes.rating}><Rating rate={4}></Rating></div>
            <div className={classes.time}><Time time="45 دقیقه"></Time></div>
        </div>
    );
}

export default FoodCard;