import React, { useState } from "react"
import classes from "./UserInfoComponent.module.css"
import arrow from "../../../../../../assets/admin-panel/down-arrow.png"
import ConfirmModal from "../../../../../UI/Modal/ConfirmModal/ConfirmModal"

const UserInfoComponent = (props) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [editUsername, setEditUsername] = useState(false);
    const [editName, setEditName] = useState(false);
    const [editEmail, setEditEmail] = useState(false);
    const [newUsername, setNewUsername] = useState('');
    const [newName, setNewName] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [submitModal, setSubmitModal] = useState(false);
    const [deleteProfilePicModal, setDeleteProfilePicModal] = useState(false);

    const resetChanges = () => {
        setEditUsername(false);
        setEditName(false);
        setEditEmail(false);
        setNewUsername('');
        setNewName('');
        setNewEmail('');
    }

    const toggleExpand = () => {
        if (isExpanded === true) {
            resetChanges();
        }
        isExpanded === true ? setIsExpanded(false) : setIsExpanded(true);
    }

    const submitAsk = () => {
        setSubmitModal(true);
    }

    const deleteProfileAsk = () => {
        setDeleteProfilePicModal(true);
    }

    const submitChanges = () => {
        setSubmitModal(false);
        resetChanges();
        //check input validity here
    }

    const deleteProfilePicture = () => {
        setDeleteProfilePicModal(false);
    }

    return (
        <div className={isExpanded ? [classes.container, classes.containerExpanded].join(' ') : classes.container}>
            <img src={props.profilePic} className={isExpanded ? classes.profilePic : classes.hide} />
            <p className={isExpanded ? editUsername ? classes.hide : classes.username : classes.lineViewText} onClick={() => setEditUsername(true)}>نام کاربری: {props.username}</p>
            <p className={isExpanded ? editName ? classes.hide : classes.name : classes.lineViewText} onClick={() => setEditName(true)}>نام و نام خانوادگی: {props.name}</p>
            <p className={isExpanded ? editEmail ? classes.hide : classes.email : classes.lineViewText} onClick={() => setEditEmail(true)}>ایمیل: {props.email}</p>
            <p className={isExpanded ? classes.access : classes.lineViewText}>نوع دسترسی: {props.access}</p>
            <img src={arrow} className={isExpanded ? [classes.arrow, classes.upsidedown].join(' ') : classes.arrow} onClick={toggleExpand} />
            <input className={isExpanded ? classes.newPassword : classes.hide} placeholder="رمز جدید" />
            <div className={isExpanded ? classes.deactivateUser : classes.hide}>
                <input type="checkbox" className={classes.deactivateUserCheckbox} defaultChecked={props.isDeactivated} />
                <p className={classes.deactivateUserText}>غیر فعال کردن کاربر</p>
            </div>
            <button className={isExpanded ? classes.deleteProfilePicture : classes.hide} onClick={deleteProfileAsk}>حذف عکس پروفایل</button>
            <button className={isExpanded ? classes.submit : classes.hide} onClick={submitAsk}>دخیره تغییرات</button>
            <input type="text" className={isExpanded ? editUsername ? classes.usernameInput : classes.hide : classes.hide} value={newUsername} onChange={(event) => setNewUsername(event.target.value)} placeholder="نام کاربری جدید"></input>
            <input type="text" className={isExpanded ? editName ? classes.nameInput : classes.hide : classes.hide} value={newName} onChange={(event) => setNewName(event.target.value)} placeholder="نام و نام خانوادگی جدید"></input>
            <input type="text" className={isExpanded ? editEmail ? classes.emailInput : classes.hide : classes.hide} value={newEmail} onChange={(event) => setNewEmail(event.target.value)} placeholder="ایمیل جدید"></input>
            <ConfirmModal show={submitModal} message="آیا از ذخیره تغییرات اطمینان دارید؟" modalClosed={() => setSubmitModal(false)} proceed={submitChanges} />
            <ConfirmModal show={deleteProfilePicModal} message="آیا از حذف عکس پروفایل اطمینان دارید؟" modalClosed={() => setDeleteProfilePicModal(false)} proceed={deleteProfilePicture} />
        </div>
    );
}

export default UserInfoComponent;