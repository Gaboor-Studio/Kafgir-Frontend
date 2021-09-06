import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import Button from "../../../UI/Button/Button";
import InlineLink from "../../../UI/InlineLink/InlineLink";
import Input from "../../../UI/Input/Input";
import ErrorModal from "../../../UI/Modal/ErrorModal/ErrorModal";

import classes from "./Login.module.css";

const Login = (props) => {
  const history = useHistory();
  const [loginInfo, setLoginInfo] = useState({ username: "", password: "" });
  const [error, setError] = useState({
    open: false,
    err: "",
  });

  const closeError = () => {
    setError({
      open: false,
      err: "",
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: "POST",
      headers: new Headers({ "content-type": "application/json; utf-8" }),
      body: JSON.stringify(loginInfo),
    };

    fetch("http://84.241.22.193:8000/api/auth/login/", options)
      .then((res) => {
        console.log(res);
        Promise.resolve(res.json()).then((data) => {
          console.log(data);
          if (res.ok) {
            console.log("request sent[login]");
            history.push("/");
          } else {
            setError({
              open: true,
              err: JSON.stringify(data),
            });
          }
        });
      })
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
    <React.Fragment>
      <ErrorModal
        show={error.open}
        error={error.err}
        modalClosed={closeError}
      />
      <div className={classes.Login}>
        <div className={classes.LoginTitle}>
          <h2>ورود</h2>
        </div>
        <form className={classes.LoginForm} onSubmit={onSubmit}>
          <Input
            ltr={loginInfo.username ? true : false}
            id="username"
            required
            type="text"
            placeholder="نام کاربری"
            value={loginInfo.username}
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
    </React.Fragment>
  );
};

export default Login;
