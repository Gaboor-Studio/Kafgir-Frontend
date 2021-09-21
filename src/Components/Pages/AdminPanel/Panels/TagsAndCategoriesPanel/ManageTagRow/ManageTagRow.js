import React, { useState } from "react";

import classes from "./ManageTagRow.module.css";
import ToggleSwitch from "./ToggleSwitch/ToggleSwitch";

const ManageTagRow = (props) => {
    const [editOn, setEditOn] = useState(true)

  const editMode = (
    <div className={classes.ManageTagRow}>
      <p>1</p>
      <input type="text" placeholder="فریزری" className={classes.TagRowInputText}/>
      <ToggleSwitch />
      <ToggleSwitch />
      <input type="number" className={classes.TagRowInputNumber}/>
      <div>
        <button className={classes.Success}>ثبت</button>
      </div>
    </div>
  );

  const showMode = (
    <div className={classes.ManageTagRow}>
      <p>1</p>
      <p>فریزری</p>
      <p>خیر</p>
      <p>خیر</p>
      <p>2</p>
      <div>
        <button className={classes.Success}>تغییر</button>
        <button className={classes.Failure}>حذف</button>
      </div>
    </div>
  );

  let onScreen = showMode;

  if (editOn){
      onScreen = editMode
  }

  return (
    onScreen
  );
};

export default ManageTagRow;
