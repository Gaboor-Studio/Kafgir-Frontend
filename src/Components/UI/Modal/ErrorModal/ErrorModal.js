import React from 'react'
import Button from '../../Button/Button';
import Modal from '../Modal';

import classes from './ErrorModal.module.css'

const ErrorModal = (props) => (
    <Modal show={props.show} modalClosed={props.modalClosed}>
        <div className={classes.ErrorModal}>
            <p>{props.error}</p>
            <Button clicked={props.modalClosed}>باشه</Button>
        </div>
    </Modal>
);

export default ErrorModal;