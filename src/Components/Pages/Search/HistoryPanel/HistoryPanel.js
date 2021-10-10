import React, { useState} from "react";

import classes from './HistoryPanel.module.css'

import deleteall from '../../../../assets/search_page/deleteall.png'
import HistoryItem from "./HistoryItem/HistoryItem";

/**
 * dummy search history
 */
const searchHistory = [
    {
        id: 1,
        title: 'قرمه سبزی'
    },
    {
        id: 2,
        title: 'جوجه کباب'
    },
    {
        id: 3,
        title: 'املت'
    },
    {
        id: 4,
        title: 'بیف ایستیریگینیف'
    },
    {
        id: 5,
        title: 'خورشت کرفس'
    },
]

/**
 * a component that manages the history panel and shows the search history
 * @param {*} props 
 * @returns None
 */
const HistoryPanel = (props) => {

    return (
        <div className={classes.HistoryPanel}>
            <div className={classes.HistoryPanelTitle}>
                <h2>تاریخچه جستجو</h2>
                <img src={deleteall} alt="delete" onClick={props.onClear}/>
            </div>
            <hr/>
            <div className={classes.HistoryPanelList}>
                {
                    props.history && props.history.length > 0 ?
                    <ul>
                        {props.history.map(item => <HistoryItem text={item.title} key={item.id} onRemove={() => props.onRemove(item.id)}/>)}
                    </ul> :
                    <p>no previous history</p>
                }
            </div>
        </div>
    );
}

export default HistoryPanel