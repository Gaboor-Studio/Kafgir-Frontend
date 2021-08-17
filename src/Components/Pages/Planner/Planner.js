import React from "react";
import { useState } from "react";
import classes from "./Planner.module.css"
import WeekSelector from "./WeekSelector"
import Day from "./Day/Day.js"
const Planner = (props) => {
    const weeksArray = [
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
    const [displayingWeekVar, setDisplayingWeekVar] = useState(1);
    const changeDisplayingWeekVar = (value) => {
        setDisplayingWeekVar(prevvalue => prevvalue + value);
    }
    return (
        <div>
            <WeekSelector weeks={weeksArray} displayingWeek={displayingWeekVar} setDisplayingWeek={changeDisplayingWeekVar} />
            <Day dayName="شنبه"></Day>
            <Day dayName="شنبه"></Day>
            <Day dayName="شنبه"></Day>
            <Day dayName="شنبه"></Day>
            <Day dayName="شنبه"></Day>
        </div>
    );
}

export default Planner;