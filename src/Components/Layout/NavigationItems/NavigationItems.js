import React from "react";

import NavigationItem from "./NavigationItem/NavigationItem";
import classes from "./NavigationItems.module.css";

import home_page from "../../../assets/navigation_icons/home_page.svg";
import plan from "../../../assets/navigation_icons/plan.svg";
import shopping from "../../../assets/navigation_icons/shopping.svg";
import profile from "../../../assets/navigation_icons/profile.svg";
import seacrh from "../../../assets/navigation_icons/search.svg";
const navigationItems = (props) => {
  return (
    <div className={classes.NavigationItems}>
      <NavigationItem
        route="/planner"
        name="برنامه غذایی"
        imageUrl={plan}
        imageTitle="plan"
      />
      <NavigationItem
        route="/shop_list"
        name="لیست خرید"
        imageUrl={shopping}
        imageTitle="shop"
      />
      <div className={classes.search}>
        <NavigationItem
          route="/search"
          name="جستجو"
          imageUrl={seacrh}
          imageTitle="seacrh"
        />
      </div>
      {props.children}
      <NavigationItem
        route="/profile"
        name="پروفایل"
        imageUrl={profile}
        imageTitle="profile"
      />

      <NavigationItem
        route="/"
        name="خانه"
        imageUrl={home_page}
        imageTitle="home"
      />
    </div>
  );
};

export default navigationItems;
