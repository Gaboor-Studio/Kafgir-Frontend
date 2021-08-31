import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "../../../UI/Button/Button";
import InlineButton from "../../../UI/InlineButton/InlineButton";
import Input from "../../../UI/Input/Input";

import classes from "./ForgotPassword.module.css";

const ForgotPassword = (props) => {
  const [codeSent, setCodeSent] = useState(false);
  const [recoverEmail, setRecoverEmail] = useState("");
  const [recoverCode, setRecoverCode] = useState("");
  const history = useHistory()

  const onModeToggle = () => {
    setCodeSent((prevMode) => !prevMode);
  };

  const onEmailFieldChange = (event) => {
    event.persist();
    setRecoverEmail(event.target.value);
  };

  const onCodeFieldChange = (event) => {
    event.persist();
    setRecoverCode(event.target.value);
  };

  const onSubmitEmail = (event) => {
    event.preventDefault();
    console.log('request sent[forgot password][confirm email]');
    onModeToggle();
  };

  const onSubmitCode = (event) => {
    event.preventDefault();
    console.log('request sent[forgot password]');
    history.push("/auth/choose-new-password")
  }

  const emailForm = (
    <form onSubmit={onSubmitEmail} className={classes.EmailForm}>
      <Input
        ltr={recoverEmail ? true : false}
        small
        id="email"
        required
        type="email"
        placeholder="ایمیل"
        value={recoverEmail}
        onType={onEmailFieldChange}
      />
      <Button>ارسال لینک بازیابی</Button>
    </form>
  );

  const codeForm = (
    <form onSubmit={onSubmitCode} className={classes.CodeForm}>
      <Input
        ltr={recoverCode ? true : false}
        small
        center
        id="code"
        required
        type="text"
        placeholder="___    ___    ___   ___   ___"
        value={recoverCode}
        onType={onCodeFieldChange}
      />
      <InlineButton clicked={onModeToggle} type="button" text="تغیر ایمیل" />
      <Button>تایید</Button>
    </form>
  );

  return (
    <div className={classes.ForgotPassword}>
      <div className={classes.ForgotPasswordTitle}>
        <h2>فراموشی رمز عبور</h2>
      </div>
      {codeSent ? codeForm : emailForm}
    </div>
  );
};

export default ForgotPassword;
