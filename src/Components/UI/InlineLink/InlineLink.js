import React from 'react'
import { Link } from 'react-router-dom'

import classes from './InlineLink.module.css'

const InlineLink = (props) => (
    <Link className={classes.PublicInlineLink} to={props.link}>{props.text}</Link>
)

export default InlineLink;