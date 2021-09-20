import React from "react"
import UserInfoComponent from "./UserInfoComponent/UserInfoComponent"
import Header from "./Header"
import classes from "./UserManagementPanel.module.css"
import defaultProfilePic from "../../../../../assets/profile/default-profile-pic.jpg"

const UserManagementPanel = () => {
    const search = (searchText) => {

    }
    return (
        <div className={classes.container}>
            <Header onSearch={search} title="کاربران" />
            <div className={classes.underline} />
            <UserInfoComponent username="kianosh" name="کیانوش آرین" isDeactivated={false} access="admin" email="kianosharian3@gmail.com" profilePic={defaultProfilePic}></UserInfoComponent>
        </div>
    );
}

export default UserManagementPanel;