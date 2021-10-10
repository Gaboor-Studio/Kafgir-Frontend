//ShoppingList page component which consists of a header, ShoppingListItem components and AddItem component for adding a new item to the list

import React, { useEffect, useState } from "react"
import { shoppingListService } from "../../../services/shoppint-list.service"
import PageHeader from "../../UI/PageHeader/PageHeader"
import classes from "./ShoppingList.module.css"
import ShoppingListItem from "./ShoppingListItem"
import Backdrop from "../../UI/Backdrop/Backdrop"
import AddItemPanel from "./AddItemPanel/AddItemPanel"

const ShoppingList = () => {
    const [items, setItems] = useState([]);
    const [showBackdrop, setShowBackdrop] = useState(false);
    const [showAddItemPanel, setShowAddItemPanel] = useState(false);
    const [updateItems, setUpdateItems] = useState(false);

    const pageUpdateHandler = () => {
        setUpdateItems(prev => !prev);
    }

    useEffect(() => {
        shoppingListService.fetchShoppingItems()
            .then(res => setItems(res.data))
            .catch(err => console.error(err));
    }, [updateItems])

    console.log(items)

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
            <AddItemPanel show={showAddItemPanel} onClose={closeAddItem} onConfirm={confirmItem} updateItems={pageUpdateHandler} />
            <PageHeader title="لیست خرید" link="/"></PageHeader>
            <div className={classes.buttonContainer} dir="rtl">
                <button type="button" className={classes.addButton} onClick={addItem}>افزودن به سبد خرید</button>
                <button type="button" className={classes.deleteAllButton}>حذف همه</button>
            </div>
            {items.map(item => <ShoppingListItem key={item.id} name={item.title} amount={item.amount} checked={item.done} />)}
        </div>
    );
}

export default ShoppingList;