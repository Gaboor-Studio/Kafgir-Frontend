import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import { authenticationService } from "../../../../services/auth.service";
import { Validators } from "../../../../helpers/validators/validators";

// import Input from "../../../UI/Input/Input";
import InputClasses from "../../../UI/Input/Input.module.css";
import Button from "../../../UI/Button/Button";
import InlineLink from "../../../UI/InlineLink/InlineLink";
import ErrorModal from "../../../UI/Modal/ErrorModal/ErrorModal";

import classes from "./Signup.module.css";

const Signup = (props) => {
  // const CheckRef = useRef();
  // const FormRef = useRef();
  let CheckRef;
  let FormRef;

  const [credentials, setCredentials] = useState({
    username: "",
    name: "",
    last_name: "",
    phone_number: "",
    email: "",
    password: "",
    password_rep: "",
  });

  const [error, setError] = useState({
    open: false,
    err: "",
  });

  const history = useHistory();

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

  const closeError = () => {
    setError({
      open: false,
      err: "",
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    FormRef.validateAll()

    if (CheckRef.context._errors.length === 0) {
      authenticationService
        .register(credentials)
        .then((res) => {
          history.push({
            pathname: "/auth/confirmation",
            state: {
              email: credentials.email,
              phone_number: credentials.phone_number,
            },
          });
        })
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
    }
  };

  return (
    <React.Fragment>
      <ErrorModal
        show={error.open}
        error={error.err}
        modalClosed={closeError}
        news
      />
      <div className={classes.SignUp}>
        <div className={classes.SignUpTitle}>
          <h2>ثبت نام</h2>
        </div>
        <Form className={classes.SignUpForm} onSubmit={onSubmit} ref={c => {FormRef = c;}}>
          <Input
            className={`${InputClasses.PublicInput} ${InputClasses.SmallInput}`}
            id="last_name"
            type="text"
            placeholder="نام خانوادگی(دلخواه)"
            value={credentials.last_name}
            onChange={onInputChangeHandler}
          />

          <Input
            className={`${InputClasses.PublicInput} ${InputClasses.SmallInput}`}
            id="name"
            type="text"
            placeholder="نام(دلخواه)"
            value={credentials.name}
            onChange={onInputChangeHandler}
          />
          <Input
            className={`${InputClasses.PublicInput} ${
              InputClasses.SmallInput
            } ${credentials.phone_number ? InputClasses.LeftToRight : ""}`}
            id="phone_number"
            type="tel"
            placeholder="شماره همراه"
            value={credentials.phone_number}
            onChange={onInputChangeHandler}
            validations={[Validators.required, Validators.phone]}
          />
          <Input
            className={`${InputClasses.PublicInput} ${
              InputClasses.SmallInput
            } ${credentials.username ? InputClasses.LeftToRight : ""}`}
            id="username"
            type="text"
            placeholder="نام کاربری"
            value={credentials.username}
            onChange={onInputChangeHandler}
            validations={[Validators.required]}
          />
          <Input
            className={`${InputClasses.PublicInput} ${
              credentials.email ? InputClasses.LeftToRight : ""
            }`}
            id="email"
            type="email"
            placeholder="ایمیل"
            value={credentials.email}
            onChange={onInputChangeHandler}
            validations={[Validators.required, Validators.email]}
          />
          <Input
            className={`${InputClasses.PublicInput} ${
              credentials.password ? InputClasses.LeftToRight : ""
            }`}
            id="password"
            type="password"
            placeholder="رمز عبور"
            value={credentials.password}
            onChange={onInputChangeHandler}
            validations={[Validators.required]}
          />
          <Input
            className={`${InputClasses.PublicInput} ${
              credentials.password_rep ? InputClasses.LeftToRight : ""
            }`}
            id="password_rep"
            type="password"
            placeholder="تکرار رمز عبور"
            value={credentials.password_rep}
            onChange={onInputChangeHandler}
            validations={[Validators.required]}
          />
          <div className={classes.AlreadySignedUp}>
            <InlineLink link="/auth/login" text="وارد شوید" />
            <p>از قبل اکانت دارید ؟</p>
          </div>
          <Button>ثبت نام</Button>
          <CheckButton style={{ display: "none" }} ref={c => {CheckRef = c;}} />
        </Form>
      </div>
    </React.Fragment>
  );
};

export default Signup;
