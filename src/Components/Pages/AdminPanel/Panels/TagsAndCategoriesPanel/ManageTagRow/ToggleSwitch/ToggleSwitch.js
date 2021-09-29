import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import classes from "./ToggleSwitch.module.css";

const ToggleSwitch = (props) => {
  const [toggle, setToggle] = useState(false);
  const { defaultChecked, disabled, onChange } = props;

  useEffect(() => {
    if (defaultChecked) {
      setToggle(defaultChecked);
    }
  }, []);

  useEffect(() => {
      setToggle(defaultChecked);
  }, [defaultChecked]);

  const triggerToggle = () => {
    if ( disabled ) {
        return;
    }

    setToggle(!toggle);

    if ( typeof onChange === 'function' ) {
        onChange(!toggle);
    }
  };

  return (
    <div
      onClick={triggerToggle}
      className={`${classes.wrgToggle} ${
        toggle ? classes.wrgToggleChecked : ""
      } ${disabled ? classes.wrgToggleDisabled : ""}`}
    >
      <div className={`${classes.wrgToggleContainer} ${toggle ? classes.Success : classes.Failure}`}>
        <div className={classes.wrgToggleCheck}>
          <span>On</span>
        </div>
        <div className={classes.wrgToggleUncheck}>
          <span>Off</span>
        </div>
      </div>
      <div className={classes.wrgToggleCircle}></div>
      <input
        className={classes.wrgToggleInput}
        type="checkbox"
        aria-label="Toggle Button"
      />
    </div>
  );
};

ToggleSwitch.propTypes = {
  disabled: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  className: PropTypes.string,
  onChange: PropTypes.func,
  icons: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      checked: PropTypes.node,
      unchecked: PropTypes.node,
    }),
  ]),
};

export default ToggleSwitch;
