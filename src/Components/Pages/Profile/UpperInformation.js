import React, { useState } from "react";
import defaultProfilePic from "../../../assets/profile/default-profile-pic.jpg"
import newPhoto from "../../../assets/profile/new_photo.svg"
import deletePhoto from "../../../assets/profile/delete_photo.svg"
import pictureBackground from "../../../assets/profile/picture-background.svg"
import more from "../../../assets/profile/more.svg"
import editName from "../../../assets/profile/edit_name.svg"
import nameLine from "../../../assets/profile/name-line.png"
import classes from "./UpperInformation.module.css";
import ImageEdit from "./ImageEdit"
import Button from "../../UI/Button/Button"

const UpperInformation = (props) => {
    const [usernameInput, setUsernameInput] = useState('');
    const edit = () => {
        props.setEditState(true);
    }
    const editSubmit = (event) => {
        event.preventDefault();
        if (usernameInput.length >= 4) {
            props.setEditState(false);
            setUsernameInput('');
        }
        else
            alert("نام کاربری باید حداقل 4 حرف باشد")
    }
    const inputChangeHandler = (event) => {
        setUsernameInput(event.target.value);
    }
    return (
        <div>
            <div className={classes.upperPart} dir="rtl">
                <div className={classes.editPhoto}>
                    <ImageEdit newPhoto={newPhoto} deletePhoto={deletePhoto}></ImageEdit>
                </div>
                <div className={classes.profilePicContainer}>
                    <img src={pictureBackground} alt="profile avatar background" className={classes.profilePicBackground}></img>
                    <div className={classes.profilePic}>
                        <img src={defaultProfilePic} alt="avatar" className={classes.image}></img>
                    </div>
                </div>
                <img src={more} alt="more" className={classes.more}></img>
                <div className={classes.nameComponent}>
                    <p className={props.editState ? classes.editState : classes.username}>نام نام خانوادگی</p>
                    <form className={props.editState ? [] : classes.editState}>
                        <input value={usernameInput} type="text" maxLength="20" name="username" onChange={inputChangeHandler} required className={props.editState ? classes.inputName : classes.editState}></input>
                        <button type="submit" onClick={editSubmit} className={props.editState ? classes.submitButton : classes.editState}>تایید</button>
                    </form>
                    <img src={editName} alt="edit name" className={props.editState ? classes.editState : classes.editName} onClick={edit}></img>
                    <img src={nameLine} alt="line under name" className={classes.nameLine}></img>
                </div>
            </div>
        </div>
    );
}

export default UpperInformation;