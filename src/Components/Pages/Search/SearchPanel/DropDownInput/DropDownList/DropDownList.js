import React from "react";
import DropDownItem from "./DropDownItem/DropDownItem";

import classes from './DropDownList.module.css';

const DropDownList = (props) => {

    return (
        <ul className={classes.DropDownList}>
            {props.list.map(item => <DropDownItem active={props.selected ? props.selected.id === item.id : false} item={item} key={item.id} onSelectItem={props.onSetCategory}/>)}
        </ul>
    );
}

export default DropDownList