//icon component for each item in shopping list. icons consist of edit, delete and check buttons

import React from "react"
import deleteItem from "../../../assets/shopping-list/delete.svg"
import check from "../../../assets/shopping-list/check.svg"
import checked from "../../../assets/shopping-list/checked.svg"
import edit from "../../../assets/shopping-list/edit.svg"
import classes from "./Icons.module.css"

const Icons = (props) => {

    return (
        <div className={classes.iconContainer} dir="ltr">
            <img src={deleteItem} alt="delete item button" className={classes.icon} onClick={() => props.deleteItem(props.itemId)} />
            <img src={props.checked ? checked : check} alt="check button" className={classes.icon} onClick={() => props.checkItem(props.itemId)} />
            <img src={edit} alt="edit button" className={classes.icon} onClick={() => props.enableEdit(props.itemId)} />
        </div>
    );
}

export default Icons;