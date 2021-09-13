import React from "react"
import deleteItem from "../../../assets/shopping-list/delete.svg"
import check from "../../../assets/shopping-list/check.svg"
import edit from "../../../assets/shopping-list/edit.svg"
import classes from "./Icons.module.css"

const Icons = () => {

    return(
        <div className={classes.iconContainer} dir="ltr">
        <img src={deleteItem} alt="delete item button" className={classes.icon}></img>
        <img src={check} alt="check button" className={classes.icon}></img>
            <img src={edit} alt="edit button" className={classes.icon}></img>
        </div>
    );
}

export default Icons;