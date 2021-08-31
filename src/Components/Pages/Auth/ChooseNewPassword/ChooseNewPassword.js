import React, { useState } from "react";
import Input from "../../../UI/Input/Input";
import Button from "../../../UI/Button/Button";

import classes from "./ChooseNewPassword.module.css";

const ChooseNewPassword = (props) => {
  const [credentials, setCredentials] = useState({
    password: "",
    password_rep: "",
  });

  const onInputChangeHandler = (event) => {
    event.persist();
    setCredentials((prevCredentials) => {
      const newCredentials = {
        ...prevCredentials,
        [event.target.id]: event.target.value,
      };
      return newCredentials;
    });
  };

  const onSubmit = (event) => {
      event.preventDefault()
      console.log('request sent[choose-new-password]')
  }

  return (
    <div className={classes.ChooseNewPassword}>
      <div className={classes.ChooseNewPasswordTitle}>
        <h2>انتخاب رمز جدید</h2>
      </div>
      <form onSubmit={onSubmit} className={classes.ChooseNewPasswordForm}>
        <Input
          small
          ltr={credentials.password ? true : false}
          id="password"
          required
          type="password"
          placeholder="رمز جدید"
          value={credentials.password}
          onType={onInputChangeHandler}
        />
        <Input
          small
          ltr={credentials.password_rep ? true : false}
          id="password_rep"
          required
          type="password"
          placeholder="تکرار رمز"
          value={credentials.password_rep}
          onType={onInputChangeHandler}
        />
        <Button>تایید</Button>
      </form>
    </div>
  );
};

export default ChooseNewPassword;
