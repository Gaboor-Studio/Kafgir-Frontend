import React, {useState} from "react";
import Button from "../../../UI/Button/Button";
import InlineButton from "../../../UI/InlineButton/InlineButton";
import Input from "../../../UI/Input/Input";

import classes from "./ConfirmEmail.module.css";

const ConfirmEmail = (props) => {
    const [code, setCode] = useState("")

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("request sent [Confirm Email]");
  };

  const onInputChangeHandler = (event) => {
      setCode(event.target.value)
  }

  return (
    <div className={classes.ConfirmEmail}>
      <div className={classes.ConfirmEmailTitle}>
        <h2>تایید ایمیل</h2>
      </div>
      <form className={classes.ConfirmEmailForm} onSubmit={onSubmit}>
        <Input
          small
          center
          id="code"
          required
          type="text"
          placeholder="___    ___    ___"
          value={code}
          onType={onInputChangeHandler}
        />
        <InlineButton type="button" clicked={() => console.log('send code again')} text="ارسال دوباره کد"/>
        <Button>تایید</Button>
      </form>
    </div>
  );
};

export default ConfirmEmail;
