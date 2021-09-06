import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "../../../UI/Button/Button";
import InlineLink from "../../../UI/InlineLink/InlineLink";
import Input from "../../../UI/Input/Input";

import classes from "./ChangePassword.module.css";

const ChangePassword = (props) => {
  const [oldPassword, setOldPassword] = useState("");
  const history = useHistory();

  const onPasswordFieldChangeHandler = (event) => {
    event.persist();
    setOldPassword(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    history.push("/auth/choose-new-password", {old_password: oldPassword});
  };

  return (
    <div className={classes.ChangePassword}>
      <div className={classes.ChangePasswordTitle}>
        <h2>تغیر رمز عبور</h2>
      </div>
      <form onSubmit={onSubmit} className={classes.ChangePasswordForm}>
        <Input
          small
          ltr={oldPassword ? true : false}
          id="password"
          required
          type="password"
          placeholder="رمز فعلی"
          value={oldPassword}
          onType={onPasswordFieldChangeHandler}
        />
        <InlineLink link="/auth/forgot-password" text="فراموشی رمز عبور" />
        <Button>تایید</Button>
      </form>
    </div>
  );
};

export default ChangePassword;
