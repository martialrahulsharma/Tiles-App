import React, { useState } from "react";
import classes from "./DarkTile.module.css";

const LightTile = (props) => {
  //   const [dark, setDark] = useState({
  //     height: "",
  //     width: "",
  //     tileAxis: "Horizontal",
  //     numberOfWall: 1,
  //   });

  const [lightHeight, setLightHight] = useState("");
  const [lightWidth, setLightWidth] = useState("");
  const [lightAxis, setLightAxis] = useState("Horizontal");
  const [lightNumberOfWall, setLightNumberOfWall] = useState(1);

  const lightInputHeightHandler = (event) => {
    setLightHight(event.target.value);
    props.onLightHeightHandler(event.target.value);
  };

  const lightInputWidthHandler = (event) => {
    setLightWidth(event.target.value);
    props.onLightWidthHandler(event.target.value);
  };
  const lightTileAxishHandler = (event) => {
    setLightAxis(event.target.value);
    props.onLightAxisHandler(event.target.value);
  };
  const lightNumberOfWallHandler = (event) => {
    setLightNumberOfWall(event.target.value);
    props.onLightNumberOfWallHandler(event.target.value)
  };

  return (
    <>
      <div className={classes.dark}>
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
        <select
          name="hrVr"
          value={lightAxis}
          onChange={lightTileAxishHandler}
        >
          <option value="Horizontal">Horizontal</option>
          <option value="Vertical">Vertical</option>
        </select>

        <input
          type="number"
          value={lightNumberOfWall}
          placeholder="number of wall"
          onChange={lightNumberOfWallHandler}
        />
      </div>
    </>
  );
};

export default LightTile;
