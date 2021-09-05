import React from "react";
import classes from "./Home.module.css";
import Planner from "../Home/Planner/Planner";
import Categories from "./Categories/Categories";
import Card from "./Card/Card";
const foods = [
  {
    name: "قیمه",
    image:
      "https://ghazapaz.com/wp-content/uploads/2020/10/%D8%AE%D9%88%D8%B1%D8%B4%D8%AA-%D9%82%DB%8C%D9%85%D9%87-%D8%A8%D8%A7-%D8%B3%D9%88%DB%8C%D8%A7.jpg",
    hardness: 2,
    time: "۶۰ دقیقه",
    rate: 4.2,
  },
  {
    name: "کباب",
    image:
      "https://iranwatching.com/images/content-image/2020/07/iranwatching-1388-1593886678-kabab.jpg",
    hardness: 2,
    time: "۶۰ دقیقه",
    rate: 4.2,
  },
  {
    name: "کباب",
    image:
      "https://iranwatching.com/images/content-image/2020/07/iranwatching-1388-1593886678-kabab.jpg",
    hardness: 2,
    time: "۶۰ دقیقه",
    rate: 4.2,
  },
  {
    name: "کباب",
    image:
      "https://iranwatching.com/images/content-image/2020/07/iranwatching-1388-1593886678-kabab.jpg",
    hardness: 2,
    time: "۶۰ دقیقه",
    rate: 4.2,
  },
  {
    name: "کباب",
    image:
      "https://iranwatching.com/images/content-image/2020/07/iranwatching-1388-1593886678-kabab.jpg",
    hardness: 2,
    time: "۶۰ دقیقه",
    rate: 4.2,
  },
  {
    name: "کباب",
    image:
      "https://iranwatching.com/images/content-image/2020/07/iranwatching-1388-1593886678-kabab.jpg",
    hardness: 2,
    time: "۶۰ دقیقه",
    rate: 4.2,
  },
];
const Home = () => {
  return (
    <div className={classes.Home}>
      <div className={classes.layout}>
        <Planner />
      </div>
      <br />
      <div className={classes.layout}>
        <Categories />
      </div>
      <br />
      <div className={classes.layout}>
        <Card details={foods} title="برترین غذاهای ماه" />
      </div>
    </div>
  );
};

export default Home;
