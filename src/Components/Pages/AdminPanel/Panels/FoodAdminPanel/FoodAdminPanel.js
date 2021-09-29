import React from "react"
import classes from "./FoodAdminPanel.module.css"
import AddFood from "./AddFood"

const FoodAdminPanel = () => {
    return(
        <div className={classes.container}>
            <AddFood />
        </div>
    );
}

export default FoodAdminPanel;