//component for each item in shopping list which consists of name, amount, unit, and icons

import React, { useState } from "react"
import classes from "./ShoppingListItem.module.css"
import Icons from "./Icons"

const ShoppingListItem = (props) => {

    return (
        <div className={classes.container}>
            <div className={classes.line} />
            <div dir="rtl" className={classes.ingredientContainer}>
                <p className={props.checked ? [classes.name, classes.checked].join(' ') : classes.name}>{props.name}</p>
                <p className={props.checked ? [classes.amount, classes.checked].join(' ') : classes.amount}>{props.amount + ' ' + props.unit}</p>
                <Icons checked={props.checked} />
            </div>
        </div>
    );
}

export default ShoppingListItem;