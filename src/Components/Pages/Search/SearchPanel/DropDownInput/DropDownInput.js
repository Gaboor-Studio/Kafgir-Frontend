import React, { useState, useRef, useEffect } from "react";
import Input from "../../../../UI/Input/Input";

import classes from "./DropDownInput.module.css";

import downarrow from "../../../../../assets/search_page/downarrow.png";
import uparrow from "../../../../../assets/search_page/uparrow.png";
import clear from "../../../../../assets/search_page/clear.png";
import DropDownList from "./DropDownList/DropDownList";

const DropDownInput = (props) => {
  const [listOpen, setListOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        // alert("You clicked outside of me!");
        setListOpen(false);
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  const onToggleListHandler = () => {
    setListOpen((prevState) => !prevState);
  };

  const onCloseListHandler = () => {
    setListOpen(false);
  };

  return (
    <div
      className={`${classes.DropDownInput} ${listOpen ? classes.Straight : ""}`}
      ref={ref}
    >
      <Input
        id="category_search"
        bright
        disabled
        large
        type="text"
        placeholder="دسته‌بندی"
        value={props.selected ? `${props.selected.title}` : "دسته‌بندی"}
      />
      {props.selected ? (
        <img src={clear} alt="clear" onClick={props.onClearCategory} />
      ) : (
        <img
          src={listOpen ? uparrow : downarrow}
          alt="down"
          onClick={onToggleListHandler}
        />
      )}
      {listOpen ? (
        <DropDownList
          selected={props.selected}
          list={props.categories}
          onSetCategory={(category) => {
            props.onSetCategory(category);
            onCloseListHandler();
          }}
        />
      ) : null}
    </div>
  );
};

export default DropDownInput;
