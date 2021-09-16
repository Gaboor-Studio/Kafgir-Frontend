//component for showing each day of the week. this component expands if clicked and the children which are Plancards will be shown underneath it

import React, { useEffect } from "react"
import { useState } from "react";
import add from "../../../../assets/planner-add.png"
import remove from "../../../../assets/planner-remove.png"
import classes from "./Day.module.css"

const Day = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [innerBarClasses, setInnerBarClasses] = useState(classes.innerBar);
    const [extendImage, setExtendImage] = useState(add);
    const [appearingChildren, setAppearingChildren] = useState();
    //to render the foods in a day if expanded
    useEffect(() => {
        if (isOpen === true) {
            setAppearingChildren(props.children)
        }
    }, [props.weekNo, isOpen, props.children]);
    //to toggle the day open or close if clicked and hide or show children
    const toggleOpen = () => {
        if (isOpen === false) {
            setInnerBarClasses(classes.innerBar + ' ' + classes.open);
            setExtendImage(remove);
            setTimeout(() => setAppearingChildren(props.children), 250);
            setIsOpen(true);
        }
        else {
            setInnerBarClasses(classes.innerBar + ' ' + classes.close);
            setExtendImage(add);
            setTimeout(() => setAppearingChildren(), 250);
            setIsOpen(false);
        }
    }
    return (
        <div>
            <div className={classes.outerBar} dir="rtl" onClick={toggleOpen}>
                {props.dayData.name}
                <img src={extendImage} alt="extend button" className={classes.extendButton} ></img>
            </div>
            <div dir="rtl" className={innerBarClasses}>
                {isOpen ? appearingChildren : []}
            </div>
        </div>
    );
}

export default Day;