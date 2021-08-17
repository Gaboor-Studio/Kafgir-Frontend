import React from "react";
import { useState } from "react";
import classes from "./Planner.module.css"
import WeekSelector from "./WeekSelector"
import add from "../../../assets/planner-add.png"
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
            <div className={classes.outerBar} dir="rtl">شنبه
            <img src={add} alt="extend button" className={classes.extendButton}></img>
            </div>
            <div className={classes.innerBar}> </div>
            <div className={classes.outerBar} dir="rtl">شنبه
            <img src={add} alt="extend button" className={classes.extendButton}></img>
            </div>
            <div className={classes.innerBar}> </div>
            <div className={classes.outerBar} dir="rtl">شنبه
            <img src={add} alt="extend button" className={classes.extendButton}></img>
            </div>
            <div className={classes.innerBar}> </div>
            <div className={classes.outerBar} dir="rtl">شنبه
            <img src={add} alt="extend button" className={classes.extendButton}></img>
            </div>
            <div className={classes.innerBar}> </div>
            <div className={classes.outerBar} dir="rtl">شنبه
            <img src={add} alt="extend button" className={classes.extendButton}></img>
            </div>
            <div className={classes.innerBar}> </div>
            <div className={classes.outerBar} dir="rtl">شنبه
            <img src={add} alt="extend button" className={classes.extendButton}></img>
            </div>
            <div className={classes.innerBar}> </div>
            <div className={classes.outerBar} dir="rtl">شنبه
            <img src={add} alt="extend button" className={classes.extendButton}></img>
            </div>
            <div className={classes.innerBar}> </div>
        </div>  
    );
}

export default Planner;