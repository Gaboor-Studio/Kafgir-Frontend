import React, { useState, useCallback, useEffect } from "react";
import { useHistory } from "react-router-dom";

import Button from "../../../../UI/Button/Button";
import ConfirmCodeInput from "../../../../UI/ConfirmCodeInput/ConfirmCodeInput";
import InlineButton from "../../../../UI/InlineButton/InlineButton";
import ErrorModal from "../../../../UI/Modal/ErrorModal/ErrorModal";
import RecoverForm from "../RecoverForm/RecoverForm";

import classes from "./ConfirmChange.module.css";

const ConfirmChange = (props) => {
  const [codeSent, setCodeSent] = useState(false);

  const [recoverForm, setRecoverForm] = useState({
    isEmail: true,
    email: "",
    phone: "",
  });

  const [recoverCode, setRecoverCode] = useState([]);

  const [error, setError] = useState({
    open: false,
    err: "",
  });

  const history = useHistory();

  const codeSize = 5;

  useEffect(() => {
    const codeArray = Array.from({ length: codeSize }, (element, index) => "");

    setRecoverCode(codeArray);
  }, []);

  const closeError = () => {
    setError({
      open: false,
      err: "",
    });
  };

  const onModeToggle = () => {
    setCodeSent((prevMode) => !prevMode);
  };

  const onFormChange = () => {
    setRecoverForm((prevForm) => {
      const newForm = { ...prevForm, isEmail: !prevForm.isEmail };
      return newForm;
    });
  };

  const onFormFieldChange = (event) => {
    event.persist();
    setRecoverForm((prevForm) => {
      const newForm = { ...prevForm, [event.target.id]: event.target.value };
      return newForm;
    });
  };

  const onCodeFieldChange = useCallback((index, value) => {
    setRecoverCode((prevCode) => {
      const newCode = [...prevCode];
      newCode[index] = value;
      return newCode;
    });
  }, []);

  const onSubmitRecovery = (event) => {
    event.preventDefault();

    const options = {
      method: "POST",
      headers: new Headers({ "content-type": "application/json" }),
      body: JSON.stringify(recoverForm),
    };

    fetch("http://84.241.22.193:8000/api/auth/send-confirmation/", options)
    .then((res) => {
      console.log(res);
      Promise.resolve(res.json()).then((data) => {
        console.log(data);
        if (res.ok) {
          console.log("request sent[forgot password][confirm email]");
          onModeToggle();
        } else {
          setError({
            open: true,
            err: JSON.stringify(data),
          });
        }
      });
    })
  };

  const onSubmitCode = (event) => {
    event.preventDefault();

    const options = {
      method: "POST",
      headers: new Headers({ "content-type": "application/json" }),
      body: JSON.stringify({confirm_code: recoverCode.join(''), email: recoverForm.email}),
    };

    fetch("http://84.241.22.193:8000/api/auth/get-reset-token/", options)
      .then((res) => {
        console.log(res);
        Promise.resolve(res.json()).then((data) => {
          console.log(data);
          if (res.ok) {
            console.log("request sent[forgot password]");
            // history.push(`/auth/choose-new-password/${data.token}`, {email: recoverForm.email});
            props.onChangeClick(data.token, recoverForm.email)
          } else {
            setError({
              open: true,
              err: JSON.stringify(data),
            });
          }
        });
      })
  };

  const emailForm = (
    <RecoverForm
      onSubmitForm={onSubmitRecovery}
      data={recoverForm}
      onFormFieldChange={onFormFieldChange}
      onStateChange={onFormChange}
    />
  );

  const codeForm = (
    <form onSubmit={onSubmitCode} className={classes.CodeForm}>
      <ConfirmCodeInput length={codeSize} onChangeValue={onCodeFieldChange} />
      <InlineButton clicked={onModeToggle} type="button" text="تغیر ایمیل" />
      <Button>تایید</Button>
    </form>
  );

  return (
    <React.Fragment>
      <ErrorModal
        show={error.open}
        error={error.err}
        modalClosed={closeError}
        news
      />
      <div className={classes.ConfirmChange}>
        <div className={classes.ConfirmChangeTitle}>
          <h2>فراموشی رمز عبور</h2>
        </div>
        {codeSent ? codeForm : emailForm}
      </div>
    </React.Fragment>
  );
};

export default ConfirmChange;
