import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {

    const styles = [classes.PublicButton]

    if (props.disabled){
        styles.push(classes.ButtonDisabled)
    }

  return (
    <button
      className={styles.join(' ')}
      onClick={props.clicked}
      type={props.type}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
