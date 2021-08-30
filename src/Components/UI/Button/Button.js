import React from 'react'
import classes from './Button.module.css'

const Button = (props) => (
    <button className={classes.PublicButton} onClick={props.clicked} type={props.type}>{props.children}</button>
)

export default Button;