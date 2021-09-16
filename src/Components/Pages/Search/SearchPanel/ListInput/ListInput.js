import React, { useCallback } from "react";
import Input from "../../../../UI/Input/Input";

import classes from "./ListInput.module.css";

import add from "../../../../../assets/search_page/add.png";
import clear from "../../../../../assets/search_page/clear.png";
import ListItem from "./ListItem/ListItem";

const ListInput = React.memo((props) => {

  return (
    <div className={classes.ListInput}>
      <div className={classes.ListInputInput}>
        <Input
          id="ingredient_item"
          bright
          large
          keyDownActive
          type="text"
          placeholder="ماده غذایی"
          value={props.ingredients.new}
          onKeyDown={props.onEnterPressed}
          onType={props.onIngredientChange}
        />
        <img className={props.ingredients.new ? classes.AddButton : classes.ButtonHidden} src={add} alt="add" onClick={props.onIngredientAdd}/>
        <img className={props.ingredients.new ? classes.ClearButton : classes.ButtonHidden} src={clear} alt="clear" onClick={props.onIngredientClear}/>
      </div>
      <div className={classes.IngredientItems}>
        {props.ingredients.saved && props.ingredients.saved.length > 0 ? (
          props.ingredients.saved.map((ing) => (
            <ListItem key={ing} deleted={() => props.onIngredientDelete(ing)}>
              {ing}
            </ListItem>
          ))
        ) : (
          <p style={{margin: '0', padding: '4px 6px'}}>no ingredients added</p>
        )}
      </div>
    </div>
  );
});

export default ListInput;
