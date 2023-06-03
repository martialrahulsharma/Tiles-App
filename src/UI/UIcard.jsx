import React from 'react';
import classes from './UIcard.module.css';

const UIcard = (props) =>{
    return <div className={`${classes.uiCard} ${props.className}`}>
        {
            props.children
        }
    </div>
}

export default UIcard;