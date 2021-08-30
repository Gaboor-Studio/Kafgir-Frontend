import React from "react";
import classes from "./Home.module.css";
import Planner from "../Home/Planner/Planner"
const Home = () => {
  return (
    <div className={classes.Home}>
        <Planner/>
    </div>
  );
};

export default Home;
