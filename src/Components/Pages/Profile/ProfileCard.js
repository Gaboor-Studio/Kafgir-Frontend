import React from "react";
import classes from "./ProfileCard.module.css"
import leftArrow from "../../../assets/profile/left-arrow.svg"

const ProfileCard = (props) => {
    return (
        <div>
            <div dir="rtl" className={props.text !== "" ? classes.profileCard : classes.profileCardTextless}>
                <img src={props.icon} className={classes.emailIcon} alt="icon"></img>
                <p className={classes.title}>{props.title}</p>
                <p className={classes.cardText}>{props.text}</p>
                <img src={leftArrow} className={props.arrow ? classes.arrow : classes.noArrow} alt="arrow"></img>
            </div>
            <div className={props.isend ? [] :props.text!==""? classes.border : classes.borderTextless}></div>
        </div>
    );
}

export default ProfileCard;