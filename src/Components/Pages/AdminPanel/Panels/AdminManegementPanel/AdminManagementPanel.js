import React from "react"
import Header from "../UserManagementPanel/Header"
import AddAdminPanel from "./AddAdminPanel"
import classes from "./AdminManagementPanel.module.css"

const AdminManagementPanel = () => {
    const search = (searchText) => {

    }
    return(
        <div className={classes.container}>
            <Header onSearch={search} />
            <AddAdminPanel />
            <div className={classes.underline} />
        </div>
    );
}

export default AdminManagementPanel;