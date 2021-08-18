import React from "react";

import NavigationItem from "./NavigationItem/NavigationItem";
import classes from './NavigationItems.module.css';

import home_page from '../../../assets/navigation_icons/home_page.png';
import plan from '../../../assets/navigation_icons/plan.png';
import shopping from '../../../assets/navigation_icons/shopping.png';
import profile from '../../../assets/navigation_icons/profile.png';

const navigationItems = (props) => {
  return (
    <div className={classes.NavigationItems}>
      <NavigationItem route="/planner" name="برنامه غذایی" imageUrl={plan} imageTitle="plan"/>
      <NavigationItem route="/shop_list" name="لیست خرید" imageUrl={shopping} imageTitle="shop"/>
      <NavigationItem route="/profile" name="پروفایل" imageUrl={profile} imageTitle="profile"/>
      {props.children}
      <NavigationItem route="/" name="خانه" imageUrl={home_page} imageTitle="home"/>
    </div>
  );
};

export default navigationItems;
