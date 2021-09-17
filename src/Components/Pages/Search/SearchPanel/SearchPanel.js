import React, { useCallback, useState } from "react";

import classes from "./SearchPanel.module.css";

import setting from '../../../../assets/search_page/setting.png'

import Button from "../../../UI/Button/Button";
import MainInput from "./MainInput/MainInput";
import ListInput from "./ListInput/ListInput";
import RateInput from "./RateInput/RateInput";
import FillInInput from "./FillInInput/FillInInput";
import DropDownInput from "./DropDownInput/DropDownInput";

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

const SearchPanel = React.memo((props) => {
  const [moreSetting, setMoreSetting] = useState(false);
  const [foodName, setFoodName] = useState("");
  const [ingredients, setIngredients] = useState({
    saved: [],
    new: "",
  });
  const [level, setLevel] = useState(null);
  const [duration, setDuration] = useState(0);
  const [category, setCategory] = useState(null);

  const isInt = (value) => {
    return (
      !isNaN(value) &&
      parseInt(Number(value)) === value &&
      !isNaN(parseInt(value, 10))
    );
  };

  const onToggleSettingHandler = () => {
    setMoreSetting(prevState => !prevState)
  }

  const onFoodChangeHandler = (event) => {
    event.persist();
    setFoodName(event.target.value);
  };

  const onFoodClearHandler = () => {
    setFoodName("");
  };

  const onIngredientChangeHandler = (event) => {
    event.persist();
    setIngredients((prevIngredients) => ({
      ...prevIngredients,
      new: event.target.value,
    }));
  };

  const onIngredientClearHandler = () => {
    setIngredients((prevIngredients) => ({ ...prevIngredients, new: "" }));
  };

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

  const onEnterPressedHandler = (event) => {
    event.persist();
    if (event.key === "Enter") {
      onIngredientAddHandler();
    }
  };

  const onSetLevelHandler = useCallback((number) => {
    if ((number > 0 && number < 4) || number == null) {
      setLevel(number);
    }
  }, []);

  const onChangeDurationHandler = useCallback((event) => {
    setDuration(event.target.value.slice(0, 3));
  }, []);

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

  const onSetCategoryHandler = (category) => {
    setCategory(category);
  };

  const onClearCategoryHandler = (category) => {
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
