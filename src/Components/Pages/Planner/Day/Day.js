import React from "react"
import { useState } from "react";
import add from "../../../../assets/planner-add.png"
import remove from "../../../../assets/planner-remove.png"
import classes from "./Day.module.css"

const Day = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [innerBarClasses, setInnerBarClasses] = useState(classes.innerBar);
    const [extendImage,setExtendImage]=useState(add);
    const toggleOpen = () => {
        if (isOpen == false) {
            setInnerBarClasses(classes.innerBar + ' ' + classes.open);
            setExtendImage(remove);
            setIsOpen(true);
        }
        else {
            setInnerBarClasses(classes.innerBar + ' ' + classes.close);
            setExtendImage(add);
            setIsOpen(false);
        }
    }
    return (
        <div>
            <div className={classes.outerBar} dir="rtl" onClick={toggleOpen}>
                {props.dayName}
                <img src={extendImage} alt="extend button" className={classes.extendButton} ></img>
            </div>
            <div className={innerBarClasses}> </div>
        </div>
    );
}

export default Day;