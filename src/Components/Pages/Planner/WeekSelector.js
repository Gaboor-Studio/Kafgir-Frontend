import React from "react";
import leftArrow from "../../../assets/left-arrow.png"
import rightArrow from "../../../assets/right-arrow.png"
import classes from "./WeekSelector.module.css"

const WeekSelector = (props) => {
    const rightArrowHandler = () => {
        if(props.displayingWeek>0)
            props.setDisplayingWeek(-1);
    }

    const leftArrowHandler = () => {
        if(props.displayingWeek<props.weeks.length-1)
            props.setDisplayingWeek(1);
    }

    return (
        <div dir="rtl" className={classes.weekSelector}>
            <img src={rightArrow} alt={"right-arrow"} className={classes.arrow} onClick={rightArrowHandler} />
            <p>
                {props.weeks[props.displayingWeek].period}
            </p>
            <img src={leftArrow} alt={"left-arrow"} className={classes.arrow} onClick={leftArrowHandler} />
        </div>
    );
}
export default WeekSelector;