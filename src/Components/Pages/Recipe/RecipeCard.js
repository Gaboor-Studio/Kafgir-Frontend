import classes from "./RecipeCard.module.css";
import React, { useEffect } from "react";
import { useState } from "react";
import add from "../../../assets/recipe-open.svg";
import remove from "../../../assets/recipe-close.svg";

const RecipeCard = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [innerBarClasses, setInnerBarClasses] = useState(classes.innerBar);
  const [extendImage, setExtendImage] = useState(add);
  const [appearingChildren, setAppearingChildren] = useState();
  useEffect(() => {
    if (isOpen === true) {
      setAppearingChildren(props.ingredients);
    }
    if (window.innerWidth >= 480) {
      setIsOpen(true);
      setAppearingChildren(props.ingredients)
    }  
  }, [isOpen, props.ingredients]);
  const toggleOpen = () => {
    if (isOpen === false) {
      setInnerBarClasses(classes.innerBar + " " + classes.open);
      setExtendImage(remove);
      setTimeout(() => setAppearingChildren(props.ingredients), 250);
      setIsOpen(true);
    } else {
      if (window.innerWidth <= 480) {
        setInnerBarClasses(classes.innerBar + " " + classes.close);
        setExtendImage(add);
        setTimeout(() => setAppearingChildren(), 250);
        setIsOpen(false);
      }
    }
  };
  return (
    <div>
      <div className={classes.outerBar} dir="rtl" onClick={toggleOpen}>
        <h1>مواد مورد نیاز</h1>
        <img
          src={extendImage}
          alt="extend button"
          className={classes.extendButton}
        />
      </div>
      <div dir="rtl" className={innerBarClasses}>
        {isOpen ? appearingChildren : []}
      </div>
    </div>
  );
};

export default RecipeCard;
