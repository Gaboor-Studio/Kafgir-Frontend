import React from "react";
import classes from "./Input.module.css";

const Input = (props) => {

    let styles = [classes.PublicInput]

    if (props.small){
        styles.push(classes.SmallInput)
    }

  return (
    <input
      className={styles.join(' ')}
      id={props.id}
      required={props.required}
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      onChange={(event) => props.onType(event)}
    />
  );
};

export default Input;
