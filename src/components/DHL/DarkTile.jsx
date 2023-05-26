import React, { useState } from "react";
import classes from "./DarkTile.module.css";

const DarkTile = (props) => {

  const [darkHeight, setDarkHight] = useState("");
  const [darkWidth, setDarkWidth] = useState("");
  const [darkAxis, setDarkAxis] = useState("Horizontal");
  const [darkNumberOfWall, setDarkNumberOfWall] = useState(1);
  const [darkCheckbox, setDarkCheckbox] = useState(false);

  const darkCheckboxHandler = (event) =>{
    setDarkCheckbox(event.target.checked);
    props.onCheckbox(event.target.checked);
  }

  const darkInputHeightHandler = (event) => {
    setDarkHight(event.target.value);
    props.onDarkHeightHandler(event.target.value);
  };

  const darkInputWidthHandler = (event) => {
    setDarkWidth(event.target.value);
    props.onDarkWidthHandler(event.target.value);
  };
  const darkTileAxishHandler = (event) => {
    setDarkAxis(event.target.value);
    props.onDarkAxisHandler(event.target.value);
  };
  const darkNumberOfWallHandler = (event) => {
    setDarkNumberOfWall(event.target.value);
    props.onDarkNumberOfWallHandler(event.target.value)
  };

  return (
    <>
      {/* <div className={classes.dark}> */}
        <input type='checkbox' checked={darkCheckbox} onChange={darkCheckboxHandler} />
        <label>Dark</label>
        <input
          type="number"
          value={darkHeight}
          onChange={darkInputHeightHandler}
          placeholder="Height"
        />
        <input
          type="number"
          value={darkWidth}
          onChange={darkInputWidthHandler}
          placeholder="width"
        />
        <select
          name="hrVr"
          value={darkAxis}
          onChange={darkTileAxishHandler}
        >
          <option value="Horizontal">Horizontal</option>
          <option value="Vertical">Vertical</option>
        </select>

        <input
          type="number"
          value={darkNumberOfWall}
          placeholder="number of wall"
          onChange={darkNumberOfWallHandler}
        />
      {/* </div> */}
    </>
  );
};

export default DarkTile;
