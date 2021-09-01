import React from "react";
import defaultProfilePic from "../../../assets/profile/default-profile-pic.jpg"
import newPhoto from "../../../assets/profile/new_photo.png"
import deletePhoto from "../../../assets/profile/delete_photo.png"
import pictureBackground from "../../../assets/profile/picture-background.png"
import classes from "./Profile.module.css";
const Profile=()=>{
    return(
        <div>
            <div className={classes.upperPart}>
                <div className={classes.profilePicContainer}>
                    <img src={pictureBackground} alt="profile avatar background" className={classes.profilePicBackground}></img>
                    <div className={classes.profilePic}>
                        <img src={defaultProfilePic} alt="avatar" className={classes.image}></img>
                    </div>
                </div>
                <div className={classes.editPhoto}>
                    <img src={deletePhoto} alt="delete avatar"></img>
                    <img src={newPhoto} alt="new avatar"></img>
                </div>
            </div>
        </div>
    );
}

export default Profile;