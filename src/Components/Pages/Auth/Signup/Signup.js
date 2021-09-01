import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import Input from "../../../UI/Input/Input";
import Button from "../../../UI/Button/Button";
import InlineLink from "../../../UI/InlineLink/InlineLink";

import classes from "./Signup.module.css";

const Signup = (props) => {
  const [credentials, setCredentials] = useState({
    username: "",
    name: "",
    last_name: "",
    phone_number: "",
    email: "",
    password: "",
    password_rep: "",
  });

  const history = useHistory()

  const onInputChangeHandler = (event) => {
    event.persist();
    setCredentials((prevUserInfo) => {
      const newState = {
        ...prevUserInfo,
        [event.target.id]: event.target.value,
      };
      return newState;
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("request sent");
    history.push({
      pathname: '/auth/confirmation',
      state: { email: credentials.email, phone_number: credentials.phone_number }
    })
  };

  return (
    <div className={classes.SignUp}>
      <div className={classes.SignUpTitle}>
        <h2>ثبت نام</h2>
      </div>
      <form className={classes.SignUpForm} onSubmit={onSubmit}>
        <Input
          small
          id="last_name"
          required
          type="text"
          placeholder="نام خانوادگی"
          value={credentials.last_name}
          onType={onInputChangeHandler}
        />
        <Input
          small
          id="name"
          required
          type="text"
          placeholder="نام"
          value={credentials.name}
          onType={onInputChangeHandler}
        />
        <Input
          small
          ltr={credentials.phone_number ? true : false}
          id="phone_number"
          required
          type="tel"
          placeholder="شماره همراه"
          value={credentials.phone_number}
          onType={onInputChangeHandler}
        />
        <Input
          small
          ltr={credentials.username ? true : false}
          id="username"
          required
          type="text"
          placeholder="نام کاربری"
          value={credentials.username}
          onType={onInputChangeHandler}
        />
        <Input
          ltr={credentials.email ? true : false}
          id="email"
          required
          type="email"
          placeholder="ایمیل"
          value={credentials.email}
          onType={onInputChangeHandler}
        />
        <Input
          ltr={credentials.password ? true : false}
          id="password"
          required
          type="password"
          placeholder="رمز عبور"
          value={credentials.password}
          onType={onInputChangeHandler}
        />
        <Input
          ltr={credentials.password_rep ? true : false}
          id="password_rep"
          required
          type="password"
          placeholder="تکرار رمز عبور"
          value={credentials.password_rep}
          onType={onInputChangeHandler}
        />
        <div className={classes.AlreadySignedUp}>
          <InlineLink link="/auth/login" text="وارد شوید" />
          <p>از قبل اکانت دارید ؟</p>
        </div>
        <Button>ثبت نام</Button>
      </form>
    </div>
  );
};

export default Signup;