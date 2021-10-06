import React, { useEffect, useState } from "react"
import { adminFoodService } from "../.././../../../services/admin-food.service"
import classes from "./AddFood.module.css"
import RecipeStep from "./RecipeStep"
import Ingredient from "./Ingredient"
import AddTag from "./AddTag"

const AddFood = (props) => {
    const [foodName, setFoodName] = useState('');
    const [foodTime, setFoodTime] = useState('');
    const [foodDifficulty, setFoodDifficulty] = useState(1);

    const [recipeInput, setRecipeInput] = useState([{ "text": '', "id": 0 }]);
    const [ingredientInput, setIngredientInput] = useState([{ "ingredientName": '', "ingredientAmount": '', "amountUnit": '', "id": 0 }]);

    const [tags, setTags] = useState([])

    let cleanIngredient = [];
    let cleanRecipe = [];

    const config = {
        headers: {
            "content-type": "application/json",
            Authorization: 'Token cdafd70c8f23c1a654abbd7af0f0440d7bc78a01'
        }
    }

    const updateRecipeHandler = (text, id) => {
        recipeInput[id].text = text;
    }

    const updateIngredientHandler = (ingredient, id) => {
        ingredientInput[id] = ingredient;
    }

    const updateTagsHandler = (newTag) => {
        setTags(prev => [...prev, parseInt(newTag)])
    }

    const addRecipeRow = () => {
        setRecipeInput(prev => [...prev, { "text": '', "id": prev.length }]);
    }

    const addIngredientRow = () => {
        setIngredientInput(prev => [...prev, { "ingredientName": '', "ingredientAmount": '', "amountUnit": '', "id": prev.length }]);
    }

    const submitFood = () => {
        makeOutputLists()
        if (foodName === '' || foodTime === '')
            alert("همه ی فیلد ها را پر کنید")
        else {
            adminFoodService.postFood(foodName, parseInt(foodDifficulty), foodTime.toString(), cleanIngredient, cleanRecipe, tags)
                .then(props.updatePage(prev => !prev))
                .catch(err => console.error(err));
            window.location.reload(false);
        }
    }

    const makeOutputLists = () => {
        for (let i = ingredientInput.length - 1; i >= 0; i--)
            if (ingredientInput[i].ingredientName !== '') {
                cleanIngredient = ingredientInput.slice(0, i + 1);
                break;
            }
        for (let i = recipeInput.length - 1; i >= 0; i--)
            if (recipeInput[i].text !== '') {
                cleanRecipe = recipeInput.slice(0, i + 1);
                break;
            }
        for (let i = 0; i < cleanIngredient.length; i++) {
            cleanIngredient[i].name = cleanIngredient[i].ingredientName;
            cleanIngredient[i].amount = [cleanIngredient[i].ingredientAmount + cleanIngredient[i].amountUnit].join(' ');
            delete cleanIngredient[i].ingredientAmount;
            delete cleanIngredient[i].amountUnit;
            delete cleanIngredient[i].ingredientName;
            delete cleanIngredient[i].id;
        }
        for (let i = 0; i < cleanRecipe.length; i++) {
            cleanRecipe[i].step = cleanRecipe[i].id + 1;
            delete cleanRecipe[i].id;
        }
    }

    return (
        <div className={classes.container}>
            <div className={classes.dataContainer}>
                <p className={classes.title}>افزودن غذا</p>
                <input type="text" className={classes.nameInput} value={foodName} placeholder="نام غذا" onChange={(event) => setFoodName(event.target.value)} maxLength="254" />
                <p className={classes.difficultyTitle}>درجه سختی</p>
                <input type="number" className={classes.nameInput} value={foodTime} placeholder="زمان به دقیقه" onChange={(event) => setFoodTime(event.target.value)} />
                <input type="range" className={classes.difficultyRange} min="1" max="3" dir="ltr" value={foodDifficulty} onChange={(event) => setFoodDifficulty(event.target.value)} />
                <p className={classes.difficultyText} >{foodDifficulty === "3" ? "سخت" : foodDifficulty === "2" ? "متوسط" : "ساده"}</p>
            </div>
            <p className={classes.ingredientsTitle}>مواد مورد نیاز</p>
            {ingredientInput.map(ingredient => <Ingredient key={ingredient.id} id={ingredient.id} updateIngredientData={updateIngredientHandler} />)}
            <button type="button" className={classes.addStep} onClick={addIngredientRow}>افزودن ماده</button>
            <p className={classes.recipeTitle}>دستور غذا</p>
            {recipeInput.map(input => <RecipeStep key={input.id} id={input.id} updateInput={updateRecipeHandler}></RecipeStep>)}
            <button type="button" className={classes.addStep} onClick={addRecipeRow}>افزودن مرحله</button>
            <p className={classes.recipeTitle}>تگ ها</p>
            <AddTag updateTags={updateTagsHandler} />
            <button type="button" className={classes.submitFood} onClick={submitFood}>ثبت غذا</button>
        </div>
    );
}

export default AddFood;