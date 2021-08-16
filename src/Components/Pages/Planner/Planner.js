import React from "react";
import classes from "./Planner.module.css"
import WeekSelector from "./WeekSelector"
const planner = (props) => {
    const weeksArray=[
        {
            period: "۲۶ تیر - ۱ مرداد",

        },
        {
            period: "۲ تیر - ۸ تیر",

        },
        {
            period: "۹ تیر - ۱۵ تیر",

        },
        {
            period: "۱۶ تیر - ۲۲ تیر",

        }
    ]
    return (
        <div>
            <WeekSelector weeks={weeksArray}/>
        </div>
    );
}

export default planner;