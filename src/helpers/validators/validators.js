import React from "react";
import classes from "./validators.module.css";

import { isEmail, isStrongPassword, isMobilePhone } from "validator";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const email = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const phone = (value) => {
  if (!isMobilePhone(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a phone number.
      </div>
    );
  }
};

export const Validators = {
  required,
  email,
  phone
};
