import React, { useCallback, useState } from "react"
import classes from "./AddItemPanel.module.css"
import closeButton from "../../../../assets/shopping-list/close-button.svg"

const AddItemPanel = (props) => {
    const [itemName, setItemName] = useState('');
    const [itemAmount, setItemAmount] = useState('');
    const [itemUnit, setItemUnit] = useState('')

    const closePanel = () => {
        setItemName('');
        setItemAmount('');
        setItemUnit('');
        props.onClose();
    }
    const confirmItem = () => {
        if (itemName.length>10)
            alert("نام ایتم باید کمتر از 10 حرف باشد")
        else if(itemName.length<1)
            alert("نام نباید خالی باشد")
        else {
            setItemName('');
            setItemAmount('');
            setItemUnit('');
            props.onConfirm(itemName, itemAmount, itemUnit);
        }
    }
    const nameChangeHandler = (event) => {
        setItemName(event.target.value);
    }
    const amountChangeHandler = (event) => {
        setItemAmount(event.target.value);
    }
    const unitChangeHandler = (event) => {
        setItemUnit(event.target.value);
    }

    return (
        <div className={props.show ? classes.addItemPanel : classes.hide} dir='rtl'>
            <img src={closeButton} className={classes.closeButton} onClick={closePanel}></img>
            <input type="text" className={classes.itemName} placeholder="نام" maxLength="10" onChange={nameChangeHandler} value={itemName} />
            <input type="number" className={classes.itemAmount} onChange={amountChangeHandler} value={itemAmount} />
            <input type="text" className={classes.unit} onChange={unitChangeHandler} value={itemUnit} placeholder="کیلوگرم" />
            <div className={classes.confirmButton} onClick={confirmItem}>تایید</div>
        </div>
    );
}

export default AddItemPanel;