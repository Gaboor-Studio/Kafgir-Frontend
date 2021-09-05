import React from "react";
import defaultProfilePic from "../../../assets/profile/default-profile-pic.jpg"
import newPhoto from "../../../assets/profile/new_photo.svg"
import deletePhoto from "../../../assets/profile/delete_photo.svg"
import pictureBackground from "../../../assets/profile/picture-background.svg"
import more from "../../../assets/profile/more.svg"
import editName from "../../../assets/profile/edit_name.svg"
import nameLine from "../../../assets/profile/name-line.png"
import classes from "./UpperInformation.module.css";
import ImageEdit from "./ImageEdit"
const UpperInformation = () => {
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
                    <p className={classes.username}>نام نام خانوادگی</p>
                    <img src={editName} alt="edit name" className={classes.editName}></img>
                    <img src={nameLine} alt="line under name" className={classes.nameLine}></img>
                </div>
            </div>
        </div>
    );
}

export default UpperInformation;