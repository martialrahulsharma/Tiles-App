import React from "react";
import TilesRelatedInput from "./TilesRelatedInput";
import classes from './LengthWidthHeight.module.css';
import { useState } from "react";

const LengthWidthHeight = () => {
    const [length, setLength] = useState('');
    const [width, setWidth] = useState('');
    const [height, setHeight] = useState('');
    const [doorSize, setDoorSize] = useState('');

    const lengthHandler = (event) =>{
        setLength(event.target.value);
    }
    const widthHandler = (event) =>{
        setWidth(event.target.value);
    }
    const heightHandler = (event) =>{
        setHeight(event.target.value);
    }
    const lwhDoorSizeHandler = (event) =>{
        setDoorSize(event.target.value);
    }

  return (
    <div className={classes.lwh}>
      <form>
        <label>
          Enter Length, Width, Height
          <input type="number" value={length} onChange={lengthHandler} placeholder='length'/>
          <input type="number" value={width} onChange={widthHandler} placeholder='width'/>
          <input type="number" value={height} onChange={heightHandler} placeholder='height'/>
        </label>
        <label>
          Enter Door Size
          <input type="number" value={doorSize} onChange={lwhDoorSizeHandler} />
        </label>
        <TilesRelatedInput LWHComponent='LWHComponent' floor/>
      </form>
    </div>
  );
};

export default LengthWidthHeight;
