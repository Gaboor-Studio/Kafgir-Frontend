import React from "react";
import Backdrop from "../../UI/Backdrop/Backdrop";
import NavigationItems from "../NavigationItems/NavigationItems";

import classes from "./SideDrawer.module.css";

const sideDrawer = (props) => {
  const styles = [classes.SideDrawer];

  if (props.isOpened) {
    styles.push(classes.Open);
  } else {
    styles.push(classes.Close);
  }

  return (
    <div>
        <Backdrop show={props.isOpened} onClose={props.onClose}/>
      <div className={styles.join(" ")}>
        <NavigationItems />
      </div>
    </div>
  );
};

export default sideDrawer;
