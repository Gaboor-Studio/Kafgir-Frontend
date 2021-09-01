import React from "react";
import classes from "./ProfileCard.module.css"
import leftArrow from "../../../assets/profile/left-arrow.png"

const ProfileCard = (props) => {
    return (
        <div>
            <div dir="rtl" className={props.text !== "" ? classes.profileCard : classes.profileCardTextless}>
                <img src={props.icon} className={classes.emailIcon} alt="icon"></img>
                <p className={classes.title}>{props.title}</p>
                <p className={classes.cardText}>{props.text}</p>
                <img src={leftArrow} className={classes.arrow} alt="arrow"></img>
            </div>
            <div className={props.isend ? [] : classes.border}></div>
        </div>
    );
}

export default ProfileCard;