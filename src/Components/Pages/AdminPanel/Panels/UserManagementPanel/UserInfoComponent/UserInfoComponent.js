import React, { useState } from "react"
import classes from "./UserInfoComponent.module.css"
import arrow from "../../../../../../assets/admin-panel/down-arrow.png"

const UserInfoComponent = (props) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleExpand = () => {
        isExpanded === true ? setIsExpanded(false) : setIsExpanded(true);
        console.log(isExpanded);
    }
    return (
        <div className={isExpanded ? [classes.container, classes.containerExpanded].join(' ') : classes.container}>
            <img src={props.profilePic} className={isExpanded ? classes.profilePic : classes.hide} />
            <p className={isExpanded ? classes.username : classes.lineViewText}>نام کاربری: {props.username}</p>
            <p className={isExpanded ? classes.name : classes.lineViewText}>نام و نام خانوادگی: {props.name}</p>
            <p className={isExpanded ? classes.email : classes.lineViewText}>ایمیل: {props.email}</p>
            <p className={isExpanded ? classes.access : classes.lineViewText}>نوع دسترسی: {props.access}</p>
            <img src={arrow} className={isExpanded ? [classes.arrow, classes.upsidedown].join(' ') : classes.arrow} onClick={toggleExpand} />
            <input className={isExpanded ? classes.newPassword : classes.hide} placeholder="رمز جدید" />
            <div className={isExpanded ? classes.deactivateuser : classes.hide}>
                <input type="checkbox" className={classes.deactivateUserCheckbox} defaultChecked={props.isDeactivated} /> 
                <p className={classes.deactivateUserText}>غیر فعال کردن کاربر</p>
            </div>
            <button className={isExpanded ? classes.deleteProfilePicture : classes.hide}>حذف عکس پروفایل</button>
            <button className={isExpanded ? classes.submit : classes.hide}>دخیره تغییرات</button>
        </div>
    );
}

export default UserInfoComponent;