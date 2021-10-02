import React from "react";
import classes from "./validators.module.css";

import { isEmail, isStrongPassword, isMobilePhone } from "validator";

const required = (value) => {
  if (!value) {
    return (
      <div className={classes.Alert} role="alert">
        این فیلد اجباریست
      </div>
    );
  }
};

const email = (value) => {
  if (!isEmail(value)) {
    return (
      <div className={classes.Alert} role="alert">
        ایمیل حسابی بده
      </div>
    );
  }
};

const phone = (value) => {
  if (!isMobilePhone(value)) {
    return (
      <div className={classes.Alert} role="alert">
        شماره آدمیزاد وارد کن
      </div>
    );
  }
};

export const Validators = {
  required,
  email,
  phone
};
