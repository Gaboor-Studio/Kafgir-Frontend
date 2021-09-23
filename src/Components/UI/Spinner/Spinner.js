import classes from './Spinner.module.css';
import Backdrop from '../Backdrop/Backdrop';
import React from 'react';

const Spinner = (props) => {
    let extra = []

    if (props.centered){
        extra.push(classes.Centered)
    }

    return (
        <React.Fragment>
            <Backdrop show={props.show}/>
            {props.show ? <div className={`${classes.Loader} ${extra.join(' ')}`}>Loading...</div> : null}
        </React.Fragment>
    );
}

export default Spinner;