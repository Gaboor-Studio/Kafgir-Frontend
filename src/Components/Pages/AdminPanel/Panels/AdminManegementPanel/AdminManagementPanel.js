import React, { useEffect, useState } from "react"
import { adminAdminsService } from "../../../../../services/admin-admins.service"
import Header from "../UserManagementPanel/Header"
import AddAdminPanel from "./AddAdminPanel"
import classes from "./AdminManagementPanel.module.css"
import AdminInfoComponent from "./AdminInfoComponent/AdminInfoComponent"

const AdminManagementPanel = () => {
    const [admins, setAdmins] = useState([]);
    const [updatePage, setUpdatePage] = useState(false);

    const updateAdmins = () => {
        setUpdatePage(prev => !prev);
    }

    useEffect(() => {
        adminAdminsService.fetchAdmins()
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