import React from 'react'

import classes from './CommentBox.module.css'

const CommentBox = (props) => {
    return(
        <textarea className={classes.CommentBox} value={props.value} onChange={props.onChange}/>
    )
}

export default CommentBox