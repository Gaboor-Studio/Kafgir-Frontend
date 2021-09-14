import React from "react"
import deleteItem from "../../../assets/shopping-list/delete.svg"
import check from "../../../assets/shopping-list/check.svg"
import checked from "../../../assets/shopping-list/checked.svg"
import edit from "../../../assets/shopping-list/edit.svg"
import classes from "./Icons.module.css"

const Icons = (props) => {

    return (
        <div className={classes.iconContainer} dir="ltr">
            <img src={deleteItem} alt="delete item button" className={classes.icon} />
            <img src={props.checked ? checked : check} alt="check button" className={classes.icon} />
            <img src={edit} alt="edit button" className={classes.icon} />
        </div>
    );
}

export default Icons;