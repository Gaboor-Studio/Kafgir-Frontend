import React, { useEffect, useState } from "react"
import classes from "./AdminPanelLayout.module.css"
import { Link } from 'react-router-dom'

const AdminPanelLayout = (props) => {
    const [currentPage, setCurrentPage] = useState(window.location.pathname);
    const [pageHeader, setPageHeader] = useState('');
    useEffect(() => {
        currentPage === "/admin-panel/food" ? setPageHeader("مدیریت غذا ها") : currentPage === "/admin-panel/tags-and-categories"?
        setPageHeader("مدیریت تگ ها و کتگوری ها") : currentPage === "/admin-panel/user-management" ? setPageHeader("مدیریت کاربران") :
        setPageHeader("مدیریت ادمین ها");
    }, [currentPage])
    return (
        <div className={classes.pageContainer} dir="rtl">
            <div className={classes.layout}>
                <p className={classes.title}>پنل ادمین</p>
                <Link to="/admin-panel/food" className={classes.link}>
                    <button className={currentPage === "/admin-panel/food" ? [classes.button, classes.buttonSelected].join(' ') : classes.button} onClick={() => setCurrentPage('/admin-panel/food')}>اطلاعات غذا</button>
                </Link>
                <Link to="/admin-panel/tags-and-categories" className={classes.link}>
                    <button className={currentPage === "/admin-panel/tags-and-categories" ? [classes.button, classes.buttonSelected].join(' ') : classes.button} onClick={() => setCurrentPage('/admin-panel/tags-and-categories')}>تگ ها و کتگوری ها</button>
                </Link>
                <Link to="/admin-panel/user-management" className={classes.link}>
                    <button className={currentPage === "/admin-panel/user-management" ? [classes.button, classes.buttonSelected].join(' ') : classes.button} onClick={() => setCurrentPage('/admin-panel/user-management')}>مدیریت کاربران</button>
                </Link>
                <Link to="/admin-panel/admin-management" className={classes.link}>
                    <button className={currentPage === "/admin-panel/admin-management" ? [classes.button, classes.buttonSelected].join(' ') : classes.button} onClick={() => setCurrentPage('/admin-panel/admin-management')}>مدیریت ادمین ها</button>
                </Link>
            </div>
            <div className={classes.infoSection}>
                <div className={classes.pageHeader}><p className={classes.header}>{pageHeader}</p></div>
                {props.children}
            </div>
        </div>
    );
}

export default AdminPanelLayout;