import React, { useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";

import Button from "../../../UI/Button/Button";
import ConfirmCodeInput from "../../../UI/ConfirmCodeInput/ConfirmCodeInput";
import InlineButton from "../../../UI/InlineButton/InlineButton";
import Modal from "../../../UI/Modal/Modal";

import classes from "./ConfirmEmail.module.css";
import EmailForm from "./EmailForm/EmailForm";


const ConfirmEmail = (props) => {
  const [code, setCode] = useState([]);
  const [modalOpen, setModalOpen] = useState(true);
  const [email, setEmail] = useState("");
  const [phone_number, setPhoneNumber] = useState("");

  const codeSize = 3

  const location = useLocation();

  useEffect(() => {

    const codeArray = Array.from({ length: codeSize }, (element, index) => "")
  
    setCode(codeArray)

    if (location.state) {
      setEmail(location.state.email);
      setPhoneNumber(location.state.phone_number)
    }
  }, [location]);

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(code)
    console.log("request sent [Confirm Email]");
  };

  const onEmailFormSubmit = (event, email) => {
    event.preventDefault()
    setModalOpen(false)
    console.log(email)
  }

  const onInputChangeHandler = useCallback((index, value) => {
    setCode(prevCode => {
      const newCode = [...prevCode]
      newCode[index] = value
      return newCode
    })
  },[]);

  const onSendAgainClick = () => {
    console.log("dobare ersal konid ;)")
    setModalOpen(true)
  }

  return (
    <div className={classes.ConfirmEmail}>
      <Modal show={modalOpen} modalClosed={() => setModalOpen(false)} backClickOff>
        <EmailForm userEmail={email} userPhone={phone_number} onSubmit={onEmailFormSubmit}/>
      </Modal>
      <div className={classes.ConfirmEmailTitle}>
        <h2>تایید ایمیل</h2>
      </div>
      <form className={classes.ConfirmEmailForm} onSubmit={onSubmit}>
        <ConfirmCodeInput length={codeSize} onChangeValue={onInputChangeHandler}/>
        <InlineButton
          type="button"
          clicked={onSendAgainClick}
          text="ارسال دوباره کد"
        />
        <Button>تایید</Button>
      </form>
    </div>
  );
};

export default ConfirmEmail;
