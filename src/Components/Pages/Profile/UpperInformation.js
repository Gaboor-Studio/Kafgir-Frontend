import React from "react";
import defaultProfilePic from "../../../assets/profile/default-profile-pic.jpg"
import newPhoto from "../../../assets/profile/new_photo.png"
import deletePhoto from "../../../assets/profile/delete_photo.png"
import pictureBackground from "../../../assets/profile/picture-background.png"
import more from "../../../assets/profile/more.png"
import editName from "../../../assets/profile/edit_name.png"
import nameLine from "../../../assets/profile/name-line.png"
import classes from "./UpperInformation.module.css";
const UpperInformation=()=>{
    return(
        <div>
            <div className={classes.upperPart} dir="rtl">
                <div className={classes.editPhoto}>
                    <img src={deletePhoto} alt="delete avatar"></img>
                    <img src={newPhoto} alt="new avatar"></img>
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