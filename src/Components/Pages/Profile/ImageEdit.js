import React, { useState } from "react";
import classes from "./ImageEdit.module.css"
import ConfirmModal from "../../UI/Modal/ConfirmModal/ConfirmModal"

const ImageEdit = (props) => {
    const [modalOpen, setModalOpen] = useState(false);
    const validateImageType = (event) => {
        event.persist();
        if (event.target.files[0].type !== 'image/png' && event.target.files[0].type !== 'image/jpeg') {
            alert("file must be an image");
        }
    }
    const askDeleteAvatar = () => {
        setModalOpen(true)
    }
    const deleteAvatar = () => {
        setModalOpen(false);
        alert("avatar deleted");
    }
    return (
        <React.Fragment>
            <img src={props.deletePhoto} alt="delete avatar" onClick={askDeleteAvatar}></img>
            <label htmlFor="upload-photo">
                <img src={props.newPhoto} alt="new avatar"></img>
            </label>
            <input type="file" id="upload-photo" className={classes.uploadButton} accept="image/png, image/jpeg" onChange={validateImageType}></input>
            <ConfirmModal message="در صورت اطمینان از عمل خود ادامه را بزنید" show={modalOpen} modalClosed={() => setModalOpen(false)} proceed={deleteAvatar}></ConfirmModal>
        </React.Fragment>

    );
}

export default ImageEdit;