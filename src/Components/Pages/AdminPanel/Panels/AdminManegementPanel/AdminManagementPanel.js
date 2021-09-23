import React, { useEffect, useState } from "react"
import Header from "../UserManagementPanel/Header"
import AddAdminPanel from "./AddAdminPanel"
import classes from "./AdminManagementPanel.module.css"
import AdminInfoComponent from "./AdminInfoComponent/AdminInfoComponent"
import axios from "axios"

const AdminManagementPanel = () => {
    const [admins, setAdmins] = useState([]);
    const [updatePage, setUpdatePage] = useState(false);

    const updateAdmins = () => {
        setUpdatePage(prev => !prev);
    }

    const config = {
        headers: {
            "content-type": "application/json",
            Authorization: 'Token cdafd70c8f23c1a654abbd7af0f0440d7bc78a01'
        }
    }

    useEffect(() => {
        axios.get("http://84.241.22.193:8000/api/admin/admin-management/", config)
            .then(res => setAdmins(res.data.data))
            .catch(err => console.error(err));
    }, [updatePage])

    const search = (searchText) => {

    }
    return (
        <div className={classes.container}>
            <Header onSearch={search} title="ادمین ها" />
            <AddAdminPanel update={updateAdmins} />
            <div className={classes.underline} />
            {admins.map(admin => <AdminInfoComponent key={admin.id} id={admin.id} update={updateAdmins} username={admin.username} name={[admin.name, admin.last_name].join(' ')} email={admin.email} />)}
        </div>
    );
}

export default AdminManagementPanel;