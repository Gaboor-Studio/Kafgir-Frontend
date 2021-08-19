import React from "react";

import classes from './Categories.module.css';
import Category from "./Category/Category";

import kabab from "../../../assets/categories_pics/Kebab.png";
import ash from "../../../assets/categories_pics/Ash.png";
import breakfast from "../../../assets/categories_pics/Breakfast.png";
import fastfood from "../../../assets/categories_pics/Fastfood.png";
import foreign from "../../../assets/categories_pics/Foreign.png";
import khoresht from "../../../assets/categories_pics/Khoresht.png";

const category_list = [
  {
    id: "kebabAdfaD",
    title: "کباب",
    picture: kabab,
  },
  {
    id: "AshDGAdsf",
    title: "آش",
    picture: ash,
  },
  {
    id: "FastfoodSDdgaD",
    title: "فست فود",
    picture: fastfood,
  },
  {
    id: "ForeignDdsdS",
    title: "ملل",
    picture: foreign,
  },
  {
    id: "BreakfastpsDTEw",
    title: "صبحانه",
    picture: breakfast,
  },
  {
    id: "KhoreshtfDFGwe",
    title: "خورشت",
    picture: khoresht,
  },
];

const categories = (props) => {
  return (
    <div className={classes.Categories}>
      {category_list.map((category) => (
        <Category
          key={category.id}
          id={category.id}
          url={category.picture}
          title={category.title}
        />
      ))}
    </div>
  );
};

export default categories;
