//ShoppingList page component which consists of a header, ShoppingListItem components and AddItem component for adding a new item to the list

import React, { useEffect, useState } from "react"
import { shoppingListService } from "../../../services/shopping-list.service"
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
    const [editMode, setEditMode] = useState(0);
    const [editingItem, setEditingItem] = useState(0);

    const pageUpdateHandler = () => {
        setUpdateItems(prev => !prev);
        setEditMode(0);
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

    const deleteItem = (id) => {
        console.log(`item ${id} deleted`);
    }

    const checkItem = (id) => {
        console.log(`item ${id} checked`);
    }

    const edit = (id) => {
        setEditingItem(id);
        setEditMode(1);
        setShowBackdrop(true);
        setShowAddItemPanel(true);
    }

    return (
        <div>
            <Backdrop show={showBackdrop} onClose={closeAddItem} />
            <AddItemPanel show={showAddItemPanel} onClose={closeAddItem} onConfirm={confirmItem} updateItems={pageUpdateHandler} editState={editMode} editId={editingItem} />
            <PageHeader title="لیست خرید" link="/"></PageHeader>
            <div className={classes.buttonContainer} dir="rtl">
                <button type="button" className={classes.addButton} onClick={addItem}>افزودن به سبد خرید</button>
                <button type="button" className={classes.deleteAllButton}>حذف همه</button>
            </div>
            {items.map(item => <ShoppingListItem deleteItem={deleteItem} key={item.id} id={item.id} name={item.title} amount={item.amount} checked={item.done} />)}
            <ShoppingListItem edit={edit} deleteItem={deleteItem} checkItem={checkItem} key={0} id={78} name={"بادمجون"} amount={"1 کیلوگرم"} checked={0} />
        </div>
    );
}

export default ShoppingList;