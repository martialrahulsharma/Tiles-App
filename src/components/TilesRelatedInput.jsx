import React from "react";
import { useState } from "react";
import classes from "./TilesRelatedInput.module.css";
// import classes from "./Lapeta.module.css";

const TilesRelatedInput = (props) => {
  const [lengthValue, setLengthValue] = useState(props.tileLength);
  const [widthValue, setWidthValue] = useState(props.tileWidth);
  const [tilesInABox, setTilesInABox] = useState(props.tilePricePerBox);
  const [tilesPricePerBox, setTilesPricePerBox] = useState(props.pricePerBox);

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
    <>
    <div className={classes.rowContainer}>
      <div className={classes.columnContainer}>
      <label>Enter Tile size (in inch)</label>
        <div className={classes.rowContainer}>
        <input
            type="number"
            placeholder="Length"
            value={lengthValue}
            onChange={lengthValueHandler}
          />
          <input
            type="number"
            placeholder="Width"
            value={widthValue}
            onChange={widthValueHandler}
          />
        </div>
      </div>
      <div className={classes.columnContainer}>
        <label>Tiles in a box</label>
        <input type="number" value={tilesInABox} onChange={tileInBoxhHandler} placeholder="tiles/box" />
      </div>
      <div className={classes.columnContainer}>
        <label>Tiles price/box</label>
        <input
          type="number"
          value={tilesPricePerBox}
          onChange={tilePriceHandler}
          placeholder="price/box"
        />
      </div>
    </div>
    </>
  );
};

export default TilesRelatedInput;
