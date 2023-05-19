import React from "react";
import TilesRelatedInput from "./TilesRelatedInput";
import classes from './SquareFeet.module.css';
import { useState } from "react";

const SquareFeet = () => {
    const [squareFeet, setSquareFeet] = useState('');

    const squareFeetHandler = (event) =>{
        setSquareFeet(event.target.value);
    }

  return (
    <div className={classes.sqrFt}>
      <form>
        <label>
          Enter Square Feet
          <input type="number" value={squareFeet} onChange={squareFeetHandler} />
        </label>
        <TilesRelatedInput />
      </form>
    </div>
  );
};

export default SquareFeet;
