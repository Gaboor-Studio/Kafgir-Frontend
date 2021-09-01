import React, {useState} from "react";

import classes from './EmailForm.module.css'

import Button from "../../../../UI/Button/Button";
import Input from "../../../../UI/Input/Input";
import GreenSign from "../../../../UI/Sign/GreenSign/GreenSign";
import RedSign from "../../../../UI/Sign/RedSign/RedSign";

const EmailForm = (props) => {

    const [form, setForm] = useState({
        email: "",
        phone_number: "",
        default: true,
      });

    const emailFilter = (email) => {
        const [pre, post] = email.split("@");
    
        let changedPre = pre;
        if (pre.length > 3) {
          changedPre = pre.substr(0, 3) + "*".repeat(pre.length - 3);
        }
    
        return `${changedPre}@${post}`;
      };

      const onFormRadioChange = (event) => {
        event.persist();
        setForm((prevForm) => {
          const newState = {
            ...prevForm,
            default: !prevForm.default
          };
          return newState;
        });
      }

      const onFormInputChangeHandler = (event) => {
        event.persist();
        setForm((prevForm) => {
          const newState = {
            ...prevForm,
            [event.target.id]: event.target.value,
          };
          return newState;
        });
      };

      let canSubmit = true;
      if (form.default && props.userPhone !== form.phone_number){
          canSubmit = false
      }

  return (
    <form className={classes.EmailChooseForm} onSubmit={(event) => props.onSubmit(event, form.default ? props.userEmail : form.email)}>
      <div className={classes.Leftened}>
        <input type="radio" value="default" name="email" onChange={onFormRadioChange} checked={form.default}/> if you want to
        proceed with {emailFilter(props.userEmail)} enter your phone number
      </div>
      <div className={classes.PhoneBlock}>
        <Input
          disabled={!form.default}
          small
          ltr={form.phone_number ? true : false}
          id="phone_number"
          required
          type="tel"
          placeholder="شماره همراه"
          value={form.phone_number}
          onType={onFormInputChangeHandler}
        />
        {props.userPhone === form.phone_number ? <GreenSign /> : <RedSign />}
      </div>
      <div className={classes.Leftened}>
        <input type="radio" value={form.email} name="email" onChange={onFormRadioChange} checked={!form.default}/> pick other emails
      </div>
      <Input
        disabled={form.default}
        ltr={form.email ? true : false}
        small
        id="email"
        required
        type="email"
        placeholder="ایمیل"
        value={form.email}
        onType={onFormInputChangeHandler}
      />
      <Button disabled={!canSubmit}>باشه</Button>
    </form>
  );
};

export default EmailForm;
