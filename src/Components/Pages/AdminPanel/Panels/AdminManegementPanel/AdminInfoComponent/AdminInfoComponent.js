import React, { useState } from "react"
import { adminAdminsService } from "../../../../../../services/admin-admins.service"
import classes from "./AdminInfoComponent.module.css"
import ConfirmModal from "../../../../../UI/Modal/ConfirmModal/ConfirmModal"
import axios from "axios"

const AdminInfoComponent = (props) => {
    const [submitModal, setSubmitModal] = useState(false);
    const [newPasswordModal, setNewPasswordModal] = useState(false);
    const [newPassword, setNewPassword] = useState('');
    const [newPasswordRepeat, setNewPasswordRepeat] = useState('');

    const askDelete = () => {
        setSubmitModal(true);
    }

    const askNewPassword = () => {
        if (newPassword !== newPasswordRepeat)
            alert('پسورد های وارد شده یکسان نیستند')
        else {
            setNewPasswordModal(true);
        }
    }

    const deleteAdmin = () => {
        setSubmitModal(false);
        adminAdminsService.deleteAdmin(props.id)
            .then(res => props.update())
            .catch(err => console.error(err));
    }

    const submitNewPassword = () => {
        setNewPasswordModal(false);
        adminAdminsService.changePassword(newPassword,newPasswordRepeat,props.id)
            .then(res => alert("رمز عبور با موفقیت تغییر یافت"))
            .catch(err => console.error(err));
        setNewPassword('');
        setNewPasswordRepeat('');
    }
    return (
        <div className={classes.container}>
            <p className={classes.username}>نام کاربری: {props.username}</p>
            <p className={classes.name}>نام: {props.name}</p>
            <div className={classes.newPasswordContainer}>
                <input type="password" value={newPassword} className={classes.newPassword} onChange={(event) => setNewPassword(event.target.value)} placeholder="رمز جدید" />
                <input type="password" value={newPasswordRepeat} className={classes.newPassword} onChange={(event) => setNewPasswordRepeat(event.target.value)} placeholder="تکرار رمز جدید" />
                <button className={classes.newPasswordSubmitButton} onClick={askNewPassword}>ثبت</button>
            </div>
            <button className={classes.deleteButton} onClick={askDelete}>حذف ادمین</button>
            <ConfirmModal show={submitModal} message="آیا از حدف این ادمین اطمینان دارید؟" modalClosed={() => setSubmitModal(false)} proceed={deleteAdmin} />
            <ConfirmModal show={newPasswordModal} message="آیا از تغییر رمز عبور اطمینان دارید؟" modalClosed={() => setNewPasswordModal(false)} proceed={submitNewPassword} />
        </div>
    );

}

export default AdminInfoComponent;