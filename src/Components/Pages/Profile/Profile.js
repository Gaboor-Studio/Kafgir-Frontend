import React, { useState } from "react";
import UpperInformation from "./UpperInformation"
import ProfileCard from "./ProfileCard"
import emailIcon from "../../../assets/profile/email.svg"
import logoutIcon from "../../../assets/profile/logout.svg"
import passwordIcon from "../../../assets/profile/password.svg"
import contactUsIcon from "../../../assets/profile/contact-us.svg"
import accountIcon from "../../../assets/profile/account.svg"
const Profile = () => {
    const [editNameState,setEditNameState]= useState(false);

    return (
        <div>
            <UpperInformation editState={editNameState} setEditState={setEditNameState}></UpperInformation>
            <ProfileCard title="نام کاربری" text="username" icon={accountIcon}></ProfileCard>
            <ProfileCard title="ایمیل" text="useremailexample@gmail.com" icon={emailIcon}></ProfileCard>
            <ProfileCard title="تعویض رمز عبور" text="" icon={passwordIcon} arrow></ProfileCard>
            <ProfileCard title="تماس با ما" text="" icon={contactUsIcon} arrow></ProfileCard>
            <ProfileCard title="خروج از حساب کاربری" text="" icon={logoutIcon} isend></ProfileCard>
        </div>
    );
}

export default Profile;