import React, { useState} from "react";

import classes from './HistoryPanel.module.css'

import deleteall from '../../../../assets/search_page/deleteall.png'
import HistoryItem from "./HistoryItem/HistoryItem";

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

const HistoryPanel = (props) => {

    const [history, setHistory] = useState(searchHistory)

    const onRemoveHistoryHandler = (h) => {
        setHistory(prevHistory => {
            const newHistory = prevHistory.filter(history => history.id !== h.id)
            return newHistory
        })
    }

    const onClearHistory = () => {
        setHistory([])
    }

    return (
        <div className={classes.HistoryPanel}>
            <div className={classes.HistoryPanelTitle}>
                <h2>تاریخچه جستجو</h2>
                <img src={deleteall} alt="delete" onClick={onClearHistory}/>
            </div>
            <hr/>
            <div className={classes.HistoryPanelList}>
                {
                    history && history.length > 0 ?
                    <ul>
                        {history.map(item => <HistoryItem text={item.title} key={item.id} onRemove={() => onRemoveHistoryHandler(item)}/>)}
                    </ul> :
                    <p>no previous history</p>
                }
            </div>
        </div>
    );
}

export default HistoryPanel