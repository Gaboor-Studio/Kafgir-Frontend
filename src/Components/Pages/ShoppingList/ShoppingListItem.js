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
                <p className={props.checked ? [classes.amount, classes.checked].join(' ') : classes.amount}>{props.amount}</p>
                <Icons itemId={props.id} enableEdit={props.edit} checked={props.checked} deleteItem={props.deleteItem} checkItem={props.checkItem} />
            </div>
        </div>
    );
}

export default ShoppingListItem;