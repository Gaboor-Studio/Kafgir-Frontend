import React, { useState } from "react";

import classes from "./RecoverForm.module.css";

import Input from "../../../../UI/Input/Input";
import Button from "../../../../UI/Button/Button";

const RecoverForm = (props) => {

  return (
    <form onSubmit={props.onSubmitForm} className={classes.RecoverForm}>
        <div className={classes.Radio}>
            <div><input type="radio" value="email" name="email" onChange={props.onStateChange} checked={props.data.isEmail}/>استفاده از ایمیل</div>
            <div><input type="radio" value="phone" name="phone" onChange={props.onStateChange} checked={!props.data.isEmail}/> استفاده از شماره همراه</div>
        </div>
      {props.data.isEmail ? (
        <Input
          ltr={props.data.email ? true : false}
          small
          id="email"
          required
          type="email"
          placeholder="ایمیل"
          value={props.data.email}
          onType={props.onFormFieldChange}
        />
      ) : (
        <Input
          ltr={props.data.phone ? true : false}
          small
          id="phone"
          required
          type="tel"
          placeholder="تلفن همراه"
          value={props.data.phone}
          onType={props.onFormFieldChange}
        />
      )}

      <Button>ارسال لینک بازیابی</Button>
    </form>
  );
};

export default RecoverForm;
