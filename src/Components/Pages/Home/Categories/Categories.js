import React from "react";
import classes from "./Categories.module.css";
import logo from "..//..//..//..//assets/Home/categories.svg";
import {Link } from "react-router-dom";
import Card from "./Card";
const Categories = (props) => {
  const categories = [
    {
      name: "خورشت",
      image:
        "https://ghazapaz.com/wp-content/uploads/2020/10/%D8%AE%D9%88%D8%B1%D8%B4%D8%AA-%D9%82%DB%8C%D9%85%D9%87-%D8%A8%D8%A7-%D8%B3%D9%88%DB%8C%D8%A7.jpg",
    },
    {
      name: "کباب",
      image:
        "https://iranwatching.com/images/content-image/2020/07/iranwatching-1388-1593886678-kabab.jpg",
    },
    {
      name: "کباب",
      image:
        "https://iranwatching.com/images/content-image/2020/07/iranwatching-1388-1593886678-kabab.jpg",
    },
    {
      name: "کباب",
      image:
        "https://iranwatching.com/images/content-image/2020/07/iranwatching-1388-1593886678-kabab.jpg",
    },
    {
      name: "کباب",
      image:
        "https://iranwatching.com/images/content-image/2020/07/iranwatching-1388-1593886678-kabab.jpg",
    },
    {
      name: "کباب",
      image:
        "https://iranwatching.com/images/content-image/2020/07/iranwatching-1388-1593886678-kabab.jpg",
    },
  ];
  return (
    <div>
      <img className={classes.logo} src={logo} alt="logo" />
      <h className={classes.logo}>دسته بندی ها</h>
      <Link to="categories" className={classes.allbtn}>مشاهده همه</Link>
      <br className={classes.break} />
      <div className={classes.categories}>
        <Card className={classes.card} details={categories[0]} />
        <Card className={classes.card} details={categories[1]} />
        <Card className={classes.card} details={categories[2]} />
        <Card className={classes.card} details={categories[3]} />
        <Card className={classes.card} details={categories[4]} />
        <Card className={classes.card} details={categories[5]} />
      </div>
    </div>
  );
};
export default Categories;
