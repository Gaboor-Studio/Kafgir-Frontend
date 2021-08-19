import React from "react";
import { NavLink } from "react-router-dom";
import NavigationItems from "../NavigationItems/NavigationItems";
import SearchBar from "../SearchBar/SearchBar";
import ToggleButton from "../ToggleButton/ToggleButton";
import classes from "./AppBar.module.css";

const appBar = (props) => {
  return (
    <header className={classes.AppBar}>  
      <nav className={classes.DesktopOnly}>
        <NavigationItems>
          <SearchBar />
        </NavigationItems>
      </nav>
      <NavLink to='/' className={classes.title}>کفگیر</NavLink>
      <ToggleButton onToggle={props.onDrawerToggle} />
    </header>
  );
};

export default appBar;
