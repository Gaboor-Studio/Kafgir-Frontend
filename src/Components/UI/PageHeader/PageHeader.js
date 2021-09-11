import React from "react"
import classes from "./PageHeader.module.css"
import BackArrow from "../../../assets/ui_signs/back-arrow.svg"

const PageHeader = (props) => {

    return(
        <div className={classes.header}>
            <p className={classes.title}>{props.title}</p>
            <div className={classes.bottomBorder}></div>
            <img src={BackArrow} alt="return arrow" className={classes.arrow}></img>
        </div>
    );
}

export default PageHeader;