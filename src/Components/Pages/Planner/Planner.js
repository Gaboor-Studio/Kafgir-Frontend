import React from "react";
import classes from "./Planner.module.css"
import leftArrow from "../../../assets/left-arrow.png"
import rightArrow from "../../../assets/right-arrow.png"
const planner = (props) => {
    const weeks=[
        {
            period: "۲۶ تیر - ۱ مرداد",

        },
        {
            period: "۲ تیر تا ۸ تیر",

        },
        {
            period: "۹ تیر تا ۱۵ تیرس",

        },
        {
            period: "۱۶ تیر تا ۲۲ تیر",

        }
    ]
    return (
        <div>
            <div dir="rtl" className={classes.weekSelector}>
                <img src={rightArrow} alt={"right-arrow"} />
                {weeks[0].period}
                <img src={leftArrow} alt={"left-arrow"} />
            </div>
        </div>
    );
}

export default planner;