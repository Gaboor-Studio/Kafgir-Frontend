import React from "react";
import ConfirmCodeDigit from "./ConfirmCodeDigit.js/ConfirmCodeDigit";

import classes from "./ConfirmCodeInput.module.css";

const ConfirmCodeInput = React.memo((props) => {

  const handleChange = (e) => {
    const { maxLength, value, name } = e.target;
    const [fieldName, fieldIndex] = name.split("-");

    const index = parseInt(fieldIndex, 10);

    if (value.length === 0) {
        if (index > 0) {
            // Get the next input field
            const nextSibling = document.querySelector(
          `input[name=ssn-${index - 1}]`
        );

        // If found, focus the next field
        if (nextSibling !== null) {
          nextSibling.focus();
        }
      }
    }

    // Check if they hit the max character length
    if (value.length >= maxLength) {
        // Check if it's not the last input field
        if (index < props.length) {
        // Get the next input field
        const nextSibling = document.querySelector(
          `input[name=ssn-${index + 1}]`
        );

        // If found, focus the next field
        if (nextSibling !== null) {
          nextSibling.focus();
        }
      }
    }

    props.onChangeValue(index, value);
  };

  const form = Array.from({ length: props.length }, (element, index) => (
    <ConfirmCodeDigit key={`ssn-${index}`} index={index} onChange={handleChange}/>
  ));

  return (
    <div className={classes.ConfirmCodeInput}>
      {form}
    </div>
  );
});

export default ConfirmCodeInput;
