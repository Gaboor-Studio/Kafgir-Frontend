import React from "react"
import classes from "./ShoppingListItem.module.css"
import Icons from "./Icons"

const ShoppingListItem = (props) => {


    return (
        <div className={classes.container}>
            <div className={classes.line}></div>
            <div dir="rtl" className={classes.ingredientContainer}>
                <p className={classes.name}>{props.name}</p>
                <p className={classes.amount}>{props.amount}</p>
                <Icons></Icons>
            </div>
        </div>
    );
}

export default ShoppingListItem;