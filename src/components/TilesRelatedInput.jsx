import React from "react";
import { useState } from "react";
import classes from "./TilesRelatedInput.module.css";

const TilesRelatedInput = (props) => {
  const [lengthValue, setLengthValue] = useState(0);
  const [widthValue, setWidthValue] = useState(0);
  const [tilesInABox, setTilesInABox] = useState(0);
  const [tilesPricePerBox, setTilesPricePerBox] = useState(0);

  const lengthValueHandler = (event) => {
    setLengthValue(event.target.value);
    props.onLengthTile(event.target.value);
  };

  const widthValueHandler = (event) => {
    setWidthValue(event.target.value);
    props.onWidthTile(event.target.value);
  };

  const tileInBoxhHandler = (event) => {
    setTilesInABox(event.target.value);
    props.onTileInABox(event.target.value);
  };

  const tilePriceHandler = (event) => {
    setTilesPricePerBox(event.target.value);
    props.onTilePricePerBox(event.target.value);
  };

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>
              <label>Enter Tile size (in inch)</label>
            </td>
            <td>
              <input
                type="number"
                placeholder="Length"
                value={lengthValue}
                onChange={lengthValueHandler}
              />
            </td>
            <td>
              <input
                type="number"
                placeholder="Width"
                value={widthValue}
                onChange={widthValueHandler}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>Tiles in a box</label>
            </td>
            <td>
              <input
                type="number"
                value={tilesInABox}
                onChange={tileInBoxhHandler}
              />
            </td>
            <td>
              <label>Tiles price/box</label>
            </td>
            <td>
              <input
                type="number"
                value={tilesPricePerBox}
                onChange={tilePriceHandler}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <div></div>
      <div></div>
    </div>
  );
};

export default TilesRelatedInput;
