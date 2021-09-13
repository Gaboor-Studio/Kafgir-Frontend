import React from "react"
import PageHeader from "../../UI/PageHeader/PageHeader"
import classes from "./ShoppingList.module.css"
import ShoppingListItem from "./ShoppingListItem"

const ShoppingList = () => {


    return (
        <div>
            <PageHeader title="لیست خرید" link="/"></PageHeader>
            <div className={classes.buttonContainer} dir="rtl">
                <button type="button" className={classes.addButton}>افزودن به سبد خرید</button>
                <button type="button" className={classes.deleteAllButton}>حذف همه</button>
            </div>
            <ShoppingListItem name="تخم مرغ" amount="1 کیلوگرم"></ShoppingListItem>
            <ShoppingListItem name="تخم مرغ" amount="1 کیلوگرم"></ShoppingListItem>
            <ShoppingListItem name="تخم مرغ" amount="1 کیلوگرم"></ShoppingListItem>
            <ShoppingListItem name="تخم مرغ" amount="1 کیلوگرم"></ShoppingListItem>
        </div>
    );
}

export default ShoppingList;