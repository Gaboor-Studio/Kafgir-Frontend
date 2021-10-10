//needs cleaning
//upper information component for showing profile picture, showing and editing the username and ImageEdit component

import React, { useState } from "react";
import { profileService } from "../../../services/profile.service";
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
    const [nameInput, setNameInput] = useState('');
    const [lastNameInput, setLastNameInput] = useState('');
    const profilePic = (props.picture === "no-image" ? defaultProfilePic : props.picture)
    //enable edit username input
    const edit = () => {
        props.setEditState(true);
    }
    //check new username validity and submit
    const editSubmit = (event) => {
        event.preventDefault();
        if (nameInput.length >= 4 && lastNameInput.length >= 4) {
            props.setEditState(false);
            profileService.editProfile(nameInput, lastNameInput)
                .then(alert('نام و نام خانوادگی با موفقیت تغییر یافت'))
                .catch(err => console.error(err));
            setNameInput('');
            setLastNameInput('');
        }
        else
            alert("نام و نام خانوادگی باید حداقل 3 حرف باشد")
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
                    <p className={props.editState ? classes.editState : classes.username}>{props.name}</p>
                    <form className={props.editState ? [] : classes.editState}>
                        <input value={nameInput} type="text" maxLength="20" name="username" onChange={(event) => setNameInput(event.target.value)} required className={props.editState ? classes.inputName : classes.editState} placeholder="نام"></input>
                        <input value={lastNameInput} type="text" maxLength="20" name="username" onChange={(event) => setLastNameInput(event.target.value)} required className={props.editState ? classes.inputName : classes.editState} placeholder="نام خانوادگی"></input>
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