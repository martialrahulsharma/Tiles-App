import React, { useState } from "react";
import classes from "./DarkTile.module.css";

const LightTile = (props) => {

  const [lightHeight, setLightHight] = useState("");
  const [lightWidth, setLightWidth] = useState("");
  const [lightNumberOfWall, setLightNumberOfWall] = useState(1);
  const [lightCheckbox, setlightCheckbox] = useState(false);

  const lightCheckboxHandler = (event) =>{
    setlightCheckbox(event.target.checked);
    props.onCheckbox(event.target.checked);
  }

  const lightInputHeightHandler = (event) => {
    setLightHight(event.target.value);
    props.onLightHeightHandler(event.target.value);
  };

  const lightInputWidthHandler = (event) => {
    setLightWidth(event.target.value);
    props.onLightWidthHandler(event.target.value);
  };

  const lightNumberOfWallHandler = (event) => {
    setLightNumberOfWall(event.target.value);
    props.onLightNumberOfWallHandler(event.target.value)
  };

  return (
    <>
      <input type='checkbox' checked={lightCheckbox} onChange={lightCheckboxHandler} />
        <label>Light</label>
        <input
          type="number"
          value={lightHeight}
          onChange={lightInputHeightHandler}
          placeholder="Height"
        />
        <input
          type="number"
          value={lightWidth}
          onChange={lightInputWidthHandler}
          placeholder="width"
        />

        <input
          type="number"
          value={lightNumberOfWall}
          placeholder="number of wall"
          onChange={lightNumberOfWallHandler}
        />
    </>
  );
};

export default LightTile;
