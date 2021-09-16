import React from "react";
import Input from "../../../../UI/Input/Input";

import classes from './FillInInput.module.css'

import uparrow from '../../../../../assets/search_page/uparrow.png'
import downarrow from '../../../../../assets/search_page/downarrow.png'

const FillInInput = (props) => {
    return (
        <div className={classes.FillInInput}>
            <input value={props.duration} onChange={props.onChangeDuration} type="number"/>
            <p>دقیقه</p>
            <div className={classes.Arrows}>
                <img src={uparrow} alt="uparrow" onClick={props.onAddOne}/>
                <img src={downarrow} alt="downarrow" onClick={props.onSubOne}/>
            </div>
        </div>
    )
}

export default FillInInput;