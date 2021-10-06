import React, { useEffect, useState } from "react"
import { adminFoodService } from "../.././../../../services/admin-food.service"
import classes from "./FoodAdminPanel.module.css"
import AddFood from "./AddFood"
import Header from "../UserManagementPanel/Header"
import ShowFoodComponent from "./FoodComponents/ShowFoodComponent"

const FoodAdminPanel = () => {
    const [foods, setFoods] = useState([]);
    const [showAddFood, setShowAddfood] = useState(false);

    const [updatePage, setUpdatePage] = useState(false);

    useEffect(() => {
        adminFoodService.fetchFoods()
            .then(res => setFoods(res.data.data))
            .catch(err => console.error(err));
    }, [updatePage])

    return (
        <div className={classes.container}>
            <div className={classes.headerContainer}>
                <p className={classes.pageTitle}>غذا ها</p>
                <button className={classes.addFoodButton} onClick={() => setShowAddfood(prev => !prev)}>افزودن غذا</button>
            </div>
            <div className={showAddFood ? classes.addFoodContainer : classes.hide}>
                <AddFood updatePage={setUpdatePage} />
            </div>
            <div className={classes.line} />
            {foods.map(food => <ShowFoodComponent food={food} key={food.id} />)}
        </div>
    );
}

export default FoodAdminPanel;