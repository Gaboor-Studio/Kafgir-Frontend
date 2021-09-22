import React from 'react'
import Button from '../../Button/Button';
import Modal from '../Modal';

import classes from './ConfirmModal.module.css'

const ConfirmModal = (props) => (
    <Modal show={props.show} modalClosed={props.modalClosed}>
        <div className={classes.ConfirmModal}>
            <div className={classes.ContentModal}>{props.message}</div>
            <Button clicked={props.proceed}>ادامه</Button>
            <Button clicked={props.modalClosed}>بستن</Button>
        </div>
    </Modal>
);

export default ConfirmModal;