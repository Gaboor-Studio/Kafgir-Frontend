import React from "react";

import classes from "./ListItem.module.css";

import remove from '../../../../../../assets/search_page/remove.png'

/**
 * functional component that represents an item to the ingredients list
 */
const ListItem = React.memo((props) => {
  return (
    <div className={classes.ListItem}>
      <p>{props.children}</p>
      <img src={remove} alt="remove" onClick={props.deleted}/>
    </div>
  );
}, (prevProps, nextProps) => {
  return prevProps.children === nextProps.children
});

export default ListItem;
