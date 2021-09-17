//picture of food in foodcard component

import React from "react"
import classes from "./FoodPic.module.css"

const FoodPic = (props) => {
    
    return(
        <div className={props.className}>
            <img src={props.picture} alt="food pic" className={classes.image}></img>
        </div>
    );
}

export default FoodPic;