import React, { useState } from "react";
import Button from "../../UI/Button/Button";
import CommentBox from "../../UI/CommentBox/CommentBox";

import classes from "./ContactUs.module.css";
import IconTitle from "./IconTitle/IconTitle";

import logo from "../../../assets/contact_page/GSLogo.png";
import comment from "../../../assets/contact_page/comment.png";
import email from "../../../assets/contact_page/email.png";
import telegram from "../../../assets/contact_page/telegram.png";

const ContactUs = (props) => {
  const [feedback, setFeedback] = useState("");

  const onTextChangeHandler = (event) => {
    setFeedback(event.target.value);
  };

  const onClickHandler = () => {
    console.log("[contact-us] feedback sent");
  };

  return (
    <div className={classes.ContactUs}>
      <div className={classes.TopBar}>
        <h2>تماس با ما</h2>
      </div>
      <div className={classes.ContactUsBody}>
        <div className={classes.ContactDetails}>
          <div className={classes.Inliner}>
            <p>@GaboorStudio</p>
            <IconTitle title="تلگرام" picture={telegram} />
          </div>
          <div className={classes.Inliner}>
            <p>GaboorStudio@gmail.com</p>
            <IconTitle title="ایمیل" picture={email} />
          </div>
          <div className={classes.AlignLogoLeft}>
            <img src={logo} alt="logo" />
          </div>
        </div>
        <div className={classes.ContactComment}>
          <div className={classes.AlignTitleRight}>
            <IconTitle title="بازخورد شما" picture={comment} />
          </div>
          <CommentBox value={feedback} onChange={onTextChangeHandler} />
          <div className={classes.AlignButtonLeft}>
            <Button type="button" clicked={onClickHandler}>
              ثبت
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
