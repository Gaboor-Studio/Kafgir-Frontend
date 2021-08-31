import React from 'react'

import classes from './RedSign.module.css'
import cross from '../../../../assets/ui_signs/cross.png'

const RedSign = (props) => (
    <div className={classes.RedSign}>
        <img src={cross} alt="It's all good"/>
    </div>
);

export default RedSign