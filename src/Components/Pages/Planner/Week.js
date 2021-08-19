import React, { useEffect, useState } from "react"
import Day from "./Day/Day.js"
import classes from "./Week.module.css"
import Plancard from "./Day/Plancard.js"

const Week = (props) => {
    const daysArray=[0,1,2,3,4,5,6];
    return (
        <div className={classes.daysContainer}>
        {daysArray.map(dayNo=>
            <Day weekNo={props.weekNo} dayData={props.weekData.days[dayNo]}>
                <Plancard sendRemoveRequest={props.sendRemoveRequest} weekNo={props.weekNo} dayNo={dayNo} meal="breakfast" foodData={props.weekData.days[dayNo].breakfast}></Plancard>
                <Plancard sendRemoveRequest={props.sendRemoveRequest} weekNo={props.weekNo} dayNo={dayNo} meal="lunch" foodData={props.weekData.days[dayNo].lunch}></Plancard>
                <Plancard sendRemoveRequest={props.sendRemoveRequest} weekNo={props.weekNo} dayNo={dayNo} meal="dinner" foodData={props.weekData.days[dayNo].dinner}></Plancard>
            </Day>)}
        </div>
    );
}

export default Week;