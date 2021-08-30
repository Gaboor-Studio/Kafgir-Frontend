import React from 'react';

import classes from './InlineButton.module.css';

const InlineButton = (props) => (
    <button className={classes.InlineButton} onClick={props.clicked} type={props.type}>{props.text}</button>
);

export default InlineButton