import React from 'react'

import classes from './GreenSign.module.css'
import check from '../../../../assets/ui_signs/check.png'

const GreenSign = (props) => (
    <div className={classes.GreenSign}>
        <img src={check} alt="It's all good"/>
    </div>
);

export default GreenSign