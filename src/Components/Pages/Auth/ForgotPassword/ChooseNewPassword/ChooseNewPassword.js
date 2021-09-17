import React, { useState, useEffect } from "react";
import { useLocation, useParams, useHistory } from "react-router-dom";

import Input from "../../../../UI/Input/Input";
import Button from "../../../../UI/Button/Button";
import ErrorModal from "../../../../UI/Modal/ErrorModal/ErrorModal";

import classes from "./ChooseNewPassword.module.css";

const ChooseNewPassword = (props) => {
  const [credentials, setCredentials] = useState({
    old_password: "",
    password: "",
    password_rep: "",
    // email: "",
  });

  // const location = useLocation();
  // const { reset_token } = useParams();
  const history = useHistory();

  // useEffect(() => {
  //   if (props.token && props.email){
  //     setCredentials(prevCredentials => {
  //       const newCredentials = {
  //         ...prevCredentials,
  //         email: 
  //       }
  //     })
  //   }
  // }, [props]);

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
    event.preventDefault();

    const options = {
      method: "POST",
      headers: new Headers({ "content-type": "application/json" }),
      body: JSON.stringify({
        old_password: credentials.old_password,
        new_password: credentials.password,
        new_password_rep: credentials.password_rep,
        email: props.email,
        reset_token: props.token,
      }),
    };

    fetch("http://84.241.22.193:8000/api/auth/reset-password/", options)
    .then((res) => {
      console.log(res);
      Promise.resolve(res.json()).then((data) => {
        console.log(data);
        if (res.ok) {
          console.log("request sent[choose-new-password]");
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

  return (
    <React.Fragment>
      <ErrorModal
        show={error.open}
        error={error.err}
        modalClosed={closeError}
        news
      />
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
    </React.Fragment>
  );
};

export default ChooseNewPassword;
