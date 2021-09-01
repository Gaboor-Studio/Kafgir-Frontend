import React, { useState } from "react";
import Button from "../../../UI/Button/Button";
import InlineLink from "../../../UI/InlineLink/InlineLink";
import Input from "../../../UI/Input/Input";

import classes from "./Login.module.css";

const Login = (props) => {
  const [loginInfo, setLoginInfo] = useState({ email: "", password: "" });

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("request sent[login]");
  };

  const onInputChangeHandler = (event) => {
    event.persist();
    setLoginInfo((prevInfo) => {
      const newInfo = {
        ...prevInfo,
        [event.target.id]: event.target.value,
      };
      return newInfo;
    });
  };

  return (
    <div className={classes.Login}>
      <div className={classes.LoginTitle}>
        <h2>ورود</h2>
      </div>
      <form className={classes.LoginForm} onSubmit={onSubmit}>
        <Input
          ltr={loginInfo.email ? true : false}
          id="email"
          required
          type="email"
          placeholder="ایمیل"
          value={loginInfo.email}
          onType={onInputChangeHandler}
        />
        <Input
          ltr={loginInfo.password ? true : false}
          id="password"
          required
          type="password"
          placeholder="رمز عبور"
          value={loginInfo.password}
          onType={onInputChangeHandler}
        />
        <div className={classes.LoginFormOptions}>
          <InlineLink link="/auth/forgot-password" text="فراموشی رمز عبور" />
          <InlineLink link="/auth/signup" text="ثبت نام" />
        </div>
        <Button>ورود به حساب کاربری</Button>
      </form>
    </div>
  );
};

export default Login;
