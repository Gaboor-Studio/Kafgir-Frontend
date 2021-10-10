//profile page component that consists of information cards and upper information which is profile picture and username

import React, { useEffect, useState } from "react";
import { profileService } from "../../../services/profile.service";
import UpperInformation from "./UpperInformation"
import ProfileCard from "./ProfileCard"
import emailIcon from "../../../assets/profile/email.svg"
import logoutIcon from "../../../assets/profile/logout.svg"
import passwordIcon from "../../../assets/profile/password.svg"
import contactUsIcon from "../../../assets/profile/contact-us.svg"
import accountIcon from "../../../assets/profile/account.svg"
const Profile = () => {
    const [editNameState, setEditNameState] = useState(false);
    const [userInfo, setUserInfo] = useState({});

    useEffect(() => {
        profileService.fetchProfileInfo()
            .then(res => setUserInfo(res.data))
            .catch(err => console.error(err));
    }, [])

    return (
        <div>
            <UpperInformation editState={editNameState} name={[userInfo.name, userInfo.last_name].join(' ')} picture={userInfo.image} setEditState={setEditNameState}></UpperInformation>
            <ProfileCard title="نام کاربری" text={userInfo.username} icon={accountIcon}></ProfileCard>
            <ProfileCard title="ایمیل" text={userInfo.email} icon={emailIcon}></ProfileCard>
            <ProfileCard title="تعویض رمز عبور" text="" icon={passwordIcon} arrow></ProfileCard>
            <ProfileCard title="تماس با ما" text="" icon={contactUsIcon} arrow></ProfileCard>
            <ProfileCard title="خروج از حساب کاربری" text="" icon={logoutIcon} isend></ProfileCard>
        </div>
    );
}

export default Profile;