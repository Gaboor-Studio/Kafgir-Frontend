import React from "react"
import Header from "../UserManagementPanel/Header"
import AddAdminPanel from "./AddAdminPanel"
import classes from "./AdminManagementPanel.module.css"
import AdminInfoComponent from "./AdminInfoComponent/AdminInfoComponent"

const AdminManagementPanel = () => {
    const search = (searchText) => {

    }
    return(
        <div className={classes.container}>
            <Header onSearch={search} title="ادمین ها" />
            <AddAdminPanel />
            <div className={classes.underline} />
            <AdminInfoComponent username="username" email="exampleemail@gmail.com" />
        </div>
    );
}

export default AdminManagementPanel;