import React from "react";
import classes from "./ShowFoodComponent.module.css"
import { Link } from "react-router-dom";

const ShowFoodComponent = (props) => {

    return (
        <div>
            <Link to={"/recipe/" + (props.food.id).toString()} className={classes.foodLink}>
                <div className={classes.foodRow}>
                    <p className={classes.foodTitle}>نام: {props.food.title}</p>
                    <p className={classes.foodTitle}>امتیاز: {props.food.rating}</p>
                    <p className={classes.foodTitle}>درجه سختی: {props.food.level}</p>
                    <p className={classes.foodTitle}>زمان پخت: {props.food.cooking_time}</p>
                </div>
            </Link>
        </div>
    );
}

export default ShowFoodComponent;