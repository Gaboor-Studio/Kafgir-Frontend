import React from "react"

import classes from './TagsAndCategoriesPanel.module.css'

import Header from './Header'
import ManageTagRow from "./ManageTagRow/ManageTagRow";

const TagsAndCategoriesPanel = () => {
    return(
        <div className={classes.TagsAndCategoriesPanel}>
            <Header onSearch={() => {}} title="تگ ها" />
            <div className={classes.TableHeader}>
                <h4>آی‌دی</h4>
                <h4>عنوان</h4>
                <h4>صفحه اصلی</h4>
                <h4>تگ اصلی</h4>
                <h4>اولویت نمایش</h4>
                <button>تگ جدید</button>
            </div>
            <hr className={classes.TagsAndCategoriesPanelHr}/>
            <div className={classes.TableRows}>
                <ManageTagRow />
                <hr/>
                <ManageTagRow />
            </div>
        </div>
    );
}

export default TagsAndCategoriesPanel;