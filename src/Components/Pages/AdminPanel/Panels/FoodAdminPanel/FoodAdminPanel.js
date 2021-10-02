import React, { useEffect, useState } from "react"
import classes from "./FoodAdminPanel.module.css"
import AddFood from "./AddFood"
import axios from "axios"
import Header from "../UserManagementPanel/Header"
import ShowFoodComponent from "./FoodComponents/ShowFoodComponent"

const FoodAdminPanel = () => {
    const [foods, setFoods] = useState([]);
    const [showAddFood, setShowAddfood] = useState(false);

    const config = {
        headers: {
            "content-type": "application/json",
            Authorization: 'Token cdafd70c8f23c1a654abbd7af0f0440d7bc78a01'
        }
    }

    useEffect(() => {
        axios.get("http://84.241.22.193:8000/api/admin/food/", config)
            .then(res => setFoods(res.data.data))
            .catch(err => console.error(err));
    }, [])
    console.log(foods);
    return (
        <div className={classes.container}>
            <Header title="غذا ها" />
            <div className={classes.uiContainer}>
                <button className={classes.addFoodButton} onClick={() => setShowAddfood(prev => !prev)}>افزودن غذا</button>
            </div>
            <div className={showAddFood ? classes.addFoodContainer : classes.hide}>
                <AddFood />
            </div>
            <div className={classes.line} />
            {foods.map(food => <ShowFoodComponent food={food} key={food.id} />)}
        </div>
    );
}

export default FoodAdminPanel;