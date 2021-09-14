import React, { useState } from "react"
import PageHeader from "../../UI/PageHeader/PageHeader"
import classes from "./ShoppingList.module.css"
import ShoppingListItem from "./ShoppingListItem"
import Backdrop from "../../UI/Backdrop/Backdrop"
import AddItemPanel from "./AddItemPanel/AddItemPanel"

const ShoppingList = () => {
    const [showBackdrop, setShowBackdrop] = useState(false);
    const [showAddItemPanel, setShowAddItemPanel] = useState(false);

    const closeAddItem = () => {
        setShowBackdrop(false);
        setShowAddItemPanel(false);
    }
    const addItem = () => {
        setShowBackdrop(true);
        setShowAddItemPanel(true);
    }
    const confirmItem = (name, amount, unit) => {
        setShowBackdrop(false);
        setShowAddItemPanel(false);
    }

    return (
        <div>
            <Backdrop show={showBackdrop} onClose={closeAddItem} />
            <AddItemPanel show={showAddItemPanel} onClose={closeAddItem} onConfirm={confirmItem} />
            <PageHeader title="لیست خرید" link="/"></PageHeader>
            <div className={classes.buttonContainer} dir="rtl">
                <button type="button" className={classes.addButton} onClick={addItem}>افزودن به سبد خرید</button>
                <button type="button" className={classes.deleteAllButton}>حذف همه</button>
            </div>
            <ShoppingListItem name="تخم مرغ" amount="1" unit="کیلوگرم" checked={false} />
            <ShoppingListItem name="تخم مرغ" amount="1" unit="کیلوگرم" checked={true} />
            <ShoppingListItem name="تخم مرغ" amount="1" unit="کیلوگرم" checked={false} />
            <ShoppingListItem name="تخم مرغ" amount="1" unit="کیلوگرم" checked={false} />
        </div>
    );
}

export default ShoppingList;