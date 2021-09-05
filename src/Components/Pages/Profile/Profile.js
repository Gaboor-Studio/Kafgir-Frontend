import React from "react";
import UpperInformation from "./UpperInformation"
import ProfileCard from "./ProfileCard"
import emailIcon from "../../../assets/profile/email.svg"
import logoutIcon from "../../../assets/profile/logout.svg"
import passwordIcon from "../../../assets/profile/password.svg"
import contactUsIcon from "../../../assets/profile/contact-us.svg"
const Profile = () => {
    return (
        <div>
            <UpperInformation></UpperInformation>
            <ProfileCard title="ایمیل" text="useremailexample@gmail.com" icon={emailIcon}></ProfileCard>
            <ProfileCard title="تعویض رمز عبور" text="" icon={passwordIcon}></ProfileCard>
            <ProfileCard title="تماس با ما" text="" icon={contactUsIcon}></ProfileCard>
            <ProfileCard title="خروج از حساب کاربری" text="" icon={logoutIcon} isend></ProfileCard>
        </div>
    );
}

export default Profile;