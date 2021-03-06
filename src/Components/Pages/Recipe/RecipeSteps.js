import classes from "./RecipeSteps.module.css";
import React, { useEffect } from "react";
import { useState } from "react";
import add from "../../../assets/recipe-open.svg";
import remove from "../../../assets/recipe-close.svg";

const RecipeSteps = (props) => {
  const displayIngredients = React.useCallback(() => {
    return props.recipe.map((reptile) => (
      <p className={classes.steps}>
        <div className={classes.line}></div>
        {reptile.step}
        <br/>
        {reptile.text}
      </p>
    ));
  }, [props]);

  const [isOpen, setIsOpen] = useState(false);
  const [innerBarClasses, setInnerBarClasses] = useState(classes.innerBar);
  const [extendImage, setExtendImage] = useState(add);
  const [appearingChildren, setAppearingChildren] = useState();
  useEffect(() => {
    if (isOpen === true) {
      setAppearingChildren(displayIngredients);
    }
    if (window.innerWidth >= 800) {
      setIsOpen(true);
      setAppearingChildren(displayIngredients);
    }
  }, [isOpen, displayIngredients]);
  const toggleOpen = () => {
    if (isOpen === false) {
      setInnerBarClasses(classes.innerBar + " " + classes.open);
      setExtendImage(remove);
      setTimeout(() => setAppearingChildren(displayIngredients), 250);
      setIsOpen(true);
    } else {
      if (window.innerWidth <= 800) {
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
        <h1>مراحل پخت</h1>
        <img
          src={extendImage}
          alt="extend button"
          className={classes.extendButton}
        />
      </div>
      <div dir="rtl" className={innerBarClasses}>
        <div>{isOpen ? appearingChildren : []}</div>
      </div>
    </div>
  );
};

export default RecipeSteps;
