import React from "react";
import { useState } from "react";
import classes from "./TilesRelatedInput.module.css";

// let lapetaComponentTiles;
// lapetaComponentTiles = JSON.parse(sessionStorage.LapetaComponent);

const TilesRelatedInput = (props) => {
  // lapetaComponentTiles = JSON.parse(sessionStorage.LapetaComponent);
  // console.log('lpt');
  // const [lapetaCompo, setLapetaCompo] = useState({
  //   tileLength: lapetaComponentTiles.tileLength,
  //   tileWidth: lapetaComponentTiles.tileWidth,
  //   tileInABox: lapetaComponentTiles.tileInABox,
  //   tilePricePerBox: lapetaComponentTiles.tilePricePerBox,
  // });


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
    <div className={classes.tilesRelated}>
      <div>
        <label>
          Enter Tile size (in inch)
          <input
            type="number"
            placeholder="Length"
            value={lengthValue}
            // value={lapetaCompo.tileLength}
            onChange={lengthValueHandler}
          />
          <input
            type="number"
            placeholder="Width"
            value={widthValue}
            onChange={widthValueHandler}
          />
        </label>
      </div>
      <div>
        <label>
          Tiles in a box
          <input
            type="number"
            value={tilesInABox}
            onChange={tileInBoxhHandler}
          />
        </label>
        <label>
          Tiles price/box
          <input
            type="number"
            value={tilesPricePerBox}
            onChange={tilePriceHandler}  
          />
        </label>
      </div>
    </div>
  );
};

export default TilesRelatedInput;
