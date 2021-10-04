import React, { useState } from "react"
import classes from "./RecipeStep.module.css"


const RecipeStep = (props) => {
    const [instruction, setInstruction] = useState('');

    const instructionChangeHandler = (text) => {
        props.updateInput(text, props.id);
        setInstruction(text);
    }

    return (
        <div className={classes.container}>
            مرحله {props.id + 1}:
            <input className={classes.stepInput} value={instruction} onChange={(event) => instructionChangeHandler(event.target.value)} placeholder="توضیح مرحله" maxLength="254" />
        </div>
    );
}

export default RecipeStep;