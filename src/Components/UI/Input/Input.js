import React from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  let styles = [classes.PublicInput];

  if (props.small) {
    styles.push(classes.SmallInput);
  }

  if (props.center) {
    styles.push(classes.Centered);
  }

  if (props.ltr) {
    styles.push(classes.LeftToRight);
  }

  if (props.bright) {
    styles.push(classes.Bright);
  }

  if (props.large) {
    styles.push(classes.LargeInput);
  }

  if (props.menu) {
    styles.push(classes.MenuInput);
  }

  if (props.menuClosed) {
    styles.push(classes.MenuInputClosed);
  }
  return (
    <input
      disabled={props.disabled}
      className={styles.join(" ")}
      id={props.id}
      required={props.required}
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      onKeyDown={ props.keyDownActive ? (event) => props.onKeyDown(event) : () => {}}
      onClick={props.onClick}
      onChange={(event) => props.onType(event)}
    />
  );
};

export default Input;
