import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import {authenticationService} from '../../../../services/auth.service'

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

    authenticationService.login(loginInfo.username, loginInfo.password)
      .then(res => history.push("/"))
      .catch((err) => {
        let errorMessage = "something went wrong";

        if (err.response) {
          errorMessage = err.response.data;
        }

        setError({
          open: true,
          err: JSON.stringify(errorMessage),
        });
      });

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
            type="email"
            placeholder="ایمیل"
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
