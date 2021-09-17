import React, { useEffect, useState } from "react"
import classes from "./AdminPanelLayout.module.css"
import { Link } from 'react-router-dom'

const AdminPanelLayout = (props) => {
    const [currentPage, setCurrentPage] = useState('');

    return (
        <div className={classes.pageContainer} dir="rtl">
            <div className={classes.layout}>
                <p className={classes.title}>پنل ادمین</p>
                <Link to="/admin-panel/food" className={classes.link}>
                    <button className={currentPage === "food" ? [classes.button, classes.buttonSelected].join(' ') : classes.button} onClick={() => setCurrentPage('food')}>اطلاعات غذا</button>
                </Link>
                <Link to="/admin-panel/tags-and-categories" className={classes.link}>
                    <button className={currentPage === "categories" ? [classes.button, classes.buttonSelected].join(' ') : classes.button} onClick={() => setCurrentPage('categories')}>تگ ها و کتگوری ها</button>
                </Link>
                <Link to="/admin-panel/user-management" className={classes.link}>
                    <button className={currentPage === "users" ? [classes.button, classes.buttonSelected].join(' ') : classes.button} onClick={() => setCurrentPage('users')}>مدیریت کاربران</button>
                </Link>
                <Link to="/admin-panel/admin-management" className={classes.link}>
                    <button className={currentPage === "admins" ? [classes.button, classes.buttonSelected].join(' ') : classes.button} onClick={() => setCurrentPage('admins')}>مدیریت ادمین ها</button>
                </Link>
            </div>
            {props.children}
        </div>
    );
}

export default AdminPanelLayout;