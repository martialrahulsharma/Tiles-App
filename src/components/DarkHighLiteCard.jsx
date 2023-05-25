import React from 'react';
import classes from './DarkHighLiteCard.module.css';

const DarkHighLiteCard = (props) =>{
    return(
        <>
        <div className={classes.card}>
        <h2>{props.heading}</h2>
        {props.sqrft !== '0' ? <div className={classes.rowContainer}>
          <label>{props.heading} Sqr Ft:</label>
          <span>{props.sqrft}</span>
        </div> : ""}
        
        <div className={classes.rowContainer}>
          
          <label>{props.heading} Boxes:</label>
          {props.darkBoxes}
        </div>
        
      </div>
        </>
    )
}

export default DarkHighLiteCard;