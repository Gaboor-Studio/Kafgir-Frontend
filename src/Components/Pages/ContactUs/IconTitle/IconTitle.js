import React from 'react'

import classes from './IconTitle.module.css'

const IconTitle = (props) => {
    return(
        <div className={classes.IconTitle}>
            <h3>{props.title}</h3>
            <img src={props.picture} alt={props.title}/>
        </div>
    )
}

export default IconTitle