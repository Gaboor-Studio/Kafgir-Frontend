import React, { useState } from "react";
import AppBar from "./AppBar/AppBar";

import classes from "./Layout.module.css";
import SideDrawer from "./SideDrawer/SideDrawer";

const Layout = (props) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(prevState => !prevState);
  }

  return (
    <div>
      <AppBar onDrawerToggle={toggleDrawer}/>
      <SideDrawer isOpened={isDrawerOpen} onClose={toggleDrawer}/>
      <div className={classes.mainLayout}>{props.children}</div>
    </div>
  );
};

export default Layout;
