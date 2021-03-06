import React, { useState } from "react"
import { adminUserService } from "../../../../../../services/admin-user.service"
import classes from "./UserInfoComponent.module.css"
import arrow from "../../../../../../assets/admin-panel/down-arrow.png"
import ConfirmModal from "../../../../../UI/Modal/ConfirmModal/ConfirmModal"
import axios from "axios"

const UserInfoComponent = (props) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [editUsername, setEditUsername] = useState(false);
    const [editName, setEditName] = useState(false);
    const [editEmail, setEditEmail] = useState(false);
    const [newUsername, setNewUsername] = useState('');
    const [newName, setNewName] = useState('');
    const [newLastName, setNewLastName] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [submitModal, setSubmitModal] = useState(false);
    const [deleteProfilePicModal, setDeleteProfilePicModal] = useState(false);
    const [deactivateUser, setDeactivateUser] = useState(props.isDeactivated);

    const resetChanges = () => {
        setEditUsername(false);
        setEditName(false);
        setEditEmail(false);
        setNewUsername('');
        setNewName('');
        setNewLastName('');
        setNewEmail('');
        setNewPassword('');
    }

    const config = {
        headers: {
            "content-type": "application/json",
            Authorization: 'Token cdafd70c8f23c1a654abbd7af0f0440d7bc78a01'
        }
    }

    const toggleExpand = () => {
        if (isExpanded === true) {
            resetChanges();
        }
        isExpanded === true ? setIsExpanded(false) : setIsExpanded(true);
    }

    const submitAsk = () => {
        setSubmitModal(true);
    }

    const deleteProfileAsk = () => {
        setDeleteProfilePicModal(true);
    }

    const submitChanges = () => {
        setSubmitModal(false);
        let reqData = {};
        if (newUsername !== '') reqData.username = newUsername;
        if (newName !== '') reqData.name = newName;
        if (newLastName !== '') reqData.last_name = newLastName;
        reqData.is_active = (!deactivateUser);
        adminUserService.editUser(reqData, props.id)
            .then(res => props.update())
            .catch(err => console.error(err));
        if (newPassword !== '') {
            adminUserService.changePassword(newPassword, props.id)
                .then(res => props.update())
                .catch(err => console.error(err));
        }
        resetChanges();
    }

    const deleteProfilePicture = () => {
        setDeleteProfilePicModal(false);
    }

    return (
        <div className={isExpanded ? [classes.container, classes.containerExpanded].join(' ') : classes.container}>
            <img src={props.profilePic} className={isExpanded ? classes.profilePic : classes.hide} />
            <p className={isExpanded ? editUsername ? classes.hide : classes.username : classes.lineViewText} onClick={() => setEditUsername(true)}>?????? ????????????: {props.username}</p>
            <p className={isExpanded ? editName ? classes.hide : classes.name : classes.lineViewText} onClick={() => setEditName(true)}>?????? ?? ?????? ????????????????: {[props.name, props.lastName].join(' ')}</p>
            <p className={isExpanded ? editEmail ? classes.hide : classes.email : classes.lineViewText} onClick={() => setEditEmail(true)}>??????????: {props.email}</p>
            <p className={isExpanded ? classes.access : classes.lineViewText}>?????? ??????????: {props.access}</p>
            <img src={arrow} className={isExpanded ? [classes.arrow, classes.upsidedown].join(' ') : classes.arrow} onClick={toggleExpand} />
            <input className={isExpanded ? classes.newPassword : classes.hide} value={newPassword} onChange={(event) => setNewPassword(event.target.value)} placeholder="?????? ????????" />
            <div className={isExpanded ? classes.deactivateUser : classes.hide}>
                <input type="checkbox" className={classes.deactivateUserCheckbox} checked={deactivateUser} onChange={(event) => setDeactivateUser(event.target.checked)} />
                <p className={classes.deactivateUserText}>?????? ???????? ???????? ??????????</p>
            </div>
            <button className={isExpanded ? classes.deleteProfilePicture : classes.hide} onClick={deleteProfileAsk}>?????? ?????? ??????????????</button>
            <button className={isExpanded ? classes.submit : classes.hide} onClick={submitAsk}>?????????? ??????????????</button>
            <input type="text" className={isExpanded ? editUsername ? classes.usernameInput : classes.hide : classes.hide} value={newUsername} onChange={(event) => setNewUsername(event.target.value)} placeholder="?????? ???????????? ????????"></input>
            <input type="text" className={isExpanded ? editName ? classes.nameInput : classes.hide : classes.hide} value={newName} onChange={(event) => setNewName(event.target.value)} placeholder="?????? ????????"></input>
            <input type="text" className={isExpanded ? editName ? classes.lastNameInput : classes.hide : classes.hide} value={newLastName} onChange={(event) => setNewLastName(event.target.value)} placeholder="?????? ???????????????? ????????"></input>
            <input type="text" className={isExpanded ? editEmail ? classes.emailInput : classes.hide : classes.hide} value={newEmail} onChange={(event) => setNewEmail(event.target.value)} placeholder="?????????? ????????"></input>
            <ConfirmModal show={submitModal} message="?????? ???? ?????????? ?????????????? ?????????????? ????????????" modalClosed={() => setSubmitModal(false)} proceed={submitChanges} />
            <ConfirmModal show={deleteProfilePicModal} message="?????? ???? ?????? ?????? ?????????????? ?????????????? ????????????" modalClosed={() => setDeleteProfilePicModal(false)} proceed={deleteProfilePicture} />
        </div>
    );
}

export default UserInfoComponent;