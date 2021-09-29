import React, { useState, useEffect, useCallback } from "react";
import { useLocation, useHistory } from "react-router-dom";

import { authenticationService } from "../../../../services/auth.service";

import Button from "../../../UI/Button/Button";
import ConfirmCodeInput from "../../../UI/ConfirmCodeInput/ConfirmCodeInput";
import InlineButton from "../../../UI/InlineButton/InlineButton";
import Modal from "../../../UI/Modal/Modal";
import ErrorModal from "../../../UI/Modal/ErrorModal/ErrorModal";

import classes from "./ConfirmEmail.module.css";

const ConfirmEmail = (props) => {
  const [code, setCode] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [email, setEmail] = useState("");

  const codeSize = 5;

  const [error, setError] = useState({
    open: false,
    err: "",
  });
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const codeArray = Array.from({ length: codeSize }, (element, index) => "");

    setCode(codeArray);

    if (location.state) {
      setEmail(location.state.email);
      sendEmail(location.state.email);
    }
  }, [location]);

  const sendEmail = (email) => {
    authenticationService.sendConfirm(email)
      .then((response) => {
        console.log("request sent");
        setModalOpen(true);
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
  };

  const onSubmit = (event) => {
    event.preventDefault();

    authenticationService.confirmEmail({ email: email, confirm_code: code.join("") })
      .then((response) => {
        history.push("/auth/login/");
      }).catch(err => {
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

  const onInputChangeHandler = useCallback((index, value) => {
    setCode((prevCode) => {
      const newCode = [...prevCode];
      newCode[index] = value;
      return newCode;
    });
  }, []);

  const onSendAgainClick = () => {
    console.log("dobare ersal konid ;)");
    sendEmail(email);
  };

  const closeError = () => {
    setError({
      open: false,
      err: "",
    });
  };

  return (
    <React.Fragment>
      <Modal show={modalOpen} modalClosed={() => setModalOpen(false)}>
        <p>کد تایید برای ایمیل شما ارسال شد</p>
      </Modal>
      <ErrorModal
        show={error.open}
        error={error.err}
        modalClosed={closeError}
        news
      />
      <div className={classes.ConfirmEmail}>
        <div className={classes.ConfirmEmailTitle}>
          <h2>تایید ایمیل</h2>
        </div>
        <form className={classes.ConfirmEmailForm} onSubmit={onSubmit}>
          <ConfirmCodeInput
            length={codeSize}
            onChangeValue={onInputChangeHandler}
          />
          <InlineButton
            type="button"
            clicked={onSendAgainClick}
            text="ارسال دوباره کد"
          />
          <Button>تایید</Button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default ConfirmEmail;
