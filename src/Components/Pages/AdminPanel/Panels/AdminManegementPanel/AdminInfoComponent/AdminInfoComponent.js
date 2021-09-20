import React, { useState } from "react"
import classes from "./AdminInfoComponent.module.css"
import ConfirmModal from "../../../../../UI/Modal/ConfirmModal/ConfirmModal"

const AdminInfoComponent = (props) => {
    const [submitModal, setSubmitModal] = useState(false);

    const askDelete = () => {
        setSubmitModal(true);
    }

    const deleteAdmin = () => {
        setSubmitModal(false);
        //delete request to backend
    }

    return (
        <div className={classes.container}>
            <p className={classes.username}>{props.username}</p>
            <p className={classes.email}>{props.email}</p>
            <button className={classes.deleteButton} onClick={askDelete}>حذف ادمین</button>
            <ConfirmModal show={submitModal} message="آیا از حدف این ادمین اطمینان دارید؟" modalClosed={() => setSubmitModal(false)} proceed={deleteAdmin} />
        </div>
    );

}

export default AdminInfoComponent;