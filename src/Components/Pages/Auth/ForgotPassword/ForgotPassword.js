import React, { useState, useCallback, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Button from "../../../UI/Button/Button";
import ConfirmCodeInput from "../../../UI/ConfirmCodeInput/ConfirmCodeInput";
import InlineButton from "../../../UI/InlineButton/InlineButton";
import Input from "../../../UI/Input/Input";

import classes from "./ForgotPassword.module.css";

const ForgotPassword = (props) => {
  const [codeSent, setCodeSent] = useState(false);
  const [recoverEmail, setRecoverEmail] = useState("");
  const [recoverCode, setRecoverCode] = useState([]);
  const history = useHistory()

  const codeSize = 5

  useEffect(() => {
    const codeArray = Array.from({ length: codeSize }, (element, index) => "")
  
    setRecoverCode(codeArray)
  }, [])

  const onModeToggle = () => {
    setCodeSent((prevMode) => !prevMode);
  };

  const onEmailFieldChange = (event) => {
    event.persist();
    setRecoverEmail(event.target.value);
  };

  const onCodeFieldChange = useCallback((index, value) => {
    setRecoverCode(prevCode => {
      const newCode = [...prevCode]
      newCode[index] = value
      return newCode
    })
  },[]);

  const onSubmitEmail = (event) => {
    event.preventDefault();
    console.log('request sent[forgot password][confirm email]');
    onModeToggle();
  };

  const onSubmitCode = (event) => {
    event.preventDefault();
    console.log(recoverCode)
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
      <ConfirmCodeInput length={codeSize} onChangeValue={onCodeFieldChange}/>
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
