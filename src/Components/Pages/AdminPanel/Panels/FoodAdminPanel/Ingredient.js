import React, { useEffect, useState } from "react"
import classes from "./Ingredient.module.css"

const Ingredient = (props) => {
    const [ingredientName, setIngredientName] = useState('');
    const [ingredientAmount, setIngredientAmount] = useState('');
    const [amountUnit, setAmountUnit] = useState('');

    let ingredientInfo = { "ingredientName": '', "ingredientAmount": '', "amountUnit": '', "id": props.id};

    useEffect(() => {
        ingredientInfo.ingredientName = ingredientName;
        ingredientInfo.ingredientAmount = ingredientAmount;
        ingredientInfo.amountUnit = amountUnit;
        props.updateIngredientData(ingredientInfo,props.id);
    }, [ingredientName, ingredientAmount, amountUnit]);

    return (
        <div className={classes.container}>
            ماده {props.id+1}:
            <input type="text" className={classes.ingredientName} value={ingredientName} onChange={(event) => setIngredientName(event.target.value)} placeholder="نام ماده" />
            <input type="number" className={classes.ingredientAmount} value={ingredientAmount} onChange={(event) => setIngredientAmount(event.target.value)} placeholder="مقدار" />
            <input className={classes.amountUnit} value={amountUnit} onChange={(event) => setAmountUnit(event.target.value)} placeholder="واحد" />
        </div>
    );
}

export default Ingredient;