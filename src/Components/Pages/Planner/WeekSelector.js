import React from "react";
import { useState } from "react";
import leftArrow from "../../../assets/left-arrow.png"
import rightArrow from "../../../assets/right-arrow.png"
import classes from "./WeekSelector.module.css"

const WeekSelector = (props) => {
    const [displayingWeek, setDisplayingWeek] = useState(1);
    const rightArrowHandler = () => {
        if(displayingWeek>0)
            setDisplayingWeek(prevweek => prevweek - 1);
    }

    const leftArrowHandler = () => {
        if(displayingWeek<props.weeks.length-1)
            setDisplayingWeek(prevweek => prevweek + 1);
    }

    return (
        <div dir="rtl" className={classes.weekSelector}>
            <img src={rightArrow} alt={"right-arrow"} className={classes.arrow} onClick={rightArrowHandler} />
            <p>
                {props.weeks[displayingWeek].period}
            </p>
            <img src={leftArrow} alt={"left-arrow"} className={classes.arrow} onClick={leftArrowHandler} />
        </div>
    );
}
export default WeekSelector;