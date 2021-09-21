import React, { useEffect, useState } from "react"
import UserInfoComponent from "./UserInfoComponent/UserInfoComponent"
import Header from "./Header"
import classes from "./UserManagementPanel.module.css"
import defaultProfilePic from "../../../../../assets/profile/default-profile-pic.jpg"
import axios from "axios"

const UserManagementPanel = () => {
    const [users, setUsers] = useState([]);

    const config = {
        headers: {
            "content-type": "application/json",
            Authorization: 'Token cdafd70c8f23c1a654abbd7af0f0440d7bc78a01'
        }
    }

    useEffect(() => {
        axios.get("http://84.241.22.193:8000/api/admin/user-management/", config)
            .then(res => setUsers(res.data))
            .catch(err => console.error(err));
    }, [])

    const search = (searchText) => {
        
    }
    return (
        <div className={classes.container}>
            <Header onSearch={search} title="کاربران" />
            <div className={classes.underline} />
            {users.map(user => <UserInfoComponent key={user.id} username={user.username} name={[user.name, user.last_name].join(' ')} isDeactivated={!user.is_active} access="staff" email={user.email} profilePic={user.image === "no-image" ? defaultProfilePic : user.image}></UserInfoComponent>)}
        </div>
    );
}

export default UserManagementPanel;