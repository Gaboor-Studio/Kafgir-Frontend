import React, { useState } from "react"
import classes from "./AddAdminPanel.module.css"
import ConfirmModal from "../../../../UI/Modal/ConfirmModal/ConfirmModal"
import axios from "axios"

const AddAdminPanel = (props) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [isSuperUser, setIsSuperUser] = useState(false);
    const [submitModal, setSubmitModal] = useState(false);

    const config = {
        headers: {
            "content-type": "application/json",
            Authorization: 'Token cdafd70c8f23c1a654abbd7af0f0440d7bc78a01'
        }
    }

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
        setPassword('');
        setPasswordRepeat('');
        setName('');
        setLastName('');
        setIsSuperUser(false);
    }

    const submitChanges = () => {
        setSubmitModal(false);
        if (username === '' || email === '' || password === '' || passwordRepeat === '')
            alert('لطفا همه ی فیلد ها را پر کنید');
        else if (password != passwordRepeat)
            alert("پسورد و تکرار آن یکسان نیستند")
        else {
            axios.post("http://84.241.22.193:8000/api/admin/admin-management/", {
                "username": username,
                "email": email,
                "name": name,
                "last_name": lastName,
                "password": password,
                "password_repeat": passwordRepeat,
                "is_superuser": isSuperUser
            }, config)
                .then(res => props.update())
                .catch(err => console.error(err));
            resetFields();
            setIsExpanded(false);
        }
    }

    return (
        <div className={classes.container}>
            <button type="button" className={classes.expandButton} onClick={toggleExpand}>افزودن ادمین جدید</button>
            <form className={isExpanded ? classes.addAdminForm : classes.hide} onSubmit={askSubmit}>
                <input type="text" value={username} className={classes.username} onChange={(event) => setUsername(event.target.value)} placeholder="نام کاربری"></input>
                <input type="email" value={email} className={classes.email} onChange={(event) => setEmail(event.target.value)} placeholder="ایمیل"></input>
                <input type="password" value={password} className={classes.password} onChange={(event) => setPassword(event.target.value)} placeholder="رمز عبور"></input>
                <input type="password" value={passwordRepeat} className={classes.password} onChange={(event) => setPasswordRepeat(event.target.value)} placeholder="تکرار رمز عبور"></input>
                <input type="text" value={name} className={classes.password} onChange={(event) => setName(event.target.value)} placeholder="نام"></input>
                <input type="text" value={lastName} className={classes.password} onChange={(event) => setLastName(event.target.value)} placeholder="نام خانوادگی"></input>
                <div className={classes.isSuperUser}>
                    <p className={classes.isSuperUsertext}>سوپر یوزر</p>
                    <input type="checkbox" className={classes.isSuperUserCheckbox} defaultChecked={isSuperUser} onChange={(event) => setIsSuperUser(event.target.checked)} />
                </div>
                <button type="submit" className={classes.submit}>افزودن ادمین</button>
            </form>
            <ConfirmModal show={submitModal} message="آیا از ذخیره تغییرات اطمینان دارید؟" modalClosed={() => setSubmitModal(false)} proceed={submitChanges} />
        </div>
    );
}

export default AddAdminPanel;