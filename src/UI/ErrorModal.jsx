import React from 'react';
import ErrorCard from './ErrorCard';
import classes from './ErrorModal.module.css';

const ErrorModal = props =>{
    return(
        <ErrorCard>
        <div className={classes.modal}>
            <header className={classes.header}>
                {props.header}
            </header>
            <div className={classes.content}>
                <p>{props.message}</p>
            </div>
            <footer className={classes.actions}>
                <button>Okey</button>
            </footer>
        </div>
        </ErrorCard>
    )
}

export default ErrorModal;