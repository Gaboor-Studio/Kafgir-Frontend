import React from "react";

import classes from './DropDownItem.module.css'

const DropDownItem = (props) => {

    return (
        <li className={`${classes.DropDownItem} ${props.active ? classes.ActiveListItem : ''}`} onClick={() => props.onSelectItem(props.item)}>
            {props.item.title}
        </li>
    );
}

export default DropDownItem