import React from "react";

import classes from './AddNewTagForm.module.css'

import ToggleSwitch from "../ManageTagRow/ToggleSwitch/ToggleSwitch";

const AddNewTagForm = (props) => {

    return (
        <form className={classes.AddNewTagForm}>
            <div className={classes.AddNewTagRow}>
                <label htmlFor="tag-title">عنوان</label>
                <input id="tag-title" type="text" required value={props.form.title} onChange={props.onTagFormTitleChange} className={classes.TagRowInputText}/>
            </div>
            <div className={classes.AddNewTagRow}>
                <label>صفحه اصلی</label>
                <ToggleSwitch onChange={props.onTagFormMainChange} defaultChecked={props.form.is_main}/>
                <label>تگ اصلی</label>
                <ToggleSwitch onChange={props.onTagFormPrimaryChange} defaultChecked={props.form.is_primary}/>
            </div>
            <div className={classes.AddNewTagRow}>
                <label htmlFor="tag-priority">اولویت نمایش</label>
                <input id="tag-priority" type="number" value={props.form.display_order} onChange={props.onTagFormPriorityChange} className={classes.TagRowInputNumber}/> 
            </div>
        </form>
    );
}

export default AddNewTagForm