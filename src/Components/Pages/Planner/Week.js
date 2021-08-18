import React, { useEffect, useState } from "react"
import Day from "./Day/Day.js"
import classes from "./Week.module.css"
import Plancard from "./Day/Plancard.js"

const Week = (props) => {
    return (
        <div className={classes.daysContainer}>
            <Day dayData={props.weekData.days[0]}>
                <Plancard meal="صبحانه" foodData={props.weekData.days[0].breakfast}></Plancard>
                <Plancard meal="نهار" foodData={props.weekData.days[0].lunch}></Plancard>
                <Plancard meal="شام" foodData={props.weekData.days[0].dinner}></Plancard>
            </Day>
            <Day dayData={props.weekData.days[1]}></Day>
            <Day dayData={props.weekData.days[2]}></Day>
            <Day dayData={props.weekData.days[3]}></Day>
            <Day dayData={props.weekData.days[4]}></Day>
            <Day dayData={props.weekData.days[5]}></Day>
            <Day dayData={props.weekData.days[6]}></Day>
        </div>
    );
}

export default Week;