import React from "react";

import classes from './HistoryItem.module.css'

import hat from '../../../../../assets/search_page/hat.png'
import clear from '../../../../../assets/search_page/clear.png'

/**
 * a component that shows a single history record
 * @param {*} props 
 * @returns None
 */
const HistoryItem = (props) => {

    return (
        <li className={classes.HistoryItem}>
            <img className={classes.RightImage} src={hat} alt="hat"/>
            <h3>{props.text}</h3>
            <img className={classes.LeftImage} src={clear} alt="clear" onClick={props.onRemove}/>
        </li>
    );
}

export default HistoryItem