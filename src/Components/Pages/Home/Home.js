import React from "react";
import classes from "./Home.module.css";
import Planner from "../Home/Planner/Planner"
import Categories from "./Categories/Categories";
const Home = () => {
  return (
    <div className={classes.Home}>
        <Planner/>
        <br/>
        <Categories/>
    </div>
  );
};

export default Home;
