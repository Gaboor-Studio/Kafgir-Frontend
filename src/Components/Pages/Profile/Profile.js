import React from "react";
import UpperInformation from "./UpperInformation"
import ProfileCard from "./ProfileCard"
import emailIcon from "../../../assets/profile/email.png"
import logoutIcon from "../../../assets/profile/logout.png"
import passwordIcon from "../../../assets/profile/password.png"
import contactUsIcon from "../../../assets/profile/contact-us.png"
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