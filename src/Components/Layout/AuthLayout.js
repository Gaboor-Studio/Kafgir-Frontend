import React from "react";
import classes from './AuthLayout.module.css'

const AuthLayout = (props) => (
  <div className={classes.AuthLayout}>
      <div className={classes.TopArt}>
      </div>
    <div>{props.children}</div>
  </div>
);

export default AuthLayout;