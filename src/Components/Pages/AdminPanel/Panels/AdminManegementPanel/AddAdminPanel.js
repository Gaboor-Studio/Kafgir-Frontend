import React, { useState } from "react"
import classes from "./AddAdminPanel.module.css"
import ConfirmModal from "../../../../UI/Modal/ConfirmModal/ConfirmModal"

const AddAdminPanel = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [submitModal, setSubmitModal] = useState(false);

    const toggleExpand = () => {
        isExpanded === true ? setIsExpanded(false) : setIsExpanded(true);
    }

    const askSubmit = (event) => {
        event.preventDefault();
        setSubmitModal(true);
    }

    const resetFields = () => {
        setUsername('');
        setEmail('');
        setPassword('')
    }

    const submitChanges = () => {
        setSubmitModal(false);
        if (username === '' || email === '' || password === '')
            alert('لطفا همه ی فیلد ها را پر کنید');
        else {
            //validity check and send to backend
            resetFields();
            setIsExpanded(false);
        }
    }

    return (
        <div className={classes.container}>
            <button type="button" className={classes.expandButton} onClick={toggleExpand}>افزودن ادمین جدید</button>
            <form className={isExpanded ? classes.addAdminForm : classes.hide} onSubmit={askSubmit}>
                <input type="text" value={username} className={classes.username} onChange={(event) => setUsername(event.target.value)} placeholder="نام کاربری"></input>
                <input type="text" value={email} className={classes.email} onChange={(event) => setEmail(event.target.value)} placeholder="ایمیل"></input>
                <input type="password" value={password} className={classes.password} onChange={(event) => setPassword(event.target.value)} placeholder="رمز عبور"></input>
                <button type="submit" className={classes.submit}>افزودن ادمین</button>
            </form>
            <ConfirmModal show={submitModal} message="آیا از ذخیره تغییرات اطمینان دارید؟" modalClosed={() => setSubmitModal(false)} proceed={submitChanges} />
        </div>
    );
}

export default AddAdminPanel;