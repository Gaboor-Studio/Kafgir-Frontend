import React from "react";

import classes from "./MainInput.module.css";

import clear from "../../../../../assets/search_page/clear.png";

import Input from "../../../../UI/Input/Input";

/**
 * functional component for user to input food's name in it
 * @param {*} props 
 * @returns None
 */
const MainInput = (props) => {
  return (
    <div className={classes.MainInput}>
      <Input
        id="food_name"
        required
        bright
        large
        type="text"
        placeholder="نام غذا"
        value={props.foodName}
        onType={props.onFoodNameChange}
      />
      <img className={props.foodName ? classes.ClearButton : classes.ButtonHidden} src={clear} alt="clear" onClick={props.onClear}/>
    </div>
  );
};

export default MainInput;
