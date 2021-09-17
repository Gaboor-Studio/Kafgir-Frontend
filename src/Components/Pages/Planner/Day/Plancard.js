//component for showing each food in a day

import React from "react"
import classes from "./Plancard.module.css"
import addbutton from "../../../../assets/planner-addfood.png"
import removeButton from "../../../../assets/remove-button.png"

const Plancard = (props) => {
    const mealName=props.meal==="breakfast"?"صبحانه":props.meal==="lunch"?"نهار":"شام";
    //to remove this food from the plan
    const removeItem = () => {
        props.sendRemoveRequest(props.meal, props.dayNo, props.weekNo);
    }
    const image = (props.foodData.imageUrl === "" ? addbutton : props.foodData.imageUrl);
    return (
        <div dir="rtl" className={classes.item}>
            <p>{mealName}</p>
            <div className={classes.imageContainer}>
                <img src={image} className={classes.image} alt="foodimage"></img>
                {image===addbutton?[]:<img src={removeButton} alt="remove button" className={classes.removeButton} onClick={removeItem}></img>}
                <div className={props.foodData.name === "" ? [] : classes.textContainer}>
                    {props.foodData.name}
                </div>
            </div>
        </div>
    );
}

export default Plancard;