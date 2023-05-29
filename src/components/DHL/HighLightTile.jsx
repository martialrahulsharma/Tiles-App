import React, { useState } from "react";
import classes from "./DarkTile.module.css";

const HighLightTile = (props) => {
  const [highLightHeight, setHighLightHight] = useState("");
  const [highLightWidth, setHighLightWidth] = useState("");
  const [highLightNumberOfWall, setHighLightNumberOfWall] = useState(1);
  const [highlightCheckbox, setHighlightCheckbox] = useState(false);

  const highlightCheckboxHandler = (event) => {
    setHighlightCheckbox(event.target.checked);
    props.onCheckbox(event.target.checked);
  };

  const highLightInputHeightHandler = (event) => {
    setHighLightHight(event.target.value);
    props.onHighLightHeightHandler(event.target.value);
  };

  const highLightInputWidthHandler = (event) => {
    setHighLightWidth(event.target.value);
    props.onHighLightWidthHandler(event.target.value);
  };

  const highLightNumberOfWallHandler = (event) => {
    setHighLightNumberOfWall(event.target.value);
    props.onHighLightNumberOfWallHandler(event.target.value);
  };

  return (
    <>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                type="checkbox"
                id="heightcheckbox"
                checked={highlightCheckbox}
                onChange={highlightCheckboxHandler}
              />
              <label htmlFor="heightcheckbox">High Light</label>
            </td>
            <td>
              <input
                id="highLightHeight"
                type="number"
                value={highLightHeight}
                onChange={highLightInputHeightHandler}
                placeholder="Height"
              />
            </td>
            <td>
              <input
                id="highLightWidth"
                type="number"
                value={highLightWidth}
                onChange={highLightInputWidthHandler}
                placeholder="width"
              />
            </td>
            <td>
              <input
                id="highLightNumberOfWall"
                type="number"
                value={highLightNumberOfWall}
                placeholder="number of wall"
                onChange={highLightNumberOfWallHandler}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default HighLightTile;
