import React from "react"
import classes from "./Plancard.module.css"
import addbutton from "../../../../assets/planner-addfood.png"

const Plancard = (props) => {
    const image=(props.foodData.imageUrl===""?addbutton:props.foodData.imageUrl);
    return (
        <div dir="rtl" className={classes.item}>
            <p>{props.meal}</p>
            <div className={classes.imageContainer}>
                <img src={image} className={classes.image} alt="foodimage"></img>
                <div className={props.foodData.name===""?[]:classes.textContainer}>
                    {props.foodData.name}
                </div>
            </div>

        </div>
    );
}

export default Plancard;