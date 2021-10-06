import React, { useEffect, useState } from "react"
import { adminUserService } from "../../../../../services/admin-user.service"
import UserInfoComponent from "./UserInfoComponent/UserInfoComponent"
import Header from "./Header"
import classes from "./UserManagementPanel.module.css"
import defaultProfilePic from "../../../../../assets/profile/default-profile-pic.jpg"

const UserManagementPanel = () => {
    const [users, setUsers] = useState([]);
    const [updatePage, setUpdatePage] = useState(false);

    const updateUsers = () => {
        setUpdatePage(prev => !prev);
    }

    useEffect(() => {
        adminUserService.fetchUsers()
            .then(res => setUsers(res.data))
            .catch(err => console.error(err));
    }, [updatePage])

    const search = (searchText) => {

    }
    return (
        <div className={classes.container}>
            <Header onSearch={search} title="کاربران" />
            <div className={classes.underline} />
            {users.map(user => <UserInfoComponent key={user.id} id={user.id} username={user.username} name={user.name} lastName={user.last_name} isDeactivated={!user.is_active} access="staff" email={user.email} profilePic={user.image === "no-image" ? defaultProfilePic : user.image} update={updateUsers}></UserInfoComponent>)}
        </div>
    );
}

export default UserManagementPanel;