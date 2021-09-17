import React, { useCallback, useState } from "react";

import classes from "./SearchPanel.module.css";

import setting from '../../../../assets/search_page/setting.png'

import Button from "../../../UI/Button/Button";
import MainInput from "./MainInput/MainInput";
import ListInput from "./ListInput/ListInput";
import RateInput from "./RateInput/RateInput";
import FillInInput from "./FillInInput/FillInInput";
import DropDownInput from "./DropDownInput/DropDownInput";

// dummy category data
const categories = [
  {
    id: 1,
    title: "Khoresh",
  },
  {
    id: 2,
    title: "BoKhoresh",
  },
  {
    id: 3,
    title: "NaKhoresh",
  },
  {
    id: 5,
    title: "Khore",
  },
  {
    id: 6,
    title: "POLOEE",
  },
  {
    id: 10,
    title: "Bye Bye",
  },
];

/**
 * this functional component creates all inputs and sends the search request to the server
 */
const SearchPanel = React.memo((props) => {

  // holds state between showing all inputs or only one input
  const [moreSetting, setMoreSetting] = useState(false);

  // food's name to look for
  const [foodName, setFoodName] = useState("");

  // food's ingredients to look for
  const [ingredients, setIngredients] = useState({
    saved: [],
    new: "",
  });

  // food's difficulty to look for
  const [level, setLevel] = useState(null);

  // food's cooking duration to look for
  const [duration, setDuration] = useState(0);

  // which category to look inside
  const [category, setCategory] = useState(null);

  /**
   * check if a value is an integer
   * @param {*} value 
   * @returns true for integer values
   */
  const isInt = (value) => {
    return (
      !isNaN(value) &&
      parseInt(Number(value)) === value &&
      !isNaN(parseInt(value, 10))
    );
  };

  /**
   * opens and closes the extra settings
   */
  const onToggleSettingHandler = () => {
    setMoreSetting(prevState => !prevState)
  }

  /**
   * handler for food name input
   * @param {*} event 
   */
  const onFoodChangeHandler = (event) => {
    event.persist();
    setFoodName(event.target.value);
  };

  /**
   * clears food name input
   */
  const onFoodClearHandler = () => {
    setFoodName("");
  };

  /**
   * handler for add new ingredient input 
   * @param {*} event 
   */
  const onIngredientChangeHandler = (event) => {
    event.persist();
    setIngredients((prevIngredients) => ({
      ...prevIngredients,
      new: event.target.value,
    }));
  };

  /**
   * clears new ingredient input
   */
  const onIngredientClearHandler = () => {
    setIngredients((prevIngredients) => ({ ...prevIngredients, new: "" }));
  };

  /**
   * adds the typed ingredient to the saved ones
   */
  const onIngredientAddHandler = () => {
    setIngredients((prevIngredients) => {
      const newSavedIngredients = prevIngredients.saved.concat(
        prevIngredients.new
      );
      const newIngredients = {
        saved: newSavedIngredients,
        new: "",
      };
      return newIngredients;
    });
  };

  /**
   * deletes a saved ingredient
   */
  const onIngredientDeleteHandler = useCallback((ingredient) => {
    setIngredients((prevIngredients) => {
      const newSavedIngredients = prevIngredients.saved.filter(
        (ing) => ing !== ingredient
      );
      const newIngredients = {
        saved: newSavedIngredients,
        new: prevIngredients.new,
      };
      return newIngredients;
    });
  }, []);

  /**
   * handles the enter key being pressed while we're on ingredient input
   * @param {*} event 
   */
  const onEnterPressedHandler = (event) => {
    event.persist();
    if (event.key === "Enter") {
      onIngredientAddHandler();
    }
  };

  /**
   * sets the difficulty to the food we're searching for
   */
  const onSetLevelHandler = useCallback((number) => {
    if ((number > 0 && number < 4) || number == null) {
      setLevel(number);
    }
  }, []);

  /**
   * changes the cooking duration for the food
   */
  const onChangeDurationHandler = useCallback((event) => {
    setDuration(event.target.value.slice(0, 3));
  }, []);

  /**
   * increases the cooking duration by one minute
   */
  const onIncreaseDurationByOneHandler = useCallback(() => {
    if (duration == null) {
      setDuration(1);
    } else if (typeof duration === "string" && isInt(duration)) {
      setDuration((prevDuration) => {
        let newValue = parseInt(prevDuration, 10) + 1;
        return newValue < 999 ? newValue : 999;
      });
    } else if (isInt(duration)) {
      setDuration((prevDuration) => {
        let newValue = prevDuration + 1;
        return newValue < 999 ? newValue : 999;
      });
    }
  }, [duration]);

  /**
   * decreases the cooking duration by one minute
   */
  const onDecreaseDurationByOneHandler = useCallback(() => {
    if (duration == null) {
      setDuration(0);
    } else if (typeof duration === "string" && isInt(duration)) {
      setDuration((prevDuration) => {
        let newValue = parseInt(prevDuration, 10) - 1;
        return newValue > 0 ? newValue : 0;
      });
    } else if (isInt(duration)) {
      setDuration((prevDuration) => {
        let newValue = prevDuration - 1;
        return newValue > 0 ? newValue : 0;
      });
    }
  }, [duration]);

  /**
   * sets the category we're searching on
   * @param {*} category 
   */
  const onSetCategoryHandler = (category) => {
    setCategory(category);
  };

  /**
   * clears the category to be searched
   * @param {*} category 
   */
  const onClearCategoryHandler = () => {
    setCategory(null);
  };

  return (
    <div className={classes.SearchPanel}>
      <div className={classes.SearchPanelTitle}>
        <div className={classes.SearchPanelTitleRow}>
        <h3>جستجو</h3>
        <img src={setting} alt="setting" onClick={onToggleSettingHandler}/>
        </div>
        <hr />
      </div>
      <div className={classes.SearchPanelForm}>
        <MainInput
          foodName={foodName}
          onFoodNameChange={onFoodChangeHandler}
          onClear={onFoodClearHandler}
        />
        <div className={moreSetting ? classes.SearchPanelHiddenForm : classes.SearchPanelFormHidden}>
          <DropDownInput
            categories={categories}
            selected={category}
            onSetCategory={onSetCategoryHandler}
            onClearCategory={onClearCategoryHandler}
          />
          <ListInput
            ingredients={ingredients}
            onEnterPressed={onEnterPressedHandler}
            onIngredientChange={onIngredientChangeHandler}
            onIngredientClear={onIngredientClearHandler}
            onIngredientAdd={onIngredientAddHandler}
            onIngredientDelete={onIngredientDeleteHandler}
          />
          <FillInInput
            duration={duration}
            onChangeDuration={onChangeDurationHandler}
            onAddOne={onIncreaseDurationByOneHandler}
            onSubOne={onDecreaseDurationByOneHandler}
          />
          <RateInput onSetLevel={onSetLevelHandler} level={level} />
        </div>
        <div style={{ width: "100%" }}>
          <Button>بگرد</Button>
        </div>
      </div>
    </div>
  );
});

export default SearchPanel;
