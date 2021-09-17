import React, { useState } from "react";

import classes from "./RateInput.module.css";

import Input from "../../../../UI/Input/Input";

const RateInput = (props) => {
  const [optionsOpen, setOptionsOpen] = useState(false);

  const onOptionsToggleHandler = () => {
    setOptionsOpen((prevState) => !prevState);
  };

  return (
    <div className={classes.RateInput}>
      <Input
        id="food_level"
        bright
        small
        center
        menu
        menuClosed={optionsOpen}
        type="button"
        placeholder="سختی"
        value={` سختی ${props.level ? props.level : ''}`}
        onClick={onOptionsToggleHandler}
        onKeyDown={()=>{}}
      />
      {
        !optionsOpen ? 
          <div
            className={`${classes.RateList} ${optionsOpen ? classes.RateListHidden : ''}`}
          >
            <ul>
              <li onClick={() => props.onSetLevel(null)} className={props.level == null ? classes.SelectedOption: null}>-</li>
              <li onClick={() => props.onSetLevel(1)} className={props.level === 1 ? classes.SelectedOption: null}>1</li>
              <li onClick={() => props.onSetLevel(2)} className={props.level === 2 ? classes.SelectedOption: null}>2</li>
              <li onClick={() => props.onSetLevel(3)} className={props.level === 3 ? classes.SelectedOption: null}>3</li>
            </ul>
          </div> :
          null
      }
    </div>
  );
};

export default RateInput;
