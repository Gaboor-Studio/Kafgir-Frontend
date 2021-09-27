import React, { useState, useCallback } from "react";
import classes from "./WriteComment.module.css";
import Rating from "..//..//..//UI//Rating//Rating";
import Modal from "..//..//..//UI//Modal//Modal";
import minus from "..//..//..//..//assets//planner-remove.png";
import plus from "..//..//..//..//assets//planner-add.png";
const WriteComment = (props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [rate, setRate] = useState(0);
  function minus_rate() {
    if (rate > 0) {
      setRate(rate - 0.5);
    }
  }
  function plus_rate() {
    if (rate < 5) {
      setRate(rate + 0.5);
    }
  }
  function confirm() {
    setModalOpen(true);
  }
  return (
    <div className={classes.my}>
      <img
        className={classes.profpic}
        src={props.comment.profilepic}
        alt="profpic"
      />
      <h1 className={classes.profname}>{props.comment.profilename}</h1>
      <br />

      <div className={classes.rate}>
        <img src={minus} className={classes.btn} onClick={() => minus_rate()} />
        <Rating rate={rate} size={window.innerWidth <= 480 ? "20" : "30"} />

        <img src={plus} className={classes.btn} onClick={() => plus_rate()} />
      </div>

      <textarea
        className={classes.textarea}
        placeholder="نظر خود را وارد کنید ..."
        maxLength="200"
      />
      <button className={classes.button} onClick={confirm}>
        ثبت نظر
      </button>
      <Modal show={modalOpen} modalClosed={() => setModalOpen(false)}>
        <p>نظر شما با موفقیت ثبت شد</p>
      </Modal>
    </div>
  );
};
export default WriteComment;
