import React, { useEffect, useState } from "react"
import classes from "./AddFood.module.css"
import RecipeStep from "./RecipeStep"

const AddFood = () => {
    const [foodName, setFoodName] = useState('');
    const [foodTime, setFoodTime] = useState('');
    const [foodDifficulty, setFoodDifficulty] = useState(1);

    const [recipeInput, setRecipeInput] = useState([{ "text": '', "id": 0 }]);

    const updateRecipeHandler = (text, id) => {
        recipeInput[id].text = text;
    }

    const addRecipeRow = () => {
        setRecipeInput(prev => [...prev, { "text": '', "id": prev.length }]);
        console.log(recipeInput);
    }

    return (
        <div className={classes.container}>
            <div className={classes.dataContainer}>
                <p className={classes.title}>افزودن غذا</p>
                <input type="text" className={classes.nameInput} value={foodName} placeholder="نام غذا" onChange={(event) => setFoodName(event.target.value)} />
                <p className={classes.difficultyTitle}>درجه سختی</p>
                <input type="number" className={classes.nameInput} value={foodTime} placeholder="زمان به دقیقه" onChange={(event) => setFoodTime(event.target.value)} />
                <input type="range" className={classes.difficultyRange} min="1" max="3" dir="ltr" value={foodDifficulty} onChange={(event) => setFoodDifficulty(event.target.value)} />
                <p className={classes.difficultyText} >{foodDifficulty === "3" ? "سخت" : foodDifficulty === "2" ? "متوسط" : "ساده"}</p>
            </div>
            <p className={classes.ingredientsTitle}>مواد مورد نیاز</p>
            <p className={classes.recipeTitle}>دستور غذا</p>
            {recipeInput.map(input => <RecipeStep key={input.id} id={input.id} updateInput={updateRecipeHandler}></RecipeStep>)}
            <button type="button" className={classes.addStep} onClick={addRecipeRow}>افزودن مرحله</button>

        </div>
    );
}

export default AddFood;