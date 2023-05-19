import React from "react";
import TilesRelatedInput from "./TilesRelatedInput";
import classes from './LengthWidth.module.css';
import { useState } from "react";

const LengthWidth = () => {
    const [length, setLength] = useState('');
    const [width, setWidth] = useState('');

    const lengthHandler = (event) =>{
        setLength(event.target.value);
    }
    const widthHandler = (event) =>{
        setWidth(event.target.value);
    }

  return (
    <div className={classes.lw}>
      <form>
        <label>
          Enter Length, Width
          <input type="number" value={length} onChange={lengthHandler} placeholder='Length'/>
          <input type="number" value={width} onChange={widthHandler} placeholder='Width'/>
        </label>
        <TilesRelatedInput />
      </form>
    </div>
  );
};

export default LengthWidth;
