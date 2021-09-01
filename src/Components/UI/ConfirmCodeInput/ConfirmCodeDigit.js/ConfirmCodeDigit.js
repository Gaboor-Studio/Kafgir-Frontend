import React from 'react'

import classes from './ConfirmCodeDigit.module.css'

const ConfirmCodeDigit = (props) => (
    <input className={classes.ConfirmCodeDigit}
    type="text"
    name={`ssn-${props.index}`}
    maxLength={1}
    onChange={props.onChange}
  />
)

export default ConfirmCodeDigit