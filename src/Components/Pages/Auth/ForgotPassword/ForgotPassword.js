import React, { useCallback, useState } from "react";

import classes from "./ForgotPassword.module.css";

import ConfirmChange from "./ConfirmChange/ConfirmChange";
import ChooseNewPassword from "./ChooseNewPassword/ChooseNewPassword";

const ForgotPassword = (props) => {
  const [token, setToken] = useState("");
  const [email, setEmail] = useState('');

  const onSetTokenHandler = (token, email) => {
      setToken(token)
      setEmail(email)
  }

  let content = <ConfirmChange onChangeClick={onSetTokenHandler}/>;

  if (token) {
    content = <ChooseNewPassword email={email} token={token}/>;
  }

  return <React.Fragment>{content}</React.Fragment>;
};

export default ForgotPassword;
