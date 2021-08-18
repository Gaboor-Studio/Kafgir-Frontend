import React from "react"
import Day from "./Day/Day.js"

const Week = (props) => {

    return (
        <div>
            <Day dayName={props.weekData.days[0].name}></Day>
            <Day dayName={props.weekData.days[1].name}></Day>
            <Day dayName={props.weekData.days[2].name}></Day>
            <Day dayName={props.weekData.days[3].name}></Day>
            <Day dayName={props.weekData.days[4].name}></Day>
            <Day dayName={props.weekData.days[5].name}></Day>
            <Day dayName={props.weekData.days[6].name}></Day>
        </div>
    );
}

export default Week;